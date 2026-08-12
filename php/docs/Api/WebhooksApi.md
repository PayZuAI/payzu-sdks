# OpenAPI\Client\WebhooksApi

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
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Webhook id.

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
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserWebhook()`

```php
getUserWebhook($id): \OpenAPI\Client\Model\Webhook
```

Get webhook

Returns a single webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Webhook id.

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

[**\OpenAPI\Client\Model\Webhook**](../Model/Webhook.md)

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
getUserWebhookSentDetail($id, $callback_id): \OpenAPI\Client\Model\SentWebhookDetail
```

Get sent callback detail

Returns the delivery detail of a single sent callback.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Webhook id.
$callback_id = 'callback_id_example'; // string | Callback log id.

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

[**\OpenAPI\Client\Model\SentWebhookDetail**](../Model/SentWebhookDetail.md)

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
getUserWebhooks($active): \OpenAPI\Client\Model\WebhookListResponse
```

List webhooks

Lists the webhooks registered for the account.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$active = True; // bool | Filter by active status.

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

[**\OpenAPI\Client\Model\WebhookListResponse**](../Model/WebhookListResponse.md)

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
getUserWebhooksSentQuantity($webhook_id): \OpenAPI\Client\Model\SentWebhooksQuantity
```

Count sent callbacks

Returns how many callbacks were sent, optionally filtered by webhook.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_id = 'webhook_id_example'; // string | Filter the count by webhook id.

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

[**\OpenAPI\Client\Model\SentWebhooksQuantity**](../Model/SentWebhooksQuantity.md)

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
patchUserWebhook($id, $webhook_update_request): \OpenAPI\Client\Model\Webhook
```

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Webhook id.
$webhook_update_request = new \OpenAPI\Client\Model\WebhookUpdateRequest(); // \OpenAPI\Client\Model\WebhookUpdateRequest

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
| **webhook_update_request** | [**\OpenAPI\Client\Model\WebhookUpdateRequest**](../Model/WebhookUpdateRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Webhook**](../Model/Webhook.md)

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
postUserWebhook($webhook_create_request): \OpenAPI\Client\Model\WebhookWithSecret
```

Create webhook

Registers a webhook endpoint. If `generateSecret` is true, the response includes the HMAC `secret` (shown only here).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$webhook_create_request = new \OpenAPI\Client\Model\WebhookCreateRequest(); // \OpenAPI\Client\Model\WebhookCreateRequest

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
| **webhook_create_request** | [**\OpenAPI\Client\Model\WebhookCreateRequest**](../Model/WebhookCreateRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\WebhookWithSecret**](../Model/WebhookWithSecret.md)

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
postUserWebhookRotateSecret($id): \OpenAPI\Client\Model\RotateSecretResponse
```

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new `secret` is shown only in this response.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | Webhook id.

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

[**\OpenAPI\Client\Model\RotateSecretResponse**](../Model/RotateSecretResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
