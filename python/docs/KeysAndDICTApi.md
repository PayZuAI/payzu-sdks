# payzu_pix.KeysAndDICTApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pix_key**](KeysAndDICTApi.md#get_pix_key) | **GET** /pix/key | Pix key lookup (DICT)
[**get_user_dict**](KeysAndDICTApi.md#get_user_dict) | **GET** /user/dict | Resolve DICT key
[**post_pix_qrcode_read**](KeysAndDICTApi.md#post_pix_qrcode_read) | **POST** /pix/qrcode/read | Read QR Code


# **get_pix_key**
> PixKeyInfo get_pix_key(pix_key)

Pix key lookup (DICT)

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner's details and associated financial institution.

Token permission: `DEPOSIT` or `WITHDRAW`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.pix_key_info import PixKeyInfo
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
    api_instance = payzu_pix.KeysAndDICTApi(api_client)
    pix_key = 'example@payzu.com.br' # str | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).

    try:
        # Pix key lookup (DICT)
        api_response = api_instance.get_pix_key(pix_key)
        print("The response of KeysAndDICTApi->get_pix_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysAndDICTApi->get_pix_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pix_key** | **str**| The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | 

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pix key information retrieved successfully |  -  |
**400** | Invalid Pix key format |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Pix key not found in DICT |  -  |
**422** | Operation refused |  -  |
**424** | Failure at the financial institution |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_dict**
> DictConsultResponse get_user_dict(key)

Resolve DICT key

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.dict_consult_response import DictConsultResponse
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
    api_instance = payzu_pix.KeysAndDICTApi(api_client)
    key = 'john.doe@example.com' # str | Pix key to look up (CPF, CNPJ, email, phone or EVP).

    try:
        # Resolve DICT key
        api_response = api_instance.get_user_dict(key)
        print("The response of KeysAndDICTApi->get_user_dict:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysAndDICTApi->get_user_dict: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**| Pix key to look up (CPF, CNPJ, email, phone or EVP). | 

### Return type

[**DictConsultResponse**](DictConsultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Key holder details. |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Resource not found |  -  |
**422** | Operation refused |  -  |
**424** | Failure at the financial institution |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pix_qrcode_read**
> QRCodeReadResponse post_pix_qrcode_read(post_pix_qrcode_read_request)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.

Token permission: `DEPOSIT` or `WITHDRAW`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_pix_qrcode_read_request import PostPixQrcodeReadRequest
from payzu_pix.models.qr_code_read_response import QRCodeReadResponse
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
    api_instance = payzu_pix.KeysAndDICTApi(api_client)
    post_pix_qrcode_read_request = payzu_pix.PostPixQrcodeReadRequest() # PostPixQrcodeReadRequest | 

    try:
        # Read QR Code
        api_response = api_instance.post_pix_qrcode_read(post_pix_qrcode_read_request)
        print("The response of KeysAndDICTApi->post_pix_qrcode_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysAndDICTApi->post_pix_qrcode_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_pix_qrcode_read_request** | [**PostPixQrcodeReadRequest**](PostPixQrcodeReadRequest.md)|  | 

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | QR Code decoded successfully |  -  |
**400** | Invalid QR Code format |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**424** | Failure at the financial institution |  -  |
**429** | Rate limit exceeded |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

