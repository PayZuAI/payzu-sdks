# PayZu\Pix\ReportsApi

Transaction history, reports, bank statements, and pending deposits

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**downloadUserReport()**](ReportsApi.md#downloadUserReport) | **POST** /user/report/{id}/download | Download report |
| [**getUserBankStatement()**](ReportsApi.md#getUserBankStatement) | **GET** /user/bank-statements/{id} | Get bank statement |
| [**getUserBankStatements()**](ReportsApi.md#getUserBankStatements) | **GET** /user/bank-statements | List bank statements |
| [**getUserDepositPending()**](ReportsApi.md#getUserDepositPending) | **GET** /user/deposit-pending | List pending deposits |
| [**getUserDepositPendingById()**](ReportsApi.md#getUserDepositPendingById) | **GET** /user/deposit-pending/{id} | Get pending deposit |
| [**getUserReport()**](ReportsApi.md#getUserReport) | **GET** /user/report/{id} | Get report job status |
| [**getUserSummary()**](ReportsApi.md#getUserSummary) | **GET** /user/summary | Transaction summary |
| [**getUserTransactionById()**](ReportsApi.md#getUserTransactionById) | **GET** /user/transactions/{id} | List transaction details |
| [**getUserTransactions()**](ReportsApi.md#getUserTransactions) | **GET** /user/transactions | List Transactions |
| [**listUserReports()**](ReportsApi.md#listUserReports) | **GET** /user/report | List report jobs |
| [**postUserReport()**](ReportsApi.md#postUserReport) | **POST** /user/report | Generate transactions report |


## `downloadUserReport()`

```php
downloadUserReport($id): \PayZu\Pix\Model\DownloadUserReport200Response
```

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78; // string | Report ID.

try {
    $result = $apiInstance->downloadUserReport($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->downloadUserReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Report ID. | |

### Return type

[**\PayZu\Pix\Model\DownloadUserReport200Response**](../Model/DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserBankStatement()`

```php
getUserBankStatement($id): \PayZu\Pix\Model\BankStatement
```

Get bank statement

Returns a single statement entry.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7q8s10004q8f2k9f5b7eh; // string | Statement entry id.

try {
    $result = $apiInstance->getUserBankStatement($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserBankStatement: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Statement entry id. | |

### Return type

[**\PayZu\Pix\Model\BankStatement**](../Model/BankStatement.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserBankStatements()`

```php
getUserBankStatements($created_at_from, $created_at_to, $id, $operation, $reason, $transaction_id, $amount_from, $amount_to, $page, $limit, $sort_by, $sort_direction): \PayZu\Pix\Model\BankStatementListResponse
```

List bank statements

Lists the account statement entries. `createdAtFrom` and `createdAtTo` are required.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$created_at_from = 2026-08-01; // \DateTime | Start date (required).
$created_at_to = 2026-08-31; // \DateTime | End date (required).
$id = cm3w7q8s10004q8f2k9f5b7eh; // string | Entry ID.
$operation = 'operation_example'; // string | Operation type.  `INCREMENT` `DECREMENT`
$reason = Estorno; // string | Reason for the entry.
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.
$amount_from = 10.9; // float | Minimum amount.
$amount_to = 500; // float | Maximum amount.
$page = 1; // int | Page number.
$limit = 10; // int | Items per page.
$sort_by = 'createdAt'; // string | Sort field.
$sort_direction = 'desc'; // string | Sort direction.

try {
    $result = $apiInstance->getUserBankStatements($created_at_from, $created_at_to, $id, $operation, $reason, $transaction_id, $amount_from, $amount_to, $page, $limit, $sort_by, $sort_direction);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserBankStatements: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **created_at_from** | **\DateTime**| Start date (required). | |
| **created_at_to** | **\DateTime**| End date (required). | |
| **id** | **string**| Entry ID. | [optional] |
| **operation** | **string**| Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] |
| **reason** | **string**| Reason for the entry. | [optional] |
| **transaction_id** | **string**| Transaction ID. | [optional] |
| **amount_from** | **float**| Minimum amount. | [optional] |
| **amount_to** | **float**| Maximum amount. | [optional] |
| **page** | **int**| Page number. | [optional] [default to 1] |
| **limit** | **int**| Items per page. | [optional] [default to 10] |
| **sort_by** | **string**| Sort field. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction. | [optional] [default to &#39;desc&#39;] |

### Return type

[**\PayZu\Pix\Model\BankStatementListResponse**](../Model/BankStatementListResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserDepositPending()`

```php
getUserDepositPending($status, $document, $name, $end_to_end_id, $amount_min, $amount_max, $created_at_from, $created_at_to, $page, $limit): \PayZu\Pix\Model\DepositPendingListResponse
```

List pending deposits

Lists deposits that are pending / not yet reconciled.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$status = PENDING; // string | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED.
$document = 12345678901; // string | CPF or CNPJ, digits only.
$name = John Doe; // string | Name of the payer or receiver.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | End-to-end ID of the Pix.
$amount_min = 10.9; // float | Minimum amount.
$amount_max = 500; // float | Maximum amount.
$created_at_from = 2026-08-01; // \DateTime | Start of the creation date range.
$created_at_to = 2026-08-31; // \DateTime | End of the creation date range.
$page = 1; // int | Page number.
$limit = 20; // int | Items per page.

try {
    $result = $apiInstance->getUserDepositPending($status, $document, $name, $end_to_end_id, $amount_min, $amount_max, $created_at_from, $created_at_to, $page, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserDepositPending: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **status** | **string**| Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | [optional] |
| **document** | **string**| CPF or CNPJ, digits only. | [optional] |
| **name** | **string**| Name of the payer or receiver. | [optional] |
| **end_to_end_id** | **string**| End-to-end ID of the Pix. | [optional] |
| **amount_min** | **float**| Minimum amount. | [optional] |
| **amount_max** | **float**| Maximum amount. | [optional] |
| **created_at_from** | **\DateTime**| Start of the creation date range. | [optional] |
| **created_at_to** | **\DateTime**| End of the creation date range. | [optional] |
| **page** | **int**| Page number. | [optional] [default to 1] |
| **limit** | **int**| Items per page. | [optional] [default to 20] |

### Return type

[**\PayZu\Pix\Model\DepositPendingListResponse**](../Model/DepositPendingListResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserDepositPendingById()`

```php
getUserDepositPendingById($id): \PayZu\Pix\Model\DepositPending
```

Get pending deposit

Returns a single pending deposit.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7r1u50005q8f2m1g6c8fj; // string | Pending deposit id.

try {
    $result = $apiInstance->getUserDepositPendingById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserDepositPendingById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Pending deposit id. | |

### Return type

[**\PayZu\Pix\Model\DepositPending**](../Model/DepositPending.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserReport()`

```php
getUserReport($id): \PayZu\Pix\Model\ReportJobDetail
```

Get report job status

Returns the status and metadata of a specific report job by `id`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78; // string | Report ID.

try {
    $result = $apiInstance->getUserReport($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Report ID. | |

### Return type

[**\PayZu\Pix\Model\ReportJobDetail**](../Model/ReportJobDetail.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserSummary()`

```php
getUserSummary($date_from, $date_to, $group_by, $grouped): \PayZu\Pix\Model\Summary
```

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$date_from = 2026-08-01; // \DateTime | Start date. Default: start of the previous day (America/Sao_Paulo).
$date_to = 2026-08-31; // \DateTime | End date. Default: now.
$group_by = 'day'; // string | Grouping applied to the transactions.
$grouped = true; // bool | When true, returns a series grouped by date.

try {
    $result = $apiInstance->getUserSummary($date_from, $date_to, $group_by, $grouped);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserSummary: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **date_from** | **\DateTime**| Start date. Default: start of the previous day (America/Sao_Paulo). | [optional] |
| **date_to** | **\DateTime**| End date. Default: now. | [optional] |
| **group_by** | **string**| Grouping applied to the transactions. | [optional] [default to &#39;day&#39;] |
| **grouped** | **bool**| When true, returns a series grouped by date. | [optional] |

### Return type

[**\PayZu\Pix\Model\Summary**](../Model/Summary.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserTransactionById()`

```php
getUserTransactionById($id): \PayZu\Pix\Model\GetUserTransactionById200Response
```

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.

try {
    $result = $apiInstance->getUserTransactionById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserTransactionById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Transaction ID. | |

### Return type

[**\PayZu\Pix\Model\GetUserTransactionById200Response**](../Model/GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserTransactions()`

```php
getUserTransactions($date_from, $date_to, $limit, $page, $id, $status, $type, $method, $amount, $document, $name, $end_to_end_id, $sort_by, $sort_direction, $client_reference, $virtual_account, $has_qr_code): \PayZu\Pix\Model\GetUserTransactions200Response
```

List Transactions

Paginated list of account transactions with filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$date_from = 2026-08-01; // \DateTime | Start date or date-time (ISO 8601).
$date_to = 2026-08-31; // \DateTime | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day.
$limit = 10; // int | Items per page (max 1000).
$page = 1; // int | Page number (default 1).
$id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.
$status = COMPLETED; // string | Transaction status. Accepts CSV: PENDING,COMPLETED,etc.
$type = DEPOSIT; // string | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
$method = PIX; // string | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER.
$amount = 15000; // float | Amount filter. Minimum 0.01.
$document = 12345678901; // string | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation.
$name = Alice; // string | Name filter.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | Pix end-to-end ID.
$sort_by = 'createdAt'; // string | Field to sort by
$sort_direction = 'desc'; // string | Sort direction
$client_reference = order_12345; // string | Filter by external reference
$virtual_account = loja-centro-01; // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
$has_qr_code = True; // bool | Only transactions with (true) or without (false) QR Code.

try {
    $result = $apiInstance->getUserTransactions($date_from, $date_to, $limit, $page, $id, $status, $type, $method, $amount, $document, $name, $end_to_end_id, $sort_by, $sort_direction, $client_reference, $virtual_account, $has_qr_code);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserTransactions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **date_from** | **\DateTime**| Start date or date-time (ISO 8601). | [optional] |
| **date_to** | **\DateTime**| End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. | [optional] |
| **limit** | **int**| Items per page (max 1000). | [optional] [default to 10] |
| **page** | **int**| Page number (default 1). | [optional] [default to 1] |
| **id** | **string**| Transaction ID. | [optional] |
| **status** | **string**| Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] |
| **type** | **string**| Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **string**| Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | [optional] |
| **amount** | **float**| Amount filter. Minimum 0.01. | [optional] |
| **document** | **string**| CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] |
| **name** | **string**| Name filter. | [optional] |
| **end_to_end_id** | **string**| Pix end-to-end ID. | [optional] |
| **sort_by** | **string**| Field to sort by | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction | [optional] [default to &#39;desc&#39;] |
| **client_reference** | **string**| Filter by external reference | [optional] |
| **virtual_account** | **string**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |
| **has_qr_code** | **bool**| Only transactions with (true) or without (false) QR Code. | [optional] |

### Return type

[**\PayZu\Pix\Model\GetUserTransactions200Response**](../Model/GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listUserReports()`

```php
listUserReports($page, $limit, $status, $created_at_from, $created_at_to, $updated_at_from, $updated_at_to, $sort_by, $sort_direction): \PayZu\Pix\Model\ListUserReports200Response
```

List report jobs

List report jobs created by the authenticated user.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int | Page number.
$limit = 10; // int | Items per page.
$status = COMPLETED,FAILED; // string | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED.
$created_at_from = 2026-08-01; // \DateTime | Filter: created from.
$created_at_to = 2026-08-31; // \DateTime | Filter: created up to.
$updated_at_from = 2026-08-01; // \DateTime | Filter: updated from.
$updated_at_to = 2026-08-31; // \DateTime | Filter: updated up to.
$sort_by = 'createdAt'; // string | Sort field.
$sort_direction = 'desc'; // string | Sort direction.

try {
    $result = $apiInstance->listUserReports($page, $limit, $status, $created_at_from, $created_at_to, $updated_at_from, $updated_at_to, $sort_by, $sort_direction);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->listUserReports: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Page number. | [optional] [default to 1] |
| **limit** | **int**| Items per page. | [optional] [default to 10] |
| **status** | **string**| Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **created_at_from** | **\DateTime**| Filter: created from. | [optional] |
| **created_at_to** | **\DateTime**| Filter: created up to. | [optional] |
| **updated_at_from** | **\DateTime**| Filter: updated from. | [optional] |
| **updated_at_to** | **\DateTime**| Filter: updated up to. | [optional] |
| **sort_by** | **string**| Sort field. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction. | [optional] [default to &#39;desc&#39;] |

### Return type

[**\PayZu\Pix\Model\ListUserReports200Response**](../Model/ListUserReports200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postUserReport()`

```php
postUserReport($post_user_report_request): \PayZu\Pix\Model\ReportJobAccepted
```

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_user_report_request = new \PayZu\Pix\Model\PostUserReportRequest(); // \PayZu\Pix\Model\PostUserReportRequest

try {
    $result = $apiInstance->postUserReport($post_user_report_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->postUserReport: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_user_report_request** | [**\PayZu\Pix\Model\PostUserReportRequest**](../Model/PostUserReportRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\ReportJobAccepted**](../Model/ReportJobAccepted.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
