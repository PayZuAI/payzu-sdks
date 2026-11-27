# PayZu\Pix\CallbacksApi

Inspeção e reenvio de callback de webhook

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**createUserCallbackSecret()**](CallbacksApi.md#createUserCallbackSecret) | **POST** /user/callbacks/secret | Criar segredo de callback |
| [**getUserCallbackById()**](CallbacksApi.md#getUserCallbackById) | **GET** /user/callbacks/{id} | Obter Callback |
| [**getUserCallbacks()**](CallbacksApi.md#getUserCallbacks) | **GET** /user/callbacks | Listar Callbacks |
| [**resendUserCallbackSingle()**](CallbacksApi.md#resendUserCallbackSingle) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual) |
| [**resendUserCallbacks()**](CallbacksApi.md#resendUserCallbacks) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote) |
| [**resendUserCallbacksWebhook()**](CallbacksApi.md#resendUserCallbacksWebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook |
| [**resendUserCallbacksWebhooks()**](CallbacksApi.md#resendUserCallbacksWebhooks) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros |
| [**rotateUserCallbackSecret()**](CallbacksApi.md#rotateUserCallbackSecret) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback |


## `createUserCallbackSecret()`

```php
createUserCallbackSecret(): \PayZu\Pix\Model\CallbackSecretResponse
```

Criar segredo de callback

Cria o segredo de callback da conta, usado para assinar as entregas feitas ao callbackUrl da transação. O segredo é devolvido uma única vez e não pode ser lido depois.

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

Obter Callback

Retorna os detalhes de um log de callback específico.

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
$id = cm3w7l9v20001q8f2u6c1y4be; // string | ID único do callback

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
| **id** | **string**| ID único do callback | |

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

Listar Callbacks

Retorna uma lista paginada de logs de callback (webhook) das transações do usuário.

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
$page = 1; // int | Número da página.
$limit = 10; // int | Itens por página.
$sort_by = 'createdAt'; // string | Campo de ordenação.
$sort_direction = 'desc'; // string | Direção da ordenação.
$id = cm3w7l9v20001q8f2u6c1y4be; // string | Filtra por ID de callback
$url = https://webhook.cool/; // string | Filtra por callback URL
$status = 200; // int | Status HTTP devolvido pelo seu endpoint.
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.
$has_error = true; // bool | Filtra callbacks que apresentaram erro
$created_at_from = 2026-08-01; // \DateTime | Data de criação inicial.
$created_at_to = 2026-08-31; // \DateTime | Data de criação final.
$webhook_id = 'webhook_id_example'; // string | Id do webhook.
$event_type = new \PayZu\Pix\Model\\PayZu\Pix\Model\WebhookEventType(); // \PayZu\Pix\Model\WebhookEventType | Tipo de evento do webhook.

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
| **page** | **int**| Número da página. | [optional] [default to 1] |
| **limit** | **int**| Itens por página. | [optional] [default to 10] |
| **sort_by** | **string**| Campo de ordenação. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Direção da ordenação. | [optional] [default to &#39;desc&#39;] |
| **id** | **string**| Filtra por ID de callback | [optional] |
| **url** | **string**| Filtra por callback URL | [optional] |
| **status** | **int**| Status HTTP devolvido pelo seu endpoint. | [optional] |
| **transaction_id** | **string**| ID da transação. | [optional] |
| **has_error** | **bool**| Filtra callbacks que apresentaram erro | [optional] |
| **created_at_from** | **\DateTime**| Data de criação inicial. | [optional] |
| **created_at_to** | **\DateTime**| Data de criação final. | [optional] |
| **webhook_id** | **string**| Id do webhook. | [optional] |
| **event_type** | [**\PayZu\Pix\Model\WebhookEventType**](../Model/.md)| Tipo de evento do webhook. | [optional] |

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

Reenviar callback (individual)

Reenvia o callback de uma única transação.

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
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.

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
| **transaction_id** | **string**| ID da transação. | |

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

Reenviar callbacks (em lote)

Reenvia callbacks em lote para transações que correspondem aos filtros informados.

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

Reenviar callbacks por webhook

Enfileira o reenvio em lote dos callbacks falhos de um webhook.

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
$webhook_id = cm3w7k1t40000q8f2r5b9x3ad; // string | Id do webhook.

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
| **webhook_id** | **string**| Id do webhook. | |

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

Reenviar callbacks de webhook por filtros

Enfileira o reenvio das entregas de webhook que falharam num período. Para cada webhook, transação e evento, vale só a última tentativa de entrega no período, e ela só é reenviada se falhou. Os filtros se aplicam às transações dessas entregas.

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

Rotacionar segredo de callback

Troca o segredo de callback da conta. As entregas passam a ser assinadas com o novo segredo imediatamente.

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
