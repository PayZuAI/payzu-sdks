# WebhooksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteUserWebhook**](WebhooksApi.md#deleteUserWebhook) | **DELETE** /user/webhooks/{id} | Remover webhook |
| [**deleteUserWebhookWithHttpInfo**](WebhooksApi.md#deleteUserWebhookWithHttpInfo) | **DELETE** /user/webhooks/{id} | Remover webhook |
| [**getUserWebhook**](WebhooksApi.md#getUserWebhook) | **GET** /user/webhooks/{id} | Consultar webhook |
| [**getUserWebhookWithHttpInfo**](WebhooksApi.md#getUserWebhookWithHttpInfo) | **GET** /user/webhooks/{id} | Consultar webhook |
| [**getUserWebhookSentDetail**](WebhooksApi.md#getUserWebhookSentDetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado |
| [**getUserWebhookSentDetailWithHttpInfo**](WebhooksApi.md#getUserWebhookSentDetailWithHttpInfo) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado |
| [**getUserWebhooks**](WebhooksApi.md#getUserWebhooks) | **GET** /user/webhooks | Listar webhooks |
| [**getUserWebhooksWithHttpInfo**](WebhooksApi.md#getUserWebhooksWithHttpInfo) | **GET** /user/webhooks | Listar webhooks |
| [**getUserWebhooksSentQuantity**](WebhooksApi.md#getUserWebhooksSentQuantity) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados |
| [**getUserWebhooksSentQuantityWithHttpInfo**](WebhooksApi.md#getUserWebhooksSentQuantityWithHttpInfo) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados |
| [**patchUserWebhook**](WebhooksApi.md#patchUserWebhook) | **PATCH** /user/webhooks/{id} | Atualizar webhook |
| [**patchUserWebhookWithHttpInfo**](WebhooksApi.md#patchUserWebhookWithHttpInfo) | **PATCH** /user/webhooks/{id} | Atualizar webhook |
| [**postUserWebhook**](WebhooksApi.md#postUserWebhook) | **POST** /user/webhooks | Criar webhook |
| [**postUserWebhookWithHttpInfo**](WebhooksApi.md#postUserWebhookWithHttpInfo) | **POST** /user/webhooks | Criar webhook |
| [**postUserWebhookRotateSecret**](WebhooksApi.md#postUserWebhookRotateSecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook |
| [**postUserWebhookRotateSecretWithHttpInfo**](WebhooksApi.md#postUserWebhookRotateSecretWithHttpInfo) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook |



## deleteUserWebhook

> void deleteUserWebhook(id)

Remover webhook

Remove um webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            apiInstance.deleteUserWebhook(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#deleteUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |

### Return type


null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook removido. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## deleteUserWebhookWithHttpInfo

> ApiResponse<Void> deleteUserWebhookWithHttpInfo(id)

Remover webhook

Remove um webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            ApiResponse<Void> response = apiInstance.deleteUserWebhookWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#deleteUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |

### Return type


ApiResponse<Void>

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook removido. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |


## getUserWebhook

> Webhook getUserWebhook(id)

Consultar webhook

Retorna um webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            Webhook result = apiInstance.getUserWebhook(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |

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
| **200** | Webhook. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## getUserWebhookWithHttpInfo

> ApiResponse<Webhook> getUserWebhookWithHttpInfo(id)

Consultar webhook

Retorna um webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            ApiResponse<Webhook> response = apiInstance.getUserWebhookWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |

### Return type

ApiResponse<[**Webhook**](Webhook.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |


## getUserWebhookSentDetail

> SentWebhookDetailResponse getUserWebhookSentDetail(id, callbackId)

Detalhe de callback enviado

Retorna o detalhe de entrega de um callback enviado.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        String callbackId = "cm3w7l9v20001q8f2u6c1y4be"; // String | Id do log de callback.
        try {
            SentWebhookDetailResponse result = apiInstance.getUserWebhookSentDetail(id, callbackId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhookSentDetail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |
| **callbackId** | **String**| Id do log de callback. | |

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
| **200** | Detalhe de entrega do callback. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## getUserWebhookSentDetailWithHttpInfo

> ApiResponse<SentWebhookDetailResponse> getUserWebhookSentDetailWithHttpInfo(id, callbackId)

Detalhe de callback enviado

Retorna o detalhe de entrega de um callback enviado.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        String callbackId = "cm3w7l9v20001q8f2u6c1y4be"; // String | Id do log de callback.
        try {
            ApiResponse<SentWebhookDetailResponse> response = apiInstance.getUserWebhookSentDetailWithHttpInfo(id, callbackId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhookSentDetail");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |
| **callbackId** | **String**| Id do log de callback. | |

### Return type

ApiResponse<[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhe de entrega do callback. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |


## getUserWebhooks

> WebhookListResponse getUserWebhooks(active)

Listar webhooks

Lista os webhooks cadastrados na conta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        Boolean active = true; // Boolean | Filtra pelo status ativo.
        try {
            WebhookListResponse result = apiInstance.getUserWebhooks(active);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **active** | **Boolean**| Filtra pelo status ativo. | [optional] |

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
| **200** | Lista de webhooks. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

## getUserWebhooksWithHttpInfo

> ApiResponse<WebhookListResponse> getUserWebhooksWithHttpInfo(active)

Listar webhooks

Lista os webhooks cadastrados na conta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        Boolean active = true; // Boolean | Filtra pelo status ativo.
        try {
            ApiResponse<WebhookListResponse> response = apiInstance.getUserWebhooksWithHttpInfo(active);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **active** | **Boolean**| Filtra pelo status ativo. | [optional] |

### Return type

ApiResponse<[**WebhookListResponse**](WebhookListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de webhooks. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |


## getUserWebhooksSentQuantity

> SentWebhooksQuantity getUserWebhooksSentQuantity(webhookId)

Contar callbacks enviados

Retorna quantas entregas de webhook foram feitas, opcionalmente filtradas por webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Filtra a contagem por id de webhook.
        try {
            SentWebhooksQuantity result = apiInstance.getUserWebhooksSentQuantity(webhookId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooksSentQuantity");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | **String**| Filtra a contagem por id de webhook. | [optional] |

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
| **200** | Quantidade. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## getUserWebhooksSentQuantityWithHttpInfo

> ApiResponse<SentWebhooksQuantity> getUserWebhooksSentQuantityWithHttpInfo(webhookId)

Contar callbacks enviados

Retorna quantas entregas de webhook foram feitas, opcionalmente filtradas por webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Filtra a contagem por id de webhook.
        try {
            ApiResponse<SentWebhooksQuantity> response = apiInstance.getUserWebhooksSentQuantityWithHttpInfo(webhookId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooksSentQuantity");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | **String**| Filtra a contagem por id de webhook. | [optional] |

### Return type

ApiResponse<[**SentWebhooksQuantity**](SentWebhooksQuantity.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quantidade. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |


## patchUserWebhook

> Webhook patchUserWebhook(id, webhookUpdateRequest)

Atualizar webhook

Atualiza a url, o status ativo ou os eventos de um webhook. Informe pelo menos um campo.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        WebhookUpdateRequest webhookUpdateRequest = new WebhookUpdateRequest(); // WebhookUpdateRequest | 
        try {
            Webhook result = apiInstance.patchUserWebhook(id, webhookUpdateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#patchUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |
| **webhookUpdateRequest** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)|  | |

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
| **200** | Webhook atualizado. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |

## patchUserWebhookWithHttpInfo

> ApiResponse<Webhook> patchUserWebhookWithHttpInfo(id, webhookUpdateRequest)

Atualizar webhook

Atualiza a url, o status ativo ou os eventos de um webhook. Informe pelo menos um campo.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        WebhookUpdateRequest webhookUpdateRequest = new WebhookUpdateRequest(); // WebhookUpdateRequest | 
        try {
            ApiResponse<Webhook> response = apiInstance.patchUserWebhookWithHttpInfo(id, webhookUpdateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#patchUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |
| **webhookUpdateRequest** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)|  | |

### Return type

ApiResponse<[**Webhook**](Webhook.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook atualizado. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |


## postUserWebhook

> WebhookWithSecret postUserWebhook(webhookCreateRequest)

Criar webhook

Cadastra um endpoint de webhook. Se &#x60;generateSecret&#x60; for true, a resposta traz o &#x60;secret&#x60; HMAC (exibido só aqui).

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        WebhookCreateRequest webhookCreateRequest = new WebhookCreateRequest(); // WebhookCreateRequest | 
        try {
            WebhookWithSecret result = apiInstance.postUserWebhook(webhookCreateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookCreateRequest** | [**WebhookCreateRequest**](WebhookCreateRequest.md)|  | |

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
| **201** | Webhook criado. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |

## postUserWebhookWithHttpInfo

> ApiResponse<WebhookWithSecret> postUserWebhookWithHttpInfo(webhookCreateRequest)

Criar webhook

Cadastra um endpoint de webhook. Se &#x60;generateSecret&#x60; for true, a resposta traz o &#x60;secret&#x60; HMAC (exibido só aqui).

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        WebhookCreateRequest webhookCreateRequest = new WebhookCreateRequest(); // WebhookCreateRequest | 
        try {
            ApiResponse<WebhookWithSecret> response = apiInstance.postUserWebhookWithHttpInfo(webhookCreateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookCreateRequest** | [**WebhookCreateRequest**](WebhookCreateRequest.md)|  | |

### Return type

ApiResponse<[**WebhookWithSecret**](WebhookWithSecret.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook criado. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |


## postUserWebhookRotateSecret

> RotateSecretResponse postUserWebhookRotateSecret(id)

Rotacionar segredo do webhook

Gera um novo segredo de assinatura HMAC e invalida o anterior. O novo &#x60;secret&#x60; é exibido só nesta resposta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            RotateSecretResponse result = apiInstance.postUserWebhookRotateSecret(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhookRotateSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |

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
| **200** | Novo segredo. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## postUserWebhookRotateSecretWithHttpInfo

> ApiResponse<RotateSecretResponse> postUserWebhookRotateSecretWithHttpInfo(id)

Rotacionar segredo do webhook

Gera um novo segredo de assinatura HMAC e invalida o anterior. O novo &#x60;secret&#x60; é exibido só nesta resposta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            ApiResponse<RotateSecretResponse> response = apiInstance.postUserWebhookRotateSecretWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhookRotateSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Id do webhook. | |

### Return type

ApiResponse<[**RotateSecretResponse**](RotateSecretResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Novo segredo. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

