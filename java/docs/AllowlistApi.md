# AllowlistApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserWhitelistCnpj**](AllowlistApi.md#getUserWhitelistCnpj) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados |
| [**getUserWhitelistCnpjWithHttpInfo**](AllowlistApi.md#getUserWhitelistCnpjWithHttpInfo) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados |
| [**getUserWhitelistPixKey**](AllowlistApi.md#getUserWhitelistPixKey) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas |
| [**getUserWhitelistPixKeyWithHttpInfo**](AllowlistApi.md#getUserWhitelistPixKeyWithHttpInfo) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas |



## getUserWhitelistCnpj

> GetUserWhitelistCnpj200Response getUserWhitelistCnpj(from, to, active, cursor, limit)

Listar CNPJs autorizados

Lista os CNPJs autorizados na lista de permissão da conta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.AllowlistApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        AllowlistApi apiInstance = new AllowlistApi(defaultClient);
        OffsetDateTime from = OffsetDateTime.parse("2026-08-01T00:00:00Z"); // OffsetDateTime | 
        OffsetDateTime to = OffsetDateTime.parse("2026-08-08T23:59:59Z"); // OffsetDateTime | 
        Boolean active = true; // Boolean | 
        String cursor = "cmf0w1t3l0001qk08cnpj0001"; // String | 
        Integer limit = 20; // Integer | 
        try {
            GetUserWhitelistCnpj200Response result = apiInstance.getUserWhitelistCnpj(from, to, active, cursor, limit);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AllowlistApi#getUserWhitelistCnpj");
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
| **from** | **OffsetDateTime**|  | [optional] |
| **to** | **OffsetDateTime**|  | [optional] |
| **active** | **Boolean**|  | [optional] |
| **cursor** | **String**|  | [optional] |
| **limit** | **Integer**|  | [optional] [default to 20] |

### Return type

[**GetUserWhitelistCnpj200Response**](GetUserWhitelistCnpj200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CNPJs retornados com sucesso. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## getUserWhitelistCnpjWithHttpInfo

> ApiResponse<GetUserWhitelistCnpj200Response> getUserWhitelistCnpjWithHttpInfo(from, to, active, cursor, limit)

Listar CNPJs autorizados

Lista os CNPJs autorizados na lista de permissão da conta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.AllowlistApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        AllowlistApi apiInstance = new AllowlistApi(defaultClient);
        OffsetDateTime from = OffsetDateTime.parse("2026-08-01T00:00:00Z"); // OffsetDateTime | 
        OffsetDateTime to = OffsetDateTime.parse("2026-08-08T23:59:59Z"); // OffsetDateTime | 
        Boolean active = true; // Boolean | 
        String cursor = "cmf0w1t3l0001qk08cnpj0001"; // String | 
        Integer limit = 20; // Integer | 
        try {
            ApiResponse<GetUserWhitelistCnpj200Response> response = apiInstance.getUserWhitelistCnpjWithHttpInfo(from, to, active, cursor, limit);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AllowlistApi#getUserWhitelistCnpj");
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
| **from** | **OffsetDateTime**|  | [optional] |
| **to** | **OffsetDateTime**|  | [optional] |
| **active** | **Boolean**|  | [optional] |
| **cursor** | **String**|  | [optional] |
| **limit** | **Integer**|  | [optional] [default to 20] |

### Return type

ApiResponse<[**GetUserWhitelistCnpj200Response**](GetUserWhitelistCnpj200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CNPJs retornados com sucesso. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |


## getUserWhitelistPixKey

> GetUserWhitelistPixKey200Response getUserWhitelistPixKey(from, to, active, cursor, limit)

Listar chaves Pix autorizadas

Lista as chaves Pix autorizadas na lista de permissão da conta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.AllowlistApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        AllowlistApi apiInstance = new AllowlistApi(defaultClient);
        OffsetDateTime from = OffsetDateTime.parse("2026-08-01T00:00:00Z"); // OffsetDateTime | 
        OffsetDateTime to = OffsetDateTime.parse("2026-08-08T23:59:59Z"); // OffsetDateTime | 
        Boolean active = true; // Boolean | 
        String cursor = "cmf0w1t3l0001qk08pixk0001"; // String | 
        Integer limit = 20; // Integer | 
        try {
            GetUserWhitelistPixKey200Response result = apiInstance.getUserWhitelistPixKey(from, to, active, cursor, limit);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AllowlistApi#getUserWhitelistPixKey");
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
| **from** | **OffsetDateTime**|  | [optional] |
| **to** | **OffsetDateTime**|  | [optional] |
| **active** | **Boolean**|  | [optional] |
| **cursor** | **String**|  | [optional] |
| **limit** | **Integer**|  | [optional] [default to 20] |

### Return type

[**GetUserWhitelistPixKey200Response**](GetUserWhitelistPixKey200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chaves PIX retornadas com sucesso. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## getUserWhitelistPixKeyWithHttpInfo

> ApiResponse<GetUserWhitelistPixKey200Response> getUserWhitelistPixKeyWithHttpInfo(from, to, active, cursor, limit)

Listar chaves Pix autorizadas

Lista as chaves Pix autorizadas na lista de permissão da conta.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.AllowlistApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        AllowlistApi apiInstance = new AllowlistApi(defaultClient);
        OffsetDateTime from = OffsetDateTime.parse("2026-08-01T00:00:00Z"); // OffsetDateTime | 
        OffsetDateTime to = OffsetDateTime.parse("2026-08-08T23:59:59Z"); // OffsetDateTime | 
        Boolean active = true; // Boolean | 
        String cursor = "cmf0w1t3l0001qk08pixk0001"; // String | 
        Integer limit = 20; // Integer | 
        try {
            ApiResponse<GetUserWhitelistPixKey200Response> response = apiInstance.getUserWhitelistPixKeyWithHttpInfo(from, to, active, cursor, limit);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling AllowlistApi#getUserWhitelistPixKey");
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
| **from** | **OffsetDateTime**|  | [optional] |
| **to** | **OffsetDateTime**|  | [optional] |
| **active** | **Boolean**|  | [optional] |
| **cursor** | **String**|  | [optional] |
| **limit** | **Integer**|  | [optional] [default to 20] |

### Return type

ApiResponse<[**GetUserWhitelistPixKey200Response**](GetUserWhitelistPixKey200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chaves PIX retornadas com sucesso. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

