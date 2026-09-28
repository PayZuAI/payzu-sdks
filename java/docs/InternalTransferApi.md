# InternalTransferApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInternalTransfer**](InternalTransferApi.md#getInternalTransfer) | **GET** /internal-transfer | Get internal transfer |
| [**getInternalTransferWithHttpInfo**](InternalTransferApi.md#getInternalTransferWithHttpInfo) | **GET** /internal-transfer | Get internal transfer |
| [**postInternalTransfer**](InternalTransferApi.md#postInternalTransfer) | **POST** /internal-transfer | Create internal transfer |
| [**postInternalTransferWithHttpInfo**](InternalTransferApi.md#postInternalTransferWithHttpInfo) | **POST** /internal-transfer | Create internal transfer |



## getInternalTransfer

> Transaction getInternalTransfer(id, clientReference, virtualAccount)

Get internal transfer

Returns the details of an internal transfer. Provide at least one of &#x60;id&#x60; or &#x60;clientReference&#x60; (&#x60;virtualAccount&#x60; is also accepted). If more than one is provided, all are applied as filters (AND).  Token permission: &#x60;WITHDRAW&#x60;.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InternalTransferApi apiInstance = new InternalTransferApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID
        String clientReference = "order_12345"; // String | External reference
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
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
| **id** | **String**| Transaction ID | [optional] |
| **clientReference** | **String**| External reference | [optional] |
| **virtualAccount** | **String**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

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
| **200** | Transfer details |  -  |
| **400** | Provide either &#x60;id&#x60; or &#x60;clientReference&#x60; |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transfer not found |  -  |

## getInternalTransferWithHttpInfo

> ApiResponse<Transaction> getInternalTransferWithHttpInfo(id, clientReference, virtualAccount)

Get internal transfer

Returns the details of an internal transfer. Provide at least one of &#x60;id&#x60; or &#x60;clientReference&#x60; (&#x60;virtualAccount&#x60; is also accepted). If more than one is provided, all are applied as filters (AND).  Token permission: &#x60;WITHDRAW&#x60;.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InternalTransferApi apiInstance = new InternalTransferApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID
        String clientReference = "order_12345"; // String | External reference
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
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
| **id** | **String**| Transaction ID | [optional] |
| **clientReference** | **String**| External reference | [optional] |
| **virtualAccount** | **String**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

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
| **200** | Transfer details |  -  |
| **400** | Provide either &#x60;id&#x60; or &#x60;clientReference&#x60; |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transfer not found |  -  |


## postInternalTransfer

> Transaction postInternalTransfer(postInternalTransferRequest)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.  Token permission: &#x60;WITHDRAW&#x60;.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
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
| **200** | Transfer completed |  -  |
| **400** | Invalid payload (e.g. payerAccountNumber does not belong to the requester) |  -  |
| **401** | Authentication failure |  -  |
| **403** | allowInternalTransfer disabled or token missing WITHDRAW permission |  -  |
| **404** | Receiver account not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |
| **422** | Insufficient balance / amount below ticket minimum |  -  |
| **429** | Rate limit exceeded |  -  |

## postInternalTransferWithHttpInfo

> ApiResponse<Transaction> postInternalTransferWithHttpInfo(postInternalTransferRequest)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.  Token permission: &#x60;WITHDRAW&#x60;.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
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
| **200** | Transfer completed |  -  |
| **400** | Invalid payload (e.g. payerAccountNumber does not belong to the requester) |  -  |
| **401** | Authentication failure |  -  |
| **403** | allowInternalTransfer disabled or token missing WITHDRAW permission |  -  |
| **404** | Receiver account not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |
| **422** | Insufficient balance / amount below ticket minimum |  -  |
| **429** | Rate limit exceeded |  -  |

