# payzu_pix.RefundsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_refund**](RefundsApi.md#post_refund) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido


# **post_refund**
> TransactionWithRefunds post_refund(transaction_id, refund_request)

Solicitar a devolução de um Pix recebido

Devolve um Pix recebido. Informe `amount` para uma devolução parcial, ou omita para devolver o valor total. O processamento é **assíncrono**: a resposta volta com `refundStatus: PENDING`; a conclusão é confirmada depois pelo callback.

Envie `{}` para devolver o valor total. O corpo só aceita `amount`, `description` e `clientReference`; outro campo é recusado com 400.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.refund_request import RefundRequest
from payzu_pix.models.transaction_with_refunds import TransactionWithRefunds
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
    api_instance = payzu_pix.RefundsApi(api_client)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação a devolver.
    refund_request = payzu_pix.RefundRequest() # RefundRequest | 

    try:
        # Solicitar a devolução de um Pix recebido
        api_response = api_instance.post_refund(transaction_id, refund_request)
        print("The response of RefundsApi->post_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundsApi->post_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| ID da transação a devolver. | 
 **refund_request** | [**RefundRequest**](RefundRequest.md)|  | 

### Return type

[**TransactionWithRefunds**](TransactionWithRefunds.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Devolução enfileirada |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |
**409** | Conflito com o estado atual do recurso |  -  |
**422** | Devolução não permitida |  -  |
**424** | Falha na instituição financeira |  -  |
**429** | Limite de requisições excedido |  -  |
**500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

