# CallbacksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserCallbackSecret**](CallbacksApi.md#createUserCallbackSecret) | **POST** /user/callbacks/secret | Criar segredo de callback |
| [**createUserCallbackSecretWithHttpInfo**](CallbacksApi.md#createUserCallbackSecretWithHttpInfo) | **POST** /user/callbacks/secret | Criar segredo de callback |
| [**getUserCallbackById**](CallbacksApi.md#getUserCallbackById) | **GET** /user/callbacks/{id} | Obter Callback |
| [**getUserCallbackByIdWithHttpInfo**](CallbacksApi.md#getUserCallbackByIdWithHttpInfo) | **GET** /user/callbacks/{id} | Obter Callback |
| [**getUserCallbacks**](CallbacksApi.md#getUserCallbacks) | **GET** /user/callbacks | Listar Callbacks |
| [**getUserCallbacksWithHttpInfo**](CallbacksApi.md#getUserCallbacksWithHttpInfo) | **GET** /user/callbacks | Listar Callbacks |
| [**resendUserCallbackSingle**](CallbacksApi.md#resendUserCallbackSingle) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual) |
| [**resendUserCallbackSingleWithHttpInfo**](CallbacksApi.md#resendUserCallbackSingleWithHttpInfo) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual) |
| [**resendUserCallbacks**](CallbacksApi.md#resendUserCallbacks) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote) |
| [**resendUserCallbacksWithHttpInfo**](CallbacksApi.md#resendUserCallbacksWithHttpInfo) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote) |
| [**resendUserCallbacksWebhook**](CallbacksApi.md#resendUserCallbacksWebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook |
| [**resendUserCallbacksWebhookWithHttpInfo**](CallbacksApi.md#resendUserCallbacksWebhookWithHttpInfo) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook |
| [**resendUserCallbacksWebhooks**](CallbacksApi.md#resendUserCallbacksWebhooks) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros |
| [**resendUserCallbacksWebhooksWithHttpInfo**](CallbacksApi.md#resendUserCallbacksWebhooksWithHttpInfo) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros |
| [**rotateUserCallbackSecret**](CallbacksApi.md#rotateUserCallbackSecret) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback |
| [**rotateUserCallbackSecretWithHttpInfo**](CallbacksApi.md#rotateUserCallbackSecretWithHttpInfo) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback |



## createUserCallbackSecret

> CallbackSecretResponse createUserCallbackSecret()

Criar segredo de callback

Cria o segredo de callback da conta, usado para assinar as entregas feitas ao callbackUrl da transação. O segredo é devolvido uma única vez e não pode ser lido depois.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            CallbackSecretResponse result = apiInstance.createUserCallbackSecret();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#createUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
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
| **201** | Criar segredo de callback |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **409** | A conta já possui segredo de callback. Use a rota de rotação. |  -  |

## createUserCallbackSecretWithHttpInfo

> ApiResponse<CallbackSecretResponse> createUserCallbackSecretWithHttpInfo()

Criar segredo de callback

Cria o segredo de callback da conta, usado para assinar as entregas feitas ao callbackUrl da transação. O segredo é devolvido uma única vez e não pode ser lido depois.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            ApiResponse<CallbackSecretResponse> response = apiInstance.createUserCallbackSecretWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#createUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**CallbackSecretResponse**](CallbackSecretResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Criar segredo de callback |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **409** | A conta já possui segredo de callback. Use a rota de rotação. |  -  |


## getUserCallbackById

> CallbackDetail getUserCallbackById(id)

Obter Callback

Retorna os detalhes de um log de callback específico.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | ID único do callback
        try {
            CallbackDetail result = apiInstance.getUserCallbackById(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbackById");
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
| **id** | **String**| ID único do callback | |

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
| **200** | Detalhes do callback |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Callback não encontrado |  -  |

## getUserCallbackByIdWithHttpInfo

> ApiResponse<CallbackDetail> getUserCallbackByIdWithHttpInfo(id)

Obter Callback

Retorna os detalhes de um log de callback específico.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | ID único do callback
        try {
            ApiResponse<CallbackDetail> response = apiInstance.getUserCallbackByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbackById");
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
| **id** | **String**| ID único do callback | |

### Return type

ApiResponse<[**CallbackDetail**](CallbackDetail.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes do callback |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Callback não encontrado |  -  |


## getUserCallbacks

> CallbackListResponse getUserCallbacks(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType)

Listar Callbacks

Retorna uma lista paginada de logs de callback (webhook) das transações do usuário.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | Filtra por ID de callback
        String url = "https://webhook.cool/"; // String | Filtra por callback URL
        Integer status = 200; // Integer | Status HTTP devolvido pelo seu endpoint.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        Boolean hasError = true; // Boolean | Filtra callbacks que apresentaram erro
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Data de criação inicial.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Data de criação final.
        String webhookId = "webhookId_example"; // String | Id do webhook.
        WebhookEventType eventType = WebhookEventType.fromValue("TRANSACTION_PENDING"); // WebhookEventType | Tipo de evento do webhook.
        try {
            CallbackListResponse result = apiInstance.getUserCallbacks(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbacks");
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
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, status] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |
| **id** | **String**| Filtra por ID de callback | [optional] |
| **url** | **String**| Filtra por callback URL | [optional] |
| **status** | **Integer**| Status HTTP devolvido pelo seu endpoint. | [optional] |
| **transactionId** | **String**| ID da transação. | [optional] |
| **hasError** | **Boolean**| Filtra callbacks que apresentaram erro | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Data de criação inicial. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Data de criação final. | [optional] |
| **webhookId** | **String**| Id do webhook. | [optional] |
| **eventType** | [**WebhookEventType**](.md)| Tipo de evento do webhook. | [optional] [enum: TRANSACTION_PENDING, TRANSACTION_COMPLETED, TRANSACTION_CANCELED, TRANSACTION_WAITING_FOR_REFUND, TRANSACTION_REFUNDED, TRANSACTION_EXPIRED, TRANSACTION_ERROR, TRANSACTION_SUSPECTED_FRAUD, TRANSACTION_SUSPECTED_FRAUD_REVERSAL, INFRACTION_CHANGED] |

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
| **200** | Lista de callbacks |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## getUserCallbacksWithHttpInfo

> ApiResponse<CallbackListResponse> getUserCallbacksWithHttpInfo(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType)

Listar Callbacks

Retorna uma lista paginada de logs de callback (webhook) das transações do usuário.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | Filtra por ID de callback
        String url = "https://webhook.cool/"; // String | Filtra por callback URL
        Integer status = 200; // Integer | Status HTTP devolvido pelo seu endpoint.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        Boolean hasError = true; // Boolean | Filtra callbacks que apresentaram erro
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Data de criação inicial.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Data de criação final.
        String webhookId = "webhookId_example"; // String | Id do webhook.
        WebhookEventType eventType = WebhookEventType.fromValue("TRANSACTION_PENDING"); // WebhookEventType | Tipo de evento do webhook.
        try {
            ApiResponse<CallbackListResponse> response = apiInstance.getUserCallbacksWithHttpInfo(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbacks");
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
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, status] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |
| **id** | **String**| Filtra por ID de callback | [optional] |
| **url** | **String**| Filtra por callback URL | [optional] |
| **status** | **Integer**| Status HTTP devolvido pelo seu endpoint. | [optional] |
| **transactionId** | **String**| ID da transação. | [optional] |
| **hasError** | **Boolean**| Filtra callbacks que apresentaram erro | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Data de criação inicial. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Data de criação final. | [optional] |
| **webhookId** | **String**| Id do webhook. | [optional] |
| **eventType** | [**WebhookEventType**](.md)| Tipo de evento do webhook. | [optional] [enum: TRANSACTION_PENDING, TRANSACTION_COMPLETED, TRANSACTION_CANCELED, TRANSACTION_WAITING_FOR_REFUND, TRANSACTION_REFUNDED, TRANSACTION_EXPIRED, TRANSACTION_ERROR, TRANSACTION_SUSPECTED_FRAUD, TRANSACTION_SUSPECTED_FRAUD_REVERSAL, INFRACTION_CHANGED] |

### Return type

ApiResponse<[**CallbackListResponse**](CallbackListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de callbacks |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |


## resendUserCallbackSingle

> ResendUserCallbackSingle200Response resendUserCallbackSingle(transactionId)

Reenviar callback (individual)

Reenvia o callback de uma única transação.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        try {
            ResendUserCallbackSingle200Response result = apiInstance.resendUserCallbackSingle(transactionId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbackSingle");
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
| **transactionId** | **String**| ID da transação. | |

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
| **200** | Reenvio disparado |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação sem callbackUrl |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

## resendUserCallbackSingleWithHttpInfo

> ApiResponse<ResendUserCallbackSingle200Response> resendUserCallbackSingleWithHttpInfo(transactionId)

Reenviar callback (individual)

Reenvia o callback de uma única transação.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        try {
            ApiResponse<ResendUserCallbackSingle200Response> response = apiInstance.resendUserCallbackSingleWithHttpInfo(transactionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbackSingle");
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
| **transactionId** | **String**| ID da transação. | |

### Return type

ApiResponse<[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reenvio disparado |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação sem callbackUrl |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |


## resendUserCallbacks

> ResendUserCallbacks200Response resendUserCallbacks(resendUserCallbacksRequest)

Reenviar callbacks (em lote)

Reenvia callbacks em lote para transações que correspondem aos filtros informados.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendUserCallbacksRequest resendUserCallbacksRequest = new ResendUserCallbacksRequest(); // ResendUserCallbacksRequest | 
        try {
            ResendUserCallbacks200Response result = apiInstance.resendUserCallbacks(resendUserCallbacksRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacks");
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
| **resendUserCallbacksRequest** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md)|  | |

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
| **200** | Reenvio disparado |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Nenhuma transação correspondente |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

## resendUserCallbacksWithHttpInfo

> ApiResponse<ResendUserCallbacks200Response> resendUserCallbacksWithHttpInfo(resendUserCallbacksRequest)

Reenviar callbacks (em lote)

Reenvia callbacks em lote para transações que correspondem aos filtros informados.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendUserCallbacksRequest resendUserCallbacksRequest = new ResendUserCallbacksRequest(); // ResendUserCallbacksRequest | 
        try {
            ApiResponse<ResendUserCallbacks200Response> response = apiInstance.resendUserCallbacksWithHttpInfo(resendUserCallbacksRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacks");
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
| **resendUserCallbacksRequest** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md)|  | |

### Return type

ApiResponse<[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reenvio disparado |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Nenhuma transação correspondente |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |


## resendUserCallbacksWebhook

> EnqueuedCallback resendUserCallbacksWebhook(webhookId)

Reenviar callbacks por webhook

Enfileira o reenvio em lote dos callbacks falhos de um webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            EnqueuedCallback result = apiInstance.resendUserCallbacksWebhook(webhookId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhook");
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
| **webhookId** | **String**| Id do webhook. | |

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
| **200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Webhook não encontrado, inativo ou de outra conta (PZW300), ou nenhum callback falho para os filtros (PZW310). |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

## resendUserCallbacksWebhookWithHttpInfo

> ApiResponse<EnqueuedCallback> resendUserCallbacksWebhookWithHttpInfo(webhookId)

Reenviar callbacks por webhook

Enfileira o reenvio em lote dos callbacks falhos de um webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Id do webhook.
        try {
            ApiResponse<EnqueuedCallback> response = apiInstance.resendUserCallbacksWebhookWithHttpInfo(webhookId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhook");
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
| **webhookId** | **String**| Id do webhook. | |

### Return type

ApiResponse<[**EnqueuedCallback**](EnqueuedCallback.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Webhook não encontrado, inativo ou de outra conta (PZW300), ou nenhum callback falho para os filtros (PZW310). |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |


## resendUserCallbacksWebhooks

> EnqueuedCallback resendUserCallbacksWebhooks(resendWebhookCallbacksRequest)

Reenviar callbacks de webhook por filtros

Enfileira o reenvio das entregas de webhook que falharam num período. Para cada webhook, transação e evento, vale só a última tentativa de entrega no período, e ela só é reenviada se falhou. Os filtros se aplicam às transações dessas entregas.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendWebhookCallbacksRequest resendWebhookCallbacksRequest = new ResendWebhookCallbacksRequest(); // ResendWebhookCallbacksRequest | 
        try {
            EnqueuedCallback result = apiInstance.resendUserCallbacksWebhooks(resendWebhookCallbacksRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhooks");
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
| **resendWebhookCallbacksRequest** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md)|  | |

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
| **200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Nenhum webhook ativo para os critérios (PZW301), ou nenhum callback falho para os filtros (PZW311). |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

## resendUserCallbacksWebhooksWithHttpInfo

> ApiResponse<EnqueuedCallback> resendUserCallbacksWebhooksWithHttpInfo(resendWebhookCallbacksRequest)

Reenviar callbacks de webhook por filtros

Enfileira o reenvio das entregas de webhook que falharam num período. Para cada webhook, transação e evento, vale só a última tentativa de entrega no período, e ela só é reenviada se falhou. Os filtros se aplicam às transações dessas entregas.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendWebhookCallbacksRequest resendWebhookCallbacksRequest = new ResendWebhookCallbacksRequest(); // ResendWebhookCallbacksRequest | 
        try {
            ApiResponse<EnqueuedCallback> response = apiInstance.resendUserCallbacksWebhooksWithHttpInfo(resendWebhookCallbacksRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhooks");
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
| **resendWebhookCallbacksRequest** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md)|  | |

### Return type

ApiResponse<[**EnqueuedCallback**](EnqueuedCallback.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Nenhum webhook ativo para os critérios (PZW301), ou nenhum callback falho para os filtros (PZW311). |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |


## rotateUserCallbackSecret

> RotateCallbackSecretResponse rotateUserCallbackSecret()

Rotacionar segredo de callback

Troca o segredo de callback da conta. As entregas passam a ser assinadas com o novo segredo imediatamente.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            RotateCallbackSecretResponse result = apiInstance.rotateUserCallbackSecret();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#rotateUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
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
| **200** | Rotacionar segredo de callback |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **404** | A conta não possui segredo de callback para rotacionar. |  -  |

## rotateUserCallbackSecretWithHttpInfo

> ApiResponse<RotateCallbackSecretResponse> rotateUserCallbackSecretWithHttpInfo()

Rotacionar segredo de callback

Troca o segredo de callback da conta. As entregas passam a ser assinadas com o novo segredo imediatamente.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            ApiResponse<RotateCallbackSecretResponse> response = apiInstance.rotateUserCallbackSecretWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#rotateUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rotacionar segredo de callback |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **404** | A conta não possui segredo de callback para rotacionar. |  -  |

