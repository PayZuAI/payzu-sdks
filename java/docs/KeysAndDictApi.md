# KeysAndDictApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPixKey**](KeysAndDictApi.md#getPixKey) | **GET** /pix/key | Consulta de chave Pix no DICT |
| [**getPixKeyWithHttpInfo**](KeysAndDictApi.md#getPixKeyWithHttpInfo) | **GET** /pix/key | Consulta de chave Pix no DICT |
| [**postPixQrcodeRead**](KeysAndDictApi.md#postPixQrcodeRead) | **POST** /pix/qrcode/read | Ler QR Code |
| [**postPixQrcodeReadWithHttpInfo**](KeysAndDictApi.md#postPixQrcodeReadWithHttpInfo) | **POST** /pix/qrcode/read | Ler QR Code |



## getPixKey

> PixKeyInfo getPixKey(pixKey)

Consulta de chave Pix no DICT

Consulta o DICT (Diretório de Identificadores de Contas Transacionais) para obter informações sobre uma chave Pix antes de enviar um pagamento. Retorna os dados do titular da chave e a instituição financeira associada.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        String pixKey = "example@payzu.com.br"; // String | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).
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
| **pixKey** | **String**| A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). | |

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
| **200** | Chave Pix encontrada |  -  |
| **400** | Formato de chave Pix inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Chave Pix não encontrada no DICT |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

## getPixKeyWithHttpInfo

> ApiResponse<PixKeyInfo> getPixKeyWithHttpInfo(pixKey)

Consulta de chave Pix no DICT

Consulta o DICT (Diretório de Identificadores de Contas Transacionais) para obter informações sobre uma chave Pix antes de enviar um pagamento. Retorna os dados do titular da chave e a instituição financeira associada.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        KeysAndDictApi apiInstance = new KeysAndDictApi(defaultClient);
        String pixKey = "example@payzu.com.br"; // String | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).
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
| **pixKey** | **String**| A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). | |

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
| **200** | Chave Pix encontrada |  -  |
| **400** | Formato de chave Pix inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Chave Pix não encontrada no DICT |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |


## postPixQrcodeRead

> QRCodeReadResponse postPixQrcodeRead(postPixQrcodeReadRequest)

Ler QR Code

Decodifica e extrai informações de um QR Code Pix (formato EMV) antes de efetuar um pagamento. Retorna os dados interpretados, incluindo detalhes do recebedor, valor (se presente) e outros metadados do QR Code. PayZu processa QR Code dinâmico e estático.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | QR Code decodificado com sucesso |  -  |
| **400** | Formato de QR Code inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **410** | QR Code vencido ou removido |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

## postPixQrcodeReadWithHttpInfo

> ApiResponse<QRCodeReadResponse> postPixQrcodeReadWithHttpInfo(postPixQrcodeReadRequest)

Ler QR Code

Decodifica e extrai informações de um QR Code Pix (formato EMV) antes de efetuar um pagamento. Retorna os dados interpretados, incluindo detalhes do recebedor, valor (se presente) e outros metadados do QR Code. PayZu processa QR Code dinâmico e estático.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **200** | QR Code decodificado com sucesso |  -  |
| **400** | Formato de QR Code inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **410** | QR Code vencido ou removido |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

