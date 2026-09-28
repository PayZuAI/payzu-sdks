# PayZu\Pix\WithdrawalsApi

Send money via Pix (cash out) by Pix key or QR Code

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getWithdraw()**](WithdrawalsApi.md#getWithdraw) | **GET** /withdraw | Retrieve Withdrawal |
| [**getWithdrawProof()**](WithdrawalsApi.md#getWithdrawProof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**postWithdraw()**](WithdrawalsApi.md#postWithdraw) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**postWithdrawQrcode()**](WithdrawalsApi.md#postWithdrawQrcode) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |


## `getWithdraw()`

```php
getWithdraw($id, $client_reference, $end_to_end_id, $virtual_account): \PayZu\Pix\Model\Transaction
```

Retrieve Withdrawal

Get the latest status and details of a transaction of the account. Provide at least one of `id`, `clientReference`, or `endToEndId`. If more than one is provided, all are applied as filters (AND), which may return no record if they do not point to the same transaction.  Token permission: `WITHDRAW`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20260817B3PL8SG5WQ000000; // string | Transaction ID.
$client_reference = order_12345; // string | External reference provided when creating the withdrawal.
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | Pix end-to-end ID.
$virtual_account = loja-centro-01; // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.

try {
    $result = $apiInstance->getWithdraw($id, $client_reference, $end_to_end_id, $virtual_account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->getWithdraw: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Transaction ID. | [optional] |
| **client_reference** | **string**| External reference provided when creating the withdrawal. | [optional] |
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

## `getWithdrawProof()`

```php
getWithdrawProof($id, $type): \PayZu\Pix\Model\ProofResponse
```

Get Withdrawal Receipt

Returns the transaction receipt. By default (`type=pdf`) the response is the PDF file; with `type=base64` it is JSON with the `base64` field, the PDF as a data URI.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = PAYZU20260817B3PL8SG5WQ000000; // string | Transaction ID.
$type = pdf; // string | Return format.

try {
    $result = $apiInstance->getWithdrawProof($id, $type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->getWithdrawProof: ', $e->getMessage(), PHP_EOL;
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

## `postWithdraw()`

```php
postWithdraw($post_withdraw_request): \PayZu\Pix\Model\Transaction
```

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.  Token permission: `WITHDRAW`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_withdraw_request = new \PayZu\Pix\Model\PostWithdrawRequest(); // \PayZu\Pix\Model\PostWithdrawRequest

try {
    $result = $apiInstance->postWithdraw($post_withdraw_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->postWithdraw: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_withdraw_request** | [**\PayZu\Pix\Model\PostWithdrawRequest**](../Model/PostWithdrawRequest.md)|  | |

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

## `postWithdrawQrcode()`

```php
postWithdrawQrcode($post_withdraw_qrcode_request): \PayZu\Pix\Model\Transaction
```

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If `amount` is not provided, the QR Code's embedded value will be used. PayZu processes both dynamic and static QR Codes.  Token permission: `WITHDRAW`.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WithdrawalsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$post_withdraw_qrcode_request = new \PayZu\Pix\Model\PostWithdrawQrcodeRequest(); // \PayZu\Pix\Model\PostWithdrawQrcodeRequest

try {
    $result = $apiInstance->postWithdrawQrcode($post_withdraw_qrcode_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WithdrawalsApi->postWithdrawQrcode: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **post_withdraw_qrcode_request** | [**\PayZu\Pix\Model\PostWithdrawQrcodeRequest**](../Model/PostWithdrawQrcodeRequest.md)|  | |

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
