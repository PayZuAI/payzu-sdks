# PayZu SDKs

SDKs oficiais da API PayZu Pix, gerados do [OpenAPI](./openapi.json) publicado em [docs.payzu.com.br](https://docs.payzu.com.br).

| Linguagem | Pacote | Instalação |
| --------- | ------ | ---------- |
| Node.js   | [`payzu-pix`](https://www.npmjs.com/package/payzu-pix) | `npm install payzu-pix` |
| Python    | [`payzu-pix`](https://pypi.org/project/payzu-pix/) | `pip install payzu-pix` |
| PHP       | [`payzu/pix`](https://packagist.org/packages/payzu/pix) | `composer require payzu/pix` |
| Ruby      | [`payzu-pix`](https://rubygems.org/gems/payzu-pix) | `gem install payzu-pix` |
| Java      | [`br.com.payzu:payzu-pix`](https://central.sonatype.com/artifact/br.com.payzu/payzu-pix) | Maven ou Gradle |
| Go        | `github.com/PayZuAI/payzu-sdks/go/v2` | `go get github.com/PayZuAI/payzu-sdks/go/v2` |

## Uso rápido (Node.js)

```ts
import { PayZu } from 'payzu-pix';

const payzu = new PayZu({ token: process.env.PAYZU_TOKEN });

const charge = await payzu.pix.create({
  amount: 99.9,
  clientReference: 'order-1234',
  callbackUrl: 'https://seusite.com.br/webhooks/payzu',
});
```

Veja o [README do SDK Node.js](./nodejs/README.md) para a lista completa de métodos, autenticação e tratamento de erros.

## Arquitetura

O SDK Node.js tem duas camadas: uma facade escrita à mão (`nodejs/src`), que é o contrato estável do pacote, e um core gerado pelo OpenAPI Generator (`nodejs/src/generated`). As demais linguagens são 100% geradas. Nunca edite código gerado à mão: a configuração de cada linguagem fica em `config/` e os templates próprios em `templates/`.

Os SDKs aceitam valor de enum que ainda não está no spec sem falhar a leitura da resposta, para que um valor novo na API não quebre a integração.

## Sincronização

`openapi.json` segue [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json). O workflow `generate.yml` roda `scripts/generate.sh` todo dia e abre PR quando o spec muda.

## Release

Uma release `X.Y.Z` no GitHub publica Node, Python, Ruby e Java na mesma versão (`publish.yml`). O PHP sai pelo repositório espelho [PayZuAI/payzu-php](https://github.com/PayZuAI/payzu-php), que o Packagist lê: o workflow de lá copia a pasta `php/` de cada release daqui e cria a mesma tag. O Go usa a tag `go/vX.Y.Z` com a mesma versão; a cada versão maior, o caminho do módulo muda (`/go/v2`, `/go/v3`).

## Documentação

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- OpenAPI: [openapi.json](./openapi.json)

## Suporte

[suporte.payzu.com.br](https://suporte.payzu.com.br)
