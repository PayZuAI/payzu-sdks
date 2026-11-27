# PayZu\Pix\AllowlistApi

CNPJs e chaves Pix autorizados na conta.

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getUserWhitelistCnpj()**](AllowlistApi.md#getUserWhitelistCnpj) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados |
| [**getUserWhitelistPixKey()**](AllowlistApi.md#getUserWhitelistPixKey) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas |


## `getUserWhitelistCnpj()`

```php
getUserWhitelistCnpj($from, $to, $active, $cursor, $limit): \PayZu\Pix\Model\GetUserWhitelistCnpj200Response
```

Listar CNPJs autorizados

Lista os CNPJs autorizados na lista de permissão da conta.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\AllowlistApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$from = 2026-08-01T00:00:00Z; // \DateTime
$to = 2026-08-08T23:59:59Z; // \DateTime
$active = true; // bool
$cursor = cmf0w1t3l0001qk08cnpj0001; // string
$limit = 20; // int

try {
    $result = $apiInstance->getUserWhitelistCnpj($from, $to, $active, $cursor, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AllowlistApi->getUserWhitelistCnpj: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **from** | **\DateTime**|  | [optional] |
| **to** | **\DateTime**|  | [optional] |
| **active** | **bool**|  | [optional] |
| **cursor** | **string**|  | [optional] |
| **limit** | **int**|  | [optional] [default to 20] |

### Return type

[**\PayZu\Pix\Model\GetUserWhitelistCnpj200Response**](../Model/GetUserWhitelistCnpj200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserWhitelistPixKey()`

```php
getUserWhitelistPixKey($from, $to, $active, $cursor, $limit): \PayZu\Pix\Model\GetUserWhitelistPixKey200Response
```

Listar chaves Pix autorizadas

Lista as chaves Pix autorizadas na lista de permissão da conta.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\AllowlistApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$from = 2026-08-01T00:00:00Z; // \DateTime
$to = 2026-08-08T23:59:59Z; // \DateTime
$active = true; // bool
$cursor = cmf0w1t3l0001qk08pixk0001; // string
$limit = 20; // int

try {
    $result = $apiInstance->getUserWhitelistPixKey($from, $to, $active, $cursor, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AllowlistApi->getUserWhitelistPixKey: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **from** | **\DateTime**|  | [optional] |
| **to** | **\DateTime**|  | [optional] |
| **active** | **bool**|  | [optional] |
| **cursor** | **string**|  | [optional] |
| **limit** | **int**|  | [optional] [default to 20] |

### Return type

[**\PayZu\Pix\Model\GetUserWhitelistPixKey200Response**](../Model/GetUserWhitelistPixKey200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
