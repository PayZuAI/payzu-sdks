# PayZuPix::CallbacksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_user_callback_secret**](CallbacksApi.md#create_user_callback_secret) | **POST** /user/callbacks/secret | Criar segredo de callback |
| [**get_user_callback_by_id**](CallbacksApi.md#get_user_callback_by_id) | **GET** /user/callbacks/{id} | Obter Callback |
| [**get_user_callbacks**](CallbacksApi.md#get_user_callbacks) | **GET** /user/callbacks | Listar Callbacks |
| [**resend_user_callback_single**](CallbacksApi.md#resend_user_callback_single) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual) |
| [**resend_user_callbacks**](CallbacksApi.md#resend_user_callbacks) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote) |
| [**resend_user_callbacks_webhook**](CallbacksApi.md#resend_user_callbacks_webhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook |
| [**resend_user_callbacks_webhooks**](CallbacksApi.md#resend_user_callbacks_webhooks) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros |
| [**rotate_user_callback_secret**](CallbacksApi.md#rotate_user_callback_secret) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback |


## create_user_callback_secret

> <CallbackSecretResponse> create_user_callback_secret

Criar segredo de callback

Cria o segredo de callback da conta, usado para assinar as entregas feitas ao callbackUrl da transação. O segredo é devolvido uma única vez e não pode ser lido depois.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new

begin
  # Criar segredo de callback
  result = api_instance.create_user_callback_secret
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->create_user_callback_secret: #{e}"
end
```

#### Using the create_user_callback_secret_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CallbackSecretResponse>, Integer, Hash)> create_user_callback_secret_with_http_info

```ruby
begin
  # Criar segredo de callback
  data, status_code, headers = api_instance.create_user_callback_secret_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CallbackSecretResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->create_user_callback_secret_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CallbackSecretResponse**](CallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_callback_by_id

> <CallbackDetail> get_user_callback_by_id(id)

Obter Callback

Retorna os detalhes de um log de callback específico.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new
id = 'cm3w7l9v20001q8f2u6c1y4be' # String | ID único do callback

begin
  # Obter Callback
  result = api_instance.get_user_callback_by_id(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->get_user_callback_by_id: #{e}"
end
```

#### Using the get_user_callback_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CallbackDetail>, Integer, Hash)> get_user_callback_by_id_with_http_info(id)

```ruby
begin
  # Obter Callback
  data, status_code, headers = api_instance.get_user_callback_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CallbackDetail>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->get_user_callback_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID único do callback |  |

### Return type

[**CallbackDetail**](CallbackDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_callbacks

> <CallbackListResponse> get_user_callbacks(opts)

Listar Callbacks

Retorna uma lista paginada de logs de callback (webhook) das transações do usuário.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new
opts = {
  page: 56, # Integer | Número da página.
  limit: 56, # Integer | Itens por página.
  sort_by: 'createdAt', # String | Campo de ordenação.
  sort_direction: 'asc', # String | Direção da ordenação.
  id: 'cm3w7l9v20001q8f2u6c1y4be', # String | Filtra por ID de callback
  url: 'https://webhook.cool/', # String | Filtra por callback URL
  status: 200, # Integer | Status HTTP devolvido pelo seu endpoint.
  transaction_id: 'PAYZU20260814T6NX1CV9MK000000', # String | ID da transação.
  has_error: true, # Boolean | Filtra callbacks que apresentaram erro
  created_at_from: Time.parse('2026-08-01'), # Time | Data de criação inicial.
  created_at_to: Time.parse('2026-08-31'), # Time | Data de criação final.
  webhook_id: 'webhook_id_example', # String | Id do webhook.
  event_type: PayZuPix::WebhookEventType::TRANSACTION_PENDING # WebhookEventType | Tipo de evento do webhook.
}

begin
  # Listar Callbacks
  result = api_instance.get_user_callbacks(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->get_user_callbacks: #{e}"
end
```

#### Using the get_user_callbacks_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CallbackListResponse>, Integer, Hash)> get_user_callbacks_with_http_info(opts)

```ruby
begin
  # Listar Callbacks
  data, status_code, headers = api_instance.get_user_callbacks_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CallbackListResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->get_user_callbacks_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Número da página. | [optional][default to 1] |
| **limit** | **Integer** | Itens por página. | [optional][default to 10] |
| **sort_by** | **String** | Campo de ordenação. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Direção da ordenação. | [optional][default to &#39;desc&#39;] |
| **id** | **String** | Filtra por ID de callback | [optional] |
| **url** | **String** | Filtra por callback URL | [optional] |
| **status** | **Integer** | Status HTTP devolvido pelo seu endpoint. | [optional] |
| **transaction_id** | **String** | ID da transação. | [optional] |
| **has_error** | **Boolean** | Filtra callbacks que apresentaram erro | [optional] |
| **created_at_from** | **Time** | Data de criação inicial. | [optional] |
| **created_at_to** | **Time** | Data de criação final. | [optional] |
| **webhook_id** | **String** | Id do webhook. | [optional] |
| **event_type** | [**WebhookEventType**](.md) | Tipo de evento do webhook. | [optional] |

### Return type

[**CallbackListResponse**](CallbackListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resend_user_callback_single

> <ResendUserCallbackSingle200Response> resend_user_callback_single(transaction_id)

Reenviar callback (individual)

Reenvia o callback de uma única transação.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new
transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # String | ID da transação.

begin
  # Reenviar callback (individual)
  result = api_instance.resend_user_callback_single(transaction_id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callback_single: #{e}"
end
```

#### Using the resend_user_callback_single_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ResendUserCallbackSingle200Response>, Integer, Hash)> resend_user_callback_single_with_http_info(transaction_id)

```ruby
begin
  # Reenviar callback (individual)
  data, status_code, headers = api_instance.resend_user_callback_single_with_http_info(transaction_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ResendUserCallbackSingle200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callback_single_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **transaction_id** | **String** | ID da transação. |  |

### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resend_user_callbacks

> <ResendUserCallbacks200Response> resend_user_callbacks(resend_user_callbacks_request)

Reenviar callbacks (em lote)

Reenvia callbacks em lote para transações que correspondem aos filtros informados.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new
resend_user_callbacks_request = PayZuPix::ResendUserCallbacksRequest.new({created_at_from: Time.parse('2026-08-05T00:00:00Z'), created_at_to: Time.parse('2026-08-11T23:59:59Z')}) # ResendUserCallbacksRequest | 

begin
  # Reenviar callbacks (em lote)
  result = api_instance.resend_user_callbacks(resend_user_callbacks_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callbacks: #{e}"
end
```

#### Using the resend_user_callbacks_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ResendUserCallbacks200Response>, Integer, Hash)> resend_user_callbacks_with_http_info(resend_user_callbacks_request)

```ruby
begin
  # Reenviar callbacks (em lote)
  data, status_code, headers = api_instance.resend_user_callbacks_with_http_info(resend_user_callbacks_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ResendUserCallbacks200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callbacks_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resend_user_callbacks_request** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md) |  |  |

### Return type

[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resend_user_callbacks_webhook

> <EnqueuedCallback> resend_user_callbacks_webhook(webhook_id)

Reenviar callbacks por webhook

Enfileira o reenvio em lote dos callbacks falhos de um webhook.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new
webhook_id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Id do webhook.

begin
  # Reenviar callbacks por webhook
  result = api_instance.resend_user_callbacks_webhook(webhook_id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callbacks_webhook: #{e}"
end
```

#### Using the resend_user_callbacks_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnqueuedCallback>, Integer, Hash)> resend_user_callbacks_webhook_with_http_info(webhook_id)

```ruby
begin
  # Reenviar callbacks por webhook
  data, status_code, headers = api_instance.resend_user_callbacks_webhook_with_http_info(webhook_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnqueuedCallback>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callbacks_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** | Id do webhook. |  |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resend_user_callbacks_webhooks

> <EnqueuedCallback> resend_user_callbacks_webhooks(resend_webhook_callbacks_request)

Reenviar callbacks de webhook por filtros

Enfileira o reenvio das entregas de webhook que falharam num período. Para cada webhook, transação e evento, vale só a última tentativa de entrega no período, e ela só é reenviada se falhou. Os filtros se aplicam às transações dessas entregas.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new
resend_webhook_callbacks_request = PayZuPix::ResendWebhookCallbacksRequest.new({created_at_from: Time.parse('2026-08-05T00:00:00Z'), created_at_to: Time.parse('2026-08-11T23:59:59Z')}) # ResendWebhookCallbacksRequest | 

begin
  # Reenviar callbacks de webhook por filtros
  result = api_instance.resend_user_callbacks_webhooks(resend_webhook_callbacks_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callbacks_webhooks: #{e}"
end
```

#### Using the resend_user_callbacks_webhooks_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EnqueuedCallback>, Integer, Hash)> resend_user_callbacks_webhooks_with_http_info(resend_webhook_callbacks_request)

```ruby
begin
  # Reenviar callbacks de webhook por filtros
  data, status_code, headers = api_instance.resend_user_callbacks_webhooks_with_http_info(resend_webhook_callbacks_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EnqueuedCallback>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->resend_user_callbacks_webhooks_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resend_webhook_callbacks_request** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md) |  |  |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rotate_user_callback_secret

> <RotateCallbackSecretResponse> rotate_user_callback_secret

Rotacionar segredo de callback

Troca o segredo de callback da conta. As entregas passam a ser assinadas com o novo segredo imediatamente.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::CallbacksApi.new

begin
  # Rotacionar segredo de callback
  result = api_instance.rotate_user_callback_secret
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->rotate_user_callback_secret: #{e}"
end
```

#### Using the rotate_user_callback_secret_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RotateCallbackSecretResponse>, Integer, Hash)> rotate_user_callback_secret_with_http_info

```ruby
begin
  # Rotacionar segredo de callback
  data, status_code, headers = api_instance.rotate_user_callback_secret_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RotateCallbackSecretResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling CallbacksApi->rotate_user_callback_secret_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

