# InfractionsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInfractions**](InfractionsApi.md#getInfractions) | **GET** /user/infractions | Listar infrações |
| [**getInfractionsWithHttpInfo**](InfractionsApi.md#getInfractionsWithHttpInfo) | **GET** /user/infractions | Listar infrações |
| [**getInfractionsById**](InfractionsApi.md#getInfractionsById) | **GET** /user/infractions/{id} | Obter Infração |
| [**getInfractionsByIdWithHttpInfo**](InfractionsApi.md#getInfractionsByIdWithHttpInfo) | **GET** /user/infractions/{id} | Obter Infração |
| [**getInfractionsDefenseById**](InfractionsApi.md#getInfractionsDefenseById) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa |
| [**getInfractionsDefenseByIdWithHttpInfo**](InfractionsApi.md#getInfractionsDefenseByIdWithHttpInfo) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa |
| [**getInfractionsDefenses**](InfractionsApi.md#getInfractionsDefenses) | **GET** /user/infractions/{id}/defenses | Listar Defesas |
| [**getInfractionsDefensesWithHttpInfo**](InfractionsApi.md#getInfractionsDefensesWithHttpInfo) | **GET** /user/infractions/{id}/defenses | Listar Defesas |
| [**postInfractionsDefense**](InfractionsApi.md#postInfractionsDefense) | **POST** /user/infractions/{id}/defenses | Criar Defesa |
| [**postInfractionsDefenseWithHttpInfo**](InfractionsApi.md#postInfractionsDefenseWithHttpInfo) | **POST** /user/infractions/{id}/defenses | Criar Defesa |



## getInfractions

> InfractionListResponse getInfractions(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol)

Listar infrações

Lista todas as infrações do usuário autenticado com paginação e filtros.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String status = "OPEN"; // String | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED`
        String type = "REFUND_REQUEST"; // String | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED`
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Valor mínimo.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Valor máximo.
        String analysisResult = "AGREED"; // String | AnalysisResult separados por vírgula: AGREED, DISAGREED.
        String reportedBy = "DEBITED_PARTICIPANT"; // String | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT`
        String participantDocument = "12345678901"; // String | CPF ou CNPJ do participante.
        String participantName = "John Doe"; // String | Nome do participante.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
        OffsetDateTime reportedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: reportedAt a partir de.
        OffsetDateTime reportedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: reportedAt até.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: createdAt a partir de.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: createdAt até.
        OffsetDateTime expiresAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: expiresAt a partir de.
        OffsetDateTime expiresAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: expiresAt até.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: updatedAt a partir de.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: updatedAt até.
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Filtro por ID da infração.
        String protocol = "2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210"; // String | Filtro por protocolo.
        try {
            InfractionListResponse result = apiInstance.getInfractions(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractions");
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
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **status** | **String**| Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | [optional] |
| **type** | **String**| Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
| **transactionId** | **String**| ID da transação. | [optional] |
| **amountMin** | **BigDecimal**| Valor mínimo. | [optional] |
| **amountMax** | **BigDecimal**| Valor máximo. | [optional] |
| **analysisResult** | **String**| AnalysisResult separados por vírgula: AGREED, DISAGREED. | [optional] |
| **reportedBy** | **String**| Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | [optional] |
| **participantDocument** | **String**| CPF ou CNPJ do participante. | [optional] |
| **participantName** | **String**| Nome do participante. | [optional] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |
| **reportedAtFrom** | **OffsetDateTime**| Filtro: reportedAt a partir de. | [optional] |
| **reportedAtTo** | **OffsetDateTime**| Filtro: reportedAt até. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filtro: createdAt a partir de. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filtro: createdAt até. | [optional] |
| **expiresAtFrom** | **OffsetDateTime**| Filtro: expiresAt a partir de. | [optional] |
| **expiresAtTo** | **OffsetDateTime**| Filtro: expiresAt até. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filtro: updatedAt a partir de. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filtro: updatedAt até. | [optional] |
| **id** | **String**| Filtro por ID da infração. | [optional] |
| **protocol** | **String**| Filtro por protocolo. | [optional] |

### Return type

[**InfractionListResponse**](InfractionListResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de infrações com paginação |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## getInfractionsWithHttpInfo

> ApiResponse<InfractionListResponse> getInfractionsWithHttpInfo(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol)

Listar infrações

Lista todas as infrações do usuário autenticado com paginação e filtros.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String status = "OPEN"; // String | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED`
        String type = "REFUND_REQUEST"; // String | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED`
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Valor mínimo.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Valor máximo.
        String analysisResult = "AGREED"; // String | AnalysisResult separados por vírgula: AGREED, DISAGREED.
        String reportedBy = "DEBITED_PARTICIPANT"; // String | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT`
        String participantDocument = "12345678901"; // String | CPF ou CNPJ do participante.
        String participantName = "John Doe"; // String | Nome do participante.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
        OffsetDateTime reportedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: reportedAt a partir de.
        OffsetDateTime reportedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: reportedAt até.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: createdAt a partir de.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: createdAt até.
        OffsetDateTime expiresAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: expiresAt a partir de.
        OffsetDateTime expiresAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: expiresAt até.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: updatedAt a partir de.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: updatedAt até.
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Filtro por ID da infração.
        String protocol = "2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210"; // String | Filtro por protocolo.
        try {
            ApiResponse<InfractionListResponse> response = apiInstance.getInfractionsWithHttpInfo(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractions");
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
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **status** | **String**| Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | [optional] |
| **type** | **String**| Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
| **transactionId** | **String**| ID da transação. | [optional] |
| **amountMin** | **BigDecimal**| Valor mínimo. | [optional] |
| **amountMax** | **BigDecimal**| Valor máximo. | [optional] |
| **analysisResult** | **String**| AnalysisResult separados por vírgula: AGREED, DISAGREED. | [optional] |
| **reportedBy** | **String**| Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | [optional] |
| **participantDocument** | **String**| CPF ou CNPJ do participante. | [optional] |
| **participantName** | **String**| Nome do participante. | [optional] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |
| **reportedAtFrom** | **OffsetDateTime**| Filtro: reportedAt a partir de. | [optional] |
| **reportedAtTo** | **OffsetDateTime**| Filtro: reportedAt até. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filtro: createdAt a partir de. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filtro: createdAt até. | [optional] |
| **expiresAtFrom** | **OffsetDateTime**| Filtro: expiresAt a partir de. | [optional] |
| **expiresAtTo** | **OffsetDateTime**| Filtro: expiresAt até. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filtro: updatedAt a partir de. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filtro: updatedAt até. | [optional] |
| **id** | **String**| Filtro por ID da infração. | [optional] |
| **protocol** | **String**| Filtro por protocolo. | [optional] |

### Return type

ApiResponse<[**InfractionListResponse**](InfractionListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de infrações com paginação |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |


## getInfractionsById

> InfractionDetail getInfractionsById(id)

Obter Infração

Obtém uma infração específica por ID.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        try {
            InfractionDetail result = apiInstance.getInfractionsById(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractionsById");
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
| **id** | **String**| ID da infração | |

### Return type

[**InfractionDetail**](InfractionDetail.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da infração |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Infração não encontrada |  -  |

## getInfractionsByIdWithHttpInfo

> ApiResponse<InfractionDetail> getInfractionsByIdWithHttpInfo(id)

Obter Infração

Obtém uma infração específica por ID.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        try {
            ApiResponse<InfractionDetail> response = apiInstance.getInfractionsByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractionsById");
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
| **id** | **String**| ID da infração | |

### Return type

ApiResponse<[**InfractionDetail**](InfractionDetail.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da infração |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Infração não encontrada |  -  |


## getInfractionsDefenseById

> Defense getInfractionsDefenseById(infractionId, defenseId)

Obter Defesa

Obtém uma defesa específica de uma infração.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String infractionId = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        String defenseId = "cm3w7p5r90003q8f2j8e4a6dg"; // String | ID da defesa
        try {
            Defense result = apiInstance.getInfractionsDefenseById(infractionId, defenseId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractionsDefenseById");
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
| **infractionId** | **String**| ID da infração | |
| **defenseId** | **String**| ID da defesa | |

### Return type

[**Defense**](Defense.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da defesa |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Defesa não encontrada |  -  |

## getInfractionsDefenseByIdWithHttpInfo

> ApiResponse<Defense> getInfractionsDefenseByIdWithHttpInfo(infractionId, defenseId)

Obter Defesa

Obtém uma defesa específica de uma infração.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String infractionId = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        String defenseId = "cm3w7p5r90003q8f2j8e4a6dg"; // String | ID da defesa
        try {
            ApiResponse<Defense> response = apiInstance.getInfractionsDefenseByIdWithHttpInfo(infractionId, defenseId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractionsDefenseById");
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
| **infractionId** | **String**| ID da infração | |
| **defenseId** | **String**| ID da defesa | |

### Return type

ApiResponse<[**Defense**](Defense.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da defesa |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Defesa não encontrada |  -  |


## getInfractionsDefenses

> List<DefenseListItem> getInfractionsDefenses(id)

Listar Defesas

Lista todas as defesas de uma infração específica.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        try {
            List<DefenseListItem> result = apiInstance.getInfractionsDefenses(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractionsDefenses");
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
| **id** | **String**| ID da infração | |

### Return type

[**List&lt;DefenseListItem&gt;**](DefenseListItem.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de defesas |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## getInfractionsDefensesWithHttpInfo

> ApiResponse<List<DefenseListItem>> getInfractionsDefensesWithHttpInfo(id)

Listar Defesas

Lista todas as defesas de uma infração específica.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        try {
            ApiResponse<List<DefenseListItem>> response = apiInstance.getInfractionsDefensesWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#getInfractionsDefenses");
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
| **id** | **String**| ID da infração | |

### Return type

ApiResponse<[**List&lt;DefenseListItem&gt;**](DefenseListItem.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de defesas |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |


## postInfractionsDefense

> Defense postInfractionsDefense(id, defense, files)

Criar Defesa

Cria uma defesa para uma infração específica.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        String defense = "defense_example"; // String | Texto da defesa (máx: 1000 caracteres)
        List<File> files = Arrays.asList(); // List<File> | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados.
        try {
            Defense result = apiInstance.postInfractionsDefense(id, defense, files);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#postInfractionsDefense");
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
| **id** | **String**| ID da infração | |
| **defense** | **String**| Texto da defesa (máx: 1000 caracteres) | |
| **files** | **List&lt;File&gt;**| Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | [optional] |

### Return type

[**Defense**](Defense.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Defesa criada |  -  |
| **400** | Requisição ou arquivo inválido: arquivos acima de 10 MB no total ou com extensão bloqueada |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Infração não encontrada |  -  |
| **413** | Mais de 5 arquivos ou um arquivo maior que 10 MB |  -  |
| **422** | Infração não aberta para defesa |  -  |

## postInfractionsDefenseWithHttpInfo

> ApiResponse<Defense> postInfractionsDefenseWithHttpInfo(id, defense, files)

Criar Defesa

Cria uma defesa para uma infração específica.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.InfractionsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | ID da infração
        String defense = "defense_example"; // String | Texto da defesa (máx: 1000 caracteres)
        List<File> files = Arrays.asList(); // List<File> | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados.
        try {
            ApiResponse<Defense> response = apiInstance.postInfractionsDefenseWithHttpInfo(id, defense, files);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling InfractionsApi#postInfractionsDefense");
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
| **id** | **String**| ID da infração | |
| **defense** | **String**| Texto da defesa (máx: 1000 caracteres) | |
| **files** | **List&lt;File&gt;**| Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | [optional] |

### Return type

ApiResponse<[**Defense**](Defense.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Defesa criada |  -  |
| **400** | Requisição ou arquivo inválido: arquivos acima de 10 MB no total ou com extensão bloqueada |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Infração não encontrada |  -  |
| **413** | Mais de 5 arquivos ou um arquivo maior que 10 MB |  -  |
| **422** | Infração não aberta para defesa |  -  |

