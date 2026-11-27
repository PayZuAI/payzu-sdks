# PixOperationsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPix**](PixOperationsApi.md#getPix) | **GET** /pix | Recuperar Cobrança |
| [**getPixWithHttpInfo**](PixOperationsApi.md#getPixWithHttpInfo) | **GET** /pix | Recuperar Cobrança |
| [**getPixQrcode**](PixOperationsApi.md#getPixQrcode) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG) |
| [**getPixQrcodeWithHttpInfo**](PixOperationsApi.md#getPixQrcodeWithHttpInfo) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG) |
| [**getProof**](PixOperationsApi.md#getProof) | **GET** /proof/{id} | Obter comprovante da transação |
| [**getProofWithHttpInfo**](PixOperationsApi.md#getProofWithHttpInfo) | **GET** /proof/{id} | Obter comprovante da transação |
| [**postPix**](PixOperationsApi.md#postPix) | **POST** /pix | Criar Cobrança (depósito Pix) |
| [**postPixWithHttpInfo**](PixOperationsApi.md#postPixWithHttpInfo) | **POST** /pix | Criar Cobrança (depósito Pix) |



## getPix

> Transaction getPix(id, clientReference, endToEndId, virtualAccount)

Recuperar Cobrança

Obtém o status e os detalhes mais recentes de uma transação da conta. Informe pelo menos um dentre &#x60;id&#x60;, &#x60;clientReference&#x60; ou &#x60;endToEndId&#x60; (&#x60;virtualAccount&#x60; também é aceito). Ao informar mais de um parâmetro, todos são combinados como filtros (AND).

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260811R4TZ8WD1NC000000"; // String | ID da transação.
        String clientReference = "order_12345"; // String | Referência externa fornecida na criação da cobrança.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
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
| **id** | **String**| ID da transação. | [optional] |
| **clientReference** | **String**| Referência externa fornecida na criação da cobrança. | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
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
| **200** | Estado atual da transação |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **404** | Recurso não encontrado |  -  |

## getPixWithHttpInfo

> ApiResponse<Transaction> getPixWithHttpInfo(id, clientReference, endToEndId, virtualAccount)

Recuperar Cobrança

Obtém o status e os detalhes mais recentes de uma transação da conta. Informe pelo menos um dentre &#x60;id&#x60;, &#x60;clientReference&#x60; ou &#x60;endToEndId&#x60; (&#x60;virtualAccount&#x60; também é aceito). Ao informar mais de um parâmetro, todos são combinados como filtros (AND).

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260811R4TZ8WD1NC000000"; // String | ID da transação.
        String clientReference = "order_12345"; // String | Referência externa fornecida na criação da cobrança.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
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
| **id** | **String**| ID da transação. | [optional] |
| **clientReference** | **String**| Referência externa fornecida na criação da cobrança. | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
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
| **200** | Estado atual da transação |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **404** | Recurso não encontrado |  -  |


## getPixQrcode

> File getPixQrcode(transactionId)

Renderiza o QR Code Pix (PNG)

Renderiza o QR Code Pix de um depósito como uma imagem PNG binária

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
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
| **transactionId** | **String**| ID da transação. | |

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
| **200** | Imagem do QR Code |  -  |
| **400** | Transação sem QR Code |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação não encontrada |  -  |

## getPixQrcodeWithHttpInfo

> ApiResponse<File> getPixQrcodeWithHttpInfo(transactionId)

Renderiza o QR Code Pix (PNG)

Renderiza o QR Code Pix de um depósito como uma imagem PNG binária

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
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
| **transactionId** | **String**| ID da transação. | |

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
| **200** | Imagem do QR Code |  -  |
| **400** | Transação sem QR Code |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação não encontrada |  -  |


## getProof

> ProofResponse getProof(id, type)

Obter comprovante da transação

Retorna o comprovante da transação. Por padrão (&#x60;type&#x3D;pdf&#x60;) a resposta é o arquivo PDF; com &#x60;type&#x3D;base64&#x60; é um JSON com o campo &#x60;base64&#x60;, o PDF como data URI.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        String type = "pdf"; // String | Formato de retorno.
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
| **id** | **String**| ID da transação. | |
| **type** | **String**| Formato de retorno. | [optional] [default to pdf] [enum: pdf, base64] |

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
| **200** | Comprovante em PDF ou base64 |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **422** | Operação recusada |  -  |
| **500** | Erro interno |  -  |

## getProofWithHttpInfo

> ApiResponse<ProofResponse> getProofWithHttpInfo(id, type)

Obter comprovante da transação

Retorna o comprovante da transação. Por padrão (&#x60;type&#x3D;pdf&#x60;) a resposta é o arquivo PDF; com &#x60;type&#x3D;base64&#x60; é um JSON com o campo &#x60;base64&#x60;, o PDF como data URI.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        PixOperationsApi apiInstance = new PixOperationsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        String type = "pdf"; // String | Formato de retorno.
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
| **id** | **String**| ID da transação. | |
| **type** | **String**| Formato de retorno. | [optional] [default to pdf] [enum: pdf, base64] |

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
| **200** | Comprovante em PDF ou base64 |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **422** | Operação recusada |  -  |
| **500** | Erro interno |  -  |


## postPix

> Transaction postPix(postPixRequest)

Criar Cobrança (depósito Pix)

Crie um novo **depósito** Pix (cobrança). Retorna o QR Code e os detalhes da transação.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | Cobrança criada |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |

## postPixWithHttpInfo

> ApiResponse<Transaction> postPixWithHttpInfo(postPixRequest)

Criar Cobrança (depósito Pix)

Crie um novo **depósito** Pix (cobrança). Retorna o QR Code e os detalhes da transação.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | Cobrança criada |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |

