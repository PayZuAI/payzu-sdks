# PayZuPix::WebhooksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**delete_user_webhook**](WebhooksApi.md#delete_user_webhook) | **DELETE** /user/webhooks/{id} | Remover webhook |
| [**get_user_webhook**](WebhooksApi.md#get_user_webhook) | **GET** /user/webhooks/{id} | Consultar webhook |
| [**get_user_webhook_sent_detail**](WebhooksApi.md#get_user_webhook_sent_detail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado |
| [**get_user_webhooks**](WebhooksApi.md#get_user_webhooks) | **GET** /user/webhooks | Listar webhooks |
| [**get_user_webhooks_sent_quantity**](WebhooksApi.md#get_user_webhooks_sent_quantity) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados |
| [**patch_user_webhook**](WebhooksApi.md#patch_user_webhook) | **PATCH** /user/webhooks/{id} | Atualizar webhook |
| [**post_user_webhook**](WebhooksApi.md#post_user_webhook) | **POST** /user/webhooks | Criar webhook |
| [**post_user_webhook_rotate_secret**](WebhooksApi.md#post_user_webhook_rotate_secret) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook |


## delete_user_webhook

> delete_user_webhook(id)

Remover webhook

Remove um webhook.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Id do webhook.

begin
  # Remover webhook
  api_instance.delete_user_webhook(id)
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->delete_user_webhook: #{e}"
end
```

#### Using the delete_user_webhook_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> delete_user_webhook_with_http_info(id)

```ruby
begin
  # Remover webhook
  data, status_code, headers = api_instance.delete_user_webhook_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->delete_user_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do webhook. |  |

### Return type

nil (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhook

> <Webhook> get_user_webhook(id)

Consultar webhook

Retorna um webhook.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Id do webhook.

begin
  # Consultar webhook
  result = api_instance.get_user_webhook(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhook: #{e}"
end
```

#### Using the get_user_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Webhook>, Integer, Hash)> get_user_webhook_with_http_info(id)

```ruby
begin
  # Consultar webhook
  data, status_code, headers = api_instance.get_user_webhook_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Webhook>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do webhook. |  |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhook_sent_detail

> <SentWebhookDetailResponse> get_user_webhook_sent_detail(id, callback_id)

Detalhe de callback enviado

Retorna o detalhe de entrega de um callback enviado.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Id do webhook.
callback_id = 'cm3w7l9v20001q8f2u6c1y4be' # String | Id do log de callback.

begin
  # Detalhe de callback enviado
  result = api_instance.get_user_webhook_sent_detail(id, callback_id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhook_sent_detail: #{e}"
end
```

#### Using the get_user_webhook_sent_detail_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SentWebhookDetailResponse>, Integer, Hash)> get_user_webhook_sent_detail_with_http_info(id, callback_id)

```ruby
begin
  # Detalhe de callback enviado
  data, status_code, headers = api_instance.get_user_webhook_sent_detail_with_http_info(id, callback_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SentWebhookDetailResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhook_sent_detail_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do webhook. |  |
| **callback_id** | **String** | Id do log de callback. |  |

### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhooks

> <WebhookListResponse> get_user_webhooks(opts)

Listar webhooks

Lista os webhooks cadastrados na conta.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
opts = {
  active: true # Boolean | Filtra pelo status ativo.
}

begin
  # Listar webhooks
  result = api_instance.get_user_webhooks(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhooks: #{e}"
end
```

#### Using the get_user_webhooks_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebhookListResponse>, Integer, Hash)> get_user_webhooks_with_http_info(opts)

```ruby
begin
  # Listar webhooks
  data, status_code, headers = api_instance.get_user_webhooks_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebhookListResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhooks_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **active** | **Boolean** | Filtra pelo status ativo. | [optional] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhooks_sent_quantity

> <SentWebhooksQuantity> get_user_webhooks_sent_quantity(opts)

Contar callbacks enviados

Retorna quantas entregas de webhook foram feitas, opcionalmente filtradas por webhook.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
opts = {
  webhook_id: 'cm3w7k1t40000q8f2r5b9x3ad' # String | Filtra a contagem por id de webhook.
}

begin
  # Contar callbacks enviados
  result = api_instance.get_user_webhooks_sent_quantity(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhooks_sent_quantity: #{e}"
end
```

#### Using the get_user_webhooks_sent_quantity_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SentWebhooksQuantity>, Integer, Hash)> get_user_webhooks_sent_quantity_with_http_info(opts)

```ruby
begin
  # Contar callbacks enviados
  data, status_code, headers = api_instance.get_user_webhooks_sent_quantity_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SentWebhooksQuantity>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->get_user_webhooks_sent_quantity_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_id** | **String** | Filtra a contagem por id de webhook. | [optional] |

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patch_user_webhook

> <Webhook> patch_user_webhook(id, webhook_update_request)

Atualizar webhook

Atualiza a url, o status ativo ou os eventos de um webhook. Informe pelo menos um campo.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Id do webhook.
webhook_update_request = PayZuPix::WebhookUpdateRequest.new # WebhookUpdateRequest | 

begin
  # Atualizar webhook
  result = api_instance.patch_user_webhook(id, webhook_update_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->patch_user_webhook: #{e}"
end
```

#### Using the patch_user_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Webhook>, Integer, Hash)> patch_user_webhook_with_http_info(id, webhook_update_request)

```ruby
begin
  # Atualizar webhook
  data, status_code, headers = api_instance.patch_user_webhook_with_http_info(id, webhook_update_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Webhook>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->patch_user_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do webhook. |  |
| **webhook_update_request** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md) |  |  |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## post_user_webhook

> <WebhookWithSecret> post_user_webhook(webhook_create_request)

Criar webhook

Cadastra um endpoint de webhook. Se `generateSecret` for true, a resposta traz o `secret` HMAC (exibido só aqui).

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
webhook_create_request = PayZuPix::WebhookCreateRequest.new({url: 'https://sualoja.com.br/webhook'}) # WebhookCreateRequest | 

begin
  # Criar webhook
  result = api_instance.post_user_webhook(webhook_create_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->post_user_webhook: #{e}"
end
```

#### Using the post_user_webhook_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebhookWithSecret>, Integer, Hash)> post_user_webhook_with_http_info(webhook_create_request)

```ruby
begin
  # Criar webhook
  data, status_code, headers = api_instance.post_user_webhook_with_http_info(webhook_create_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebhookWithSecret>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->post_user_webhook_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhook_create_request** | [**WebhookCreateRequest**](WebhookCreateRequest.md) |  |  |

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## post_user_webhook_rotate_secret

> <RotateSecretResponse> post_user_webhook_rotate_secret(id)

Rotacionar segredo do webhook

Gera um novo segredo de assinatura HMAC e invalida o anterior. O novo `secret` é exibido só nesta resposta.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WebhooksApi.new
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Id do webhook.

begin
  # Rotacionar segredo do webhook
  result = api_instance.post_user_webhook_rotate_secret(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->post_user_webhook_rotate_secret: #{e}"
end
```

#### Using the post_user_webhook_rotate_secret_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RotateSecretResponse>, Integer, Hash)> post_user_webhook_rotate_secret_with_http_info(id)

```ruby
begin
  # Rotacionar segredo do webhook
  data, status_code, headers = api_instance.post_user_webhook_rotate_secret_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RotateSecretResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling WebhooksApi->post_user_webhook_rotate_secret_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do webhook. |  |

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

