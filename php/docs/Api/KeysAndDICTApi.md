# PayZu\Pix\KeysAndDICTApi



All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPixKey()**](KeysAndDICTApi.md#getPixKey) | **GET** /pix/key | Pix key lookup (DICT) |
| [**getUserDict()**](KeysAndDICTApi.md#getUserDict) | **GET** /user/dict | Resolve DICT key |
| [**postPixQrcodeRead()**](KeysAndDICTApi.md#postPixQrcodeRead) | **POST** /pix/qrcode/read | Read QR Code |


## `getPixKey()`

```php
getPixKey($pix_key): \PayZu\Pix\Model\PixKeyInfo
```

Pix key lookup (DICT)

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner's details and associated financial institution.  Token permission: `DEPOSIT` or `WITHDRAW`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\KeysAndDICTApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$pix_key = example@payzu.com.br; // string | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).

try {
    $result = $apiInstance->getPixKey($pix_key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling KeysAndDICTApi->getPixKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **pix_key** | **string**| The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | |

### Return type

[**\PayZu\Pix\Model\PixKeyInfo**](../Model/PixKeyInfo.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserDict()`

```php
getUserDict($key): \PayZu\Pix\Model\DictConsultResponse
```

Resolve DICT key

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\KeysAndDICTApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$key = john.doe@example.com; // string | Pix key to look up (CPF, CNPJ, email, phone or EVP).

try {
    $result = $apiInstance->getUserDict($key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling KeysAndDICTApi->getUserDict: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **key** | **string**| Pix key to look up (CPF, CNPJ, email, phone or EVP). | |

### Return type

[**\PayZu\Pix\Model\DictConsultResponse**](../Model/DictConsultResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postPixQrcodeRead()`

```php
postPixQrcodeRead($post_pix_qrcode_read_request): \PayZu\Pix\Model\QRCodeReadResponse
```

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.  Token permission: `DEPOSIT` or `WITHDRAW`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\KeysAndDICTApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_pix_qrcode_read_request = new \PayZu\Pix\Model\PostPixQrcodeReadRequest(); // \PayZu\Pix\Model\PostPixQrcodeReadRequest

try {
    $result = $apiInstance->postPixQrcodeRead($post_pix_qrcode_read_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling KeysAndDICTApi->postPixQrcodeRead: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_pix_qrcode_read_request** | [**\PayZu\Pix\Model\PostPixQrcodeReadRequest**](../Model/PostPixQrcodeReadRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\QRCodeReadResponse**](../Model/QRCodeReadResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
