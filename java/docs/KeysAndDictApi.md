# KeysAndDictApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPixKey**](KeysAndDictApi.md#getPixKey) | **GET** /pix/key | Pix key lookup (DICT) |
| [**getPixKeyWithHttpInfo**](KeysAndDictApi.md#getPixKeyWithHttpInfo) | **GET** /pix/key | Pix key lookup (DICT) |
| [**getUserDict**](KeysAndDictApi.md#getUserDict) | **GET** /user/dict | Resolve DICT key |
| [**getUserDictWithHttpInfo**](KeysAndDictApi.md#getUserDictWithHttpInfo) | **GET** /user/dict | Resolve DICT key |
| [**postPixQrcodeRead**](KeysAndDictApi.md#postPixQrcodeRead) | **POST** /pix/qrcode/read | Read QR Code |
| [**postPixQrcodeReadWithHttpInfo**](KeysAndDictApi.md#postPixQrcodeReadWithHttpInfo) | **POST** /pix/qrcode/read | Read QR Code |



## getPixKey

> PixKeyInfo getPixKey(pixKey)

Pix key lookup (DICT)

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner&#39;s details and associated financial institution.  Token permission: &#x60;DEPOSIT&#x60; or &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.KeysAndDictApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        String pixKey = "example@payzu.com.br"; // String | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).
        try {
            PixKeyInfo result = apiInstance.getPixKey(pixKey);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling KeysAndDictApi#getPixKey");
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
| **pixKey** | **String**| The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | |

### Return type

[**PixKeyInfo**](PixKeyInfo.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pix key information retrieved successfully |  -  |
| **400** | Invalid Pix key format |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Pix key not found in DICT |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

## getPixKeyWithHttpInfo

> ApiResponse<PixKeyInfo> getPixKeyWithHttpInfo(pixKey)

Pix key lookup (DICT)

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner&#39;s details and associated financial institution.  Token permission: &#x60;DEPOSIT&#x60; or &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.KeysAndDictApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        String pixKey = "example@payzu.com.br"; // String | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).
        try {
            ApiResponse<PixKeyInfo> response = apiInstance.getPixKeyWithHttpInfo(pixKey);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling KeysAndDictApi#getPixKey");
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
| **pixKey** | **String**| The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | |

### Return type

ApiResponse<[**PixKeyInfo**](PixKeyInfo.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pix key information retrieved successfully |  -  |
| **400** | Invalid Pix key format |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Pix key not found in DICT |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |


## getUserDict

> DictConsultResponse getUserDict(key)

Resolve DICT key

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.KeysAndDictApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        String key = "john.doe@example.com"; // String | Pix key to look up (CPF, CNPJ, email, phone or EVP).
        try {
            DictConsultResponse result = apiInstance.getUserDict(key);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling KeysAndDictApi#getUserDict");
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
| **key** | **String**| Pix key to look up (CPF, CNPJ, email, phone or EVP). | |

### Return type

[**DictConsultResponse**](DictConsultResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key holder details. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

## getUserDictWithHttpInfo

> ApiResponse<DictConsultResponse> getUserDictWithHttpInfo(key)

Resolve DICT key

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.KeysAndDictApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        String key = "john.doe@example.com"; // String | Pix key to look up (CPF, CNPJ, email, phone or EVP).
        try {
            ApiResponse<DictConsultResponse> response = apiInstance.getUserDictWithHttpInfo(key);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling KeysAndDictApi#getUserDict");
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
| **key** | **String**| Pix key to look up (CPF, CNPJ, email, phone or EVP). | |

### Return type

ApiResponse<[**DictConsultResponse**](DictConsultResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key holder details. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |


## postPixQrcodeRead

> QRCodeReadResponse postPixQrcodeRead(postPixQrcodeReadRequest)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.  Token permission: &#x60;DEPOSIT&#x60; or &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.KeysAndDictApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        PostPixQrcodeReadRequest postPixQrcodeReadRequest = new PostPixQrcodeReadRequest(); // PostPixQrcodeReadRequest | 
        try {
            QRCodeReadResponse result = apiInstance.postPixQrcodeRead(postPixQrcodeReadRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling KeysAndDictApi#postPixQrcodeRead");
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
| **postPixQrcodeReadRequest** | [**PostPixQrcodeReadRequest**](PostPixQrcodeReadRequest.md)|  | |

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR Code decoded successfully |  -  |
| **400** | Invalid QR Code format |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

## postPixQrcodeReadWithHttpInfo

> ApiResponse<QRCodeReadResponse> postPixQrcodeReadWithHttpInfo(postPixQrcodeReadRequest)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.  Token permission: &#x60;DEPOSIT&#x60; or &#x60;WITHDRAW&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.KeysAndDictApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        PostPixQrcodeReadRequest postPixQrcodeReadRequest = new PostPixQrcodeReadRequest(); // PostPixQrcodeReadRequest | 
        try {
            ApiResponse<QRCodeReadResponse> response = apiInstance.postPixQrcodeReadWithHttpInfo(postPixQrcodeReadRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling KeysAndDictApi#postPixQrcodeRead");
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
| **postPixQrcodeReadRequest** | [**PostPixQrcodeReadRequest**](PostPixQrcodeReadRequest.md)|  | |

### Return type

ApiResponse<[**QRCodeReadResponse**](QRCodeReadResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR Code decoded successfully |  -  |
| **400** | Invalid QR Code format |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

