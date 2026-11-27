# WithdrawalsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWithdraw**](WithdrawalsApi.md#getWithdraw) | **GET** /withdraw | Consultar Saque |
| [**getWithdrawWithHttpInfo**](WithdrawalsApi.md#getWithdrawWithHttpInfo) | **GET** /withdraw | Consultar Saque |
| [**getWithdrawProof**](WithdrawalsApi.md#getWithdrawProof) | **GET** /withdraw/proof/{id} | Obter comprovante de saque |
| [**getWithdrawProofWithHttpInfo**](WithdrawalsApi.md#getWithdrawProofWithHttpInfo) | **GET** /withdraw/proof/{id} | Obter comprovante de saque |
| [**postWithdraw**](WithdrawalsApi.md#postWithdraw) | **POST** /withdraw | Criar saque (chave Pix) |
| [**postWithdrawWithHttpInfo**](WithdrawalsApi.md#postWithdrawWithHttpInfo) | **POST** /withdraw | Criar saque (chave Pix) |
| [**postWithdrawQrcode**](WithdrawalsApi.md#postWithdrawQrcode) | **POST** /withdraw/qrcode | Criar Saque usando QR Code |
| [**postWithdrawQrcodeWithHttpInfo**](WithdrawalsApi.md#postWithdrawQrcodeWithHttpInfo) | **POST** /withdraw/qrcode | Criar Saque usando QR Code |



## getWithdraw

> Transaction getWithdraw(id, clientReference, endToEndId, virtualAccount)

Consultar Saque

Retorna o status e os detalhes atuais de uma transação da conta. Informe pelo menos um destes parâmetros: &#x60;id&#x60;, &#x60;clientReference&#x60; ou &#x60;endToEndId&#x60;. Se informar mais de um, todos são aplicados como filtro (AND), o que pode não retornar registro caso não apontem para a mesma transação.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | ID da transação.
        String clientReference = "order_12345"; // String | Referência externa informada na criação do saque.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
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
| **id** | **String**| ID da transação. | [optional] |
| **clientReference** | **String**| Referência externa informada na criação do saque. | [optional] |
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
| **200** | Estado atual do saque |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **404** | Recurso não encontrado |  -  |

## getWithdrawWithHttpInfo

> ApiResponse<Transaction> getWithdrawWithHttpInfo(id, clientReference, endToEndId, virtualAccount)

Consultar Saque

Retorna o status e os detalhes atuais de uma transação da conta. Informe pelo menos um destes parâmetros: &#x60;id&#x60;, &#x60;clientReference&#x60; ou &#x60;endToEndId&#x60;. Se informar mais de um, todos são aplicados como filtro (AND), o que pode não retornar registro caso não apontem para a mesma transação.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | ID da transação.
        String clientReference = "order_12345"; // String | Referência externa informada na criação do saque.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
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
| **id** | **String**| ID da transação. | [optional] |
| **clientReference** | **String**| Referência externa informada na criação do saque. | [optional] |
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
| **200** | Estado atual do saque |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **404** | Recurso não encontrado |  -  |


## getWithdrawProof

> ProofResponse getWithdrawProof(id, type)

Obter comprovante de saque

Retorna o comprovante da transação. Por padrão (&#x60;type&#x3D;pdf&#x60;) a resposta é o arquivo PDF; com &#x60;type&#x3D;base64&#x60; é um JSON com o campo &#x60;base64&#x60;, o PDF como data URI.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | ID da transação.
        String type = "pdf"; // String | Formato de retorno.
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

## getWithdrawProofWithHttpInfo

> ApiResponse<ProofResponse> getWithdrawProofWithHttpInfo(id, type)

Obter comprovante de saque

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
import br.com.payzu.pix.api.WithdrawalsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WithdrawalsApi apiInstance = new WithdrawalsApi(defaultClient);
        String id = "PAYZU20260817B3PL8SG5WQ000000"; // String | ID da transação.
        String type = "pdf"; // String | Formato de retorno.
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


## postWithdraw

> Transaction postWithdraw(postWithdrawRequest)

Criar saque (chave Pix)

Envie um **cash out** Pix para a chave Pix especificada.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | Saque criado |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |

## postWithdrawWithHttpInfo

> ApiResponse<Transaction> postWithdrawWithHttpInfo(postWithdrawRequest)

Criar saque (chave Pix)

Envie um **cash out** Pix para a chave Pix especificada.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | Saque criado |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |


## postWithdrawQrcode

> Transaction postWithdrawQrcode(postWithdrawQrcodeRequest)

Criar Saque usando QR Code

Realiza o pagamento (cash out) usando um **QR Code Pix** (estático/dinâmico). Se &#x60;amount&#x60; não for informado, o valor embutido no QR Code será utilizado. PayZu processa QR Code dinâmico e estático.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | Saque criado a partir do QR Code |  -  |
| **400** | QR Code inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **410** | QR Code vencido ou removido |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |

## postWithdrawQrcodeWithHttpInfo

> ApiResponse<Transaction> postWithdrawQrcodeWithHttpInfo(postWithdrawQrcodeRequest)

Criar Saque usando QR Code

Realiza o pagamento (cash out) usando um **QR Code Pix** (estático/dinâmico). Se &#x60;amount&#x60; não for informado, o valor embutido no QR Code será utilizado. PayZu processa QR Code dinâmico e estático.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | Saque criado a partir do QR Code |  -  |
| **400** | QR Code inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **410** | QR Code vencido ou removido |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |

