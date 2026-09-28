# RefundsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postRefund**](RefundsApi.md#postRefund) | **POST** /refund/{transactionId} | Refund a Pix |
| [**postRefundWithHttpInfo**](RefundsApi.md#postRefundWithHttpInfo) | **POST** /refund/{transactionId} | Refund a Pix |



## postRefund

> TransactionWithRefunds postRefund(transactionId, refundRequest)

Refund a Pix

Refund a received Pix charge. Provide &#x60;amount&#x60; for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with &#x60;refundStatus: PENDING&#x60;; completion is confirmed later by webhook.  Send &#x60;{}&#x60; to refund the full amount.  Token permission: &#x60;WITHDRAW&#x60;.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        RefundsApi apiInstance = new RefundsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID of the transaction to refund.
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
| **transactionId** | **String**| ID of the transaction to refund. | |
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
| **200** | Refund accepted and enqueued (asynchronous). |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |
| **422** | Refund not allowed for this transaction or amount. |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

## postRefundWithHttpInfo

> ApiResponse<TransactionWithRefunds> postRefundWithHttpInfo(transactionId, refundRequest)

Refund a Pix

Refund a received Pix charge. Provide &#x60;amount&#x60; for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with &#x60;refundStatus: PENDING&#x60;; completion is confirmed later by webhook.  Send &#x60;{}&#x60; to refund the full amount.  Token permission: &#x60;WITHDRAW&#x60;.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        RefundsApi apiInstance = new RefundsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID of the transaction to refund.
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
| **transactionId** | **String**| ID of the transaction to refund. | |
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
| **200** | Refund accepted and enqueued (asynchronous). |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |
| **422** | Refund not allowed for this transaction or amount. |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

