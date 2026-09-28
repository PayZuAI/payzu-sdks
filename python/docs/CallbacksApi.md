# payzu_pix.CallbacksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_callback_secret**](CallbacksApi.md#create_user_callback_secret) | **POST** /user/callbacks/secret | Create callback secret
[**get_user_callback_by_id**](CallbacksApi.md#get_user_callback_by_id) | **GET** /user/callbacks/{id} | Get Callback
[**get_user_callbacks**](CallbacksApi.md#get_user_callbacks) | **GET** /user/callbacks | List Callbacks
[**resend_user_callback_single**](CallbacksApi.md#resend_user_callback_single) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single)
[**resend_user_callbacks**](CallbacksApi.md#resend_user_callbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk)
[**resend_user_callbacks_webhook**](CallbacksApi.md#resend_user_callbacks_webhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook
[**resend_user_callbacks_webhooks**](CallbacksApi.md#resend_user_callbacks_webhooks) | **POST** /user/callbacks/resend/webhook | Resend webhook callbacks by filters
[**rotate_user_callback_secret**](CallbacksApi.md#rotate_user_callback_secret) | **PATCH** /user/callbacks/secret/rotate | Rotate callback secret


# **create_user_callback_secret**
> CallbackSecretResponse create_user_callback_secret()

Create callback secret

Creates the account callback secret, used to sign deliveries sent to the transaction callbackUrl. The secret is returned once and cannot be read again.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_secret_response import CallbackSecretResponse
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
    api_instance = payzu_pix.CallbacksApi(api_client)

    try:
        # Create callback secret
        api_response = api_instance.create_user_callback_secret()
        print("The response of CallbacksApi->create_user_callback_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->create_user_callback_secret: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create callback secret |  -  |
**401** | Unauthorized |  -  |
**403** | Operation not allowed |  -  |
**409** | Account already has a callback secret. Use the rotate route. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_callback_by_id**
> CallbackDetail get_user_callback_by_id(id)

Get Callback

Returns the details of a specific callback log.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_detail import CallbackDetail
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    id = 'cm3w7l9v20001q8f2u6c1y4be' # str | Unique callback ID

    try:
        # Get Callback
        api_response = api_instance.get_user_callback_by_id(id)
        print("The response of CallbacksApi->get_user_callback_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->get_user_callback_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique callback ID | 

### Return type

[**CallbackDetail**](CallbackDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callback details |  -  |
**401** | Authentication failure |  -  |
**404** | Callback not found or does not belong to the user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_callbacks**
> CallbackListResponse get_user_callbacks(page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction, id=id, url=url, status=status, transaction_id=transaction_id, has_error=has_error, created_at_from=created_at_from, created_at_to=created_at_to, webhook_id=webhook_id, event_type=event_type)

List Callbacks

Returns a paginated list of webhook callback logs for the user's transactions.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_list_response import CallbackListResponse
from payzu_pix.models.webhook_event_type import WebhookEventType
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 10 # int | Items per page. (optional) (default to 10)
    sort_by = createdAt # str | Sort field. (optional) (default to createdAt)
    sort_direction = desc # str | Sort direction. (optional) (default to desc)
    id = 'cm3w7l9v20001q8f2u6c1y4be' # str | Filter by callback ID (optional)
    url = 'https://webhook.cool/' # str | Filter by callback URL (optional)
    status = 200 # int | HTTP status code (optional)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID. (optional)
    has_error = true # bool | Filter callbacks that errored (optional)
    created_at_from = '2026-08-01' # datetime | Start of the creation date range. (optional)
    created_at_to = '2026-08-31' # datetime | End of the creation date range. (optional)
    webhook_id = 'webhook_id_example' # str | Webhook id. (optional)
    event_type = payzu_pix.WebhookEventType() # WebhookEventType | Webhook event type. (optional)

    try:
        # List Callbacks
        api_response = api_instance.get_user_callbacks(page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction, id=id, url=url, status=status, transaction_id=transaction_id, has_error=has_error, created_at_from=created_at_from, created_at_to=created_at_to, webhook_id=webhook_id, event_type=event_type)
        print("The response of CallbacksApi->get_user_callbacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->get_user_callbacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Items per page. | [optional] [default to 10]
 **sort_by** | **str**| Sort field. | [optional] [default to createdAt]
 **sort_direction** | **str**| Sort direction. | [optional] [default to desc]
 **id** | **str**| Filter by callback ID | [optional] 
 **url** | **str**| Filter by callback URL | [optional] 
 **status** | **int**| HTTP status code | [optional] 
 **transaction_id** | **str**| Transaction ID. | [optional] 
 **has_error** | **bool**| Filter callbacks that errored | [optional] 
 **created_at_from** | **datetime**| Start of the creation date range. | [optional] 
 **created_at_to** | **datetime**| End of the creation date range. | [optional] 
 **webhook_id** | **str**| Webhook id. | [optional] 
 **event_type** | [**WebhookEventType**](.md)| Webhook event type. | [optional] 

### Return type

[**CallbackListResponse**](CallbackListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of callback logs with pagination |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callback_single**
> ResendUserCallbackSingle200Response resend_user_callback_single(transaction_id)

Re-send callback (single)

Resend the callback of a single transaction.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.resend_user_callback_single200_response import ResendUserCallbackSingle200Response
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID.

    try:
        # Re-send callback (single)
        api_response = api_instance.resend_user_callback_single(transaction_id)
        print("The response of CallbacksApi->resend_user_callback_single:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callback_single: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Transaction ID. | 

### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resend dispatched |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Transaction not found or has no callbackUrl configured |  -  |
**422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks**
> ResendUserCallbacks200Response resend_user_callbacks(resend_user_callbacks_request)

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.resend_user_callbacks200_response import ResendUserCallbacks200Response
from payzu_pix.models.resend_user_callbacks_request import ResendUserCallbacksRequest
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    resend_user_callbacks_request = {"createdAtFrom":"2026-05-05T00:00:00Z","createdAtTo":"2026-05-06T00:00:00Z"} # ResendUserCallbacksRequest | 

    try:
        # Re-send callbacks (bulk)
        api_response = api_instance.resend_user_callbacks(resend_user_callbacks_request)
        print("The response of CallbacksApi->resend_user_callbacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callbacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resend_user_callbacks_request** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md)|  | 

### Return type

[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resend dispatched |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | No matching transactions |  -  |
**422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks_webhook**
> EnqueuedCallback resend_user_callbacks_webhook(webhook_id)

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.enqueued_callback import EnqueuedCallback
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    webhook_id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Webhook id.

    try:
        # Resend callbacks by webhook
        api_response = api_instance.resend_user_callbacks_webhook(webhook_id)
        print("The response of CallbacksApi->resend_user_callbacks_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callbacks_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Webhook id. | 

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callbacks accepted for resend. Acceptance is not delivery: the queueing runs after the response. |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Webhook not found, inactive or owned by another account (PZW300), or no failed callback matched the filters (PZW310). |  -  |
**422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks_webhooks**
> EnqueuedCallback resend_user_callbacks_webhooks(resend_webhook_callbacks_request)

Resend webhook callbacks by filters

Queues the resend of failed webhook deliveries in a period. For each webhook, transaction and event, only the last delivery attempt in the period counts, and it is resent only when it failed. The filters apply to the transactions of those deliveries.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.enqueued_callback import EnqueuedCallback
from payzu_pix.models.resend_webhook_callbacks_request import ResendWebhookCallbacksRequest
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    resend_webhook_callbacks_request = payzu_pix.ResendWebhookCallbacksRequest() # ResendWebhookCallbacksRequest | 

    try:
        # Resend webhook callbacks by filters
        api_response = api_instance.resend_user_callbacks_webhooks(resend_webhook_callbacks_request)
        print("The response of CallbacksApi->resend_user_callbacks_webhooks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callbacks_webhooks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resend_webhook_callbacks_request** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md)|  | 

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callbacks accepted for resend. Acceptance is not delivery: the queueing runs after the response. |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | No active webhook matched the criteria (PZW301), or no failed callback matched the filters (PZW311). |  -  |
**422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_user_callback_secret**
> RotateCallbackSecretResponse rotate_user_callback_secret()

Rotate callback secret

Replaces the account callback secret. Deliveries start being signed with the new secret right away.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.rotate_callback_secret_response import RotateCallbackSecretResponse
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
    api_instance = payzu_pix.CallbacksApi(api_client)

    try:
        # Rotate callback secret
        api_response = api_instance.rotate_user_callback_secret()
        print("The response of CallbacksApi->rotate_user_callback_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->rotate_user_callback_secret: %s\n" % e)
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

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rotate callback secret |  -  |
**401** | Unauthorized |  -  |
**403** | Operation not allowed |  -  |
**404** | Account has no callback secret to rotate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

