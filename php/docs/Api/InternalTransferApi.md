# PayZu\Pix\InternalTransferApi



All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInternalTransfer()**](InternalTransferApi.md#getInternalTransfer) | **GET** /internal-transfer | Obter transferência interna |
| [**postInternalTransfer()**](InternalTransferApi.md#postInternalTransfer) | **POST** /internal-transfer | Criar transferência interna |


## `getInternalTransfer()`

```php
getInternalTransfer($id, $client_reference, $virtual_account): \PayZu\Pix\Model\Transaction
```

Obter transferência interna

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: `id` ou `clientReference` (também aceita `virtualAccount`). Se informar mais de um, todos são aplicados como filtro (AND).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InternalTransferApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação
$client_reference = order_12345; // string | Referência externa
$virtual_account = loja-centro-01; // string | Subconta usada na criação.

try {
    $result = $apiInstance->getInternalTransfer($id, $client_reference, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InternalTransferApi->getInternalTransfer: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da transação | [optional] |
| **client_reference** | **string**| Referência externa | [optional] |
| **virtual_account** | **string**| Subconta usada na criação. | [optional] |

### Return type

[**\PayZu\Pix\Model\Transaction**](../Model/Transaction.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postInternalTransfer()`

```php
postInternalTransfer($post_internal_transfer_request): \PayZu\Pix\Model\Transaction
```

Criar transferência interna

Envia fundos para outra conta PayZu usando seu accountNumber de 6 dígitos. Liquida instantaneamente dentro da PayZu.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InternalTransferApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_internal_transfer_request = new \PayZu\Pix\Model\PostInternalTransferRequest(); // \PayZu\Pix\Model\PostInternalTransferRequest

try {
    $result = $apiInstance->postInternalTransfer($post_internal_transfer_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InternalTransferApi->postInternalTransfer: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_internal_transfer_request** | [**\PayZu\Pix\Model\PostInternalTransferRequest**](../Model/PostInternalTransferRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\Transaction**](../Model/Transaction.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
