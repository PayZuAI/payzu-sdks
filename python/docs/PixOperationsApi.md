# payzu_pix.PixOperationsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pix**](PixOperationsApi.md#get_pix) | **GET** /pix | Recuperar Cobrança
[**get_pix_qrcode**](PixOperationsApi.md#get_pix_qrcode) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG)
[**get_proof**](PixOperationsApi.md#get_proof) | **GET** /proof/{id} | Obter comprovante da transação
[**post_pix**](PixOperationsApi.md#post_pix) | **POST** /pix | Criar Cobrança (depósito Pix)


# **get_pix**
> Transaction get_pix(id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)

Recuperar Cobrança

Obtém o status e os detalhes mais recentes de uma transação da conta. Informe pelo menos um dentre `id`, `clientReference` ou `endToEndId` (`virtualAccount` também é aceito). Ao informar mais de um parâmetro, todos são combinados como filtros (AND).

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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    id = 'PAYZU20260811R4TZ8WD1NC000000' # str | ID da transação. (optional)
    client_reference = 'order_12345' # str | Referência externa fornecida na criação da cobrança. (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | ID end-to-end do Pix. (optional)
    virtual_account = 'loja-centro-01' # str | Subconta usada na criação. (optional)

    try:
        # Recuperar Cobrança
        api_response = api_instance.get_pix(id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)
        print("The response of PixOperationsApi->get_pix:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->get_pix: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da transação. | [optional] 
 **client_reference** | **str**| Referência externa fornecida na criação da cobrança. | [optional] 
 **end_to_end_id** | **str**| ID end-to-end do Pix. | [optional] 
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
**200** | Estado atual da transação |  -  |
**400** | Bad Request |  -  |
**401** | Token Bearer ausente ou inválido |  -  |
**403** |  |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pix_qrcode**
> bytes get_pix_qrcode(transaction_id)

Renderiza o QR Code Pix (PNG)

Renderiza o QR Code Pix de um depósito como uma imagem PNG binária

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação.

    try:
        # Renderiza o QR Code Pix (PNG)
        api_response = api_instance.get_pix_qrcode(transaction_id)
        print("The response of PixOperationsApi->get_pix_qrcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->get_pix_qrcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| ID da transação. | 

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
**200** | Imagem do QR Code |  -  |
**400** | Transação sem QR Code |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Transação não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_proof**
> ProofResponse get_proof(id, type=type)

Obter comprovante da transação

Retorna o comprovante da transação. Por padrão (`type=pdf`) a resposta é o arquivo PDF; com `type=base64` é um JSON com o campo `base64`, o PDF como data URI.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.proof_response import ProofResponse
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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação.
    type = pdf # str | Formato de retorno. (optional) (default to pdf)

    try:
        # Obter comprovante da transação
        api_response = api_instance.get_proof(id, type=type)
        print("The response of PixOperationsApi->get_proof:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PixOperationsApi->get_proof: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da transação. | 
 **type** | **str**| Formato de retorno. | [optional] [default to pdf]

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
**200** | Comprovante em PDF ou base64 |  -  |
**400** | Bad Request |  -  |
**401** | Token Bearer ausente ou inválido |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |
**422** | Operação recusada |  -  |
**500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pix**
> Transaction post_pix(post_pix_request)

Criar Cobrança (depósito Pix)

Crie um novo **depósito** Pix (cobrança). Retorna o QR Code e os detalhes da transação.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_pix_request import PostPixRequest
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
    api_instance = payzu_pix.PixOperationsApi(api_client)
    post_pix_request = payzu_pix.PostPixRequest() # PostPixRequest | 

    try:
        # Criar Cobrança (depósito Pix)
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
**200** | Cobrança criada |  -  |
**400** | Bad Request |  -  |
**401** | Token Bearer ausente ou inválido |  -  |
**403** |  |  -  |
**422** | Operação recusada |  -  |
**424** | Falha na instituição financeira |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

