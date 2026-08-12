# OpenAPI\Client\RefundsApi

Refund received Pix charges, full or partial

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**postRefund()**](RefundsApi.md#postRefund) | **POST** /refund/{transactionId} | Refund a Pix |


## `postRefund()`

```php
postRefund($transaction_id, $refund_request): \OpenAPI\Client\Model\Transaction
```

Refund a Pix

Refund a received Pix charge. Provide `amount` for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with `refundStatus: PENDING`; completion is confirmed later by webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\RefundsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$transaction_id = 'transaction_id_example'; // string | ID of the transaction to refund.
$refund_request = new \OpenAPI\Client\Model\RefundRequest(); // \OpenAPI\Client\Model\RefundRequest

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
| **refund_request** | [**\OpenAPI\Client\Model\RefundRequest**](../Model/RefundRequest.md)|  | [optional] |

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
