# payzu_pix.WithdrawalsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_withdraw**](WithdrawalsApi.md#get_withdraw) | **GET** /withdraw | Consultar Saque
[**get_withdraw_proof**](WithdrawalsApi.md#get_withdraw_proof) | **GET** /withdraw/proof/{id} | Obter comprovante de saque
[**post_withdraw**](WithdrawalsApi.md#post_withdraw) | **POST** /withdraw | Criar saque (chave Pix)
[**post_withdraw_qrcode**](WithdrawalsApi.md#post_withdraw_qrcode) | **POST** /withdraw/qrcode | Criar Saque usando QR Code


# **get_withdraw**
> Transaction get_withdraw(id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)

Consultar Saque

Retorna o status e os detalhes atuais de uma transação da conta. Informe pelo menos um destes parâmetros: `id`, `clientReference` ou `endToEndId`. Se informar mais de um, todos são aplicados como filtro (AND), o que pode não retornar registro caso não apontem para a mesma transação.

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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    id = 'PAYZU20260817B3PL8SG5WQ000000' # str | ID da transação. (optional)
    client_reference = 'order_12345' # str | Referência externa informada na criação do saque. (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | ID end-to-end do Pix. (optional)
    virtual_account = 'loja-centro-01' # str | Subconta usada na criação. (optional)

    try:
        # Consultar Saque
        api_response = api_instance.get_withdraw(id=id, client_reference=client_reference, end_to_end_id=end_to_end_id, virtual_account=virtual_account)
        print("The response of WithdrawalsApi->get_withdraw:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->get_withdraw: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da transação. | [optional] 
 **client_reference** | **str**| Referência externa informada na criação do saque. | [optional] 
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
**200** | Estado atual do saque |  -  |
**400** | Bad Request |  -  |
**401** | Token Bearer ausente ou inválido |  -  |
**403** |  |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_withdraw_proof**
> ProofResponse get_withdraw_proof(id, type=type)

Obter comprovante de saque

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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    id = 'PAYZU20260817B3PL8SG5WQ000000' # str | ID da transação.
    type = pdf # str | Formato de retorno. (optional) (default to pdf)

    try:
        # Obter comprovante de saque
        api_response = api_instance.get_withdraw_proof(id, type=type)
        print("The response of WithdrawalsApi->get_withdraw_proof:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->get_withdraw_proof: %s\n" % e)
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

# **post_withdraw**
> Transaction post_withdraw(post_withdraw_request)

Criar saque (chave Pix)

Envie um **cash out** Pix para a chave Pix especificada.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_withdraw_request import PostWithdrawRequest
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    post_withdraw_request = payzu_pix.PostWithdrawRequest() # PostWithdrawRequest | 

    try:
        # Criar saque (chave Pix)
        api_response = api_instance.post_withdraw(post_withdraw_request)
        print("The response of WithdrawalsApi->post_withdraw:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->post_withdraw: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_withdraw_request** | [**PostWithdrawRequest**](PostWithdrawRequest.md)|  | 

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
**200** | Saque criado |  -  |
**400** | Bad Request |  -  |
**401** | Token Bearer ausente ou inválido |  -  |
**403** |  |  -  |
**409** | Conflito com o estado atual do recurso |  -  |
**422** | Operação recusada |  -  |
**424** | Falha na instituição financeira |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_withdraw_qrcode**
> Transaction post_withdraw_qrcode(post_withdraw_qrcode_request)

Criar Saque usando QR Code

Realiza o pagamento (cash out) usando um **QR Code Pix** (estático/dinâmico). Se `amount` não for informado, o valor embutido no QR Code será utilizado. PayZu processa QR Code dinâmico e estático.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_withdraw_qrcode_request import PostWithdrawQrcodeRequest
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
    api_instance = payzu_pix.WithdrawalsApi(api_client)
    post_withdraw_qrcode_request = payzu_pix.PostWithdrawQrcodeRequest() # PostWithdrawQrcodeRequest | 

    try:
        # Criar Saque usando QR Code
        api_response = api_instance.post_withdraw_qrcode(post_withdraw_qrcode_request)
        print("The response of WithdrawalsApi->post_withdraw_qrcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WithdrawalsApi->post_withdraw_qrcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_withdraw_qrcode_request** | [**PostWithdrawQrcodeRequest**](PostWithdrawQrcodeRequest.md)|  | 

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
**200** | Saque criado a partir do QR Code |  -  |
**400** | QR Code inválido |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**409** | Conflito com o estado atual do recurso |  -  |
**410** | QR Code vencido ou removido |  -  |
**422** | Operação recusada |  -  |
**424** | Falha na instituição financeira |  -  |
**429** | Limite de requisições excedido |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

