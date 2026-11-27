# PayZu\Pix\AccountApi

Perfil da conta, saldo

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getUser()**](AccountApi.md#getUser) | **GET** /user | Informações da conta |
| [**getUserBalance()**](AccountApi.md#getUserBalance) | **GET** /user/balance | Saldo da conta |
| [**getUserPixKeys()**](AccountApi.md#getUserPixKeys) | **GET** /user/pix-keys | Chave Pix de recebimento da conta |


## `getUser()`

```php
getUser(): \PayZu\Pix\Model\GetUser200Response
```

Informações da conta

Perfil da conta, limites e regras de tarifas.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\AccountApi(
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

### Parameters

This endpoint does not need any parameter.

### Return type

[**\PayZu\Pix\Model\GetUser200Response**](../Model/GetUser200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserBalance()`

```php
getUserBalance(): \PayZu\Pix\Model\GetUserBalance200Response
```

Saldo da conta

Saldos disponíveis e bloqueados.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\AccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getUserBalance();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->getUserBalance: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\PayZu\Pix\Model\GetUserBalance200Response**](../Model/GetUserBalance200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserPixKeys()`

```php
getUserPixKeys(): \PayZu\Pix\Model\GetUserPixKeys200Response
```

Chave Pix de recebimento da conta

Devolve a chave Pix de recebimento da conta, com o titular e a instituição da conta dessa chave.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\AccountApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getUserPixKeys();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AccountApi->getUserPixKeys: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\PayZu\Pix\Model\GetUserPixKeys200Response**](../Model/GetUserPixKeys200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
