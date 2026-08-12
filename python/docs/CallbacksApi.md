# payzu_pix.CallbacksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_callback_by_id**](CallbacksApi.md#get_user_callback_by_id) | **GET** /user/callbacks/{id} | Get Callback
[**get_user_callbacks**](CallbacksApi.md#get_user_callbacks) | **GET** /user/callbacks | List Callbacks
[**resend_user_callback_single**](CallbacksApi.md#resend_user_callback_single) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single)
[**resend_user_callbacks**](CallbacksApi.md#resend_user_callbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk)
[**resend_user_callbacks_webhook**](CallbacksApi.md#resend_user_callbacks_webhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook


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
    id = 'id_example' # str | Unique callback ID

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
**404** | Callback not found or does not belong to the user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_callbacks**
> CallbackListResponse get_user_callbacks(page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction, id=id, url=url, status=status, transaction_id=transaction_id, has_error=has_error, created_at_from=created_at_from, created_at_to=created_at_to)

List Callbacks

Returns a paginated list of webhook callback logs for the user's transactions.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_list_response import CallbackListResponse
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
    page = 1 # int |  (optional) (default to 1)
    limit = 10 # int |  (optional) (default to 10)
    sort_by = createdAt # str |  (optional) (default to createdAt)
    sort_direction = desc # str |  (optional) (default to desc)
    id = 'id_example' # str | Filter by callback ID (optional)
    url = 'url_example' # str | Filter by callback URL (optional)
    status = 56 # int | HTTP status code (optional)
    transaction_id = 'transaction_id_example' # str |  (optional)
    has_error = True # bool | Filter callbacks that errored (optional)
    created_at_from = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    created_at_to = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        # List Callbacks
        api_response = api_instance.get_user_callbacks(page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction, id=id, url=url, status=status, transaction_id=transaction_id, has_error=has_error, created_at_from=created_at_from, created_at_to=created_at_to)
        print("The response of CallbacksApi->get_user_callbacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->get_user_callbacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **limit** | **int**|  | [optional] [default to 10]
 **sort_by** | **str**|  | [optional] [default to createdAt]
 **sort_direction** | **str**|  | [optional] [default to desc]
 **id** | **str**| Filter by callback ID | [optional] 
 **url** | **str**| Filter by callback URL | [optional] 
 **status** | **int**| HTTP status code | [optional] 
 **transaction_id** | **str**|  | [optional] 
 **has_error** | **bool**| Filter callbacks that errored | [optional] 
 **created_at_from** | **datetime**|  | [optional] 
 **created_at_to** | **datetime**|  | [optional] 

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
**404** | Resource not found |  -  |

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
    transaction_id = 'transaction_id_example' # str | 

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
 **transaction_id** | **str**|  | 

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
**404** | Transaction not found or has no callbackUrl configured |  -  |
**429** | Rate limit exceeded (5/min) |  -  |

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
**404** | No matching transactions |  -  |
**429** | Rate limit exceeded (5/min) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks_webhook**
> CallbackResendResponse resend_user_callbacks_webhook(webhook_id)

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_resend_response import CallbackResendResponse
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
    webhook_id = 'webhook_id_example' # str | Webhook id.

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

[**CallbackResendResponse**](CallbackResendResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resend queued. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

