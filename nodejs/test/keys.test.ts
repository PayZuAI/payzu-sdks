import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu } from '../src/index.js';
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

test('keys.dict consulta GET /user/dict com a chave', async () => {
  server.enqueue(jsonFixture(200, { key: '+5511999999999' }));
  await client().keys.dict('+5511999999999');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/dict');
  assertQuery(server.lastRequest(), { key: '+5511999999999' });
  assertBearerToken(server.lastRequest());
});

test('keys.readQrCode envia POST /pix/qrcode/read com o emv', async () => {
  server.enqueue(jsonFixture(200, { amount: 10 }));
  await client().keys.readQrCode('000201010212');
  assertRoute(server.lastRequest(), 'POST', '/v1/pix/qrcode/read');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), { emv: '000201010212' });
});
