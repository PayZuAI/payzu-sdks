# payzu_pix.InternalTransferApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_internal_transfer**](InternalTransferApi.md#get_internal_transfer) | **GET** /internal-transfer | Obter transferência interna
[**post_internal_transfer**](InternalTransferApi.md#post_internal_transfer) | **POST** /internal-transfer | Criar transferência interna


# **get_internal_transfer**
> Transaction get_internal_transfer(id=id, client_reference=client_reference, virtual_account=virtual_account)

Obter transferência interna

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: `id` ou `clientReference` (também aceita `virtualAccount`). Se informar mais de um, todos são aplicados como filtro (AND).

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.transaction import Transaction
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
    api_instance = payzu_pix.InternalTransferApi(api_client)
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação (optional)
    client_reference = 'order_12345' # str | Referência externa (optional)
    virtual_account = 'loja-centro-01' # str | Subconta usada na criação. (optional)

    try:
        # Obter transferência interna
        api_response = api_instance.get_internal_transfer(id=id, client_reference=client_reference, virtual_account=virtual_account)
        print("The response of InternalTransferApi->get_internal_transfer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalTransferApi->get_internal_transfer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da transação | [optional] 
 **client_reference** | **str**| Referência externa | [optional] 
 **virtual_account** | **str**| Subconta usada na criação. | [optional] 

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
**200** | Detalhes da transferência |  -  |
**400** | Informe &#x60;id&#x60; ou &#x60;clientReference&#x60; |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Transferência não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_internal_transfer**
> Transaction post_internal_transfer(post_internal_transfer_request)

Criar transferência interna

Envia fundos para outra conta PayZu usando seu accountNumber de 6 dígitos. Liquida instantaneamente dentro da PayZu.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_internal_transfer_request import PostInternalTransferRequest
from payzu_pix.models.transaction import Transaction
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
    api_instance = payzu_pix.InternalTransferApi(api_client)
    post_internal_transfer_request = payzu_pix.PostInternalTransferRequest() # PostInternalTransferRequest | 

    try:
        # Criar transferência interna
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
**200** | Transferência concluída |  -  |
**400** | Payload inválido |  -  |
**401** | Falha de autenticação |  -  |
**403** | Sem permissão para transferir |  -  |
**409** | Conflito com o estado atual do recurso |  -  |
**422** | Saldo insuficiente |  -  |
**429** | Limite de requisições excedido |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

