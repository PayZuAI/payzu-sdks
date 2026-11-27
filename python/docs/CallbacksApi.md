# payzu_pix.CallbacksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_callback_secret**](CallbacksApi.md#create_user_callback_secret) | **POST** /user/callbacks/secret | Criar segredo de callback
[**get_user_callback_by_id**](CallbacksApi.md#get_user_callback_by_id) | **GET** /user/callbacks/{id} | Obter Callback
[**get_user_callbacks**](CallbacksApi.md#get_user_callbacks) | **GET** /user/callbacks | Listar Callbacks
[**resend_user_callback_single**](CallbacksApi.md#resend_user_callback_single) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual)
[**resend_user_callbacks**](CallbacksApi.md#resend_user_callbacks) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote)
[**resend_user_callbacks_webhook**](CallbacksApi.md#resend_user_callbacks_webhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook
[**resend_user_callbacks_webhooks**](CallbacksApi.md#resend_user_callbacks_webhooks) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros
[**rotate_user_callback_secret**](CallbacksApi.md#rotate_user_callback_secret) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback


# **create_user_callback_secret**
> CallbackSecretResponse create_user_callback_secret()

Criar segredo de callback

Cria o segredo de callback da conta, usado para assinar as entregas feitas ao callbackUrl da transação. O segredo é devolvido uma única vez e não pode ser lido depois.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_secret_response import CallbackSecretResponse
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
    api_instance = payzu_pix.CallbacksApi(api_client)

    try:
        # Criar segredo de callback
        api_response = api_instance.create_user_callback_secret()
        print("The response of CallbacksApi->create_user_callback_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->create_user_callback_secret: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CallbackSecretResponse**](CallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Criar segredo de callback |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |
**409** | A conta já possui segredo de callback. Use a rota de rotação. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_callback_by_id**
> CallbackDetail get_user_callback_by_id(id)

Obter Callback

Retorna os detalhes de um log de callback específico.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_detail import CallbackDetail
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    id = 'cm3w7l9v20001q8f2u6c1y4be' # str | ID único do callback

    try:
        # Obter Callback
        api_response = api_instance.get_user_callback_by_id(id)
        print("The response of CallbacksApi->get_user_callback_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->get_user_callback_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID único do callback | 

### Return type

[**CallbackDetail**](CallbackDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detalhes do callback |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Callback não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_callbacks**
> CallbackListResponse get_user_callbacks(page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction, id=id, url=url, status=status, transaction_id=transaction_id, has_error=has_error, created_at_from=created_at_from, created_at_to=created_at_to, webhook_id=webhook_id, event_type=event_type)

Listar Callbacks

Retorna uma lista paginada de logs de callback (webhook) das transações do usuário.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.callback_list_response import CallbackListResponse
from payzu_pix.models.webhook_event_type import WebhookEventType
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    page = 1 # int | Número da página. (optional) (default to 1)
    limit = 10 # int | Itens por página. (optional) (default to 10)
    sort_by = createdAt # str | Campo de ordenação. (optional) (default to createdAt)
    sort_direction = desc # str | Direção da ordenação. (optional) (default to desc)
    id = 'cm3w7l9v20001q8f2u6c1y4be' # str | Filtra por ID de callback (optional)
    url = 'https://webhook.cool/' # str | Filtra por callback URL (optional)
    status = 200 # int | Status HTTP devolvido pelo seu endpoint. (optional)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação. (optional)
    has_error = true # bool | Filtra callbacks que apresentaram erro (optional)
    created_at_from = '2026-08-01' # datetime | Data de criação inicial. (optional)
    created_at_to = '2026-08-31' # datetime | Data de criação final. (optional)
    webhook_id = 'webhook_id_example' # str | Id do webhook. (optional)
    event_type = payzu_pix.WebhookEventType() # WebhookEventType | Tipo de evento do webhook. (optional)

    try:
        # Listar Callbacks
        api_response = api_instance.get_user_callbacks(page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction, id=id, url=url, status=status, transaction_id=transaction_id, has_error=has_error, created_at_from=created_at_from, created_at_to=created_at_to, webhook_id=webhook_id, event_type=event_type)
        print("The response of CallbacksApi->get_user_callbacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->get_user_callbacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número da página. | [optional] [default to 1]
 **limit** | **int**| Itens por página. | [optional] [default to 10]
 **sort_by** | **str**| Campo de ordenação. | [optional] [default to createdAt]
 **sort_direction** | **str**| Direção da ordenação. | [optional] [default to desc]
 **id** | **str**| Filtra por ID de callback | [optional] 
 **url** | **str**| Filtra por callback URL | [optional] 
 **status** | **int**| Status HTTP devolvido pelo seu endpoint. | [optional] 
 **transaction_id** | **str**| ID da transação. | [optional] 
 **has_error** | **bool**| Filtra callbacks que apresentaram erro | [optional] 
 **created_at_from** | **datetime**| Data de criação inicial. | [optional] 
 **created_at_to** | **datetime**| Data de criação final. | [optional] 
 **webhook_id** | **str**| Id do webhook. | [optional] 
 **event_type** | [**WebhookEventType**](.md)| Tipo de evento do webhook. | [optional] 

### Return type

[**CallbackListResponse**](CallbackListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lista de callbacks |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callback_single**
> ResendUserCallbackSingle200Response resend_user_callback_single(transaction_id)

Reenviar callback (individual)

Reenvia o callback de uma única transação.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.resend_user_callback_single200_response import ResendUserCallbackSingle200Response
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação.

    try:
        # Reenviar callback (individual)
        api_response = api_instance.resend_user_callback_single(transaction_id)
        print("The response of CallbacksApi->resend_user_callback_single:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callback_single: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| ID da transação. | 

### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reenvio disparado |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Transação sem callbackUrl |  -  |
**422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks**
> ResendUserCallbacks200Response resend_user_callbacks(resend_user_callbacks_request)

Reenviar callbacks (em lote)

Reenvia callbacks em lote para transações que correspondem aos filtros informados.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.resend_user_callbacks200_response import ResendUserCallbacks200Response
from payzu_pix.models.resend_user_callbacks_request import ResendUserCallbacksRequest
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    resend_user_callbacks_request = {"createdAtFrom":"2026-05-05T00:00:00Z","createdAtTo":"2026-05-06T00:00:00Z"} # ResendUserCallbacksRequest | 

    try:
        # Reenviar callbacks (em lote)
        api_response = api_instance.resend_user_callbacks(resend_user_callbacks_request)
        print("The response of CallbacksApi->resend_user_callbacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callbacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resend_user_callbacks_request** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md)|  | 

### Return type

[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reenvio disparado |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Nenhuma transação correspondente |  -  |
**422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks_webhook**
> EnqueuedCallback resend_user_callbacks_webhook(webhook_id)

Reenviar callbacks por webhook

Enfileira o reenvio em lote dos callbacks falhos de um webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.enqueued_callback import EnqueuedCallback
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    webhook_id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Id do webhook.

    try:
        # Reenviar callbacks por webhook
        api_response = api_instance.resend_user_callbacks_webhook(webhook_id)
        print("The response of CallbacksApi->resend_user_callbacks_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callbacks_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Id do webhook. | 

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Webhook não encontrado, inativo ou de outra conta (PZW300), ou nenhum callback falho para os filtros (PZW310). |  -  |
**422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resend_user_callbacks_webhooks**
> EnqueuedCallback resend_user_callbacks_webhooks(resend_webhook_callbacks_request)

Reenviar callbacks de webhook por filtros

Enfileira o reenvio das entregas de webhook que falharam num período. Para cada webhook, transação e evento, vale só a última tentativa de entrega no período, e ela só é reenviada se falhou. Os filtros se aplicam às transações dessas entregas.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.enqueued_callback import EnqueuedCallback
from payzu_pix.models.resend_webhook_callbacks_request import ResendWebhookCallbacksRequest
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
    api_instance = payzu_pix.CallbacksApi(api_client)
    resend_webhook_callbacks_request = payzu_pix.ResendWebhookCallbacksRequest() # ResendWebhookCallbacksRequest | 

    try:
        # Reenviar callbacks de webhook por filtros
        api_response = api_instance.resend_user_callbacks_webhooks(resend_webhook_callbacks_request)
        print("The response of CallbacksApi->resend_user_callbacks_webhooks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->resend_user_callbacks_webhooks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resend_webhook_callbacks_request** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md)|  | 

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Nenhum webhook ativo para os critérios (PZW301), ou nenhum callback falho para os filtros (PZW311). |  -  |
**422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_user_callback_secret**
> RotateCallbackSecretResponse rotate_user_callback_secret()

Rotacionar segredo de callback

Troca o segredo de callback da conta. As entregas passam a ser assinadas com o novo segredo imediatamente.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.rotate_callback_secret_response import RotateCallbackSecretResponse
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
    api_instance = payzu_pix.CallbacksApi(api_client)

    try:
        # Rotacionar segredo de callback
        api_response = api_instance.rotate_user_callback_secret()
        print("The response of CallbacksApi->rotate_user_callback_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallbacksApi->rotate_user_callback_secret: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rotacionar segredo de callback |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |
**404** | A conta não possui segredo de callback para rotacionar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

