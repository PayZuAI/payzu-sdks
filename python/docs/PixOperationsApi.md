# payzu_pix.PixOperationsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pix**](PixOperationsApi.md#get_pix) | **GET** /pix | Retrieve Charge
[**get_pix_qrcode**](PixOperationsApi.md#get_pix_qrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG)
[**get_proof**](PixOperationsApi.md#get_proof) | **GET** /proof/{id} | Get Transaction Receipt
[**post_pix**](PixOperationsApi.md#post_pix) | **POST** /pix | Create Charge (Pix deposit)


# **get_pix**
> Transaction get_pix(id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)

Retrieve Charge

Get the latest status and details for a Pix **deposit (charge)**. Provide at least one of `id`, `clientReference`, or `endToEndId` (`virtualAccount` is also accepted). When more than one parameter is provided, they are combined as filters (AND).

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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    id = 'PAYZU20250817215911F49RDOBJ' # str | Transaction ID. (optional)
    client_reference = 'client_reference_example' # str | External reference provided when creating the charge. (optional)
    end_to_end_id = 'end_to_end_id_example' # str | Pix end-to-end ID. (optional)
    virtual_account = 'virtual_account_example' # str | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)

    try:
        # Retrieve Charge
        api_response = api_instance.get_pix(id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)
        print("The response of PixOperationsApi->get_pix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->get_pix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Transaction ID. | [optional] 
 **client_reference** | **str**| External reference provided when creating the charge. | [optional] 
 **end_to_end_id** | **str**| Pix end-to-end ID. | [optional] 
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
**200** | Current transaction state |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pix_qrcode**
> bytes get_pix_qrcode(transaction_id)

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image

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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    transaction_id = 'transaction_id_example' # str | 

    try:
        # Render Pix QR code (PNG)
        api_response = api_instance.get_pix_qrcode(transaction_id)
        print("The response of PixOperationsApi->get_pix_qrcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->get_pix_qrcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**|  | 

### Return type

**bytes**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QR code image |  -  |
**400** | Transaction is not a DEPOSIT or has no QR code |  -  |
**404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_proof**
> ProofResponse get_proof(id, type=type)

Get Transaction Receipt

Returns the transaction receipt as JSON with a `base64` field (encoded PDF). Decode it to display or save as `.pdf`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.proof_response import ProofResponse
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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    id = 'PAYZU2025081418333632CYKN8M' # str | Transaction ID.
    type = pdf # str | Return format. (optional) (default to pdf)

    try:
        # Get Transaction Receipt
        api_response = api_instance.get_proof(id, type=type)
        print("The response of PixOperationsApi->get_proof:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->get_proof: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Transaction ID. | 
 **type** | **str**| Return format. | [optional] [default to pdf]

### Return type

[**ProofResponse**](ProofResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Base64 if &#x60;type&#x3D;base64&#x60;, otherwise binary PDF. |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pix**
> Transaction post_pix(post_pix_request)

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_pix_request import PostPixRequest
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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    post_pix_request = payzu_pix.PostPixRequest() # PostPixRequest | 

    try:
        # Create Charge (Pix deposit)
        api_response = api_instance.post_pix(post_pix_request)
        print("The response of PixOperationsApi->post_pix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->post_pix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_pix_request** | [**PostPixRequest**](PostPixRequest.md)|  | 

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
**200** | Charge created |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

