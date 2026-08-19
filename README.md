# PayZu SDKs

SDKs oficiais da API PayZu Pix, mantidos em paridade com o [OpenAPI](./openapi.json).

| Linguagem | Pacote | Instalação |
| --------- | ------ | ---------- |
| Node.js   | [`payzu-pix`](./nodejs) | `npm install payzu-pix` |
| Python    | `payzu-pix` | `pip install payzu-pix` |
| Go        | `github.com/PayZuAI/payzu-sdks/go` | `go get github.com/PayZuAI/payzu-sdks/go` |
| PHP       | indisponível no momento | |

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

O SDK Node.js tem duas camadas: uma facade escrita à mão (`nodejs/src`), que é o contrato estável do pacote, e um core gerado pelo OpenAPI Generator (`nodejs/src/generated`), que espelha o spec e é reescrito pelo bot a cada regeneração. Nunca edite `nodejs/src/generated` manualmente. As demais linguagens são 100% geradas.

## Documentação

- Doc: [docs.payzu.com.br](https://docs.payzu.com.br)
- Postman: [dev.payzu.com.br](https://dev.payzu.com.br)
- OpenAPI: [openapi.json](./openapi.json)

## Sincronização

`openapi.json` é mantido em paridade com [docs.payzu.com.br/openapi.json](https://docs.payzu.com.br/openapi.json). O workflow `generate.yml` regenera os SDKs diariamente e abre PR de revisão.

## Suporte

[suporte.payzu.com.br](https://suporte.payzu.com.br)
