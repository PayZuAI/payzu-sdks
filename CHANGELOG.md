# Changelog

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
