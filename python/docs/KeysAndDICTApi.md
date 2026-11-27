# payzu_pix.KeysAndDICTApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_pix_key**](KeysAndDICTApi.md#get_pix_key) | **GET** /pix/key | Consulta de chave Pix no DICT
[**post_pix_qrcode_read**](KeysAndDICTApi.md#post_pix_qrcode_read) | **POST** /pix/qrcode/read | Ler QR Code


# **get_pix_key**
> PixKeyInfo get_pix_key(pix_key)

Consulta de chave Pix no DICT

Consulta o DICT (Diretório de Identificadores de Contas Transacionais) para obter informações sobre uma chave Pix antes de enviar um pagamento. Retorna os dados do titular da chave e a instituição financeira associada.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.pix_key_info import PixKeyInfo
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
    api_instance = payzu_pix.KeysAndDICTApi(api_client)
    pix_key = 'example@payzu.com.br' # str | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).

    try:
        # Consulta de chave Pix no DICT
        api_response = api_instance.get_pix_key(pix_key)
        print("The response of KeysAndDICTApi->get_pix_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeysAndDICTApi->get_pix_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pix_key** | **str**| A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). | 

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
**200** | Chave Pix encontrada |  -  |
**400** | Formato de chave Pix inválido |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Chave Pix não encontrada no DICT |  -  |
**422** | Operação recusada |  -  |
**424** | Falha na instituição financeira |  -  |
**429** | Limite de requisições excedido |  -  |
**500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pix_qrcode_read**
> QRCodeReadResponse post_pix_qrcode_read(post_pix_qrcode_read_request)

Ler QR Code

Decodifica e extrai informações de um QR Code Pix (formato EMV) antes de efetuar um pagamento. Retorna os dados interpretados, incluindo detalhes do recebedor, valor (se presente) e outros metadados do QR Code. PayZu processa QR Code dinâmico e estático.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_pix_qrcode_read_request import PostPixQrcodeReadRequest
from payzu_pix.models.qr_code_read_response import QRCodeReadResponse
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
    api_instance = payzu_pix.KeysAndDICTApi(api_client)
    post_pix_qrcode_read_request = payzu_pix.PostPixQrcodeReadRequest() # PostPixQrcodeReadRequest | 

    try:
        # Ler QR Code
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
**200** | QR Code decodificado com sucesso |  -  |
**400** | Formato de QR Code inválido |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**410** | QR Code vencido ou removido |  -  |
**424** | Falha na instituição financeira |  -  |
**429** | Limite de requisições excedido |  -  |
**500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

