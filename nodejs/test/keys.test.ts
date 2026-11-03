import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu, PayZuError } from '../src/index.js';
import { KEYS_DICT_DEPRECATION_CODE, KEYS_DICT_DEPRECATION_MESSAGE } from '../src/namespaces/keys.js';
import { assertBearerToken, assertJsonBody, assertQuery, assertRoute } from './support/asserts.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer, testClient } from './support/test-client.js';

const server = createTestServer();

function client(): PayZu {
  return testClient(server);
}

test('keys.lookup consulta GET /pix/key com a chave', async () => {
  server.enqueue(jsonFixture(200, { name: 'Fulano', keyType: 'EMAIL' }));
  const info = await client().keys.lookup('fulano@exemplo.com');
  assertRoute(server.lastRequest(), 'GET', '/v1/pix/key');
  assertQuery(server.lastRequest(), { pixKey: 'fulano@exemplo.com' });
  assertBearerToken(server.lastRequest());
  assert.equal(info.name, 'Fulano');
});

test('keys.dict está descontinuado: avisa uma vez e devolve o 404 da API como PayZuError', async (t) => {
  const emitWarning = t.mock.method(process, 'emitWarning', () => undefined);
  const notFound = { statusCode: 404, error: 'Not Found', message: 'Route GET:/v1/user/dict not found' };
  server.enqueue(jsonFixture(404, notFound));
  server.enqueue(jsonFixture(404, notFound));

  for (const _attempt of [1, 2]) {
    await assert.rejects(
      client().keys.dict('+5511999999999'),
      (error: unknown) => error instanceof PayZuError && error.status === 404,
    );
    assertRoute(server.lastRequest(), 'GET', '/v1/user/dict');
    assertQuery(server.lastRequest(), { key: '+5511999999999' });
    assertBearerToken(server.lastRequest());
  }

  assert.equal(emitWarning.mock.callCount(), 1);
  assert.deepEqual(emitWarning.mock.calls[0]?.arguments, [
    KEYS_DICT_DEPRECATION_MESSAGE,
    { type: 'DeprecationWarning', code: KEYS_DICT_DEPRECATION_CODE },
  ]);
});

test('keys.readQrCode envia POST /pix/qrcode/read com o emv', async () => {
  server.enqueue(jsonFixture(200, { amount: 10 }));
  await client().keys.readQrCode('000201010212');
  assertRoute(server.lastRequest(), 'POST', '/v1/pix/qrcode/read');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), { emv: '000201010212' });
});
