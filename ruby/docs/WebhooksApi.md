# PayZuPix::WebhooksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**delete_user_webhook**](WebhooksApi.md#delete_user_webhook) | **DELETE** /user/webhooks/{id} | Delete webhook |
| [**get_user_webhook**](WebhooksApi.md#get_user_webhook) | **GET** /user/webhooks/{id} | Get webhook |
| [**get_user_webhook_sent_detail**](WebhooksApi.md#get_user_webhook_sent_detail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail |
| [**get_user_webhooks**](WebhooksApi.md#get_user_webhooks) | **GET** /user/webhooks | List webhooks |
| [**get_user_webhooks_sent_quantity**](WebhooksApi.md#get_user_webhooks_sent_quantity) | **GET** /user/webhooks/sent/quantity | Count sent callbacks |
| [**patch_user_webhook**](WebhooksApi.md#patch_user_webhook) | **PATCH** /user/webhooks/{id} | Update webhook |
| [**post_user_webhook**](WebhooksApi.md#post_user_webhook) | **POST** /user/webhooks | Create webhook |
| [**post_user_webhook_rotate_secret**](WebhooksApi.md#post_user_webhook_rotate_secret) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret |


## delete_user_webhook

> delete_user_webhook(id)

Delete webhook

Removes a webhook.

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
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Webhook id.

begin
  # Delete webhook
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
  # Delete webhook
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
| **id** | **String** | Webhook id. |  |

### Return type

nil (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhook

> <Webhook> get_user_webhook(id)

Get webhook

Returns a single webhook.

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
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Webhook id.

begin
  # Get webhook
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
  # Get webhook
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
| **id** | **String** | Webhook id. |  |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhook_sent_detail

> <SentWebhookDetailResponse> get_user_webhook_sent_detail(id, callback_id)

Get sent callback detail

Returns the delivery detail of a single sent callback.

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
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Webhook id.
callback_id = 'cm3w7l9v20001q8f2u6c1y4be' # String | Callback log id.

begin
  # Get sent callback detail
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
  # Get sent callback detail
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
| **id** | **String** | Webhook id. |  |
| **callback_id** | **String** | Callback log id. |  |

### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhooks

> <WebhookListResponse> get_user_webhooks(opts)

List webhooks

Lists the webhooks registered for the account.

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
  active: true # Boolean | Filter by active status.
}

begin
  # List webhooks
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
  # List webhooks
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
| **active** | **Boolean** | Filter by active status. | [optional] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_webhooks_sent_quantity

> <SentWebhooksQuantity> get_user_webhooks_sent_quantity(opts)

Count sent callbacks

Returns how many webhook deliveries were made, optionally filtered by webhook.

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
  webhook_id: 'cm3w7k1t40000q8f2r5b9x3ad' # String | Filter the count by webhook id.
}

begin
  # Count sent callbacks
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
  # Count sent callbacks
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
| **webhook_id** | **String** | Filter the count by webhook id. | [optional] |

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patch_user_webhook

> <Webhook> patch_user_webhook(id, webhook_update_request)

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

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
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Webhook id.
webhook_update_request = PayZuPix::WebhookUpdateRequest.new # WebhookUpdateRequest | 

begin
  # Update webhook
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
  # Update webhook
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
| **id** | **String** | Webhook id. |  |
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

Create webhook

Registers a webhook endpoint. If `generateSecret` is true, the response includes the HMAC `secret` (shown only here).

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
  # Create webhook
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
  # Create webhook
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

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new `secret` is shown only in this response.

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
id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Webhook id.

begin
  # Rotate webhook secret
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
  # Rotate webhook secret
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
| **id** | **String** | Webhook id. |  |

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

