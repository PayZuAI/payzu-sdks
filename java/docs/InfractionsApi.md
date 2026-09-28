# InfractionsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInfractions**](InfractionsApi.md#getInfractions) | **GET** /user/infractions | List Infractions |
| [**getInfractionsWithHttpInfo**](InfractionsApi.md#getInfractionsWithHttpInfo) | **GET** /user/infractions | List Infractions |
| [**getInfractionsById**](InfractionsApi.md#getInfractionsById) | **GET** /user/infractions/{id} | Get Infraction |
| [**getInfractionsByIdWithHttpInfo**](InfractionsApi.md#getInfractionsByIdWithHttpInfo) | **GET** /user/infractions/{id} | Get Infraction |
| [**getInfractionsDefenseById**](InfractionsApi.md#getInfractionsDefenseById) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**getInfractionsDefenseByIdWithHttpInfo**](InfractionsApi.md#getInfractionsDefenseByIdWithHttpInfo) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**getInfractionsDefenses**](InfractionsApi.md#getInfractionsDefenses) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**getInfractionsDefensesWithHttpInfo**](InfractionsApi.md#getInfractionsDefensesWithHttpInfo) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**postInfractionsDefense**](InfractionsApi.md#postInfractionsDefense) | **POST** /user/infractions/{id}/defenses | Create Defense |
| [**postInfractionsDefenseWithHttpInfo**](InfractionsApi.md#postInfractionsDefenseWithHttpInfo) | **POST** /user/infractions/{id}/defenses | Create Defense |



## getInfractions

> InfractionListResponse getInfractions(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol)

List Infractions

List all infractions for the authenticated user with pagination and filters.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String status = "OPEN"; // String | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS)
        String type = "REFUND_REQUEST"; // String | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED)
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | End-to-end ID of the Pix.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Minimum amount.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Maximum amount.
        String analysisResult = "AGREED"; // String | Comma-separated AnalysisResult: AGREED, DISAGREED.
        String reportedBy = "DEBITED_PARTICIPANT"; // String | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT)
        String participantDocument = "12345678901"; // String | CPF or CNPJ of the participant.
        String participantName = "John Doe"; // String | Name of the participant.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        OffsetDateTime reportedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: reportedAt from.
        OffsetDateTime reportedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: reportedAt up to.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: createdAt from.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: createdAt up to.
        OffsetDateTime expiresAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: expiresAt from.
        OffsetDateTime expiresAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: expiresAt up to.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: updatedAt from.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: updatedAt up to.
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Filter by infraction ID.
        String protocol = "2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210"; // String | Filter by protocol.
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
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 10] |
| **status** | **String**| Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] |
| **type** | **String**| Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] |
| **endToEndId** | **String**| End-to-end ID of the Pix. | [optional] |
| **transactionId** | **String**| Transaction ID. | [optional] |
| **amountMin** | **BigDecimal**| Minimum amount. | [optional] |
| **amountMax** | **BigDecimal**| Maximum amount. | [optional] |
| **analysisResult** | **String**| Comma-separated AnalysisResult: AGREED, DISAGREED. | [optional] |
| **reportedBy** | **String**| Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] |
| **participantDocument** | **String**| CPF or CNPJ of the participant. | [optional] |
| **participantName** | **String**| Name of the participant. | [optional] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |
| **reportedAtFrom** | **OffsetDateTime**| Filter: reportedAt from. | [optional] |
| **reportedAtTo** | **OffsetDateTime**| Filter: reportedAt up to. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filter: createdAt from. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filter: createdAt up to. | [optional] |
| **expiresAtFrom** | **OffsetDateTime**| Filter: expiresAt from. | [optional] |
| **expiresAtTo** | **OffsetDateTime**| Filter: expiresAt up to. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filter: updatedAt from. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filter: updatedAt up to. | [optional] |
| **id** | **String**| Filter by infraction ID. | [optional] |
| **protocol** | **String**| Filter by protocol. | [optional] |

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
| **200** | List of infractions with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

## getInfractionsWithHttpInfo

> ApiResponse<InfractionListResponse> getInfractionsWithHttpInfo(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol)

List Infractions

List all infractions for the authenticated user with pagination and filters.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String status = "OPEN"; // String | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS)
        String type = "REFUND_REQUEST"; // String | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED)
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | End-to-end ID of the Pix.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Minimum amount.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Maximum amount.
        String analysisResult = "AGREED"; // String | Comma-separated AnalysisResult: AGREED, DISAGREED.
        String reportedBy = "DEBITED_PARTICIPANT"; // String | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT)
        String participantDocument = "12345678901"; // String | CPF or CNPJ of the participant.
        String participantName = "John Doe"; // String | Name of the participant.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        OffsetDateTime reportedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: reportedAt from.
        OffsetDateTime reportedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: reportedAt up to.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: createdAt from.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: createdAt up to.
        OffsetDateTime expiresAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: expiresAt from.
        OffsetDateTime expiresAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: expiresAt up to.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: updatedAt from.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: updatedAt up to.
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Filter by infraction ID.
        String protocol = "2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210"; // String | Filter by protocol.
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
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 10] |
| **status** | **String**| Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] |
| **type** | **String**| Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] |
| **endToEndId** | **String**| End-to-end ID of the Pix. | [optional] |
| **transactionId** | **String**| Transaction ID. | [optional] |
| **amountMin** | **BigDecimal**| Minimum amount. | [optional] |
| **amountMax** | **BigDecimal**| Maximum amount. | [optional] |
| **analysisResult** | **String**| Comma-separated AnalysisResult: AGREED, DISAGREED. | [optional] |
| **reportedBy** | **String**| Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] |
| **participantDocument** | **String**| CPF or CNPJ of the participant. | [optional] |
| **participantName** | **String**| Name of the participant. | [optional] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |
| **reportedAtFrom** | **OffsetDateTime**| Filter: reportedAt from. | [optional] |
| **reportedAtTo** | **OffsetDateTime**| Filter: reportedAt up to. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filter: createdAt from. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filter: createdAt up to. | [optional] |
| **expiresAtFrom** | **OffsetDateTime**| Filter: expiresAt from. | [optional] |
| **expiresAtTo** | **OffsetDateTime**| Filter: expiresAt up to. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filter: updatedAt from. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filter: updatedAt up to. | [optional] |
| **id** | **String**| Filter by infraction ID. | [optional] |
| **protocol** | **String**| Filter by protocol. | [optional] |

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
| **200** | List of infractions with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |


## getInfractionsById

> InfractionDetail getInfractionsById(id)

Get Infraction

Get a specific infraction by ID.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
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
| **id** | **String**| Infraction ID | |

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
| **200** | Infraction details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Infraction not found |  -  |

## getInfractionsByIdWithHttpInfo

> ApiResponse<InfractionDetail> getInfractionsByIdWithHttpInfo(id)

Get Infraction

Get a specific infraction by ID.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
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
| **id** | **String**| Infraction ID | |

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
| **200** | Infraction details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Infraction not found |  -  |


## getInfractionsDefenseById

> Defense getInfractionsDefenseById(infractionId, defenseId)

Get Defense

Get a specific defense for an infraction.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String infractionId = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
        String defenseId = "cm3w7p5r90003q8f2j8e4a6dg"; // String | Defense ID
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
| **infractionId** | **String**| Infraction ID | |
| **defenseId** | **String**| Defense ID | |

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
| **200** | Defense details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Defense not found |  -  |

## getInfractionsDefenseByIdWithHttpInfo

> ApiResponse<Defense> getInfractionsDefenseByIdWithHttpInfo(infractionId, defenseId)

Get Defense

Get a specific defense for an infraction.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String infractionId = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
        String defenseId = "cm3w7p5r90003q8f2j8e4a6dg"; // String | Defense ID
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
| **infractionId** | **String**| Infraction ID | |
| **defenseId** | **String**| Defense ID | |

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
| **200** | Defense details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Defense not found |  -  |


## getInfractionsDefenses

> List<Defense> getInfractionsDefenses(id)

List Defenses

List all defenses for a specific infraction.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
        try {
            List<Defense> result = apiInstance.getInfractionsDefenses(id);
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
| **id** | **String**| Infraction ID | |

### Return type

[**List&lt;Defense&gt;**](Defense.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of defenses |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

## getInfractionsDefensesWithHttpInfo

> ApiResponse<List<Defense>> getInfractionsDefensesWithHttpInfo(id)

List Defenses

List all defenses for a specific infraction.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
        try {
            ApiResponse<List<Defense>> response = apiInstance.getInfractionsDefensesWithHttpInfo(id);
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
| **id** | **String**| Infraction ID | |

### Return type

ApiResponse<[**List&lt;Defense&gt;**](Defense.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of defenses |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |


## postInfractionsDefense

> Defense postInfractionsDefense(id, defense, files)

Create Defense

Create a defense for a specific infraction.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
        String defense = "defense_example"; // String | Defense text (max: 1000 characters)
        List<File> files = Arrays.asList(); // List<File> | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected.
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
| **id** | **String**| Infraction ID | |
| **defense** | **String**| Defense text (max: 1000 characters) | |
| **files** | **List&lt;File&gt;**| Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. | [optional] |

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
| **201** | Defense created |  -  |
| **400** | Invalid request or file |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Infraction not found |  -  |
| **413** | More than 5 files or a file larger than 10 MB |  -  |
| **422** | Infraction not open for defense |  -  |

## postInfractionsDefenseWithHttpInfo

> ApiResponse<Defense> postInfractionsDefenseWithHttpInfo(id, defense, files)

Create Defense

Create a defense for a specific infraction.

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
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        InfractionsApi apiInstance = new InfractionsApi(defaultClient);
        String id = "cm3w7n2p60002q8f2h7d3z5cf"; // String | Infraction ID
        String defense = "defense_example"; // String | Defense text (max: 1000 characters)
        List<File> files = Arrays.asList(); // List<File> | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected.
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
| **id** | **String**| Infraction ID | |
| **defense** | **String**| Defense text (max: 1000 characters) | |
| **files** | **List&lt;File&gt;**| Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. | [optional] |

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
| **201** | Defense created |  -  |
| **400** | Invalid request or file |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Infraction not found |  -  |
| **413** | More than 5 files or a file larger than 10 MB |  -  |
| **422** | Infraction not open for defense |  -  |

