# ReportsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadUserReport**](ReportsApi.md#downloadUserReport) | **POST** /user/report/{id}/download | Download report |
| [**downloadUserReportWithHttpInfo**](ReportsApi.md#downloadUserReportWithHttpInfo) | **POST** /user/report/{id}/download | Download report |
| [**getUserBankStatement**](ReportsApi.md#getUserBankStatement) | **GET** /user/bank-statements/{id} | Get bank statement |
| [**getUserBankStatementWithHttpInfo**](ReportsApi.md#getUserBankStatementWithHttpInfo) | **GET** /user/bank-statements/{id} | Get bank statement |
| [**getUserBankStatements**](ReportsApi.md#getUserBankStatements) | **GET** /user/bank-statements | List bank statements |
| [**getUserBankStatementsWithHttpInfo**](ReportsApi.md#getUserBankStatementsWithHttpInfo) | **GET** /user/bank-statements | List bank statements |
| [**getUserDepositPending**](ReportsApi.md#getUserDepositPending) | **GET** /user/deposit-pending | List pending deposits |
| [**getUserDepositPendingWithHttpInfo**](ReportsApi.md#getUserDepositPendingWithHttpInfo) | **GET** /user/deposit-pending | List pending deposits |
| [**getUserDepositPendingById**](ReportsApi.md#getUserDepositPendingById) | **GET** /user/deposit-pending/{id} | Get pending deposit |
| [**getUserDepositPendingByIdWithHttpInfo**](ReportsApi.md#getUserDepositPendingByIdWithHttpInfo) | **GET** /user/deposit-pending/{id} | Get pending deposit |
| [**getUserReport**](ReportsApi.md#getUserReport) | **GET** /user/report/{id} | Get report job status |
| [**getUserReportWithHttpInfo**](ReportsApi.md#getUserReportWithHttpInfo) | **GET** /user/report/{id} | Get report job status |
| [**getUserSummary**](ReportsApi.md#getUserSummary) | **GET** /user/summary | Transaction summary |
| [**getUserSummaryWithHttpInfo**](ReportsApi.md#getUserSummaryWithHttpInfo) | **GET** /user/summary | Transaction summary |
| [**getUserTransactionById**](ReportsApi.md#getUserTransactionById) | **GET** /user/transactions/{id} | List transaction details |
| [**getUserTransactionByIdWithHttpInfo**](ReportsApi.md#getUserTransactionByIdWithHttpInfo) | **GET** /user/transactions/{id} | List transaction details |
| [**getUserTransactions**](ReportsApi.md#getUserTransactions) | **GET** /user/transactions | List Transactions |
| [**getUserTransactionsWithHttpInfo**](ReportsApi.md#getUserTransactionsWithHttpInfo) | **GET** /user/transactions | List Transactions |
| [**listUserReports**](ReportsApi.md#listUserReports) | **GET** /user/report | List report jobs |
| [**listUserReportsWithHttpInfo**](ReportsApi.md#listUserReportsWithHttpInfo) | **GET** /user/report | List report jobs |
| [**postUserReport**](ReportsApi.md#postUserReport) | **POST** /user/report | Generate transactions report |
| [**postUserReportWithHttpInfo**](ReportsApi.md#postUserReportWithHttpInfo) | **POST** /user/report | Generate transactions report |



## downloadUserReport

> DownloadUserReport200Response downloadUserReport(id)

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | Report ID.
        try {
            DownloadUserReport200Response result = apiInstance.downloadUserReport(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#downloadUserReport");
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
| **id** | **UUID**| Report ID. | |

### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signed download URL |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Report not found |  -  |
| **410** | Report file expired |  -  |
| **422** | Report not ready (still processing) |  -  |

## downloadUserReportWithHttpInfo

> ApiResponse<DownloadUserReport200Response> downloadUserReportWithHttpInfo(id)

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | Report ID.
        try {
            ApiResponse<DownloadUserReport200Response> response = apiInstance.downloadUserReportWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#downloadUserReport");
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
| **id** | **UUID**| Report ID. | |

### Return type

ApiResponse<[**DownloadUserReport200Response**](DownloadUserReport200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Signed download URL |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Report not found |  -  |
| **410** | Report file expired |  -  |
| **422** | Report not ready (still processing) |  -  |


## getUserBankStatement

> BankStatement getUserBankStatement(id)

Get bank statement

Returns a single statement entry.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | Statement entry id.
        try {
            BankStatement result = apiInstance.getUserBankStatement(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserBankStatement");
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
| **id** | **String**| Statement entry id. | |

### Return type

[**BankStatement**](BankStatement.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Statement entry. |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

## getUserBankStatementWithHttpInfo

> ApiResponse<BankStatement> getUserBankStatementWithHttpInfo(id)

Get bank statement

Returns a single statement entry.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | Statement entry id.
        try {
            ApiResponse<BankStatement> response = apiInstance.getUserBankStatementWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserBankStatement");
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
| **id** | **String**| Statement entry id. | |

### Return type

ApiResponse<[**BankStatement**](BankStatement.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Statement entry. |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |


## getUserBankStatements

> BankStatementListResponse getUserBankStatements(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection)

List bank statements

Lists the account statement entries. &#x60;createdAtFrom&#x60; and &#x60;createdAtTo&#x60; are required.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start date (required).
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End date (required).
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | Entry ID.
        String operation = "INCREMENT"; // String | Operation type.  `INCREMENT` `DECREMENT`
        String reason = "Estorno"; // String | Reason for the entry.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        BigDecimal amountFrom = new BigDecimal("10.9"); // BigDecimal | Minimum amount.
        BigDecimal amountTo = new BigDecimal("500"); // BigDecimal | Maximum amount.
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        try {
            BankStatementListResponse result = apiInstance.getUserBankStatements(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserBankStatements");
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
| **createdAtFrom** | **OffsetDateTime**| Start date (required). | |
| **createdAtTo** | **OffsetDateTime**| End date (required). | |
| **id** | **String**| Entry ID. | [optional] |
| **operation** | **String**| Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] [enum: INCREMENT, DECREMENT] |
| **reason** | **String**| Reason for the entry. | [optional] |
| **transactionId** | **String**| Transaction ID. | [optional] |
| **amountFrom** | **BigDecimal**| Minimum amount. | [optional] |
| **amountTo** | **BigDecimal**| Maximum amount. | [optional] |
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 10] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, amount] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |

### Return type

[**BankStatementListResponse**](BankStatementListResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Statement page. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

## getUserBankStatementsWithHttpInfo

> ApiResponse<BankStatementListResponse> getUserBankStatementsWithHttpInfo(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection)

List bank statements

Lists the account statement entries. &#x60;createdAtFrom&#x60; and &#x60;createdAtTo&#x60; are required.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start date (required).
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End date (required).
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | Entry ID.
        String operation = "INCREMENT"; // String | Operation type.  `INCREMENT` `DECREMENT`
        String reason = "Estorno"; // String | Reason for the entry.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        BigDecimal amountFrom = new BigDecimal("10.9"); // BigDecimal | Minimum amount.
        BigDecimal amountTo = new BigDecimal("500"); // BigDecimal | Maximum amount.
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        try {
            ApiResponse<BankStatementListResponse> response = apiInstance.getUserBankStatementsWithHttpInfo(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserBankStatements");
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
| **createdAtFrom** | **OffsetDateTime**| Start date (required). | |
| **createdAtTo** | **OffsetDateTime**| End date (required). | |
| **id** | **String**| Entry ID. | [optional] |
| **operation** | **String**| Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] [enum: INCREMENT, DECREMENT] |
| **reason** | **String**| Reason for the entry. | [optional] |
| **transactionId** | **String**| Transaction ID. | [optional] |
| **amountFrom** | **BigDecimal**| Minimum amount. | [optional] |
| **amountTo** | **BigDecimal**| Maximum amount. | [optional] |
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 10] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, amount] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |

### Return type

ApiResponse<[**BankStatementListResponse**](BankStatementListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Statement page. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |


## getUserDepositPending

> DepositPendingListResponse getUserDepositPending(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit)

List pending deposits

Lists deposits that are pending / not yet reconciled.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String status = "PENDING"; // String | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED.
        String document = "12345678901"; // String | CPF or CNPJ, digits only.
        String name = "John Doe"; // String | Name of the payer or receiver.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | End-to-end ID of the Pix.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Minimum amount.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Maximum amount.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start of the creation date range.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End of the creation date range.
        Integer page = 1; // Integer | Page number.
        Integer limit = 20; // Integer | Items per page.
        try {
            DepositPendingListResponse result = apiInstance.getUserDepositPending(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserDepositPending");
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
| **status** | **String**| Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | [optional] |
| **document** | **String**| CPF or CNPJ, digits only. | [optional] |
| **name** | **String**| Name of the payer or receiver. | [optional] |
| **endToEndId** | **String**| End-to-end ID of the Pix. | [optional] |
| **amountMin** | **BigDecimal**| Minimum amount. | [optional] |
| **amountMax** | **BigDecimal**| Maximum amount. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Start of the creation date range. | [optional] |
| **createdAtTo** | **OffsetDateTime**| End of the creation date range. | [optional] |
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 20] |

### Return type

[**DepositPendingListResponse**](DepositPendingListResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pending deposit page. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

## getUserDepositPendingWithHttpInfo

> ApiResponse<DepositPendingListResponse> getUserDepositPendingWithHttpInfo(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit)

List pending deposits

Lists deposits that are pending / not yet reconciled.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String status = "PENDING"; // String | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED.
        String document = "12345678901"; // String | CPF or CNPJ, digits only.
        String name = "John Doe"; // String | Name of the payer or receiver.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | End-to-end ID of the Pix.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Minimum amount.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Maximum amount.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start of the creation date range.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End of the creation date range.
        Integer page = 1; // Integer | Page number.
        Integer limit = 20; // Integer | Items per page.
        try {
            ApiResponse<DepositPendingListResponse> response = apiInstance.getUserDepositPendingWithHttpInfo(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserDepositPending");
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
| **status** | **String**| Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | [optional] |
| **document** | **String**| CPF or CNPJ, digits only. | [optional] |
| **name** | **String**| Name of the payer or receiver. | [optional] |
| **endToEndId** | **String**| End-to-end ID of the Pix. | [optional] |
| **amountMin** | **BigDecimal**| Minimum amount. | [optional] |
| **amountMax** | **BigDecimal**| Maximum amount. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Start of the creation date range. | [optional] |
| **createdAtTo** | **OffsetDateTime**| End of the creation date range. | [optional] |
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 20] |

### Return type

ApiResponse<[**DepositPendingListResponse**](DepositPendingListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pending deposit page. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |


## getUserDepositPendingById

> DepositPending getUserDepositPendingById(id)

Get pending deposit

Returns a single pending deposit.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7r1u50005q8f2m1g6c8fj"; // String | Pending deposit id.
        try {
            DepositPending result = apiInstance.getUserDepositPendingById(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserDepositPendingById");
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
| **id** | **String**| Pending deposit id. | |

### Return type

[**DepositPending**](DepositPending.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pending deposit. |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

## getUserDepositPendingByIdWithHttpInfo

> ApiResponse<DepositPending> getUserDepositPendingByIdWithHttpInfo(id)

Get pending deposit

Returns a single pending deposit.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7r1u50005q8f2m1g6c8fj"; // String | Pending deposit id.
        try {
            ApiResponse<DepositPending> response = apiInstance.getUserDepositPendingByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserDepositPendingById");
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
| **id** | **String**| Pending deposit id. | |

### Return type

ApiResponse<[**DepositPending**](DepositPending.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pending deposit. |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |


## getUserReport

> ReportJobDetail getUserReport(id)

Get report job status

Returns the status and metadata of a specific report job by &#x60;id&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | Report ID.
        try {
            ReportJobDetail result = apiInstance.getUserReport(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserReport");
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
| **id** | **UUID**| Report ID. | |

### Return type

[**ReportJobDetail**](ReportJobDetail.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report job |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Report not found |  -  |

## getUserReportWithHttpInfo

> ApiResponse<ReportJobDetail> getUserReportWithHttpInfo(id)

Get report job status

Returns the status and metadata of a specific report job by &#x60;id&#x60;.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | Report ID.
        try {
            ApiResponse<ReportJobDetail> response = apiInstance.getUserReportWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserReport");
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
| **id** | **UUID**| Report ID. | |

### Return type

ApiResponse<[**ReportJobDetail**](ReportJobDetail.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report job |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Report not found |  -  |


## getUserSummary

> Summary getUserSummary(dateFrom, dateTo, groupBy, grouped)

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start date. Default: start of the previous day (America/Sao_Paulo).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End date. Default: now.
        String groupBy = "day"; // String | Grouping applied to the transactions.
        Boolean grouped = true; // Boolean | When true, returns a series grouped by date.
        try {
            Summary result = apiInstance.getUserSummary(dateFrom, dateTo, groupBy, grouped);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserSummary");
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
| **dateFrom** | **OffsetDateTime**| Start date. Default: start of the previous day (America/Sao_Paulo). | [optional] |
| **dateTo** | **OffsetDateTime**| End date. Default: now. | [optional] |
| **groupBy** | **String**| Grouping applied to the transactions. | [optional] [default to day] [enum: day] |
| **grouped** | **Boolean**| When true, returns a series grouped by date. | [optional] |

### Return type

[**Summary**](Summary.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Summary. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

## getUserSummaryWithHttpInfo

> ApiResponse<Summary> getUserSummaryWithHttpInfo(dateFrom, dateTo, groupBy, grouped)

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start date. Default: start of the previous day (America/Sao_Paulo).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End date. Default: now.
        String groupBy = "day"; // String | Grouping applied to the transactions.
        Boolean grouped = true; // Boolean | When true, returns a series grouped by date.
        try {
            ApiResponse<Summary> response = apiInstance.getUserSummaryWithHttpInfo(dateFrom, dateTo, groupBy, grouped);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserSummary");
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
| **dateFrom** | **OffsetDateTime**| Start date. Default: start of the previous day (America/Sao_Paulo). | [optional] |
| **dateTo** | **OffsetDateTime**| End date. Default: now. | [optional] |
| **groupBy** | **String**| Grouping applied to the transactions. | [optional] [default to day] [enum: day] |
| **grouped** | **Boolean**| When true, returns a series grouped by date. | [optional] |

### Return type

ApiResponse<[**Summary**](Summary.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Summary. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |


## getUserTransactionById

> GetUserTransactionById200Response getUserTransactionById(id)

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        try {
            GetUserTransactionById200Response result = apiInstance.getUserTransactionById(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserTransactionById");
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

### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Transaction not found |  -  |

## getUserTransactionByIdWithHttpInfo

> ApiResponse<GetUserTransactionById200Response> getUserTransactionByIdWithHttpInfo(id)

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        try {
            ApiResponse<GetUserTransactionById200Response> response = apiInstance.getUserTransactionByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserTransactionById");
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

### Return type

ApiResponse<[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Transaction not found |  -  |


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode)

List Transactions

Paginated list of account transactions with filters.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start date or date-time (ISO 8601).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day.
        Integer limit = 10; // Integer | Items per page (max 1000).
        Integer page = 1; // Integer | Page number (default 1).
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        String status = "COMPLETED,PENDING"; // String | Transaction status. Accepts CSV: PENDING,COMPLETED,etc.
        String type = "DEPOSIT,WITHDRAW"; // String | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
        String method = "PIX,INTERNAL_TRANSFER"; // String | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER.
        BigDecimal amount = new BigDecimal("15000"); // BigDecimal | Amount filter. Minimum 0.01.
        String document = "12345678901"; // String | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation.
        String name = "Alice"; // String | Name filter.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | Pix end-to-end ID.
        String sortBy = "createdAt"; // String | Field to sort by
        String sortDirection = "asc"; // String | Sort direction
        String clientReference = "order_12345"; // String | Filter by external reference
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
        Boolean hasQrCode = true; // Boolean | Only transactions with (true) or without (false) QR Code.
        try {
            GetUserTransactions200Response result = apiInstance.getUserTransactions(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserTransactions");
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
| **dateFrom** | **OffsetDateTime**| Start date or date-time (ISO 8601). | [optional] |
| **dateTo** | **OffsetDateTime**| End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. | [optional] |
| **limit** | **Integer**| Items per page (max 1000). | [optional] [default to 10] |
| **page** | **Integer**| Page number (default 1). | [optional] [default to 1] |
| **id** | **String**| Transaction ID. | [optional] |
| **status** | **String**| Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] |
| **type** | **String**| Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **String**| Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | [optional] |
| **amount** | **BigDecimal**| Amount filter. Minimum 0.01. | [optional] |
| **document** | **String**| CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] |
| **name** | **String**| Name filter. | [optional] |
| **endToEndId** | **String**| Pix end-to-end ID. | [optional] |
| **sortBy** | **String**| Field to sort by | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Sort direction | [optional] [default to desc] [enum: asc, desc] |
| **clientReference** | **String**| Filter by external reference | [optional] |
| **virtualAccount** | **String**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |
| **hasQrCode** | **Boolean**| Only transactions with (true) or without (false) QR Code. | [optional] |

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction page |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

## getUserTransactionsWithHttpInfo

> ApiResponse<GetUserTransactions200Response> getUserTransactionsWithHttpInfo(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode)

List Transactions

Paginated list of account transactions with filters.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start date or date-time (ISO 8601).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day.
        Integer limit = 10; // Integer | Items per page (max 1000).
        Integer page = 1; // Integer | Page number (default 1).
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        String status = "COMPLETED,PENDING"; // String | Transaction status. Accepts CSV: PENDING,COMPLETED,etc.
        String type = "DEPOSIT,WITHDRAW"; // String | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
        String method = "PIX,INTERNAL_TRANSFER"; // String | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER.
        BigDecimal amount = new BigDecimal("15000"); // BigDecimal | Amount filter. Minimum 0.01.
        String document = "12345678901"; // String | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation.
        String name = "Alice"; // String | Name filter.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | Pix end-to-end ID.
        String sortBy = "createdAt"; // String | Field to sort by
        String sortDirection = "asc"; // String | Sort direction
        String clientReference = "order_12345"; // String | Filter by external reference
        String virtualAccount = "loja-centro-01"; // String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
        Boolean hasQrCode = true; // Boolean | Only transactions with (true) or without (false) QR Code.
        try {
            ApiResponse<GetUserTransactions200Response> response = apiInstance.getUserTransactionsWithHttpInfo(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#getUserTransactions");
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
| **dateFrom** | **OffsetDateTime**| Start date or date-time (ISO 8601). | [optional] |
| **dateTo** | **OffsetDateTime**| End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. | [optional] |
| **limit** | **Integer**| Items per page (max 1000). | [optional] [default to 10] |
| **page** | **Integer**| Page number (default 1). | [optional] [default to 1] |
| **id** | **String**| Transaction ID. | [optional] |
| **status** | **String**| Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] |
| **type** | **String**| Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **String**| Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | [optional] |
| **amount** | **BigDecimal**| Amount filter. Minimum 0.01. | [optional] |
| **document** | **String**| CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] |
| **name** | **String**| Name filter. | [optional] |
| **endToEndId** | **String**| Pix end-to-end ID. | [optional] |
| **sortBy** | **String**| Field to sort by | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Sort direction | [optional] [default to desc] [enum: asc, desc] |
| **clientReference** | **String**| Filter by external reference | [optional] |
| **virtualAccount** | **String**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |
| **hasQrCode** | **Boolean**| Only transactions with (true) or without (false) QR Code. | [optional] |

### Return type

ApiResponse<[**GetUserTransactions200Response**](GetUserTransactions200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction page |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |


## listUserReports

> ListUserReports200Response listUserReports(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection)

List report jobs

List report jobs created by the authenticated user.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String status = "COMPLETED,FAILED"; // String | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: created from.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: created up to.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: updated from.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: updated up to.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        try {
            ListUserReports200Response result = apiInstance.listUserReports(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#listUserReports");
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
| **status** | **String**| Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filter: created from. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filter: created up to. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filter: updated from. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filter: updated up to. | [optional] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of report jobs |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

## listUserReportsWithHttpInfo

> ApiResponse<ListUserReports200Response> listUserReportsWithHttpInfo(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection)

List report jobs

List report jobs created by the authenticated user.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String status = "COMPLETED,FAILED"; // String | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: created from.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: created up to.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filter: updated from.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filter: updated up to.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        try {
            ApiResponse<ListUserReports200Response> response = apiInstance.listUserReportsWithHttpInfo(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#listUserReports");
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
| **status** | **String**| Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filter: created from. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filter: created up to. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filter: updated from. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filter: updated up to. | [optional] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |

### Return type

ApiResponse<[**ListUserReports200Response**](ListUserReports200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Page of report jobs |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |


## postUserReport

> ReportJobAccepted postUserReport(postUserReportRequest)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        PostUserReportRequest postUserReportRequest = new PostUserReportRequest(); // PostUserReportRequest | 
        try {
            ReportJobAccepted result = apiInstance.postUserReport(postUserReportRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#postUserReport");
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
| **postUserReportRequest** | [**PostUserReportRequest**](PostUserReportRequest.md)|  | |

### Return type

[**ReportJobAccepted**](ReportJobAccepted.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Report job aceito (job enfileirado) |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **422** | No transactions match the filter / concurrency limit reached |  -  |

## postUserReportWithHttpInfo

> ApiResponse<ReportJobAccepted> postUserReportWithHttpInfo(postUserReportRequest)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.ReportsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        PostUserReportRequest postUserReportRequest = new PostUserReportRequest(); // PostUserReportRequest | 
        try {
            ApiResponse<ReportJobAccepted> response = apiInstance.postUserReportWithHttpInfo(postUserReportRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling ReportsApi#postUserReport");
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
| **postUserReportRequest** | [**PostUserReportRequest**](PostUserReportRequest.md)|  | |

### Return type

ApiResponse<[**ReportJobAccepted**](ReportJobAccepted.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Report job aceito (job enfileirado) |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **422** | No transactions match the filter / concurrency limit reached |  -  |

