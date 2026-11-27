# PayZu\Pix\PixOperationsApi



All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPix()**](PixOperationsApi.md#getPix) | **GET** /pix | Recuperar Cobrança |
| [**getPixQrcode()**](PixOperationsApi.md#getPixQrcode) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG) |
| [**getProof()**](PixOperationsApi.md#getProof) | **GET** /proof/{id} | Obter comprovante da transação |
| [**postPix()**](PixOperationsApi.md#postPix) | **POST** /pix | Criar Cobrança (depósito Pix) |


## `getPix()`

```php
getPix($id, $client_reference, $end_to_end_id, $virtual_account): \PayZu\Pix\Model\Transaction
```

Recuperar Cobrança

Obtém o status e os detalhes mais recentes de uma transação da conta. Informe pelo menos um dentre `id`, `clientReference` ou `endToEndId` (`virtualAccount` também é aceito). Ao informar mais de um parâmetro, todos são combinados como filtros (AND).

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
$id = PAYZU20260811R4TZ8WD1NC000000; // string | ID da transação.
$client_reference = order_12345; // string | Referência externa fornecida na criação da cobrança.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | ID end-to-end do Pix.
$virtual_account = loja-centro-01; // string | Subconta usada na criação.

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
| **id** | **string**| ID da transação. | [optional] |
| **client_reference** | **string**| Referência externa fornecida na criação da cobrança. | [optional] |
| **end_to_end_id** | **string**| ID end-to-end do Pix. | [optional] |
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

## `getPixQrcode()`

```php
getPixQrcode($transaction_id): \SplFileObject
```

Renderiza o QR Code Pix (PNG)

Renderiza o QR Code Pix de um depósito como uma imagem PNG binária

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
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.

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
| **transaction_id** | **string**| ID da transação. | |

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

Obter comprovante da transação

Retorna o comprovante da transação. Por padrão (`type=pdf`) a resposta é o arquivo PDF; com `type=base64` é um JSON com o campo `base64`, o PDF como data URI.

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
$id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.
$type = pdf; // string | Formato de retorno.

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
| **id** | **string**| ID da transação. | |
| **type** | **string**| Formato de retorno. | [optional] [default to &#39;pdf&#39;] |

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

Criar Cobrança (depósito Pix)

Crie um novo **depósito** Pix (cobrança). Retorna o QR Code e os detalhes da transação.

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
