# PixOperationsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPix**](PixOperationsApi.md#getPix) | **GET** /pix | Retrieve Charge |
| [**getPixWithHttpInfo**](PixOperationsApi.md#getPixWithHttpInfo) | **GET** /pix | Retrieve Charge |
| [**getPixQrcode**](PixOperationsApi.md#getPixQrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**getPixQrcodeWithHttpInfo**](PixOperationsApi.md#getPixQrcodeWithHttpInfo) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**getProof**](PixOperationsApi.md#getProof) | **GET** /proof/{id} | Get Transaction Receipt |
| [**getProofWithHttpInfo**](PixOperationsApi.md#getProofWithHttpInfo) | **GET** /proof/{id} | Get Transaction Receipt |
| [**postPix**](PixOperationsApi.md#postPix) | **POST** /pix | Create Charge (Pix deposit) |
| [**postPixWithHttpInfo**](PixOperationsApi.md#postPixWithHttpInfo) | **POST** /pix | Create Charge (Pix deposit) |



## getPix

> Transaction getPix(id, clientReference, endToEndId, virtualAccount)

Retrieve Charge

Get the latest status and details of a transaction of the account. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60; (&#x60;virtualAccount&#x60; is also accepted). When more than one parameter is provided, they are combined as filters (AND).  Token permission: &#x60;DEPOSIT&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260811R4TZ8WD1NC000000"; // String | Transaction ID.
        String clientReference = "order_12345"; // String | External reference provided when creating the charge.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | Pix end-to-end ID.
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
        try {
            Transaction result = apiInstance.getPix(id, clientReference, endToEndId, virtualAccount);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#getPix");
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
| **clientReference** | **String**| External reference provided when creating the charge. | [optional] |
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
| **200** | Current transaction state |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **404** | Resource not found |  -  |

## getPixWithHttpInfo

> ApiResponse<Transaction> getPixWithHttpInfo(id, clientReference, endToEndId, virtualAccount)

Retrieve Charge

Get the latest status and details of a transaction of the account. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60; (&#x60;virtualAccount&#x60; is also accepted). When more than one parameter is provided, they are combined as filters (AND).  Token permission: &#x60;DEPOSIT&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260811R4TZ8WD1NC000000"; // String | Transaction ID.
        String clientReference = "order_12345"; // String | External reference provided when creating the charge.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | Pix end-to-end ID.
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
        try {
            ApiResponse<Transaction> response = apiInstance.getPixWithHttpInfo(id, clientReference, endToEndId, virtualAccount);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#getPix");
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
| **clientReference** | **String**| External reference provided when creating the charge. | [optional] |
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
| **200** | Current transaction state |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **404** | Resource not found |  -  |


## getPixQrcode

> File getPixQrcode(transactionId)

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image  Token permission: &#x60;DEPOSIT&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        try {
            File result = apiInstance.getPixQrcode(transactionId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#getPixQrcode");
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
| **transactionId** | **String**| Transaction ID. | |

### Return type

[**File**](File.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR code image |  -  |
| **400** | Transaction is not a DEPOSIT or has no QR code |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transaction not found |  -  |

## getPixQrcodeWithHttpInfo

> ApiResponse<File> getPixQrcodeWithHttpInfo(transactionId)

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image  Token permission: &#x60;DEPOSIT&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        try {
            ApiResponse<File> response = apiInstance.getPixQrcodeWithHttpInfo(transactionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#getPixQrcode");
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
| **transactionId** | **String**| Transaction ID. | |

### Return type

ApiResponse<[**File**](File.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR code image |  -  |
| **400** | Transaction is not a DEPOSIT or has no QR code |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transaction not found |  -  |


## getProof

> ProofResponse getProof(id, type)

Get Transaction Receipt

Returns the transaction receipt. By default (&#x60;type&#x3D;pdf&#x60;) the response is the PDF file; with &#x60;type&#x3D;base64&#x60; it is JSON with the &#x60;base64&#x60; field, the PDF as a data URI.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        String type = "pdf"; // String | Return format.
        try {
            ProofResponse result = apiInstance.getProof(id, type);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#getProof");
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

## getProofWithHttpInfo

> ApiResponse<ProofResponse> getProofWithHttpInfo(id, type)

Get Transaction Receipt

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
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        String type = "pdf"; // String | Return format.
        try {
            ApiResponse<ProofResponse> response = apiInstance.getProofWithHttpInfo(id, type);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#getProof");
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


## postPix

> Transaction postPix(postPixRequest)

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.  Token permission: &#x60;DEPOSIT&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        PostPixRequest postPixRequest = new PostPixRequest(); // PostPixRequest | 
        try {
            Transaction result = apiInstance.postPix(postPixRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#postPix");
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
| **postPixRequest** | [**PostPixRequest**](PostPixRequest.md)|  | |

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
| **200** | Charge created |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |

## postPixWithHttpInfo

> ApiResponse<Transaction> postPixWithHttpInfo(postPixRequest)

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.  Token permission: &#x60;DEPOSIT&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.PixOperationsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        PostPixRequest postPixRequest = new PostPixRequest(); // PostPixRequest | 
        try {
            ApiResponse<Transaction> response = apiInstance.postPixWithHttpInfo(postPixRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling PixOperationsApi#postPix");
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
| **postPixRequest** | [**PostPixRequest**](PostPixRequest.md)|  | |

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
| **200** | Charge created |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |

