# payzu_pix.AllowlistApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_whitelist_cnpj**](AllowlistApi.md#get_user_whitelist_cnpj) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados
[**get_user_whitelist_pix_key**](AllowlistApi.md#get_user_whitelist_pix_key) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas


# **get_user_whitelist_cnpj**
> GetUserWhitelistCnpj200Response get_user_whitelist_cnpj(var_from=var_from, to=to, active=active, cursor=cursor, limit=limit)

Listar CNPJs autorizados

Lista os CNPJs autorizados na lista de permissão da conta.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_whitelist_cnpj200_response import GetUserWhitelistCnpj200Response
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
    api_instance = payzu_pix.AllowlistApi(api_client)
    var_from = '2026-08-01T00:00:00Z' # datetime |  (optional)
    to = '2026-08-08T23:59:59Z' # datetime |  (optional)
    active = true # bool |  (optional)
    cursor = 'cmf0w1t3l0001qk08cnpj0001' # str |  (optional)
    limit = 20 # int |  (optional) (default to 20)

    try:
        # Listar CNPJs autorizados
        api_response = api_instance.get_user_whitelist_cnpj(var_from=var_from, to=to, active=active, cursor=cursor, limit=limit)
        print("The response of AllowlistApi->get_user_whitelist_cnpj:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllowlistApi->get_user_whitelist_cnpj: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **datetime**|  | [optional] 
 **to** | **datetime**|  | [optional] 
 **active** | **bool**|  | [optional] 
 **cursor** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]

### Return type

[**GetUserWhitelistCnpj200Response**](GetUserWhitelistCnpj200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CNPJs retornados com sucesso. |  -  |
**400** | Requisição inválida |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_whitelist_pix_key**
> GetUserWhitelistPixKey200Response get_user_whitelist_pix_key(var_from=var_from, to=to, active=active, cursor=cursor, limit=limit)

Listar chaves Pix autorizadas

Lista as chaves Pix autorizadas na lista de permissão da conta.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_whitelist_pix_key200_response import GetUserWhitelistPixKey200Response
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
    api_instance = payzu_pix.AllowlistApi(api_client)
    var_from = '2026-08-01T00:00:00Z' # datetime |  (optional)
    to = '2026-08-08T23:59:59Z' # datetime |  (optional)
    active = true # bool |  (optional)
    cursor = 'cmf0w1t3l0001qk08pixk0001' # str |  (optional)
    limit = 20 # int |  (optional) (default to 20)

    try:
        # Listar chaves Pix autorizadas
        api_response = api_instance.get_user_whitelist_pix_key(var_from=var_from, to=to, active=active, cursor=cursor, limit=limit)
        print("The response of AllowlistApi->get_user_whitelist_pix_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllowlistApi->get_user_whitelist_pix_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **datetime**|  | [optional] 
 **to** | **datetime**|  | [optional] 
 **active** | **bool**|  | [optional] 
 **cursor** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]

### Return type

[**GetUserWhitelistPixKey200Response**](GetUserWhitelistPixKey200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chaves PIX retornadas com sucesso. |  -  |
**400** | Requisição inválida |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

