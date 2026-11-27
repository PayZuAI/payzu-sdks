# PayZu\Pix\WebhooksApi

Cadastre e gerencie os endpoints de webhook que recebem as notificações de transação

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteUserWebhook()**](WebhooksApi.md#deleteUserWebhook) | **DELETE** /user/webhooks/{id} | Remover webhook |
| [**getUserWebhook()**](WebhooksApi.md#getUserWebhook) | **GET** /user/webhooks/{id} | Consultar webhook |
| [**getUserWebhookSentDetail()**](WebhooksApi.md#getUserWebhookSentDetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado |
| [**getUserWebhooks()**](WebhooksApi.md#getUserWebhooks) | **GET** /user/webhooks | Listar webhooks |
| [**getUserWebhooksSentQuantity()**](WebhooksApi.md#getUserWebhooksSentQuantity) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados |
| [**patchUserWebhook()**](WebhooksApi.md#patchUserWebhook) | **PATCH** /user/webhooks/{id} | Atualizar webhook |
| [**postUserWebhook()**](WebhooksApi.md#postUserWebhook) | **POST** /user/webhooks | Criar webhook |
| [**postUserWebhookRotateSecret()**](WebhooksApi.md#postUserWebhookRotateSecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook |


## `deleteUserWebhook()`

```php
deleteUserWebhook($id)
```

Remover webhook

Remove um webhook.

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
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Id do webhook.

try {
    $apiInstance->deleteUserWebhook($id);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->deleteUserWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Id do webhook. | |

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

Consultar webhook

Retorna um webhook.

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
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Id do webhook.

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
| **id** | **string**| Id do webhook. | |

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

Detalhe de callback enviado

Retorna o detalhe de entrega de um callback enviado.

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
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Id do webhook.
$callback_id = cm3w7l9v20001q8f2u6c1y4be; // string | Id do log de callback.

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
| **id** | **string**| Id do webhook. | |
| **callback_id** | **string**| Id do log de callback. | |

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

Listar webhooks

Lista os webhooks cadastrados na conta.

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
$active = true; // bool | Filtra pelo status ativo.

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
| **active** | **bool**| Filtra pelo status ativo. | [optional] |

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

Contar callbacks enviados

Retorna quantas entregas de webhook foram feitas, opcionalmente filtradas por webhook.

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
$webhook_id = cm3w7k1t40000q8f2r5b9x3ad; // string | Filtra a contagem por id de webhook.

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
| **webhook_id** | **string**| Filtra a contagem por id de webhook. | [optional] |

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

Atualizar webhook

Atualiza a url, o status ativo ou os eventos de um webhook. Informe pelo menos um campo.

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
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Id do webhook.
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
| **id** | **string**| Id do webhook. | |
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

Criar webhook

Cadastra um endpoint de webhook. Se `generateSecret` for true, a resposta traz o `secret` HMAC (exibido só aqui).

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

Rotacionar segredo do webhook

Gera um novo segredo de assinatura HMAC e invalida o anterior. O novo `secret` é exibido só nesta resposta.

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
$id = cm3w7k1t40000q8f2r5b9x3ad; // string | Id do webhook.

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
| **id** | **string**| Id do webhook. | |

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
