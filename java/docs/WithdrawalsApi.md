# WithdrawalsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWithdraw**](WithdrawalsApi.md#getWithdraw) | **GET** /withdraw | Retrieve Withdrawal |
| [**getWithdrawWithHttpInfo**](WithdrawalsApi.md#getWithdrawWithHttpInfo) | **GET** /withdraw | Retrieve Withdrawal |
| [**getWithdrawProof**](WithdrawalsApi.md#getWithdrawProof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**getWithdrawProofWithHttpInfo**](WithdrawalsApi.md#getWithdrawProofWithHttpInfo) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**postWithdraw**](WithdrawalsApi.md#postWithdraw) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**postWithdrawWithHttpInfo**](WithdrawalsApi.md#postWithdrawWithHttpInfo) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**postWithdrawQrcode**](WithdrawalsApi.md#postWithdrawQrcode) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |
| [**postWithdrawQrcodeWithHttpInfo**](WithdrawalsApi.md#postWithdrawQrcodeWithHttpInfo) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |



## getWithdraw

> Transaction getWithdraw(id, clientReference, endToEndId, virtualAccount)

Retrieve Withdrawal

Get the latest status and details of a transaction of the account. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60;. If more than one is provided, all are applied as filters (AND), which may return no record if they do not point to the same transaction.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | Transaction ID.
        String clientReference = "order_12345"; // String | External reference provided when creating the withdrawal.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | Pix end-to-end ID.
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
        try {
            Transaction result = apiInstance.getWithdraw(id, clientReference, endToEndId, virtualAccount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#getWithdraw");
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
| **id** | **String**| Transaction ID. | [optional] |
| **clientReference** | **String**| External reference provided when creating the withdrawal. | [optional] |
| **endToEndId** | **String**| Pix end-to-end ID. | [optional] |
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
| **200** | Current withdrawal state |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **404** | Resource not found |  -  |

## getWithdrawWithHttpInfo

> ApiResponse<Transaction> getWithdrawWithHttpInfo(id, clientReference, endToEndId, virtualAccount)

Retrieve Withdrawal

Get the latest status and details of a transaction of the account. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60;. If more than one is provided, all are applied as filters (AND), which may return no record if they do not point to the same transaction.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | Transaction ID.
        String clientReference = "order_12345"; // String | External reference provided when creating the withdrawal.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | Pix end-to-end ID.
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
        try {
            ApiResponse<Transaction> response = apiInstance.getWithdrawWithHttpInfo(id, clientReference, endToEndId, virtualAccount);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#getWithdraw");
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
| **id** | **String**| Transaction ID. | [optional] |
| **clientReference** | **String**| External reference provided when creating the withdrawal. | [optional] |
| **endToEndId** | **String**| Pix end-to-end ID. | [optional] |
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
| **200** | Current withdrawal state |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **404** | Resource not found |  -  |


## getWithdrawProof

> ProofResponse getWithdrawProof(id, type)

Get Withdrawal Receipt

Returns the transaction receipt. By default (&#x60;type&#x3D;pdf&#x60;) the response is the PDF file; with &#x60;type&#x3D;base64&#x60; it is JSON with the &#x60;base64&#x60; field, the PDF as a data URI.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | Transaction ID.
        String type = "pdf"; // String | Return format.
        try {
            ProofResponse result = apiInstance.getWithdrawProof(id, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#getWithdrawProof");
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
| **id** | **String**| Transaction ID. | |
| **type** | **String**| Return format. | [optional] [default to pdf] [enum: pdf, base64] |

### Return type

[**ProofResponse**](ProofResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Base64 if &#x60;type&#x3D;base64&#x60;, otherwise binary PDF. |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **404** | Resource not found |  -  |
| **422** | Operation refused |  -  |
| **500** | Internal error |  -  |

## getWithdrawProofWithHttpInfo

> ApiResponse<ProofResponse> getWithdrawProofWithHttpInfo(id, type)

Get Withdrawal Receipt

Returns the transaction receipt. By default (&#x60;type&#x3D;pdf&#x60;) the response is the PDF file; with &#x60;type&#x3D;base64&#x60; it is JSON with the &#x60;base64&#x60; field, the PDF as a data URI.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | Transaction ID.
        String type = "pdf"; // String | Return format.
        try {
            ApiResponse<ProofResponse> response = apiInstance.getWithdrawProofWithHttpInfo(id, type);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#getWithdrawProof");
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
| **id** | **String**| Transaction ID. | |
| **type** | **String**| Return format. | [optional] [default to pdf] [enum: pdf, base64] |

### Return type

ApiResponse<[**ProofResponse**](ProofResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Base64 if &#x60;type&#x3D;base64&#x60;, otherwise binary PDF. |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **404** | Resource not found |  -  |
| **422** | Operation refused |  -  |
| **500** | Internal error |  -  |


## postWithdraw

> Transaction postWithdraw(postWithdrawRequest)

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        PostWithdrawRequest postWithdrawRequest = new PostWithdrawRequest(); // PostWithdrawRequest | 
        try {
            Transaction result = apiInstance.postWithdraw(postWithdrawRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#postWithdraw");
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
| **postWithdrawRequest** | [**PostWithdrawRequest**](PostWithdrawRequest.md)|  | |

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
| **200** | Withdrawal created |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |

## postWithdrawWithHttpInfo

> ApiResponse<Transaction> postWithdrawWithHttpInfo(postWithdrawRequest)

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        PostWithdrawRequest postWithdrawRequest = new PostWithdrawRequest(); // PostWithdrawRequest | 
        try {
            ApiResponse<Transaction> response = apiInstance.postWithdrawWithHttpInfo(postWithdrawRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#postWithdraw");
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
| **postWithdrawRequest** | [**PostWithdrawRequest**](PostWithdrawRequest.md)|  | |

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
| **200** | Withdrawal created |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |


## postWithdrawQrcode

> Transaction postWithdrawQrcode(postWithdrawQrcodeRequest)

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If &#x60;amount&#x60; is not provided, the QR Code&#39;s embedded value will be used. PayZu processes both dynamic and static QR Codes.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        PostWithdrawQrcodeRequest postWithdrawQrcodeRequest = new PostWithdrawQrcodeRequest(); // PostWithdrawQrcodeRequest | 
        try {
            Transaction result = apiInstance.postWithdrawQrcode(postWithdrawQrcodeRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#postWithdrawQrcode");
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
| **postWithdrawQrcodeRequest** | [**PostWithdrawQrcodeRequest**](PostWithdrawQrcodeRequest.md)|  | |

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
| **200** | Withdrawal created from QR Code |  -  |
| **400** | Invalid QR Code or missing amount for static QR Code without value |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |

## postWithdrawQrcodeWithHttpInfo

> ApiResponse<Transaction> postWithdrawQrcodeWithHttpInfo(postWithdrawQrcodeRequest)

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If &#x60;amount&#x60; is not provided, the QR Code&#39;s embedded value will be used. PayZu processes both dynamic and static QR Codes.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        PostWithdrawQrcodeRequest postWithdrawQrcodeRequest = new PostWithdrawQrcodeRequest(); // PostWithdrawQrcodeRequest | 
        try {
            ApiResponse<Transaction> response = apiInstance.postWithdrawQrcodeWithHttpInfo(postWithdrawQrcodeRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WithdrawalsApi#postWithdrawQrcode");
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
| **postWithdrawQrcodeRequest** | [**PostWithdrawQrcodeRequest**](PostWithdrawQrcodeRequest.md)|  | |

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
| **200** | Withdrawal created from QR Code |  -  |
| **400** | Invalid QR Code or missing amount for static QR Code without value |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |

