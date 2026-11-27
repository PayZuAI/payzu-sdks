# RefundsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postRefund**](RefundsApi.md#postRefund) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido |
| [**postRefundWithHttpInfo**](RefundsApi.md#postRefundWithHttpInfo) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido |



## postRefund

> TransactionWithRefunds postRefund(transactionId, refundRequest)

Solicitar a devolução de um Pix recebido

Devolve um Pix recebido. Informe &#x60;amount&#x60; para uma devolução parcial, ou omita para devolver o valor total. O processamento é **assíncrono**: a resposta volta com &#x60;refundStatus: PENDING&#x60;; a conclusão é confirmada depois pelo callback.  Envie &#x60;{}&#x60; para devolver o valor total. O corpo só aceita &#x60;amount&#x60;, &#x60;description&#x60; e &#x60;clientReference&#x60;; outro campo é recusado com 400.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.RefundsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        RefundsApi apiInstance = new RefundsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação a devolver.
        RefundRequest refundRequest = new RefundRequest(); // RefundRequest | 
        try {
            TransactionWithRefunds result = apiInstance.postRefund(transactionId, refundRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundsApi#postRefund");
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
| **transactionId** | **String**| ID da transação a devolver. | |
| **refundRequest** | [**RefundRequest**](RefundRequest.md)|  | |

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
| **200** | Devolução enfileirada |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Devolução não permitida |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

## postRefundWithHttpInfo

> ApiResponse<TransactionWithRefunds> postRefundWithHttpInfo(transactionId, refundRequest)

Solicitar a devolução de um Pix recebido

Devolve um Pix recebido. Informe &#x60;amount&#x60; para uma devolução parcial, ou omita para devolver o valor total. O processamento é **assíncrono**: a resposta volta com &#x60;refundStatus: PENDING&#x60;; a conclusão é confirmada depois pelo callback.  Envie &#x60;{}&#x60; para devolver o valor total. O corpo só aceita &#x60;amount&#x60;, &#x60;description&#x60; e &#x60;clientReference&#x60;; outro campo é recusado com 400.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.RefundsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        RefundsApi apiInstance = new RefundsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação a devolver.
        RefundRequest refundRequest = new RefundRequest(); // RefundRequest | 
        try {
            ApiResponse<TransactionWithRefunds> response = apiInstance.postRefundWithHttpInfo(transactionId, refundRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling RefundsApi#postRefund");
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
| **transactionId** | **String**| ID da transação a devolver. | |
| **refundRequest** | [**RefundRequest**](RefundRequest.md)|  | |

### Return type

ApiResponse<[**TransactionWithRefunds**](TransactionWithRefunds.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Devolução enfileirada |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Devolução não permitida |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

