# PayZu\Pix\RefundsApi

Refund received Pix charges, full or partial

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**postRefund()**](RefundsApi.md#postRefund) | **POST** /refund/{transactionId} | Refund a Pix |


## `postRefund()`

```php
postRefund($transaction_id, $refund_request): \PayZu\Pix\Model\TransactionWithRefunds
```

Refund a Pix

Refund a received Pix charge. Provide `amount` for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with `refundStatus: PENDING`; completion is confirmed later by webhook.  Send `{}` to refund the full amount.  Token permission: `WITHDRAW`.

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
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID of the transaction to refund.
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
| **transaction_id** | **string**| ID of the transaction to refund. | |
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
