# PayZuPix

REST API for Pix operations on the PayZu platform, deposits, withdrawals, internal transfers, infractions, reports, and callback inspection. All amounts are in BRL (reais) unless explicitly noted. Authentication uses a Bearer token issued during onboarding.

## SDKs oficiais

- Node.js: `npm install payzu-pix`
- Python: `pip install payzu-pix`
- Go: `go get github.com/PayZuAI/payzu-sdks/go`
- PHP: `composer require payzu/pix`

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
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AccountApi(
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

All URIs are relative to *https://api.payzu.processamento.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**getUser**](docs/Api/AccountApi.md#getuser) | **GET** /user | Account Info
*AccountApi* | [**getUserBalance**](docs/Api/AccountApi.md#getuserbalance) | **GET** /user/balance | Account Balance
*CallbacksApi* | [**getUserCallbackById**](docs/Api/CallbacksApi.md#getusercallbackbyid) | **GET** /user/callbacks/{id} | Get Callback
*CallbacksApi* | [**getUserCallbacks**](docs/Api/CallbacksApi.md#getusercallbacks) | **GET** /user/callbacks | List Callbacks
*CallbacksApi* | [**resendUserCallbackSingle**](docs/Api/CallbacksApi.md#resendusercallbacksingle) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single)
*CallbacksApi* | [**resendUserCallbacks**](docs/Api/CallbacksApi.md#resendusercallbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk)
*CallbacksApi* | [**resendUserCallbacksWebhook**](docs/Api/CallbacksApi.md#resendusercallbackswebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook
*InfractionsApi* | [**getInfractions**](docs/Api/InfractionsApi.md#getinfractions) | **GET** /user/infractions | List Infractions
*InfractionsApi* | [**getInfractionsById**](docs/Api/InfractionsApi.md#getinfractionsbyid) | **GET** /user/infractions/{id} | Get Infraction
*InfractionsApi* | [**getInfractionsDefenseById**](docs/Api/InfractionsApi.md#getinfractionsdefensebyid) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense
*InfractionsApi* | [**getInfractionsDefenses**](docs/Api/InfractionsApi.md#getinfractionsdefenses) | **GET** /user/infractions/{id}/defenses | List Defenses
*InfractionsApi* | [**postInfractionsDefense**](docs/Api/InfractionsApi.md#postinfractionsdefense) | **POST** /user/infractions/{id}/defenses | Create Defense
*InternalTransferApi* | [**getInternalTransfer**](docs/Api/InternalTransferApi.md#getinternaltransfer) | **GET** /internal-transfer | Get internal transfer
*InternalTransferApi* | [**postInternalTransfer**](docs/Api/InternalTransferApi.md#postinternaltransfer) | **POST** /internal-transfer | Create internal transfer
*PixOperationsApi* | [**getPix**](docs/Api/PixOperationsApi.md#getpix) | **GET** /pix | Retrieve Charge
*PixOperationsApi* | [**getPixQrcode**](docs/Api/PixOperationsApi.md#getpixqrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG)
*PixOperationsApi* | [**getProof**](docs/Api/PixOperationsApi.md#getproof) | **GET** /proof/{id} | Get Transaction Receipt
*PixOperationsApi* | [**postPix**](docs/Api/PixOperationsApi.md#postpix) | **POST** /pix | Create Charge (Pix deposit)
*RefundsApi* | [**postRefund**](docs/Api/RefundsApi.md#postrefund) | **POST** /refund/{transactionId} | Refund a Pix
*ReportsApi* | [**downloadUserReport**](docs/Api/ReportsApi.md#downloaduserreport) | **POST** /user/report/{id}/download | Download report
*ReportsApi* | [**getUserBankStatement**](docs/Api/ReportsApi.md#getuserbankstatement) | **GET** /user/bank-statements/{id} | Get bank statement
*ReportsApi* | [**getUserBankStatements**](docs/Api/ReportsApi.md#getuserbankstatements) | **GET** /user/bank-statements | List bank statements
*ReportsApi* | [**getUserDepositPending**](docs/Api/ReportsApi.md#getuserdepositpending) | **GET** /user/deposit-pending | List pending deposits
*ReportsApi* | [**getUserDepositPendingById**](docs/Api/ReportsApi.md#getuserdepositpendingbyid) | **GET** /user/deposit-pending/{id} | Get pending deposit
*ReportsApi* | [**getUserReport**](docs/Api/ReportsApi.md#getuserreport) | **GET** /user/report/{id} | Get report job status
*ReportsApi* | [**getUserSummary**](docs/Api/ReportsApi.md#getusersummary) | **GET** /user/summary | Transaction summary
*ReportsApi* | [**getUserTransactionById**](docs/Api/ReportsApi.md#getusertransactionbyid) | **GET** /user/transactions/{id} | List transaction details
*ReportsApi* | [**getUserTransactions**](docs/Api/ReportsApi.md#getusertransactions) | **GET** /user/transactions | List Transactions
*ReportsApi* | [**listUserReports**](docs/Api/ReportsApi.md#listuserreports) | **GET** /user/report | List report jobs
*ReportsApi* | [**postUserReport**](docs/Api/ReportsApi.md#postuserreport) | **POST** /user/report | Generate transactions report
*WebhooksApi* | [**deleteUserWebhook**](docs/Api/WebhooksApi.md#deleteuserwebhook) | **DELETE** /user/webhooks/{id} | Delete webhook
*WebhooksApi* | [**getUserWebhook**](docs/Api/WebhooksApi.md#getuserwebhook) | **GET** /user/webhooks/{id} | Get webhook
*WebhooksApi* | [**getUserWebhookSentDetail**](docs/Api/WebhooksApi.md#getuserwebhooksentdetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail
*WebhooksApi* | [**getUserWebhooks**](docs/Api/WebhooksApi.md#getuserwebhooks) | **GET** /user/webhooks | List webhooks
*WebhooksApi* | [**getUserWebhooksSentQuantity**](docs/Api/WebhooksApi.md#getuserwebhookssentquantity) | **GET** /user/webhooks/sent/quantity | Count sent callbacks
*WebhooksApi* | [**patchUserWebhook**](docs/Api/WebhooksApi.md#patchuserwebhook) | **PATCH** /user/webhooks/{id} | Update webhook
*WebhooksApi* | [**postUserWebhook**](docs/Api/WebhooksApi.md#postuserwebhook) | **POST** /user/webhooks | Create webhook
*WebhooksApi* | [**postUserWebhookRotateSecret**](docs/Api/WebhooksApi.md#postuserwebhookrotatesecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret
*WithdrawalsApi* | [**getPixKey**](docs/Api/WithdrawalsApi.md#getpixkey) | **GET** /pix/key | Dict Pix Key Lookup
*WithdrawalsApi* | [**getUserDict**](docs/Api/WithdrawalsApi.md#getuserdict) | **GET** /user/dict | DICT key lookup
*WithdrawalsApi* | [**getWithdraw**](docs/Api/WithdrawalsApi.md#getwithdraw) | **GET** /withdraw | Retrieve Withdrawal
*WithdrawalsApi* | [**getWithdrawProof**](docs/Api/WithdrawalsApi.md#getwithdrawproof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt
*WithdrawalsApi* | [**postPixQrcodeRead**](docs/Api/WithdrawalsApi.md#postpixqrcoderead) | **POST** /pix/qrcode/read | Read QR Code
*WithdrawalsApi* | [**postWithdraw**](docs/Api/WithdrawalsApi.md#postwithdraw) | **POST** /withdraw | Create Withdrawal (Pix key)
*WithdrawalsApi* | [**postWithdrawQrcode**](docs/Api/WithdrawalsApi.md#postwithdrawqrcode) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code

## Models

- [ApiError](docs/Model/ApiError.md)
- [ApiErrorDetailsInner](docs/Model/ApiErrorDetailsInner.md)
- [BankStatement](docs/Model/BankStatement.md)
- [BankStatementListResponse](docs/Model/BankStatementListResponse.md)
- [BankStatementListResponsePagination](docs/Model/BankStatementListResponsePagination.md)
- [CallbackDetail](docs/Model/CallbackDetail.md)
- [CallbackListResponse](docs/Model/CallbackListResponse.md)
- [CallbackListResponsePagination](docs/Model/CallbackListResponsePagination.md)
- [CallbackResendResponse](docs/Model/CallbackResendResponse.md)
- [Defense](docs/Model/Defense.md)
- [DefenseFilesInner](docs/Model/DefenseFilesInner.md)
- [DepositPending](docs/Model/DepositPending.md)
- [DepositPendingListResponse](docs/Model/DepositPendingListResponse.md)
- [DictConsultResponse](docs/Model/DictConsultResponse.md)
- [DownloadUserReport200Response](docs/Model/DownloadUserReport200Response.md)
- [GetPixKey400Response](docs/Model/GetPixKey400Response.md)
- [GetPixKey404Response](docs/Model/GetPixKey404Response.md)
- [GetPixQrcode404Response](docs/Model/GetPixQrcode404Response.md)
- [GetUser200Response](docs/Model/GetUser200Response.md)
- [GetUser200ResponseDailyWithdrawLimit](docs/Model/GetUser200ResponseDailyWithdrawLimit.md)
- [GetUser200ResponseServiceFee](docs/Model/GetUser200ResponseServiceFee.md)
- [GetUserBalance200Response](docs/Model/GetUserBalance200Response.md)
- [GetUserTransactionById200Response](docs/Model/GetUserTransactionById200Response.md)
- [GetUserTransactionById200ResponseAllOfCallbackLogInner](docs/Model/GetUserTransactionById200ResponseAllOfCallbackLogInner.md)
- [GetUserTransactionById200ResponseAllOfInfractionInner](docs/Model/GetUserTransactionById200ResponseAllOfInfractionInner.md)
- [GetUserTransactions200Response](docs/Model/GetUserTransactions200Response.md)
- [InfractionDetail](docs/Model/InfractionDetail.md)
- [InfractionDetailTransaction](docs/Model/InfractionDetailTransaction.md)
- [InfractionListResponse](docs/Model/InfractionListResponse.md)
- [InfractionListResponsePagination](docs/Model/InfractionListResponsePagination.md)
- [ListUserReports200Response](docs/Model/ListUserReports200Response.md)
- [PixKeyInfo](docs/Model/PixKeyInfo.md)
- [PostInternalTransferRequest](docs/Model/PostInternalTransferRequest.md)
- [PostPixQrcodeRead400Response](docs/Model/PostPixQrcodeRead400Response.md)
- [PostPixQrcodeReadRequest](docs/Model/PostPixQrcodeReadRequest.md)
- [PostPixRequest](docs/Model/PostPixRequest.md)
- [PostUserReportRequest](docs/Model/PostUserReportRequest.md)
- [PostWithdrawQrcode400Response](docs/Model/PostWithdrawQrcode400Response.md)
- [PostWithdrawQrcodeRequest](docs/Model/PostWithdrawQrcodeRequest.md)
- [PostWithdrawRequest](docs/Model/PostWithdrawRequest.md)
- [ProofResponse](docs/Model/ProofResponse.md)
- [QRCodeReadResponse](docs/Model/QRCodeReadResponse.md)
- [RefundRequest](docs/Model/RefundRequest.md)
- [ReportJob](docs/Model/ReportJob.md)
- [ResendUserCallbackSingle200Response](docs/Model/ResendUserCallbackSingle200Response.md)
- [ResendUserCallbacks200Response](docs/Model/ResendUserCallbacks200Response.md)
- [ResendUserCallbacksRequest](docs/Model/ResendUserCallbacksRequest.md)
- [RotateSecretResponse](docs/Model/RotateSecretResponse.md)
- [SentWebhookDetail](docs/Model/SentWebhookDetail.md)
- [SentWebhooksQuantity](docs/Model/SentWebhooksQuantity.md)
- [Summary](docs/Model/Summary.md)
- [SummaryBlock](docs/Model/SummaryBlock.md)
- [SummaryBlockGroupedInner](docs/Model/SummaryBlockGroupedInner.md)
- [SummaryBlockStatuses](docs/Model/SummaryBlockStatuses.md)
- [SummaryStatus](docs/Model/SummaryStatus.md)
- [Transaction](docs/Model/Transaction.md)
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
    - Package version: `0.1.0`
    - Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
