# payzu_pix.InternalTransferApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_internal_transfer**](InternalTransferApi.md#get_internal_transfer) | **GET** /internal-transfer | Get internal transfer
[**post_internal_transfer**](InternalTransferApi.md#post_internal_transfer) | **POST** /internal-transfer | Create internal transfer


# **get_internal_transfer**
> Transaction get_internal_transfer(id=id, client_reference=client_reference, virtual_account=virtual_account)

Get internal transfer

Returns the details of an internal transfer. Provide at least one of `id` or `clientReference` (`virtualAccount` is also accepted). If more than one is provided, all are applied as filters (AND).

Token permission: `WITHDRAW`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.transaction import Transaction
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
    api_instance = payzu_pix.InternalTransferApi(api_client)
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID (optional)
    client_reference = 'order_12345' # str | External reference (optional)
    virtual_account = 'loja-centro-01' # str | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)

    try:
        # Get internal transfer
        api_response = api_instance.get_internal_transfer(id=id, client_reference=client_reference, virtual_account=virtual_account)
        print("The response of InternalTransferApi->get_internal_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalTransferApi->get_internal_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Transaction ID | [optional] 
 **client_reference** | **str**| External reference | [optional] 
 **virtual_account** | **str**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transfer details |  -  |
**400** | Provide either &#x60;id&#x60; or &#x60;clientReference&#x60; |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Transfer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_internal_transfer**
> Transaction post_internal_transfer(post_internal_transfer_request)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.

Token permission: `WITHDRAW`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_internal_transfer_request import PostInternalTransferRequest
from payzu_pix.models.transaction import Transaction
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
    api_instance = payzu_pix.InternalTransferApi(api_client)
    post_internal_transfer_request = payzu_pix.PostInternalTransferRequest() # PostInternalTransferRequest | 

    try:
        # Create internal transfer
        api_response = api_instance.post_internal_transfer(post_internal_transfer_request)
        print("The response of InternalTransferApi->post_internal_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalTransferApi->post_internal_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_internal_transfer_request** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transfer completed |  -  |
**400** | Invalid payload (e.g. payerAccountNumber does not belong to the requester) |  -  |
**401** | Authentication failure |  -  |
**403** | allowInternalTransfer disabled or token missing WITHDRAW permission |  -  |
**404** | Receiver account not found |  -  |
**409** | Conflict with the current state of the resource |  -  |
**422** | Insufficient balance / amount below ticket minimum |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

