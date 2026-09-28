#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

GENERATOR="npx --yes @openapitools/openapi-generator-cli@2.39.1 generate -i openapi.json"

rm -rf nodejs-gen
$GENERATOR -c config/nodejs.yaml
rm -rf nodejs/src/generated nodejs/docs
mkdir -p nodejs/src/generated nodejs/docs
cp -R nodejs-gen/src/. nodejs/src/generated/
cp -R nodejs-gen/docs/. nodejs/docs/
rm -rf nodejs-gen

for language in python go php ruby java; do
  rm -rf "$language"
  $GENERATOR -c "config/$language.yaml"
done

node -e "
const fs = require('node:fs');
const path = 'php/composer.json';
const composer = JSON.parse(fs.readFileSync(path, 'utf8'));
delete composer.version;
composer.description = 'SDK oficial PHP da API PayZu Pix: depósitos, saques, transferências internas, infrações, relatórios e callbacks.';
composer.keywords = ['payzu', 'pix', 'pagamentos', 'payments', 'brasil', 'sdk', 'api'];
fs.writeFileSync(path, JSON.stringify(composer, null, 4) + '\n');
"
