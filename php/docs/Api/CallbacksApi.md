# PayZu\Pix\CallbacksApi

Webhook callback inspection and re-trigger

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createUserCallbackSecret()**](CallbacksApi.md#createUserCallbackSecret) | **POST** /user/callbacks/secret | Create callback secret |
| [**getUserCallbackById()**](CallbacksApi.md#getUserCallbackById) | **GET** /user/callbacks/{id} | Get Callback |
| [**getUserCallbacks()**](CallbacksApi.md#getUserCallbacks) | **GET** /user/callbacks | List Callbacks |
| [**resendUserCallbackSingle()**](CallbacksApi.md#resendUserCallbackSingle) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single) |
| [**resendUserCallbacks()**](CallbacksApi.md#resendUserCallbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk) |
| [**resendUserCallbacksWebhook()**](CallbacksApi.md#resendUserCallbacksWebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook |
| [**resendUserCallbacksWebhooks()**](CallbacksApi.md#resendUserCallbacksWebhooks) | **POST** /user/callbacks/resend/webhook | Resend webhook callbacks by filters |
| [**rotateUserCallbackSecret()**](CallbacksApi.md#rotateUserCallbackSecret) | **PATCH** /user/callbacks/secret/rotate | Rotate callback secret |


## `createUserCallbackSecret()`

```php
createUserCallbackSecret(): \PayZu\Pix\Model\CallbackSecretResponse
```

Create callback secret

Creates the account callback secret, used to sign deliveries sent to the transaction callbackUrl. The secret is returned once and cannot be read again.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->createUserCallbackSecret();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->createUserCallbackSecret: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\PayZu\Pix\Model\CallbackSecretResponse**](../Model/CallbackSecretResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserCallbackById()`

```php
getUserCallbackById($id): \PayZu\Pix\Model\CallbackDetail
```

Get Callback

Returns the details of a specific callback log.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7l9v20001q8f2u6c1y4be; // string | Unique callback ID

try {
    $result = $apiInstance->getUserCallbackById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->getUserCallbackById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Unique callback ID | |

### Return type

[**\PayZu\Pix\Model\CallbackDetail**](../Model/CallbackDetail.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserCallbacks()`

```php
getUserCallbacks($page, $limit, $sort_by, $sort_direction, $id, $url, $status, $transaction_id, $has_error, $created_at_from, $created_at_to, $webhook_id, $event_type): \PayZu\Pix\Model\CallbackListResponse
```

List Callbacks

Returns a paginated list of webhook callback logs for the user's transactions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int | Page number.
$limit = 10; // int | Items per page.
$sort_by = 'createdAt'; // string | Sort field.
$sort_direction = 'desc'; // string | Sort direction.
$id = cm3w7l9v20001q8f2u6c1y4be; // string | Filter by callback ID
$url = https://webhook.cool/; // string | Filter by callback URL
$status = 200; // int | HTTP status code
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.
$has_error = true; // bool | Filter callbacks that errored
$created_at_from = 2026-08-01; // \DateTime | Start of the creation date range.
$created_at_to = 2026-08-31; // \DateTime | End of the creation date range.
$webhook_id = 'webhook_id_example'; // string | Webhook id.
$event_type = new \PayZu\Pix\Model\\PayZu\Pix\Model\WebhookEventType(); // \PayZu\Pix\Model\WebhookEventType | Webhook event type.

try {
    $result = $apiInstance->getUserCallbacks($page, $limit, $sort_by, $sort_direction, $id, $url, $status, $transaction_id, $has_error, $created_at_from, $created_at_to, $webhook_id, $event_type);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->getUserCallbacks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Page number. | [optional] [default to 1] |
| **limit** | **int**| Items per page. | [optional] [default to 10] |
| **sort_by** | **string**| Sort field. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction. | [optional] [default to &#39;desc&#39;] |
| **id** | **string**| Filter by callback ID | [optional] |
| **url** | **string**| Filter by callback URL | [optional] |
| **status** | **int**| HTTP status code | [optional] |
| **transaction_id** | **string**| Transaction ID. | [optional] |
| **has_error** | **bool**| Filter callbacks that errored | [optional] |
| **created_at_from** | **\DateTime**| Start of the creation date range. | [optional] |
| **created_at_to** | **\DateTime**| End of the creation date range. | [optional] |
| **webhook_id** | **string**| Webhook id. | [optional] |
| **event_type** | [**\PayZu\Pix\Model\WebhookEventType**](../Model/.md)| Webhook event type. | [optional] |

### Return type

[**\PayZu\Pix\Model\CallbackListResponse**](../Model/CallbackListResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resendUserCallbackSingle()`

```php
resendUserCallbackSingle($transaction_id): \PayZu\Pix\Model\ResendUserCallbackSingle200Response
```

Re-send callback (single)

Resend the callback of a single transaction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.

try {
    $result = $apiInstance->resendUserCallbackSingle($transaction_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->resendUserCallbackSingle: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **transaction_id** | **string**| Transaction ID. | |

### Return type

[**\PayZu\Pix\Model\ResendUserCallbackSingle200Response**](../Model/ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resendUserCallbacks()`

```php
resendUserCallbacks($resend_user_callbacks_request): \PayZu\Pix\Model\ResendUserCallbacks200Response
```

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$resend_user_callbacks_request = {"createdAtFrom":"2026-05-05T00:00:00Z","createdAtTo":"2026-05-06T00:00:00Z"}; // \PayZu\Pix\Model\ResendUserCallbacksRequest

try {
    $result = $apiInstance->resendUserCallbacks($resend_user_callbacks_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->resendUserCallbacks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resend_user_callbacks_request** | [**\PayZu\Pix\Model\ResendUserCallbacksRequest**](../Model/ResendUserCallbacksRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\ResendUserCallbacks200Response**](../Model/ResendUserCallbacks200Response.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resendUserCallbacksWebhook()`

```php
resendUserCallbacksWebhook($webhook_id): \PayZu\Pix\Model\EnqueuedCallback
```

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_id = cm3w7k1t40000q8f2r5b9x3ad; // string | Webhook id.

try {
    $result = $apiInstance->resendUserCallbacksWebhook($webhook_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->resendUserCallbacksWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhook_id** | **string**| Webhook id. | |

### Return type

[**\PayZu\Pix\Model\EnqueuedCallback**](../Model/EnqueuedCallback.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resendUserCallbacksWebhooks()`

```php
resendUserCallbacksWebhooks($resend_webhook_callbacks_request): \PayZu\Pix\Model\EnqueuedCallback
```

Resend webhook callbacks by filters

Queues the resend of failed webhook deliveries in a period. For each webhook, transaction and event, only the last delivery attempt in the period counts, and it is resent only when it failed. The filters apply to the transactions of those deliveries.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$resend_webhook_callbacks_request = new \PayZu\Pix\Model\ResendWebhookCallbacksRequest(); // \PayZu\Pix\Model\ResendWebhookCallbacksRequest

try {
    $result = $apiInstance->resendUserCallbacksWebhooks($resend_webhook_callbacks_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->resendUserCallbacksWebhooks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **resend_webhook_callbacks_request** | [**\PayZu\Pix\Model\ResendWebhookCallbacksRequest**](../Model/ResendWebhookCallbacksRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\EnqueuedCallback**](../Model/EnqueuedCallback.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `rotateUserCallbackSecret()`

```php
rotateUserCallbackSecret(): \PayZu\Pix\Model\RotateCallbackSecretResponse
```

Rotate callback secret

Replaces the account callback secret. Deliveries start being signed with the new secret right away.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->rotateUserCallbackSecret();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->rotateUserCallbackSecret: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\PayZu\Pix\Model\RotateCallbackSecretResponse**](../Model/RotateCallbackSecretResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
