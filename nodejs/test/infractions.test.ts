import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PayZu } from '../src/index.js';
import { assertBearerToken, assertJsonMediaTypeWhenPresent, assertQuery, assertRoute } from './support/asserts.js';
import { jsonFixture } from './support/mock-server.js';
import { createTestServer, testClient } from './support/test-client.js';

const server = createTestServer();
const REPORTED_AT = '2026-06-30T08:00:00.000Z';

function client(): PayZu {
  return testClient(server);
}

test('infractions.list consulta GET /user/infractions com filtros', async () => {
  server.enqueue(jsonFixture(200, { infractions: [{ id: 'inf_1', status: 'OPEN' }] }));
  const list = await client().infractions.list({ status: 'OPEN' });
  assertRoute(server.lastRequest(), 'GET', '/v1/user/infractions');
  assertQuery(server.lastRequest(), { status: 'OPEN' });
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(list.infractions?.[0]?.id, 'inf_1');
});

test('infractions.get consulta GET /user/infractions/{id}', async () => {
  server.enqueue(jsonFixture(200, { id: 'inf_1', status: 'OPEN', reportedAt: REPORTED_AT }));
  const infraction = await client().infractions.get('inf_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/infractions/inf_1');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(infraction.status, 'OPEN');
  assert.ok(infraction.reportedAt instanceof Date);
});

test('infractions.defenses consulta GET /user/infractions/{id}/defenses', async () => {
  server.enqueue(jsonFixture(200, [{ id: 'def_1', defense: 'Cliente reconheceu a compra.' }]));
  const defenses = await client().infractions.defenses('inf_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/infractions/inf_1/defenses');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(defenses.length, 1);
  assert.equal(defenses[0]?.id, 'def_1');
});

test('infractions.defense consulta GET /user/infractions/{infractionId}/defenses/{defenseId}', async () => {
  server.enqueue(jsonFixture(200, { id: 'def_1', status: 'PENDING' }));
  const defense = await client().infractions.defense('inf_1', 'def_1');
  assertRoute(server.lastRequest(), 'GET', '/v1/user/infractions/inf_1/defenses/def_1');
  assertBearerToken(server.lastRequest());
  assertJsonMediaTypeWhenPresent(server.lastRequest());
  assert.equal(defense.id, 'def_1');
});

test('infractions.createDefense envia POST multipart com defense e files', async () => {
  server.enqueue(jsonFixture(200, { id: 'def_2', status: 'PENDING' }));
  const file = new Blob(['comprovante'], { type: 'application/pdf' });
  const defense = await client().infractions.createDefense('inf_1', 'Cliente reconheceu a compra.', [file]);
  const request = server.lastRequest();
  assertRoute(request, 'POST', '/v1/user/infractions/inf_1/defenses');
  assertBearerToken(request);
  assert.match(String(request.headers['content-type']), /^multipart\/form-data; boundary=/);
  const payload = request.body.toString('utf8');
  assert.match(payload, /name="defense"/);
  assert.match(payload, /Cliente reconheceu a compra\./);
  assert.match(payload, /name="files"/);
  assert.match(payload, /comprovante/);
  assert.equal(defense.id, 'def_2');
});
