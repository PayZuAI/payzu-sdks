# OpenAPI\Client\PixOperationsApi



All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPix()**](PixOperationsApi.md#getPix) | **GET** /pix | Retrieve Charge |
| [**getPixQrcode()**](PixOperationsApi.md#getPixQrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**getProof()**](PixOperationsApi.md#getProof) | **GET** /proof/{id} | Get Transaction Receipt |
| [**postPix()**](PixOperationsApi.md#postPix) | **POST** /pix | Create Charge (Pix deposit) |


## `getPix()`

```php
getPix($id, $client_reference, $end_to_end_id, $virtual_account): \OpenAPI\Client\Model\Transaction
```

Retrieve Charge

Get the latest status and details for a Pix **deposit (charge)**. Provide at least one of `id`, `clientReference`, or `endToEndId` (`virtualAccount` is also accepted). When more than one parameter is provided, they are combined as filters (AND).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20250817215911F49RDOBJ; // string | Transaction ID.
$client_reference = 'client_reference_example'; // string | External reference provided when creating the charge.
$end_to_end_id = 'end_to_end_id_example'; // string | Pix end-to-end ID.
$virtual_account = 'virtual_account_example'; // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.

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

[**\OpenAPI\Client\Model\Transaction**](../Model/Transaction.md)

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

Render the Pix QR Code of a deposit as a binary PNG image

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$transaction_id = 'transaction_id_example'; // string

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
| **transaction_id** | **string**|  | |

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
getProof($id, $type): \OpenAPI\Client\Model\ProofResponse
```

Get Transaction Receipt

Returns the transaction receipt as JSON with a `base64` field (encoded PDF). Decode it to display or save as `.pdf`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU2025081418333632CYKN8M; // string | Transaction ID.
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

[**\OpenAPI\Client\Model\ProofResponse**](../Model/ProofResponse.md)

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
postPix($post_pix_request): \OpenAPI\Client\Model\Transaction
```

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\PixOperationsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_pix_request = new \OpenAPI\Client\Model\PostPixRequest(); // \OpenAPI\Client\Model\PostPixRequest

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
| **post_pix_request** | [**\OpenAPI\Client\Model\PostPixRequest**](../Model/PostPixRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Transaction**](../Model/Transaction.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
