# PayZu\Pix\PixOperationsApi



All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPix()**](PixOperationsApi.md#getPix) | **GET** /pix | Retrieve Charge |
| [**getPixQrcode()**](PixOperationsApi.md#getPixQrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**getProof()**](PixOperationsApi.md#getProof) | **GET** /proof/{id} | Get Transaction Receipt |
| [**postPix()**](PixOperationsApi.md#postPix) | **POST** /pix | Create Charge (Pix deposit) |


## `getPix()`

```php
getPix($id, $client_reference, $end_to_end_id, $virtual_account): \PayZu\Pix\Model\Transaction
```

Retrieve Charge

Get the latest status and details of a transaction of the account. Provide at least one of `id`, `clientReference`, or `endToEndId` (`virtualAccount` is also accepted). When more than one parameter is provided, they are combined as filters (AND).  Token permission: `DEPOSIT`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20260811R4TZ8WD1NC000000; // string | Transaction ID.
$client_reference = order_12345; // string | External reference provided when creating the charge.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | Pix end-to-end ID.
$virtual_account = loja-centro-01; // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.

try {
    $result = $apiInstance->getPix($id, $client_reference, $end_to_end_id, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->getPix: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Transaction ID. | [optional] |
| **client_reference** | **string**| External reference provided when creating the charge. | [optional] |
| **end_to_end_id** | **string**| Pix end-to-end ID. | [optional] |
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

## `getPixQrcode()`

```php
getPixQrcode($transaction_id): \SplFileObject
```

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image  Token permission: `DEPOSIT`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.

try {
    $result = $apiInstance->getPixQrcode($transaction_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->getPixQrcode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **transaction_id** | **string**| Transaction ID. | |

### Return type

**\SplFileObject**

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getProof()`

```php
getProof($id, $type): \PayZu\Pix\Model\ProofResponse
```

Get Transaction Receipt

Returns the transaction receipt. By default (`type=pdf`) the response is the PDF file; with `type=base64` it is JSON with the `base64` field, the PDF as a data URI.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.
$type = pdf; // string | Return format.

try {
    $result = $apiInstance->getProof($id, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->getProof: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Transaction ID. | |
| **type** | **string**| Return format. | [optional] [default to &#39;pdf&#39;] |

### Return type

[**\PayZu\Pix\Model\ProofResponse**](../Model/ProofResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/pdf`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postPix()`

```php
postPix($post_pix_request): \PayZu\Pix\Model\Transaction
```

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.  Token permission: `DEPOSIT`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_pix_request = new \PayZu\Pix\Model\PostPixRequest(); // \PayZu\Pix\Model\PostPixRequest

try {
    $result = $apiInstance->postPix($post_pix_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PixOperationsApi->postPix: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_pix_request** | [**\PayZu\Pix\Model\PostPixRequest**](../Model/PostPixRequest.md)|  | |

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
