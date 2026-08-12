# OpenAPI\Client\CallbacksApi

Webhook callback inspection and re-trigger

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getUserCallbackById()**](CallbacksApi.md#getUserCallbackById) | **GET** /user/callbacks/{id} | Get Callback |
| [**getUserCallbacks()**](CallbacksApi.md#getUserCallbacks) | **GET** /user/callbacks | List Callbacks |
| [**resendUserCallbackSingle()**](CallbacksApi.md#resendUserCallbackSingle) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single) |
| [**resendUserCallbacks()**](CallbacksApi.md#resendUserCallbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk) |
| [**resendUserCallbacksWebhook()**](CallbacksApi.md#resendUserCallbacksWebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook |


## `getUserCallbackById()`

```php
getUserCallbackById($id): \OpenAPI\Client\Model\CallbackDetail
```

Get Callback

Returns the details of a specific callback log.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Unique callback ID

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

[**\OpenAPI\Client\Model\CallbackDetail**](../Model/CallbackDetail.md)

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
getUserCallbacks($page, $limit, $sort_by, $sort_direction, $id, $url, $status, $transaction_id, $has_error, $created_at_from, $created_at_to): \OpenAPI\Client\Model\CallbackListResponse
```

List Callbacks

Returns a paginated list of webhook callback logs for the user's transactions.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int
$limit = 10; // int
$sort_by = 'createdAt'; // string
$sort_direction = 'desc'; // string
$id = 'id_example'; // string | Filter by callback ID
$url = 'url_example'; // string | Filter by callback URL
$status = 56; // int | HTTP status code
$transaction_id = 'transaction_id_example'; // string
$has_error = True; // bool | Filter callbacks that errored
$created_at_from = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime
$created_at_to = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime

try {
    $result = $apiInstance->getUserCallbacks($page, $limit, $sort_by, $sort_direction, $id, $url, $status, $transaction_id, $has_error, $created_at_from, $created_at_to);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CallbacksApi->getUserCallbacks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**|  | [optional] [default to 1] |
| **limit** | **int**|  | [optional] [default to 10] |
| **sort_by** | **string**|  | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**|  | [optional] [default to &#39;desc&#39;] |
| **id** | **string**| Filter by callback ID | [optional] |
| **url** | **string**| Filter by callback URL | [optional] |
| **status** | **int**| HTTP status code | [optional] |
| **transaction_id** | **string**|  | [optional] |
| **has_error** | **bool**| Filter callbacks that errored | [optional] |
| **created_at_from** | **\DateTime**|  | [optional] |
| **created_at_to** | **\DateTime**|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\CallbackListResponse**](../Model/CallbackListResponse.md)

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
resendUserCallbackSingle($transaction_id): \OpenAPI\Client\Model\ResendUserCallbackSingle200Response
```

Re-send callback (single)

Resend the callback of a single transaction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$transaction_id = 'transaction_id_example'; // string

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
| **transaction_id** | **string**|  | |

### Return type

[**\OpenAPI\Client\Model\ResendUserCallbackSingle200Response**](../Model/ResendUserCallbackSingle200Response.md)

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
resendUserCallbacks($resend_user_callbacks_request): \OpenAPI\Client\Model\ResendUserCallbacks200Response
```

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$resend_user_callbacks_request = {"createdAtFrom":"2026-05-05T00:00:00Z","createdAtTo":"2026-05-06T00:00:00Z"}; // \OpenAPI\Client\Model\ResendUserCallbacksRequest

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
| **resend_user_callbacks_request** | [**\OpenAPI\Client\Model\ResendUserCallbacksRequest**](../Model/ResendUserCallbacksRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ResendUserCallbacks200Response**](../Model/ResendUserCallbacks200Response.md)

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
resendUserCallbacksWebhook($webhook_id): \OpenAPI\Client\Model\CallbackResendResponse
```

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\CallbacksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_id = 'webhook_id_example'; // string | Webhook id.

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

[**\OpenAPI\Client\Model\CallbackResendResponse**](../Model/CallbackResendResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
