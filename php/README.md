# PayZuPix

API REST para operações Pix na plataforma PayZu, depósitos, saques, transferências internas, infrações, relatórios e inspeção de callback. Todos os valores estão em BRL (reais), salvo indicação explícita. A autenticação usa um token Bearer emitido durante o onboarding.

## SDKs oficiais

- Node.js: `npm install @payzu/pix`
- Python: `pip install payzu-pix`
- PHP: `composer require payzu/pix`
- Ruby: `gem install payzu-pix`
- Java: `br.com.payzu:payzu-pix` (Maven Central)
- Go: `go get github.com/PayZuAI/payzu-sdks/go/v3`

Repo: https://github.com/PayZuAI/payzu-sdks

For more information, please visit [https://suporte.payzu.com.br](https://suporte.payzu.com.br).

## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/PayZuAI/payzu-sdks.git"
    }
  ],
  "require": {
    "PayZuAI/payzu-sdks": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/PayZuPix/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\AccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getUser();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->getUser: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**getUser**](docs/Api/AccountApi.md#getuser) | **GET** /user | Informações da conta
*AccountApi* | [**getUserBalance**](docs/Api/AccountApi.md#getuserbalance) | **GET** /user/balance | Saldo da conta
*AccountApi* | [**getUserPixKeys**](docs/Api/AccountApi.md#getuserpixkeys) | **GET** /user/pix-keys | Chave Pix de recebimento da conta
*AllowlistApi* | [**getUserWhitelistCnpj**](docs/Api/AllowlistApi.md#getuserwhitelistcnpj) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados
*AllowlistApi* | [**getUserWhitelistPixKey**](docs/Api/AllowlistApi.md#getuserwhitelistpixkey) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas
*CallbacksApi* | [**createUserCallbackSecret**](docs/Api/CallbacksApi.md#createusercallbacksecret) | **POST** /user/callbacks/secret | Criar segredo de callback
*CallbacksApi* | [**getUserCallbackById**](docs/Api/CallbacksApi.md#getusercallbackbyid) | **GET** /user/callbacks/{id} | Obter Callback
*CallbacksApi* | [**getUserCallbacks**](docs/Api/CallbacksApi.md#getusercallbacks) | **GET** /user/callbacks | Listar Callbacks
*CallbacksApi* | [**resendUserCallbackSingle**](docs/Api/CallbacksApi.md#resendusercallbacksingle) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual)
*CallbacksApi* | [**resendUserCallbacks**](docs/Api/CallbacksApi.md#resendusercallbacks) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote)
*CallbacksApi* | [**resendUserCallbacksWebhook**](docs/Api/CallbacksApi.md#resendusercallbackswebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook
*CallbacksApi* | [**resendUserCallbacksWebhooks**](docs/Api/CallbacksApi.md#resendusercallbackswebhooks) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros
*CallbacksApi* | [**rotateUserCallbackSecret**](docs/Api/CallbacksApi.md#rotateusercallbacksecret) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback
*InfractionsApi* | [**getInfractions**](docs/Api/InfractionsApi.md#getinfractions) | **GET** /user/infractions | Listar infrações
*InfractionsApi* | [**getInfractionsById**](docs/Api/InfractionsApi.md#getinfractionsbyid) | **GET** /user/infractions/{id} | Obter Infração
*InfractionsApi* | [**getInfractionsDefenseById**](docs/Api/InfractionsApi.md#getinfractionsdefensebyid) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa
*InfractionsApi* | [**getInfractionsDefenses**](docs/Api/InfractionsApi.md#getinfractionsdefenses) | **GET** /user/infractions/{id}/defenses | Listar Defesas
*InfractionsApi* | [**postInfractionsDefense**](docs/Api/InfractionsApi.md#postinfractionsdefense) | **POST** /user/infractions/{id}/defenses | Criar Defesa
*InternalTransferApi* | [**getInternalTransfer**](docs/Api/InternalTransferApi.md#getinternaltransfer) | **GET** /internal-transfer | Obter transferência interna
*InternalTransferApi* | [**postInternalTransfer**](docs/Api/InternalTransferApi.md#postinternaltransfer) | **POST** /internal-transfer | Criar transferência interna
*KeysAndDICTApi* | [**getPixKey**](docs/Api/KeysAndDICTApi.md#getpixkey) | **GET** /pix/key | Consulta de chave Pix no DICT
*KeysAndDICTApi* | [**postPixQrcodeRead**](docs/Api/KeysAndDICTApi.md#postpixqrcoderead) | **POST** /pix/qrcode/read | Ler QR Code
*PixOperationsApi* | [**getPix**](docs/Api/PixOperationsApi.md#getpix) | **GET** /pix | Recuperar Cobrança
*PixOperationsApi* | [**getPixQrcode**](docs/Api/PixOperationsApi.md#getpixqrcode) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG)
*PixOperationsApi* | [**getProof**](docs/Api/PixOperationsApi.md#getproof) | **GET** /proof/{id} | Obter comprovante da transação
*PixOperationsApi* | [**postPix**](docs/Api/PixOperationsApi.md#postpix) | **POST** /pix | Criar Cobrança (depósito Pix)
*RefundsApi* | [**postRefund**](docs/Api/RefundsApi.md#postrefund) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido
*ReportsApi* | [**downloadUserReport**](docs/Api/ReportsApi.md#downloaduserreport) | **POST** /user/report/{id}/download | Baixar relatório
*ReportsApi* | [**getUserBankStatement**](docs/Api/ReportsApi.md#getuserbankstatement) | **GET** /user/bank-statements/{id} | Consultar lançamento
*ReportsApi* | [**getUserBankStatements**](docs/Api/ReportsApi.md#getuserbankstatements) | **GET** /user/bank-statements | Listar extrato
*ReportsApi* | [**getUserDepositPending**](docs/Api/ReportsApi.md#getuserdepositpending) | **GET** /user/deposit-pending | Listar depósitos via chave Pix
*ReportsApi* | [**getUserDepositPendingById**](docs/Api/ReportsApi.md#getuserdepositpendingbyid) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix
*ReportsApi* | [**getUserReport**](docs/Api/ReportsApi.md#getuserreport) | **GET** /user/report/{id} | Consultar status do relatório
*ReportsApi* | [**getUserSummary**](docs/Api/ReportsApi.md#getusersummary) | **GET** /user/summary | Resumo de transações
*ReportsApi* | [**getUserTransactionById**](docs/Api/ReportsApi.md#getusertransactionbyid) | **GET** /user/transactions/{id} | Listar detalhes da transação
*ReportsApi* | [**getUserTransactions**](docs/Api/ReportsApi.md#getusertransactions) | **GET** /user/transactions | Listar transações
*ReportsApi* | [**listUserReports**](docs/Api/ReportsApi.md#listuserreports) | **GET** /user/report | Listar jobs de relatório
*ReportsApi* | [**postUserReport**](docs/Api/ReportsApi.md#postuserreport) | **POST** /user/report | Gerar relatório de transações
*WebhooksApi* | [**deleteUserWebhook**](docs/Api/WebhooksApi.md#deleteuserwebhook) | **DELETE** /user/webhooks/{id} | Remover webhook
*WebhooksApi* | [**getUserWebhook**](docs/Api/WebhooksApi.md#getuserwebhook) | **GET** /user/webhooks/{id} | Consultar webhook
*WebhooksApi* | [**getUserWebhookSentDetail**](docs/Api/WebhooksApi.md#getuserwebhooksentdetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado
*WebhooksApi* | [**getUserWebhooks**](docs/Api/WebhooksApi.md#getuserwebhooks) | **GET** /user/webhooks | Listar webhooks
*WebhooksApi* | [**getUserWebhooksSentQuantity**](docs/Api/WebhooksApi.md#getuserwebhookssentquantity) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados
*WebhooksApi* | [**patchUserWebhook**](docs/Api/WebhooksApi.md#patchuserwebhook) | **PATCH** /user/webhooks/{id} | Atualizar webhook
*WebhooksApi* | [**postUserWebhook**](docs/Api/WebhooksApi.md#postuserwebhook) | **POST** /user/webhooks | Criar webhook
*WebhooksApi* | [**postUserWebhookRotateSecret**](docs/Api/WebhooksApi.md#postuserwebhookrotatesecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook
*WithdrawalsApi* | [**getWithdraw**](docs/Api/WithdrawalsApi.md#getwithdraw) | **GET** /withdraw | Consultar Saque
*WithdrawalsApi* | [**getWithdrawProof**](docs/Api/WithdrawalsApi.md#getwithdrawproof) | **GET** /withdraw/proof/{id} | Obter comprovante de saque
*WithdrawalsApi* | [**postWithdraw**](docs/Api/WithdrawalsApi.md#postwithdraw) | **POST** /withdraw | Criar saque (chave Pix)
*WithdrawalsApi* | [**postWithdrawQrcode**](docs/Api/WithdrawalsApi.md#postwithdrawqrcode) | **POST** /withdraw/qrcode | Criar Saque usando QR Code

## Models

- [ApiError](docs/Model/ApiError.md)
- [ApiErrorDetailsInner](docs/Model/ApiErrorDetailsInner.md)
- [BankStatement](docs/Model/BankStatement.md)
- [BankStatementListResponse](docs/Model/BankStatementListResponse.md)
- [BankStatementListResponsePagination](docs/Model/BankStatementListResponsePagination.md)
- [CallbackDetail](docs/Model/CallbackDetail.md)
- [CallbackListResponse](docs/Model/CallbackListResponse.md)
- [CallbackListResponsePagination](docs/Model/CallbackListResponsePagination.md)
- [CallbackSecretResponse](docs/Model/CallbackSecretResponse.md)
- [Defense](docs/Model/Defense.md)
- [DefenseFilesInner](docs/Model/DefenseFilesInner.md)
- [DefenseHistoryEntry](docs/Model/DefenseHistoryEntry.md)
- [DefenseHistoryEntryFilesInner](docs/Model/DefenseHistoryEntryFilesInner.md)
- [DefenseListItem](docs/Model/DefenseListItem.md)
- [DepositPending](docs/Model/DepositPending.md)
- [DepositPendingListResponse](docs/Model/DepositPendingListResponse.md)
- [DictConsultResponse](docs/Model/DictConsultResponse.md)
- [DownloadUserReport200Response](docs/Model/DownloadUserReport200Response.md)
- [EnqueuedCallback](docs/Model/EnqueuedCallback.md)
- [EnqueuedCallbackEnqueued](docs/Model/EnqueuedCallbackEnqueued.md)
- [EnqueuedCallbackItem](docs/Model/EnqueuedCallbackItem.md)
- [GetUser200Response](docs/Model/GetUser200Response.md)
- [GetUser200ResponseDailyWithdrawLimit](docs/Model/GetUser200ResponseDailyWithdrawLimit.md)
- [GetUser200ResponseServiceFee](docs/Model/GetUser200ResponseServiceFee.md)
- [GetUserBalance200Response](docs/Model/GetUserBalance200Response.md)
- [GetUserPixKeys200Response](docs/Model/GetUserPixKeys200Response.md)
- [GetUserTransactionById200Response](docs/Model/GetUserTransactionById200Response.md)
- [GetUserTransactionById200ResponseAllOfCallbackLogInner](docs/Model/GetUserTransactionById200ResponseAllOfCallbackLogInner.md)
- [GetUserTransactionById200ResponseAllOfInfractionInner](docs/Model/GetUserTransactionById200ResponseAllOfInfractionInner.md)
- [GetUserTransactions200Response](docs/Model/GetUserTransactions200Response.md)
- [GetUserWhitelistCnpj200Response](docs/Model/GetUserWhitelistCnpj200Response.md)
- [GetUserWhitelistCnpj200ResponseDataInner](docs/Model/GetUserWhitelistCnpj200ResponseDataInner.md)
- [GetUserWhitelistCnpj200ResponsePageInfo](docs/Model/GetUserWhitelistCnpj200ResponsePageInfo.md)
- [GetUserWhitelistPixKey200Response](docs/Model/GetUserWhitelistPixKey200Response.md)
- [GetUserWhitelistPixKey200ResponseDataInner](docs/Model/GetUserWhitelistPixKey200ResponseDataInner.md)
- [GetUserWhitelistPixKey200ResponsePageInfo](docs/Model/GetUserWhitelistPixKey200ResponsePageInfo.md)
- [InfractionChangedData](docs/Model/InfractionChangedData.md)
- [InfractionChangedEvent](docs/Model/InfractionChangedEvent.md)
- [InfractionDetail](docs/Model/InfractionDetail.md)
- [InfractionDetailTransaction](docs/Model/InfractionDetailTransaction.md)
- [InfractionListResponse](docs/Model/InfractionListResponse.md)
- [InfractionListResponsePagination](docs/Model/InfractionListResponsePagination.md)
- [ListUserReports200Response](docs/Model/ListUserReports200Response.md)
- [PixKeyInfo](docs/Model/PixKeyInfo.md)
- [PostInternalTransferRequest](docs/Model/PostInternalTransferRequest.md)
- [PostPixQrcodeReadRequest](docs/Model/PostPixQrcodeReadRequest.md)
- [PostPixRequest](docs/Model/PostPixRequest.md)
- [PostUserReportRequest](docs/Model/PostUserReportRequest.md)
- [PostWithdrawQrcodeRequest](docs/Model/PostWithdrawQrcodeRequest.md)
- [PostWithdrawRequest](docs/Model/PostWithdrawRequest.md)
- [ProofResponse](docs/Model/ProofResponse.md)
- [QRCodeReadResponse](docs/Model/QRCodeReadResponse.md)
- [Refund](docs/Model/Refund.md)
- [RefundRequest](docs/Model/RefundRequest.md)
- [ReportJob](docs/Model/ReportJob.md)
- [ReportJobAccepted](docs/Model/ReportJobAccepted.md)
- [ReportJobDetail](docs/Model/ReportJobDetail.md)
- [ResendUserCallbackSingle200Response](docs/Model/ResendUserCallbackSingle200Response.md)
- [ResendUserCallbacks200Response](docs/Model/ResendUserCallbacks200Response.md)
- [ResendUserCallbacksRequest](docs/Model/ResendUserCallbacksRequest.md)
- [ResendWebhookCallbacksRequest](docs/Model/ResendWebhookCallbacksRequest.md)
- [RotateCallbackSecretResponse](docs/Model/RotateCallbackSecretResponse.md)
- [RotateSecretResponse](docs/Model/RotateSecretResponse.md)
- [SentWebhookDetail](docs/Model/SentWebhookDetail.md)
- [SentWebhookDetailResponse](docs/Model/SentWebhookDetailResponse.md)
- [SentWebhooksQuantity](docs/Model/SentWebhooksQuantity.md)
- [Summary](docs/Model/Summary.md)
- [SummaryBlock](docs/Model/SummaryBlock.md)
- [SummaryBlockGroupedInner](docs/Model/SummaryBlockGroupedInner.md)
- [SummaryBlockStatuses](docs/Model/SummaryBlockStatuses.md)
- [SummaryStatus](docs/Model/SummaryStatus.md)
- [Transaction](docs/Model/Transaction.md)
- [TransactionCanceledEvent](docs/Model/TransactionCanceledEvent.md)
- [TransactionCompletedEvent](docs/Model/TransactionCompletedEvent.md)
- [TransactionErrorEvent](docs/Model/TransactionErrorEvent.md)
- [TransactionExpiredEvent](docs/Model/TransactionExpiredEvent.md)
- [TransactionPendingEvent](docs/Model/TransactionPendingEvent.md)
- [TransactionRefundedEvent](docs/Model/TransactionRefundedEvent.md)
- [TransactionWaitingForRefundEvent](docs/Model/TransactionWaitingForRefundEvent.md)
- [TransactionWithRefunds](docs/Model/TransactionWithRefunds.md)
- [Webhook](docs/Model/Webhook.md)
- [WebhookCreateRequest](docs/Model/WebhookCreateRequest.md)
- [WebhookEventType](docs/Model/WebhookEventType.md)
- [WebhookListResponse](docs/Model/WebhookListResponse.md)
- [WebhookUpdateRequest](docs/Model/WebhookUpdateRequest.md)
- [WebhookWithSecret](docs/Model/WebhookWithSecret.md)

## Authorization

Authentication schemes defined for the API:
### BearerAuth

- **Type**: Bearer authentication

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.8.0`
    - Package version: `4.0.0`
    - Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
