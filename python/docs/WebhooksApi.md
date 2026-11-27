# payzu_pix.WebhooksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user_webhook**](WebhooksApi.md#delete_user_webhook) | **DELETE** /user/webhooks/{id} | Remover webhook
[**get_user_webhook**](WebhooksApi.md#get_user_webhook) | **GET** /user/webhooks/{id} | Consultar webhook
[**get_user_webhook_sent_detail**](WebhooksApi.md#get_user_webhook_sent_detail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado
[**get_user_webhooks**](WebhooksApi.md#get_user_webhooks) | **GET** /user/webhooks | Listar webhooks
[**get_user_webhooks_sent_quantity**](WebhooksApi.md#get_user_webhooks_sent_quantity) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados
[**patch_user_webhook**](WebhooksApi.md#patch_user_webhook) | **PATCH** /user/webhooks/{id} | Atualizar webhook
[**post_user_webhook**](WebhooksApi.md#post_user_webhook) | **POST** /user/webhooks | Criar webhook
[**post_user_webhook_rotate_secret**](WebhooksApi.md#post_user_webhook_rotate_secret) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook


# **delete_user_webhook**
> delete_user_webhook(id)

Remover webhook

Remove um webhook.

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
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Id do webhook.

    try:
        # Remover webhook
        api_instance.delete_user_webhook(id)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do webhook. | 

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Webhook removido. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhook**
> Webhook get_user_webhook(id)

Consultar webhook

Retorna um webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook import Webhook
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Id do webhook.

    try:
        # Consultar webhook
        api_response = api_instance.get_user_webhook(id)
        print("The response of WebhooksApi->get_user_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do webhook. | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhook_sent_detail**
> SentWebhookDetailResponse get_user_webhook_sent_detail(id, callback_id)

Detalhe de callback enviado

Retorna o detalhe de entrega de um callback enviado.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.sent_webhook_detail_response import SentWebhookDetailResponse
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Id do webhook.
    callback_id = 'cm3w7l9v20001q8f2u6c1y4be' # str | Id do log de callback.

    try:
        # Detalhe de callback enviado
        api_response = api_instance.get_user_webhook_sent_detail(id, callback_id)
        print("The response of WebhooksApi->get_user_webhook_sent_detail:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhook_sent_detail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do webhook. | 
 **callback_id** | **str**| Id do log de callback. | 

### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detalhe de entrega do callback. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhooks**
> WebhookListResponse get_user_webhooks(active=active)

Listar webhooks

Lista os webhooks cadastrados na conta.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook_list_response import WebhookListResponse
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    active = true # bool | Filtra pelo status ativo. (optional)

    try:
        # Listar webhooks
        api_response = api_instance.get_user_webhooks(active=active)
        print("The response of WebhooksApi->get_user_webhooks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhooks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| Filtra pelo status ativo. | [optional] 

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lista de webhooks. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_webhooks_sent_quantity**
> SentWebhooksQuantity get_user_webhooks_sent_quantity(webhook_id=webhook_id)

Contar callbacks enviados

Retorna quantas entregas de webhook foram feitas, opcionalmente filtradas por webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.sent_webhooks_quantity import SentWebhooksQuantity
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    webhook_id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Filtra a contagem por id de webhook. (optional)

    try:
        # Contar callbacks enviados
        api_response = api_instance.get_user_webhooks_sent_quantity(webhook_id=webhook_id)
        print("The response of WebhooksApi->get_user_webhooks_sent_quantity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_user_webhooks_sent_quantity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Filtra a contagem por id de webhook. | [optional] 

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quantidade. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_user_webhook**
> Webhook patch_user_webhook(id, webhook_update_request)

Atualizar webhook

Atualiza a url, o status ativo ou os eventos de um webhook. Informe pelo menos um campo.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook import Webhook
from payzu_pix.models.webhook_update_request import WebhookUpdateRequest
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Id do webhook.
    webhook_update_request = payzu_pix.WebhookUpdateRequest() # WebhookUpdateRequest | 

    try:
        # Atualizar webhook
        api_response = api_instance.patch_user_webhook(id, webhook_update_request)
        print("The response of WebhooksApi->patch_user_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->patch_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do webhook. | 
 **webhook_update_request** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook atualizado. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |
**409** | Conflito com o estado atual do recurso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_webhook**
> WebhookWithSecret post_user_webhook(webhook_create_request)

Criar webhook

Cadastra um endpoint de webhook. Se `generateSecret` for true, a resposta traz o `secret` HMAC (exibido só aqui).

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.webhook_create_request import WebhookCreateRequest
from payzu_pix.models.webhook_with_secret import WebhookWithSecret
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    webhook_create_request = payzu_pix.WebhookCreateRequest() # WebhookCreateRequest | 

    try:
        # Criar webhook
        api_response = api_instance.post_user_webhook(webhook_create_request)
        print("The response of WebhooksApi->post_user_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->post_user_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_create_request** | [**WebhookCreateRequest**](WebhookCreateRequest.md)|  | 

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Webhook criado. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**409** | Conflito com o estado atual do recurso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_webhook_rotate_secret**
> RotateSecretResponse post_user_webhook_rotate_secret(id)

Rotacionar segredo do webhook

Gera um novo segredo de assinatura HMAC e invalida o anterior. O novo `secret` é exibido só nesta resposta.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.rotate_secret_response import RotateSecretResponse
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
    api_instance = payzu_pix.WebhooksApi(api_client)
    id = 'cm3w7k1t40000q8f2r5b9x3ad' # str | Id do webhook.

    try:
        # Rotacionar segredo do webhook
        api_response = api_instance.post_user_webhook_rotate_secret(id)
        print("The response of WebhooksApi->post_user_webhook_rotate_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->post_user_webhook_rotate_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do webhook. | 

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Novo segredo. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

