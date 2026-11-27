# PayZu\Pix\RefundsApi

Devolução de Pix recebidos, total ou parcial

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**postRefund()**](RefundsApi.md#postRefund) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido |


## `postRefund()`

```php
postRefund($transaction_id, $refund_request): \PayZu\Pix\Model\TransactionWithRefunds
```

Solicitar a devolução de um Pix recebido

Devolve um Pix recebido. Informe `amount` para uma devolução parcial, ou omita para devolver o valor total. O processamento é **assíncrono**: a resposta volta com `refundStatus: PENDING`; a conclusão é confirmada depois pelo callback.  Envie `{}` para devolver o valor total. O corpo só aceita `amount`, `description` e `clientReference`; outro campo é recusado com 400.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação a devolver.
$refund_request = new \PayZu\Pix\Model\RefundRequest(); // \PayZu\Pix\Model\RefundRequest

try {
    $result = $apiInstance->postRefund($transaction_id, $refund_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RefundsApi->postRefund: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **transaction_id** | **string**| ID da transação a devolver. | |
| **refund_request** | [**\PayZu\Pix\Model\RefundRequest**](../Model/RefundRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\TransactionWithRefunds**](../Model/TransactionWithRefunds.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
