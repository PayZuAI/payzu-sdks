# PayZu\Pix\ReportsApi

Histórico de transações, relatórios, extratos bancários e depósitos pendentes

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**downloadUserReport()**](ReportsApi.md#downloadUserReport) | **POST** /user/report/{id}/download | Baixar relatório |
| [**getUserBankStatement()**](ReportsApi.md#getUserBankStatement) | **GET** /user/bank-statements/{id} | Consultar lançamento |
| [**getUserBankStatements()**](ReportsApi.md#getUserBankStatements) | **GET** /user/bank-statements | Listar extrato |
| [**getUserDepositPending()**](ReportsApi.md#getUserDepositPending) | **GET** /user/deposit-pending | Listar depósitos via chave Pix |
| [**getUserDepositPendingById()**](ReportsApi.md#getUserDepositPendingById) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix |
| [**getUserReport()**](ReportsApi.md#getUserReport) | **GET** /user/report/{id} | Consultar status do relatório |
| [**getUserSummary()**](ReportsApi.md#getUserSummary) | **GET** /user/summary | Resumo de transações |
| [**getUserTransactionById()**](ReportsApi.md#getUserTransactionById) | **GET** /user/transactions/{id} | Listar detalhes da transação |
| [**getUserTransactions()**](ReportsApi.md#getUserTransactions) | **GET** /user/transactions | Listar transações |
| [**listUserReports()**](ReportsApi.md#listUserReports) | **GET** /user/report | Listar jobs de relatório |
| [**postUserReport()**](ReportsApi.md#postUserReport) | **POST** /user/report | Gerar relatório de transações |


## `downloadUserReport()`

```php
downloadUserReport($id): \PayZu\Pix\Model\DownloadUserReport200Response
```

Baixar relatório

Retorna uma URL assinada de curta duração para baixar o arquivo CSV.

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
$id = 01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78; // string | ID do relatório.

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
| **id** | **string**| ID do relatório. | |

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

Consultar lançamento

Retorna um lançamento do extrato.

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
$id = cm3w7q8s10004q8f2k9f5b7eh; // string | Id do lançamento do extrato.

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
| **id** | **string**| Id do lançamento do extrato. | |

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

Listar extrato

Lista os lançamentos do extrato da conta. `createdAtFrom` e `createdAtTo` são obrigatórios.

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
$created_at_from = 2026-08-01T00:00:00-03:00; // \DateTime | Data inicial (obrigatória).
$created_at_to = 2026-08-31T23:59:59-03:00; // \DateTime | Data final (obrigatória).
$id = cm3w7q8s10004q8f2k9f5b7eh; // string | ID do lançamento.
$operation = 'operation_example'; // string | Tipo de operação.  `INCREMENT` `DECREMENT`
$reason = PIX_DEPOSIT; // string | Razão do lançamento.
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.
$amount_from = 10.9; // float | Valor mínimo.
$amount_to = 500; // float | Valor máximo.
$page = 1; // int | Número da página.
$limit = 10; // int | Itens por página.
$sort_by = 'createdAt'; // string | Campo de ordenação.
$sort_direction = 'desc'; // string | Direção da ordenação.

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
| **created_at_from** | **\DateTime**| Data inicial (obrigatória). | |
| **created_at_to** | **\DateTime**| Data final (obrigatória). | |
| **id** | **string**| ID do lançamento. | [optional] |
| **operation** | **string**| Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] |
| **reason** | **string**| Razão do lançamento. | [optional] |
| **transaction_id** | **string**| ID da transação. | [optional] |
| **amount_from** | **float**| Valor mínimo. | [optional] |
| **amount_to** | **float**| Valor máximo. | [optional] |
| **page** | **int**| Número da página. | [optional] [default to 1] |
| **limit** | **int**| Itens por página. | [optional] [default to 10] |
| **sort_by** | **string**| Campo de ordenação. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Direção da ordenação. | [optional] [default to &#39;desc&#39;] |

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

Listar depósitos via chave Pix

Lista os depósitos via chave Pix: Pix que entraram na conta pela chave, sem passar por uma cobrança criada por `POST /pix`.

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
$status = PENDING; // string | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED`
$document = 12345678901; // string | CPF ou CNPJ, apenas dígitos.
$name = John Doe; // string | Nome do pagador ou recebedor.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | ID end-to-end do Pix.
$amount_min = 10.9; // float | Valor mínimo.
$amount_max = 500; // float | Valor máximo.
$created_at_from = 2026-08-01; // \DateTime | Data de criação inicial.
$created_at_to = 2026-08-31; // \DateTime | Data de criação final.
$page = 1; // int | Número da página. Valor inválido vira 1.
$limit = 20; // int | Itens por página. Valor inválido vira 20.

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
| **status** | **string**| Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | [optional] |
| **document** | **string**| CPF ou CNPJ, apenas dígitos. | [optional] |
| **name** | **string**| Nome do pagador ou recebedor. | [optional] |
| **end_to_end_id** | **string**| ID end-to-end do Pix. | [optional] |
| **amount_min** | **float**| Valor mínimo. | [optional] |
| **amount_max** | **float**| Valor máximo. | [optional] |
| **created_at_from** | **\DateTime**| Data de criação inicial. | [optional] |
| **created_at_to** | **\DateTime**| Data de criação final. | [optional] |
| **page** | **int**| Número da página. Valor inválido vira 1. | [optional] [default to 1] |
| **limit** | **int**| Itens por página. Valor inválido vira 20. | [optional] [default to 20] |

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

Consultar depósito via chave Pix

Retorna um depósito via chave Pix.

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
$id = cm3w7r1u50005q8f2m1g6c8fj; // string | Id do depósito pendente.

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
| **id** | **string**| Id do depósito pendente. | |

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

Consultar status do relatório

Retorna o status e os metadados de um job de relatório específico pelo `id`.

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
$id = 01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78; // string | ID do relatório.

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
| **id** | **string**| ID do relatório. | |

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

Resumo de transações

Totais agregados de depósitos, saques e comissão num período.

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
$date_from = 2026-08-01T00:00:00-03:00; // \DateTime | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo).
$date_to = 2026-08-31T23:59:59-03:00; // \DateTime | Data final. Padrão: agora.
$group_by = 'day'; // string | Agrupamento das transações.
$grouped = true; // bool | Quando true, retorna uma série agrupada por data.

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
| **date_from** | **\DateTime**| Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | [optional] |
| **date_to** | **\DateTime**| Data final. Padrão: agora. | [optional] |
| **group_by** | **string**| Agrupamento das transações. | [optional] [default to &#39;day&#39;] |
| **grouped** | **bool**| Quando true, retorna uma série agrupada por data. | [optional] |

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

Listar detalhes da transação

Recupera uma única transação com seu log de callback e as infrações vinculadas.

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
$id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.

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
| **id** | **string**| ID da transação. | |

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

Listar transações

Lista paginada das transações da conta com filtros.

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
$date_from = 2026-08-01T00:00:00-03:00; // \DateTime | Data-hora inicial (ISO 8601).
$date_to = 2026-08-31T23:59:59-03:00; // \DateTime | Data-hora final (ISO 8601).
$limit = 10; // int | Itens por página.
$page = 1; // int | Número da página.
$id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.
$status = COMPLETED; // string | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR`
$type = DEPOSIT; // string | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
$method = PIX; // string | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED`
$amount = 15000; // float | Filtro por valor. Mínimo 0.01.
$document = 12345678901; // string | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação.
$name = Alice; // string | Filtro por nome.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | ID end-to-end do Pix.
$sort_by = 'createdAt'; // string | Campo pelo qual ordenar
$sort_direction = 'desc'; // string | Direção da ordenação
$client_reference = order_12345; // string | Filtra por referência externa
$virtual_account = loja-centro-01; // string | Subconta usada na criação.
$has_qr_code = True; // bool | Só transações com (true) ou sem (false) QR Code.

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
| **date_from** | **\DateTime**| Data-hora inicial (ISO 8601). | [optional] |
| **date_to** | **\DateTime**| Data-hora final (ISO 8601). | [optional] |
| **limit** | **int**| Itens por página. | [optional] [default to 10] |
| **page** | **int**| Número da página. | [optional] [default to 1] |
| **id** | **string**| ID da transação. | [optional] |
| **status** | **string**| Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | [optional] |
| **type** | **string**| Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **string**| Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | [optional] |
| **amount** | **float**| Filtro por valor. Mínimo 0.01. | [optional] |
| **document** | **string**| CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [optional] |
| **name** | **string**| Filtro por nome. | [optional] |
| **end_to_end_id** | **string**| ID end-to-end do Pix. | [optional] |
| **sort_by** | **string**| Campo pelo qual ordenar | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Direção da ordenação | [optional] [default to &#39;desc&#39;] |
| **client_reference** | **string**| Filtra por referência externa | [optional] |
| **virtual_account** | **string**| Subconta usada na criação. | [optional] |
| **has_qr_code** | **bool**| Só transações com (true) ou sem (false) QR Code. | [optional] |

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

Listar jobs de relatório

Lista os jobs de relatório criados pelo usuário autenticado.

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
$page = 1; // int | Número da página.
$limit = 10; // int | Itens por página.
$status = COMPLETED,FAILED; // string | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED.
$created_at_from = 2026-08-01; // \DateTime | Filtro: criado a partir de.
$created_at_to = 2026-08-31; // \DateTime | Filtro: criado até.
$updated_at_from = 2026-08-01; // \DateTime | Filtro: atualizado a partir de.
$updated_at_to = 2026-08-31; // \DateTime | Filtro: atualizado até.
$sort_by = 'createdAt'; // string | Campo de ordenação.
$sort_direction = 'desc'; // string | Direção da ordenação.

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
| **page** | **int**| Número da página. | [optional] [default to 1] |
| **limit** | **int**| Itens por página. | [optional] [default to 10] |
| **status** | **string**| Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **created_at_from** | **\DateTime**| Filtro: criado a partir de. | [optional] |
| **created_at_to** | **\DateTime**| Filtro: criado até. | [optional] |
| **updated_at_from** | **\DateTime**| Filtro: atualizado a partir de. | [optional] |
| **updated_at_to** | **\DateTime**| Filtro: atualizado até. | [optional] |
| **sort_by** | **string**| Campo de ordenação. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Direção da ordenação. | [optional] [default to &#39;desc&#39;] |

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

Gerar relatório de transações

Enfileira um job assíncrono que gera um relatório CSV das transações para o período e filtros informados.

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
