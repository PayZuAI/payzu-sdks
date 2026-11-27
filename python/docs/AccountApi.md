# payzu_pix.AccountApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user**](AccountApi.md#get_user) | **GET** /user | Informações da conta
[**get_user_balance**](AccountApi.md#get_user_balance) | **GET** /user/balance | Saldo da conta
[**get_user_pix_keys**](AccountApi.md#get_user_pix_keys) | **GET** /user/pix-keys | Chave Pix de recebimento da conta


# **get_user**
> GetUser200Response get_user()

Informações da conta

Perfil da conta, limites e regras de tarifas.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user200_response import GetUser200Response
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.AccountApi(api_client)

    try:
        # Informações da conta
        api_response = api_instance.get_user()
        print("The response of AccountApi->get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUser200Response**](GetUser200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dados da conta |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_balance**
> GetUserBalance200Response get_user_balance()

Saldo da conta

Saldos disponíveis e bloqueados.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_balance200_response import GetUserBalance200Response
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.AccountApi(api_client)

    try:
        # Saldo da conta
        api_response = api_instance.get_user_balance()
        print("The response of AccountApi->get_user_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_user_balance: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserBalance200Response**](GetUserBalance200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Saldos |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_pix_keys**
> GetUserPixKeys200Response get_user_pix_keys()

Chave Pix de recebimento da conta

Devolve a chave Pix de recebimento da conta, com o titular e a instituição da conta dessa chave.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_pix_keys200_response import GetUserPixKeys200Response
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.AccountApi(api_client)

    try:
        # Chave Pix de recebimento da conta
        api_response = api_instance.get_user_pix_keys()
        print("The response of AccountApi->get_user_pix_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_user_pix_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserPixKeys200Response**](GetUserPixKeys200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chave encontrada |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |
**404** | Chave não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

