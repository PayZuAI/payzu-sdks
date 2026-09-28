# PayZu\Pix\InternalTransferApi



All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInternalTransfer()**](InternalTransferApi.md#getInternalTransfer) | **GET** /internal-transfer | Get internal transfer |
| [**postInternalTransfer()**](InternalTransferApi.md#postInternalTransfer) | **POST** /internal-transfer | Create internal transfer |


## `getInternalTransfer()`

```php
getInternalTransfer($id, $client_reference, $virtual_account): \PayZu\Pix\Model\Transaction
```

Get internal transfer

Returns the details of an internal transfer. Provide at least one of `id` or `clientReference` (`virtualAccount` is also accepted). If more than one is provided, all are applied as filters (AND).  Token permission: `WITHDRAW`.

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
$id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID
$client_reference = order_12345; // string | External reference
$virtual_account = loja-centro-01; // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.

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
| **id** | **string**| Transaction ID | [optional] |
| **client_reference** | **string**| External reference | [optional] |
| **virtual_account** | **string**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

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

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.  Token permission: `WITHDRAW`.

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
