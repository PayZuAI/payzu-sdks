# Changelog

## 2.0.0

Todas as linguagens passam a sair na mesma versão. PHP, Ruby e Java ganham pacote publicado.

### Novo

- Rotas que faltavam no Node.js: `payzu.webhooks.*`, `payzu.refunds.create`, `payzu.keys.*`, `payzu.reports.bankStatements`, `bankStatement`, `pendingDeposits`, `pendingDeposit` e `summary`, `payzu.callbacks.resendWebhooks`, `resendByWebhook`, `createSecret` e `rotateSecret`.
- Rota `POST /user/callbacks/resend/webhook` em todas as linguagens.
- `POST /refund/{transactionId}` devolve a transação com `refunds[]`.
- Valor de enum fora do spec não quebra mais a leitura da resposta.

### Mudanças incompatíveis

- Os tipos gerados seguem o OpenAPI atual: filtros e enums mudaram (por exemplo, o filtro `needsManualReview` de infrações saiu, `Transaction.type` ganhou `LIQUIDATION` e `ADJUSTMENT` e o `groupBy` do resumo aceita só `day`).
- `getPixKey`, `getUserDict` e `postPixQrcodeRead` saíram de `WithdrawalsApi` para `KeysAndDICTApi` no código gerado. No Node.js, `payzu.withdraw.pixKey` e `payzu.withdraw.readQrCode` continuam funcionando.
