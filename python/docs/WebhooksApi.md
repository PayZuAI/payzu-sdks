# payzu_pix.WebhooksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user_webhook**](WebhooksApi.md#delete_user_webhook) | **DELETE** /user/webhooks/{id} | Delete webhook
[**get_user_webhook**](WebhooksApi.md#get_user_webhook) | **GET** /user/webhooks/{id} | Get webhook
[**get_user_webhook_sent_detail**](WebhooksApi.md#get_user_webhook_sent_detail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail
[**get_user_webhooks**](WebhooksApi.md#get_user_webhooks) | **GET** /user/webhooks | List webhooks
[**get_user_webhooks_sent_quantity**](WebhooksApi.md#get_user_webhooks_sent_quantity) | **GET** /user/webhooks/sent/quantity | Count sent callbacks
[**patch_user_webhook**](WebhooksApi.md#patch_user_webhook) | **PATCH** /user/webhooks/{id} | Update webhook
[**post_user_webhook**](WebhooksApi.md#post_user_webhook) | **POST** /user/webhooks | Create webhook
[**post_user_webhook_rotate_secret**](WebhooksApi.md#post_user_webhook_rotate_secret) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret


# **delete_user_webhook**
> delete_user_webhook(id)

Delete webhook

Removes a webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'id_example' # str | Webhook id.

    try:
        # Delete webhook
        api_instance.delete_user_webhook(id)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id. | 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Webhook deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhook**
> Webhook get_user_webhook(id)

Get webhook

Returns a single webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook import Webhook
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'id_example' # str | Webhook id.

    try:
        # Get webhook
        api_response = api_instance.get_user_webhook(id)
        print("The response of WebhooksApi->get_user_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhook_sent_detail**
> SentWebhookDetail get_user_webhook_sent_detail(id, callback_id)

Get sent callback detail

Returns the delivery detail of a single sent callback.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.sent_webhook_detail import SentWebhookDetail
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'id_example' # str | Webhook id.
    callback_id = 'callback_id_example' # str | Callback log id.

    try:
        # Get sent callback detail
        api_response = api_instance.get_user_webhook_sent_detail(id, callback_id)
        print("The response of WebhooksApi->get_user_webhook_sent_detail:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhook_sent_detail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id. | 
 **callback_id** | **str**| Callback log id. | 

### Return type

[**SentWebhookDetail**](SentWebhookDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callback delivery detail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhooks**
> WebhookListResponse get_user_webhooks(active=active)

List webhooks

Lists the webhooks registered for the account.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook_list_response import WebhookListResponse
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    active = True # bool | Filter by active status. (optional)

    try:
        # List webhooks
        api_response = api_instance.get_user_webhooks(active=active)
        print("The response of WebhooksApi->get_user_webhooks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhooks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| Filter by active status. | [optional] 

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook list. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhooks_sent_quantity**
> SentWebhooksQuantity get_user_webhooks_sent_quantity(webhook_id=webhook_id)

Count sent callbacks

Returns how many callbacks were sent, optionally filtered by webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.sent_webhooks_quantity import SentWebhooksQuantity
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Filter the count by webhook id. (optional)

    try:
        # Count sent callbacks
        api_response = api_instance.get_user_webhooks_sent_quantity(webhook_id=webhook_id)
        print("The response of WebhooksApi->get_user_webhooks_sent_quantity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhooks_sent_quantity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Filter the count by webhook id. | [optional] 

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quantity. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_user_webhook**
> Webhook patch_user_webhook(id, webhook_update_request)

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook import Webhook
from payzu_pix.models.webhook_update_request import WebhookUpdateRequest
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'id_example' # str | Webhook id.
    webhook_update_request = payzu_pix.WebhookUpdateRequest() # WebhookUpdateRequest | 

    try:
        # Update webhook
        api_response = api_instance.patch_user_webhook(id, webhook_update_request)
        print("The response of WebhooksApi->patch_user_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->patch_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id. | 
 **webhook_update_request** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_webhook**
> WebhookWithSecret post_user_webhook(webhook_create_request)

Create webhook

Registers a webhook endpoint. If `generateSecret` is true, the response includes the HMAC `secret` (shown only here).

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook_create_request import WebhookCreateRequest
from payzu_pix.models.webhook_with_secret import WebhookWithSecret
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    webhook_create_request = payzu_pix.WebhookCreateRequest() # WebhookCreateRequest | 

    try:
        # Create webhook
        api_response = api_instance.post_user_webhook(webhook_create_request)
        print("The response of WebhooksApi->post_user_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->post_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_create_request** | [**WebhookCreateRequest**](WebhookCreateRequest.md)|  | 

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Webhook created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_webhook_rotate_secret**
> RotateSecretResponse post_user_webhook_rotate_secret(id)

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new `secret` is shown only in this response.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.rotate_secret_response import RotateSecretResponse
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'id_example' # str | Webhook id.

    try:
        # Rotate webhook secret
        api_response = api_instance.post_user_webhook_rotate_secret(id)
        print("The response of WebhooksApi->post_user_webhook_rotate_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->post_user_webhook_rotate_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id. | 

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | New secret. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

