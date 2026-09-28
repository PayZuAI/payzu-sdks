# PayZuPix::CallbacksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_user_callback_secret**](CallbacksApi.md#create_user_callback_secret) | **POST** /user/callbacks/secret | Create callback secret |
| [**get_user_callback_by_id**](CallbacksApi.md#get_user_callback_by_id) | **GET** /user/callbacks/{id} | Get Callback |
| [**get_user_callbacks**](CallbacksApi.md#get_user_callbacks) | **GET** /user/callbacks | List Callbacks |
| [**resend_user_callback_single**](CallbacksApi.md#resend_user_callback_single) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single) |
| [**resend_user_callbacks**](CallbacksApi.md#resend_user_callbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk) |
| [**resend_user_callbacks_webhook**](CallbacksApi.md#resend_user_callbacks_webhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook |
| [**resend_user_callbacks_webhooks**](CallbacksApi.md#resend_user_callbacks_webhooks) | **POST** /user/callbacks/resend/webhook | Resend webhook callbacks by filters |
| [**rotate_user_callback_secret**](CallbacksApi.md#rotate_user_callback_secret) | **PATCH** /user/callbacks/secret/rotate | Rotate callback secret |


## create_user_callback_secret

> <CallbackSecretResponse> create_user_callback_secret

Create callback secret

Creates the account callback secret, used to sign deliveries sent to the transaction callbackUrl. The secret is returned once and cannot be read again.

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
  # Create callback secret
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
  # Create callback secret
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

Get Callback

Returns the details of a specific callback log.

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
id = 'cm3w7l9v20001q8f2u6c1y4be' # String | Unique callback ID

begin
  # Get Callback
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
  # Get Callback
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
| **id** | **String** | Unique callback ID |  |

### Return type

[**CallbackDetail**](CallbackDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_callbacks

> <CallbackListResponse> get_user_callbacks(opts)

List Callbacks

Returns a paginated list of webhook callback logs for the user's transactions.

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
  page: 56, # Integer | Page number.
  limit: 56, # Integer | Items per page.
  sort_by: 'createdAt', # String | Sort field.
  sort_direction: 'asc', # String | Sort direction.
  id: 'cm3w7l9v20001q8f2u6c1y4be', # String | Filter by callback ID
  url: 'https://webhook.cool/', # String | Filter by callback URL
  status: 200, # Integer | HTTP status code
  transaction_id: 'PAYZU20260814T6NX1CV9MK000000', # String | Transaction ID.
  has_error: true, # Boolean | Filter callbacks that errored
  created_at_from: Time.parse('2026-08-01'), # Time | Start of the creation date range.
  created_at_to: Time.parse('2026-08-31'), # Time | End of the creation date range.
  webhook_id: 'webhook_id_example', # String | Webhook id.
  event_type: PayZuPix::WebhookEventType::TRANSACTION_PENDING # WebhookEventType | Webhook event type.
}

begin
  # List Callbacks
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
  # List Callbacks
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
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **limit** | **Integer** | Items per page. | [optional][default to 10] |
| **sort_by** | **String** | Sort field. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Sort direction. | [optional][default to &#39;desc&#39;] |
| **id** | **String** | Filter by callback ID | [optional] |
| **url** | **String** | Filter by callback URL | [optional] |
| **status** | **Integer** | HTTP status code | [optional] |
| **transaction_id** | **String** | Transaction ID. | [optional] |
| **has_error** | **Boolean** | Filter callbacks that errored | [optional] |
| **created_at_from** | **Time** | Start of the creation date range. | [optional] |
| **created_at_to** | **Time** | End of the creation date range. | [optional] |
| **webhook_id** | **String** | Webhook id. | [optional] |
| **event_type** | [**WebhookEventType**](.md) | Webhook event type. | [optional] |

### Return type

[**CallbackListResponse**](CallbackListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resend_user_callback_single

> <ResendUserCallbackSingle200Response> resend_user_callback_single(transaction_id)

Re-send callback (single)

Resend the callback of a single transaction.

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
transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # String | Transaction ID.

begin
  # Re-send callback (single)
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
  # Re-send callback (single)
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
| **transaction_id** | **String** | Transaction ID. |  |

### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resend_user_callbacks

> <ResendUserCallbacks200Response> resend_user_callbacks(resend_user_callbacks_request)

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

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
  # Re-send callbacks (bulk)
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
  # Re-send callbacks (bulk)
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

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

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
webhook_id = 'cm3w7k1t40000q8f2r5b9x3ad' # String | Webhook id.

begin
  # Resend callbacks by webhook
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
  # Resend callbacks by webhook
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
| **webhook_id** | **String** | Webhook id. |  |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resend_user_callbacks_webhooks

> <EnqueuedCallback> resend_user_callbacks_webhooks(resend_webhook_callbacks_request)

Resend webhook callbacks by filters

Queues the resend of failed webhook deliveries in a period. For each webhook, transaction and event, only the last delivery attempt in the period counts, and it is resent only when it failed. The filters apply to the transactions of those deliveries.

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
  # Resend webhook callbacks by filters
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
  # Resend webhook callbacks by filters
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

Rotate callback secret

Replaces the account callback secret. Deliveries start being signed with the new secret right away.

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
  # Rotate callback secret
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
  # Rotate callback secret
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

