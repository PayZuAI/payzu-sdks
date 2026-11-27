# InternalTransferApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInternalTransfer**](InternalTransferApi.md#getInternalTransfer) | **GET** /internal-transfer | Obter transferência interna |
| [**getInternalTransferWithHttpInfo**](InternalTransferApi.md#getInternalTransferWithHttpInfo) | **GET** /internal-transfer | Obter transferência interna |
| [**postInternalTransfer**](InternalTransferApi.md#postInternalTransfer) | **POST** /internal-transfer | Criar transferência interna |
| [**postInternalTransferWithHttpInfo**](InternalTransferApi.md#postInternalTransferWithHttpInfo) | **POST** /internal-transfer | Criar transferência interna |



## getInternalTransfer

> Transaction getInternalTransfer(id, clientReference, virtualAccount)

Obter transferência interna

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: &#x60;id&#x60; ou &#x60;clientReference&#x60; (também aceita &#x60;virtualAccount&#x60;). Se informar mais de um, todos são aplicados como filtro (AND).

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InternalTransferApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InternalTransferApi apiInstance = new InternalTransferApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação
        String clientReference = "order_12345"; // String | Referência externa
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
        try {
            Transaction result = apiInstance.getInternalTransfer(id, clientReference, virtualAccount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InternalTransferApi#getInternalTransfer");
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
| **id** | **String**| ID da transação | [optional] |
| **clientReference** | **String**| Referência externa | [optional] |
| **virtualAccount** | **String**| Subconta usada na criação. | [optional] |

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
| **200** | Detalhes da transferência |  -  |
| **400** | Informe &#x60;id&#x60; ou &#x60;clientReference&#x60; |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transferência não encontrada |  -  |

## getInternalTransferWithHttpInfo

> ApiResponse<Transaction> getInternalTransferWithHttpInfo(id, clientReference, virtualAccount)

Obter transferência interna

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: &#x60;id&#x60; ou &#x60;clientReference&#x60; (também aceita &#x60;virtualAccount&#x60;). Se informar mais de um, todos são aplicados como filtro (AND).

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InternalTransferApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InternalTransferApi apiInstance = new InternalTransferApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação
        String clientReference = "order_12345"; // String | Referência externa
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
        try {
            ApiResponse<Transaction> response = apiInstance.getInternalTransferWithHttpInfo(id, clientReference, virtualAccount);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InternalTransferApi#getInternalTransfer");
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
| **id** | **String**| ID da transação | [optional] |
| **clientReference** | **String**| Referência externa | [optional] |
| **virtualAccount** | **String**| Subconta usada na criação. | [optional] |

### Return type

ApiResponse<[**Transaction**](Transaction.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da transferência |  -  |
| **400** | Informe &#x60;id&#x60; ou &#x60;clientReference&#x60; |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transferência não encontrada |  -  |


## postInternalTransfer

> Transaction postInternalTransfer(postInternalTransferRequest)

Criar transferência interna

Envia fundos para outra conta PayZu usando seu accountNumber de 6 dígitos. Liquida instantaneamente dentro da PayZu.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InternalTransferApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InternalTransferApi apiInstance = new InternalTransferApi(defaultClient);
        PostInternalTransferRequest postInternalTransferRequest = new PostInternalTransferRequest(); // PostInternalTransferRequest | 
        try {
            Transaction result = apiInstance.postInternalTransfer(postInternalTransferRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InternalTransferApi#postInternalTransfer");
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
| **postInternalTransferRequest** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md)|  | |

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
| **200** | Transferência concluída |  -  |
| **400** | Payload inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Sem permissão para transferir |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Saldo insuficiente |  -  |
| **429** | Limite de requisições excedido |  -  |

## postInternalTransferWithHttpInfo

> ApiResponse<Transaction> postInternalTransferWithHttpInfo(postInternalTransferRequest)

Criar transferência interna

Envia fundos para outra conta PayZu usando seu accountNumber de 6 dígitos. Liquida instantaneamente dentro da PayZu.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InternalTransferApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InternalTransferApi apiInstance = new InternalTransferApi(defaultClient);
        PostInternalTransferRequest postInternalTransferRequest = new PostInternalTransferRequest(); // PostInternalTransferRequest | 
        try {
            ApiResponse<Transaction> response = apiInstance.postInternalTransferWithHttpInfo(postInternalTransferRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InternalTransferApi#postInternalTransfer");
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
| **postInternalTransferRequest** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md)|  | |

### Return type

ApiResponse<[**Transaction**](Transaction.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transferência concluída |  -  |
| **400** | Payload inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Sem permissão para transferir |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Saldo insuficiente |  -  |
| **429** | Limite de requisições excedido |  -  |

