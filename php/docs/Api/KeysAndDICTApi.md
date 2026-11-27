# PayZu\Pix\KeysAndDICTApi



All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getPixKey()**](KeysAndDICTApi.md#getPixKey) | **GET** /pix/key | Consulta de chave Pix no DICT |
| [**postPixQrcodeRead()**](KeysAndDICTApi.md#postPixQrcodeRead) | **POST** /pix/qrcode/read | Ler QR Code |


## `getPixKey()`

```php
getPixKey($pix_key): \PayZu\Pix\Model\PixKeyInfo
```

Consulta de chave Pix no DICT

Consulta o DICT (Diretório de Identificadores de Contas Transacionais) para obter informações sobre uma chave Pix antes de enviar um pagamento. Retorna os dados do titular da chave e a instituição financeira associada.

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
$pix_key = example@payzu.com.br; // string | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).

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
| **pix_key** | **string**| A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). | |

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

## `postPixQrcodeRead()`

```php
postPixQrcodeRead($post_pix_qrcode_read_request): \PayZu\Pix\Model\QRCodeReadResponse
```

Ler QR Code

Decodifica e extrai informações de um QR Code Pix (formato EMV) antes de efetuar um pagamento. Retorna os dados interpretados, incluindo detalhes do recebedor, valor (se presente) e outros metadados do QR Code. PayZu processa QR Code dinâmico e estático.

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
