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

test('webhooks.create envia POST /user/webhooks', async () => {
  server.enqueue(jsonFixture(201, { id: 'wh_1', url: 'https://exemplo.com/hook', secret: 's3cr3t' }));
  const webhook = await client().webhooks.create({ url: 'https://exemplo.com/hook', generateSecret: true });
  assertRoute(server.lastRequest(), 'POST', '/v1/user/webhooks');
  assertBearerToken(server.lastRequest());
  assertJsonBody(server.lastRequest(), { url: 'https://exemplo.com/hook', generateSecret: true });
  assert.equal(webhook.secret, 's3cr3t');
});

test('webhooks.list consulta GET /user/webhooks com filtro', async () => {
  server.enqueue(jsonFixture(200, { webhooks: [] }));
  await client().webhooks.list({ active: true });
  assertRoute(server.lastRequest(), 'GET', '/v1/user/webhooks');
  assertQuery(server.lastRequest(), { active: 'true' });
});

test('webhooks.get consulta GET /user/webhooks/{id}', async () => {
  server.enqueue(jsonFixture(200, { id: 'wh_1', url: 'https://exemplo.com/hook' }));
  const webhook = await client().webhooks.get('wh_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/webhooks/wh_1');
  assert.equal(webhook.id, 'wh_1');
});

test('webhooks.update envia PATCH /user/webhooks/{id}', async () => {
  server.enqueue(jsonFixture(200, { id: 'wh_1', active: false }));
  await client().webhooks.update('wh_1', { active: false });
  assertRoute(server.lastRequest(), 'PATCH', '/v1/user/webhooks/wh_1');
  assertJsonBody(server.lastRequest(), { active: false });
});

test('webhooks.delete envia DELETE /user/webhooks/{id}', async () => {
  server.enqueue({ status: 204 });
  await client().webhooks.delete('wh_1');
  assertRoute(server.lastRequest(), 'DELETE', '/v1/user/webhooks/wh_1');
  assertBearerToken(server.lastRequest());
});

test('webhooks.rotateSecret envia POST /user/webhooks/{id}/rotate-secret', async () => {
  server.enqueue(jsonFixture(200, { secret: 'novo' }));
  const result = await client().webhooks.rotateSecret('wh_1');
  assertRoute(server.lastRequest(), 'POST', '/v1/user/webhooks/wh_1/rotate-secret');
  assert.equal(result.secret, 'novo');
});

test('webhooks.sentQuantity consulta GET /user/webhooks/sent/quantity', async () => {
  server.enqueue(jsonFixture(200, { quantity: 3 }));
  await client().webhooks.sentQuantity('wh_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/webhooks/sent/quantity');
  assertQuery(server.lastRequest(), { webhookId: 'wh_1' });
});

test('webhooks.sent consulta GET /user/webhooks/{id}/sent/{callbackId}', async () => {
  server.enqueue(jsonFixture(200, { sentWebhookDetails: { id: 'cb_1' } }));
  await client().webhooks.sent('wh_1', 'cb_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/webhooks/wh_1/sent/cb_1');
});
