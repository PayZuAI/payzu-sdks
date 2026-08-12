# OpenAPI\Client\ReportsApi

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
downloadUserReport($id): \OpenAPI\Client\Model\DownloadUserReport200Response
```

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

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
| **id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\DownloadUserReport200Response**](../Model/DownloadUserReport200Response.md)

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
getUserBankStatement($id): \OpenAPI\Client\Model\BankStatement
```

Get bank statement

Returns a single statement entry.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Statement entry id.

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

[**\OpenAPI\Client\Model\BankStatement**](../Model/BankStatement.md)

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
getUserBankStatements($created_at_from, $created_at_to, $id, $operation, $reason, $transaction_id, $amount_from, $amount_to, $page, $limit, $sort_by, $sort_direction): \OpenAPI\Client\Model\BankStatementListResponse
```

List bank statements

Lists the account statement entries. `createdAtFrom` and `createdAtTo` are required.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$created_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Start date (required).
$created_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | End date (required).
$id = 'id_example'; // string
$operation = 'operation_example'; // string
$reason = 'reason_example'; // string
$transaction_id = 'transaction_id_example'; // string
$amount_from = 3.4; // float
$amount_to = 3.4; // float
$page = 1; // int
$limit = 10; // int
$sort_by = 'createdAt'; // string
$sort_direction = 'desc'; // string

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
| **id** | **string**|  | [optional] |
| **operation** | **string**|  | [optional] |
| **reason** | **string**|  | [optional] |
| **transaction_id** | **string**|  | [optional] |
| **amount_from** | **float**|  | [optional] |
| **amount_to** | **float**|  | [optional] |
| **page** | **int**|  | [optional] [default to 1] |
| **limit** | **int**|  | [optional] [default to 10] |
| **sort_by** | **string**|  | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**|  | [optional] [default to &#39;desc&#39;] |

### Return type

[**\OpenAPI\Client\Model\BankStatementListResponse**](../Model/BankStatementListResponse.md)

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
getUserDepositPending($status, $document, $name, $end_to_end_id, $amount_min, $amount_max, $created_at_from, $created_at_to, $page, $limit): \OpenAPI\Client\Model\DepositPendingListResponse
```

List pending deposits

Lists deposits that are pending / not yet reconciled.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$status = 'status_example'; // string | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED.
$document = 'document_example'; // string
$name = 'name_example'; // string
$end_to_end_id = 'end_to_end_id_example'; // string
$amount_min = 3.4; // float
$amount_max = 3.4; // float
$created_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$created_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$page = 1; // int
$limit = 20; // int

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
| **document** | **string**|  | [optional] |
| **name** | **string**|  | [optional] |
| **end_to_end_id** | **string**|  | [optional] |
| **amount_min** | **float**|  | [optional] |
| **amount_max** | **float**|  | [optional] |
| **created_at_from** | **\DateTime**|  | [optional] |
| **created_at_to** | **\DateTime**|  | [optional] |
| **page** | **int**|  | [optional] [default to 1] |
| **limit** | **int**|  | [optional] [default to 20] |

### Return type

[**\OpenAPI\Client\Model\DepositPendingListResponse**](../Model/DepositPendingListResponse.md)

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
getUserDepositPendingById($id): \OpenAPI\Client\Model\DepositPending
```

Get pending deposit

Returns a single pending deposit.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Pending deposit id.

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

[**\OpenAPI\Client\Model\DepositPending**](../Model/DepositPending.md)

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
getUserReport($id): \OpenAPI\Client\Model\ReportJob
```

Get report job status

Returns the status and metadata of a specific report job by `id`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

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
| **id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\ReportJob**](../Model/ReportJob.md)

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
getUserSummary($date_from, $date_to, $group_by, $grouped): \OpenAPI\Client\Model\Summary
```

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$date_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$date_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$group_by = 'day'; // string
$grouped = True; // bool | When true, returns a series grouped by date.

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
| **date_from** | **\DateTime**|  | [optional] |
| **date_to** | **\DateTime**|  | [optional] |
| **group_by** | **string**|  | [optional] [default to &#39;day&#39;] |
| **grouped** | **bool**| When true, returns a series grouped by date. | [optional] |

### Return type

[**\OpenAPI\Client\Model\Summary**](../Model/Summary.md)

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
getUserTransactionById($id): \OpenAPI\Client\Model\GetUserTransactionById200Response
```

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string

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
| **id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\GetUserTransactionById200Response**](../Model/GetUserTransactionById200Response.md)

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
getUserTransactions($date_from, $date_to, $limit, $page, $id, $status, $type, $method, $amount, $document, $name, $end_to_end_id, $sort_by, $sort_direction, $client_reference, $virtual_account): \OpenAPI\Client\Model\GetUserTransactions200Response
```

List Transactions

Paginated list of account transactions with filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$date_from = 2025-08-01; // string | Start date (YYYY-MM-DD).
$date_to = 2025-08-17; // string | End date (YYYY-MM-DD).
$limit = 10; // float | Items per page (max 1000).
$page = 1; // float | Page number (default 1).
$id = PAYZU2025081418333632CYKN8M; // string | Transaction ID.
$status = COMPLETED; // string | Transaction status. Accepts CSV: PENDING,COMPLETED,etc.
$type = DEPOSIT; // string | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION.
$method = PIX; // string | Transaction method/rail. Accepts CSV: PIX,BANK_SLIP,INTERNAL_TRANSFER.
$amount = 15000; // float | Amount filter. Minimum 0.01.
$document = 12345678901; // string | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation.
$name = Alice; // string | Name filter.
$end_to_end_id = E00360305202508141833bcf1f37b487; // string | Pix end-to-end ID.
$sort_by = 'createdAt'; // string | Field to sort by
$sort_direction = 'desc'; // string | Sort direction
$client_reference = 'client_reference_example'; // string | Filter by external reference
$virtual_account = 'virtual_account_example'; // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.

try {
    $result = $apiInstance->getUserTransactions($date_from, $date_to, $limit, $page, $id, $status, $type, $method, $amount, $document, $name, $end_to_end_id, $sort_by, $sort_direction, $client_reference, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ReportsApi->getUserTransactions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **date_from** | **string**| Start date (YYYY-MM-DD). | [optional] |
| **date_to** | **string**| End date (YYYY-MM-DD). | [optional] |
| **limit** | **float**| Items per page (max 1000). | [optional] [default to 10] |
| **page** | **float**| Page number (default 1). | [optional] [default to 1] |
| **id** | **string**| Transaction ID. | [optional] |
| **status** | **string**| Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] |
| **type** | **string**| Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION. | [optional] |
| **method** | **string**| Transaction method/rail. Accepts CSV: PIX,BANK_SLIP,INTERNAL_TRANSFER. | [optional] |
| **amount** | **float**| Amount filter. Minimum 0.01. | [optional] |
| **document** | **string**| CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] |
| **name** | **string**| Name filter. | [optional] |
| **end_to_end_id** | **string**| Pix end-to-end ID. | [optional] |
| **sort_by** | **string**| Field to sort by | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction | [optional] [default to &#39;desc&#39;] |
| **client_reference** | **string**| Filter by external reference | [optional] |
| **virtual_account** | **string**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetUserTransactions200Response**](../Model/GetUserTransactions200Response.md)

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
listUserReports($page, $limit, $status, $created_at_from, $created_at_to, $updated_at_from, $updated_at_to, $sort_by, $sort_direction): \OpenAPI\Client\Model\ListUserReports200Response
```

List report jobs

List report jobs created by the authenticated user.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int
$limit = 10; // int
$status = 'status_example'; // string
$created_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: created from.
$created_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: created up to.
$updated_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: updated from.
$updated_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter: updated up to.
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
| **page** | **int**|  | [optional] [default to 1] |
| **limit** | **int**|  | [optional] [default to 10] |
| **status** | **string**|  | [optional] |
| **created_at_from** | **\DateTime**| Filter: created from. | [optional] |
| **created_at_to** | **\DateTime**| Filter: created up to. | [optional] |
| **updated_at_from** | **\DateTime**| Filter: updated from. | [optional] |
| **updated_at_to** | **\DateTime**| Filter: updated up to. | [optional] |
| **sort_by** | **string**| Sort field. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction. | [optional] [default to &#39;desc&#39;] |

### Return type

[**\OpenAPI\Client\Model\ListUserReports200Response**](../Model/ListUserReports200Response.md)

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
postUserReport($post_user_report_request): \OpenAPI\Client\Model\ReportJob
```

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\ReportsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_user_report_request = new \OpenAPI\Client\Model\PostUserReportRequest(); // \OpenAPI\Client\Model\PostUserReportRequest

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
| **post_user_report_request** | [**\OpenAPI\Client\Model\PostUserReportRequest**](../Model/PostUserReportRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ReportJob**](../Model/ReportJob.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
