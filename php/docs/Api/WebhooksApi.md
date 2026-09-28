# PayZu\Pix\WebhooksApi

Register and manage webhook endpoints that receive transaction notifications

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteUserWebhook()**](WebhooksApi.md#deleteUserWebhook) | **DELETE** /user/webhooks/{id} | Delete webhook |
| [**getUserWebhook()**](WebhooksApi.md#getUserWebhook) | **GET** /user/webhooks/{id} | Get webhook |
| [**getUserWebhookSentDetail()**](WebhooksApi.md#getUserWebhookSentDetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail |
| [**getUserWebhooks()**](WebhooksApi.md#getUserWebhooks) | **GET** /user/webhooks | List webhooks |
| [**getUserWebhooksSentQuantity()**](WebhooksApi.md#getUserWebhooksSentQuantity) | **GET** /user/webhooks/sent/quantity | Count sent callbacks |
| [**patchUserWebhook()**](WebhooksApi.md#patchUserWebhook) | **PATCH** /user/webhooks/{id} | Update webhook |
| [**postUserWebhook()**](WebhooksApi.md#postUserWebhook) | **POST** /user/webhooks | Create webhook |
| [**postUserWebhookRotateSecret()**](WebhooksApi.md#postUserWebhookRotateSecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret |


## `deleteUserWebhook()`

```php
deleteUserWebhook($id)
```

Delete webhook

Removes a webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Webhook id.

try {
    $apiInstance->deleteUserWebhook($id);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->deleteUserWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Webhook id. | |

### Return type

void (empty response body)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserWebhook()`

```php
getUserWebhook($id): \PayZu\Pix\Model\Webhook
```

Get webhook

Returns a single webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Webhook id.

try {
    $result = $apiInstance->getUserWebhook($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->getUserWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Webhook id. | |

### Return type

[**\PayZu\Pix\Model\Webhook**](../Model/Webhook.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserWebhookSentDetail()`

```php
getUserWebhookSentDetail($id, $callback_id): \PayZu\Pix\Model\SentWebhookDetailResponse
```

Get sent callback detail

Returns the delivery detail of a single sent callback.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Webhook id.
$callback_id = cm3w7l9v20001q8f2u6c1y4be; // string | Callback log id.

try {
    $result = $apiInstance->getUserWebhookSentDetail($id, $callback_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->getUserWebhookSentDetail: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Webhook id. | |
| **callback_id** | **string**| Callback log id. | |

### Return type

[**\PayZu\Pix\Model\SentWebhookDetailResponse**](../Model/SentWebhookDetailResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserWebhooks()`

```php
getUserWebhooks($active): \PayZu\Pix\Model\WebhookListResponse
```

List webhooks

Lists the webhooks registered for the account.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$active = true; // bool | Filter by active status.

try {
    $result = $apiInstance->getUserWebhooks($active);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->getUserWebhooks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **active** | **bool**| Filter by active status. | [optional] |

### Return type

[**\PayZu\Pix\Model\WebhookListResponse**](../Model/WebhookListResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserWebhooksSentQuantity()`

```php
getUserWebhooksSentQuantity($webhook_id): \PayZu\Pix\Model\SentWebhooksQuantity
```

Count sent callbacks

Returns how many webhook deliveries were made, optionally filtered by webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_id = cm3w7k1t40000q8f2r5b9x3ad; // string | Filter the count by webhook id.

try {
    $result = $apiInstance->getUserWebhooksSentQuantity($webhook_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->getUserWebhooksSentQuantity: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhook_id** | **string**| Filter the count by webhook id. | [optional] |

### Return type

[**\PayZu\Pix\Model\SentWebhooksQuantity**](../Model/SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `patchUserWebhook()`

```php
patchUserWebhook($id, $webhook_update_request): \PayZu\Pix\Model\Webhook
```

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Webhook id.
$webhook_update_request = new \PayZu\Pix\Model\WebhookUpdateRequest(); // \PayZu\Pix\Model\WebhookUpdateRequest

try {
    $result = $apiInstance->patchUserWebhook($id, $webhook_update_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->patchUserWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Webhook id. | |
| **webhook_update_request** | [**\PayZu\Pix\Model\WebhookUpdateRequest**](../Model/WebhookUpdateRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\Webhook**](../Model/Webhook.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postUserWebhook()`

```php
postUserWebhook($webhook_create_request): \PayZu\Pix\Model\WebhookWithSecret
```

Create webhook

Registers a webhook endpoint. If `generateSecret` is true, the response includes the HMAC `secret` (shown only here).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_create_request = new \PayZu\Pix\Model\WebhookCreateRequest(); // \PayZu\Pix\Model\WebhookCreateRequest

try {
    $result = $apiInstance->postUserWebhook($webhook_create_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->postUserWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **webhook_create_request** | [**\PayZu\Pix\Model\WebhookCreateRequest**](../Model/WebhookCreateRequest.md)|  | |

### Return type

[**\PayZu\Pix\Model\WebhookWithSecret**](../Model/WebhookWithSecret.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postUserWebhookRotateSecret()`

```php
postUserWebhookRotateSecret($id): \PayZu\Pix\Model\RotateSecretResponse
```

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new `secret` is shown only in this response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Webhook id.

try {
    $result = $apiInstance->postUserWebhookRotateSecret($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->postUserWebhookRotateSecret: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Webhook id. | |

### Return type

[**\PayZu\Pix\Model\RotateSecretResponse**](../Model/RotateSecretResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
