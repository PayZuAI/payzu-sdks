# Changelog

## 4.0.0

### Mudanças incompatíveis

- Go: o módulo passa a ser `github.com/PayZuAI/payzu-sdks/go/v4`. Troque o caminho no `go get` e nos imports.
- `getUserDict` (`GET /user/dict`) sai de `KeysAndDICTApi` em todas as linguagens, porque a API não tem mais essa rota e responde 404. Use `getPixKey` (`GET /pix/key`), que devolve o titular com agência e conta.
- Node.js: `payzu.keys.dict()`, descontinuado na 3.2.0, sai. Use `payzu.keys.lookup(pixKey)`.
- `GetUser200Response` não traz mais `role`, nem o enum e os acessores dele. Quem lia o campo precisa tirar a leitura.
- `ReportJobAccepted`, a resposta de `POST /user/report`, troca `storageExpiresAt` por `expiresAt`, o mesmo nome da consulta do relatório. Leia `expiresAt`.
- `GET /user/infractions/{id}/defenses` devolve `DefenseListItem[]` no lugar de `Defense[]`. Os campos são os mesmos, mas os anexos da listagem não trazem `url`; para baixar um anexo, consulte a defesa por `GET /user/infractions/{infractionId}/defenses/{defenseId}`. No Node.js, `payzu.infractions.defenses()` passa a declarar `DefenseListItem[]`.
- `PostPixRequest.expiresIn` passa a ser inteiro, com mínimo de 60 segundos (Go `int32`, Java `Integer`, PHP `int`, Ruby `Integer`, Python `int`). Envie segundos inteiros; Python, PHP e Ruby recusam valor abaixo de 60 antes de chamar a API.
- `QRCodeReadResponse.createdAt` passa a ser texto em todas as linguagens (era data: Go `time.Time`, Java `OffsetDateTime`, PHP `\DateTime`, Ruby `Time`, Python `datetime`, Node.js `Date`), porque o horário pode vir sem fuso no QR Code. Quem usava o valor como data precisa convertê-lo.

### Novo

- `GET /user/pix-keys` (`AccountApi.getUserPixKeys`): chave Pix de recebimento da conta, com o titular e a instituição.
- `AllowlistApi`, com os CNPJs (`GET /user/whitelist/cnpj`) e as chaves Pix (`GET /user/whitelist/pix-key`) autorizados na conta, com filtros por período e situação e paginação por cursor.
- Node.js: as duas rotas acima ficam no core gerado, sem método na fachada `PayZu`. Use `new AccountApi(createConfiguration({ token }))` e `new AllowlistApi(createConfiguration({ token }))`.
- Modelos dos eventos de webhook, para tipar o corpo que a PayZu envia ao seu endpoint: `TransactionPendingEvent`, `TransactionCompletedEvent`, `TransactionCanceledEvent`, `TransactionExpiredEvent`, `TransactionWaitingForRefundEvent`, `TransactionRefundedEvent`, `TransactionErrorEvent` e `InfractionChangedEvent` (com `InfractionChangedData`). São só modelos: o SDK não chama essas rotas.
- Valores novos de enum: `Transaction.method` aceita `BANK_SLIP` e `TED`; `Refund.reason` e `Transaction.refundReason` aceitam `DENY_COMPANY_DEPOSIT` e `ADMIN_REQUEST`.

### Outras mudanças

- Respostas de erro documentadas com `ApiError`: 403 nas consultas, 409 nos saques, 410 na leitura de QR Code e no saque por QR Code e 424 no estorno. O `POST /internal-transfer` deixa de documentar o 404.
- O sandbox `https://pix.sandbox.payzu.dev/v1` entra como segundo servidor da configuração em Go, PHP, Python e Ruby. Em Java e Node.js, o endereço do sandbox se informa na configuração do cliente. O padrão continua `https://api.pix.payzu.com.br/v1`.
- Os filtros `amountMin` e `amountMax` de infrações passam a ter mínimo de 0,01, conferido antes da chamada em Python, PHP e Ruby.
- `url` de `WebhookCreateRequest` e `WebhookUpdateRequest` passa a exigir `http://` ou `https://`, conferido antes da chamada em Python, PHP e Ruby.
- As descrições do código gerado e da documentação de cada linguagem passam a ser em português.
- Java: Jackson 2.21.7.

## 3.2.0

### Outras mudanças

- O endereço padrão da API passa a ser `https://api.pix.payzu.com.br/v1` em todas as linguagens (era `https://api.payzu.processamento.com/v1`). É a mesma API, que responde igual nos dois endereços; o antigo fica no ar só durante a migração. Quem já informa o endereço na configuração do cliente não é afetado. Quem libera a saída por nome de host precisa liberar `api.pix.payzu.com.br`.
- Node.js: `payzu.keys.dict()` fica descontinuado. A API não tem mais `GET /user/dict` e responde 404 a essa rota. Na primeira chamada o método emite um `DeprecationWarning` (código `PAYZU_KEYS_DICT`) e segue devolvendo o erro da API como `PayZuError`. Use `payzu.keys.lookup()`, que consulta `GET /pix/key` e devolve o titular com agência e conta. O método sai na próxima versão major.

## 3.1.0

### Outras mudanças

- Node.js: o pacote passa a se chamar `@payzu/pix`, na organização PayZu do npm. `payzu-pix` fica marcado como descontinuado apontando para o nome novo; código e API iguais. Os pacotes dos outros registros não mudam de nome.

## 3.0.0

### Mudanças incompatíveis

- `GetUser200Response` não traz mais `allowWithdraw` e `allowDeposit`, nem os acessores deles, porque o `GET /user` da API parou de devolver os dois campos. Quem lia esses campos precisa tirar a leitura: com o SDK 2.x eles já chegavam vazios.
- Go: o módulo passa a ser `github.com/PayZuAI/payzu-sdks/go/v3`.

### Outras mudanças

- O código gerado acompanha o OpenAPI publicado em docs.payzu.com.br, que estava à frente deste repositório. Mudam só textos: filtros `dateFrom` e `dateTo` dos relatórios, limites de arquivo da defesa de infração e exemplos de erro `PZS202` e `PZS206` do saque. A assinatura dos métodos é a mesma.
- Payload antigo com `allowWithdraw` e `allowDeposit` continua sendo lido sem erro em Python, Ruby e Java.

## 2.0.0

Todas as linguagens passam a sair na mesma versão. PHP, Ruby e Java ganham pacote publicado.

### Novo

- Rotas que faltavam no Node.js: `payzu.webhooks.*`, `payzu.refunds.create`, `payzu.keys.*`, `payzu.reports.bankStatements`, `bankStatement`, `pendingDeposits`, `pendingDeposit` e `summary`, `payzu.callbacks.resendWebhooks`, `resendByWebhook`, `createSecret` e `rotateSecret`.
- Rota `POST /user/callbacks/resend/webhook` em todas as linguagens.
- `POST /refund/{transactionId}` devolve a transação com `refunds[]`.
- Valor de enum fora do spec não quebra mais a leitura da resposta.

### Mudanças incompatíveis

- Os tipos gerados seguem o OpenAPI atual: filtros e enums mudaram (por exemplo, o filtro `needsManualReview` de infrações saiu, `Transaction.type` ganhou `LIQUIDATION` e `ADJUSTMENT` e o `groupBy` do resumo aceita só `day`).
- Go: o módulo passa a ser `github.com/PayZuAI/payzu-sdks/go/v2`.
- `getPixKey`, `getUserDict` e `postPixQrcodeRead` saíram de `WithdrawalsApi` para `KeysAndDICTApi` no código gerado. No Node.js, `payzu.withdraw.pixKey` e `payzu.withdraw.readQrCode` continuam funcionando.
