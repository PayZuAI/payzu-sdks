import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu } from '../src/index.js';
import { assertBearerToken, assertJsonBody, assertRoute } from './support/asserts.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer, testClient } from './support/test-client.js';

const server = createTestServer();

function client(): PayZu {
  return testClient(server);
}

test('refunds.create envia POST /refund/{transactionId} com valor parcial', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_1', type: 'DEPOSIT', status: 'COMPLETED', refunds: [{ id: 'rf_1', amount: 5.5, status: 'PENDING' }] }));
  const transaction = await client().refunds.create('tx_1', { amount: 5.5, clientReference: 'refund-1' });
  assertRoute(server.lastRequest(), 'POST', '/v1/refund/tx_1');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), { amount: 5.5, clientReference: 'refund-1' });
  assert.equal(transaction.id, 'tx_1');
  assert.equal(transaction.refunds?.[0]?.amount, 5.5);
});

test('refunds.create sem parâmetros envia corpo vazio para estorno total', async () => {
  server.enqueue(jsonFixture(200, { id: 'tx_2' }));
  await client().refunds.create('tx_2');
  assertRoute(server.lastRequest(), 'POST', '/v1/refund/tx_2');
  assertJsonBody(server.lastRequest(), {});
});
