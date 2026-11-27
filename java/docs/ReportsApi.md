# ReportsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadUserReport**](ReportsApi.md#downloadUserReport) | **POST** /user/report/{id}/download | Baixar relatório |
| [**downloadUserReportWithHttpInfo**](ReportsApi.md#downloadUserReportWithHttpInfo) | **POST** /user/report/{id}/download | Baixar relatório |
| [**getUserBankStatement**](ReportsApi.md#getUserBankStatement) | **GET** /user/bank-statements/{id} | Consultar lançamento |
| [**getUserBankStatementWithHttpInfo**](ReportsApi.md#getUserBankStatementWithHttpInfo) | **GET** /user/bank-statements/{id} | Consultar lançamento |
| [**getUserBankStatements**](ReportsApi.md#getUserBankStatements) | **GET** /user/bank-statements | Listar extrato |
| [**getUserBankStatementsWithHttpInfo**](ReportsApi.md#getUserBankStatementsWithHttpInfo) | **GET** /user/bank-statements | Listar extrato |
| [**getUserDepositPending**](ReportsApi.md#getUserDepositPending) | **GET** /user/deposit-pending | Listar depósitos via chave Pix |
| [**getUserDepositPendingWithHttpInfo**](ReportsApi.md#getUserDepositPendingWithHttpInfo) | **GET** /user/deposit-pending | Listar depósitos via chave Pix |
| [**getUserDepositPendingById**](ReportsApi.md#getUserDepositPendingById) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix |
| [**getUserDepositPendingByIdWithHttpInfo**](ReportsApi.md#getUserDepositPendingByIdWithHttpInfo) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix |
| [**getUserReport**](ReportsApi.md#getUserReport) | **GET** /user/report/{id} | Consultar status do relatório |
| [**getUserReportWithHttpInfo**](ReportsApi.md#getUserReportWithHttpInfo) | **GET** /user/report/{id} | Consultar status do relatório |
| [**getUserSummary**](ReportsApi.md#getUserSummary) | **GET** /user/summary | Resumo de transações |
| [**getUserSummaryWithHttpInfo**](ReportsApi.md#getUserSummaryWithHttpInfo) | **GET** /user/summary | Resumo de transações |
| [**getUserTransactionById**](ReportsApi.md#getUserTransactionById) | **GET** /user/transactions/{id} | Listar detalhes da transação |
| [**getUserTransactionByIdWithHttpInfo**](ReportsApi.md#getUserTransactionByIdWithHttpInfo) | **GET** /user/transactions/{id} | Listar detalhes da transação |
| [**getUserTransactions**](ReportsApi.md#getUserTransactions) | **GET** /user/transactions | Listar transações |
| [**getUserTransactionsWithHttpInfo**](ReportsApi.md#getUserTransactionsWithHttpInfo) | **GET** /user/transactions | Listar transações |
| [**listUserReports**](ReportsApi.md#listUserReports) | **GET** /user/report | Listar jobs de relatório |
| [**listUserReportsWithHttpInfo**](ReportsApi.md#listUserReportsWithHttpInfo) | **GET** /user/report | Listar jobs de relatório |
| [**postUserReport**](ReportsApi.md#postUserReport) | **POST** /user/report | Gerar relatório de transações |
| [**postUserReportWithHttpInfo**](ReportsApi.md#postUserReportWithHttpInfo) | **POST** /user/report | Gerar relatório de transações |



## downloadUserReport

> DownloadUserReport200Response downloadUserReport(id)

Baixar relatório

Retorna uma URL assinada de curta duração para baixar o arquivo CSV.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | ID do relatório.
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
| **id** | **UUID**| ID do relatório. | |

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
| **200** | URL de download assinada |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Relatório não encontrado |  -  |
| **410** | Arquivo do relatório expirado |  -  |
| **422** | Relatório ainda processando |  -  |

## downloadUserReportWithHttpInfo

> ApiResponse<DownloadUserReport200Response> downloadUserReportWithHttpInfo(id)

Baixar relatório

Retorna uma URL assinada de curta duração para baixar o arquivo CSV.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | ID do relatório.
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
| **id** | **UUID**| ID do relatório. | |

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
| **200** | URL de download assinada |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Relatório não encontrado |  -  |
| **410** | Arquivo do relatório expirado |  -  |
| **422** | Relatório ainda processando |  -  |


## getUserBankStatement

> BankStatement getUserBankStatement(id)

Consultar lançamento

Retorna um lançamento do extrato.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | Id do lançamento do extrato.
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
| **id** | **String**| Id do lançamento do extrato. | |

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
| **200** | Lançamento. |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## getUserBankStatementWithHttpInfo

> ApiResponse<BankStatement> getUserBankStatementWithHttpInfo(id)

Consultar lançamento

Retorna um lançamento do extrato.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | Id do lançamento do extrato.
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
| **id** | **String**| Id do lançamento do extrato. | |

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
| **200** | Lançamento. |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |


## getUserBankStatements

> BankStatementListResponse getUserBankStatements(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection)

Listar extrato

Lista os lançamentos do extrato da conta. &#x60;createdAtFrom&#x60; e &#x60;createdAtTo&#x60; são obrigatórios.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01T00:00:00-03:00"); // OffsetDateTime | Data inicial (obrigatória).
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31T23:59:59-03:00"); // OffsetDateTime | Data final (obrigatória).
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | ID do lançamento.
        String operation = "INCREMENT"; // String | Tipo de operação.  `INCREMENT` `DECREMENT`
        String reason = "PIX_DEPOSIT"; // String | Razão do lançamento.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        BigDecimal amountFrom = new BigDecimal("10.9"); // BigDecimal | Valor mínimo.
        BigDecimal amountTo = new BigDecimal("500"); // BigDecimal | Valor máximo.
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
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
| **createdAtFrom** | **OffsetDateTime**| Data inicial (obrigatória). | |
| **createdAtTo** | **OffsetDateTime**| Data final (obrigatória). | |
| **id** | **String**| ID do lançamento. | [optional] |
| **operation** | **String**| Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] [enum: INCREMENT, DECREMENT] |
| **reason** | **String**| Razão do lançamento. | [optional] |
| **transactionId** | **String**| ID da transação. | [optional] |
| **amountFrom** | **BigDecimal**| Valor mínimo. | [optional] |
| **amountTo** | **BigDecimal**| Valor máximo. | [optional] |
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, amount] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |

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
| **200** | Página do extrato. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

## getUserBankStatementsWithHttpInfo

> ApiResponse<BankStatementListResponse> getUserBankStatementsWithHttpInfo(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection)

Listar extrato

Lista os lançamentos do extrato da conta. &#x60;createdAtFrom&#x60; e &#x60;createdAtTo&#x60; são obrigatórios.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01T00:00:00-03:00"); // OffsetDateTime | Data inicial (obrigatória).
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31T23:59:59-03:00"); // OffsetDateTime | Data final (obrigatória).
        String id = "cm3w7q8s10004q8f2k9f5b7eh"; // String | ID do lançamento.
        String operation = "INCREMENT"; // String | Tipo de operação.  `INCREMENT` `DECREMENT`
        String reason = "PIX_DEPOSIT"; // String | Razão do lançamento.
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        BigDecimal amountFrom = new BigDecimal("10.9"); // BigDecimal | Valor mínimo.
        BigDecimal amountTo = new BigDecimal("500"); // BigDecimal | Valor máximo.
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
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
| **createdAtFrom** | **OffsetDateTime**| Data inicial (obrigatória). | |
| **createdAtTo** | **OffsetDateTime**| Data final (obrigatória). | |
| **id** | **String**| ID do lançamento. | [optional] |
| **operation** | **String**| Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] [enum: INCREMENT, DECREMENT] |
| **reason** | **String**| Razão do lançamento. | [optional] |
| **transactionId** | **String**| ID da transação. | [optional] |
| **amountFrom** | **BigDecimal**| Valor mínimo. | [optional] |
| **amountTo** | **BigDecimal**| Valor máximo. | [optional] |
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, amount] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |

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
| **200** | Página do extrato. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |


## getUserDepositPending

> DepositPendingListResponse getUserDepositPending(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit)

Listar depósitos via chave Pix

Lista os depósitos via chave Pix: Pix que entraram na conta pela chave, sem passar por uma cobrança criada por &#x60;POST /pix&#x60;.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String status = "PENDING"; // String | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED`
        String document = "12345678901"; // String | CPF ou CNPJ, apenas dígitos.
        String name = "John Doe"; // String | Nome do pagador ou recebedor.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Valor mínimo.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Valor máximo.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Data de criação inicial.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Data de criação final.
        Integer page = 1; // Integer | Número da página. Valor inválido vira 1.
        Integer limit = 20; // Integer | Itens por página. Valor inválido vira 20.
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
| **status** | **String**| Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | [optional] |
| **document** | **String**| CPF ou CNPJ, apenas dígitos. | [optional] |
| **name** | **String**| Nome do pagador ou recebedor. | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
| **amountMin** | **BigDecimal**| Valor mínimo. | [optional] |
| **amountMax** | **BigDecimal**| Valor máximo. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Data de criação inicial. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Data de criação final. | [optional] |
| **page** | **Integer**| Número da página. Valor inválido vira 1. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. Valor inválido vira 20. | [optional] [default to 20] |

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
| **200** | Página de pendentes. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

## getUserDepositPendingWithHttpInfo

> ApiResponse<DepositPendingListResponse> getUserDepositPendingWithHttpInfo(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit)

Listar depósitos via chave Pix

Lista os depósitos via chave Pix: Pix que entraram na conta pela chave, sem passar por uma cobrança criada por &#x60;POST /pix&#x60;.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String status = "PENDING"; // String | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED`
        String document = "12345678901"; // String | CPF ou CNPJ, apenas dígitos.
        String name = "John Doe"; // String | Nome do pagador ou recebedor.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        BigDecimal amountMin = new BigDecimal("10.9"); // BigDecimal | Valor mínimo.
        BigDecimal amountMax = new BigDecimal("500"); // BigDecimal | Valor máximo.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Data de criação inicial.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Data de criação final.
        Integer page = 1; // Integer | Número da página. Valor inválido vira 1.
        Integer limit = 20; // Integer | Itens por página. Valor inválido vira 20.
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
| **status** | **String**| Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | [optional] |
| **document** | **String**| CPF ou CNPJ, apenas dígitos. | [optional] |
| **name** | **String**| Nome do pagador ou recebedor. | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
| **amountMin** | **BigDecimal**| Valor mínimo. | [optional] |
| **amountMax** | **BigDecimal**| Valor máximo. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Data de criação inicial. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Data de criação final. | [optional] |
| **page** | **Integer**| Número da página. Valor inválido vira 1. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. Valor inválido vira 20. | [optional] [default to 20] |

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
| **200** | Página de pendentes. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |


## getUserDepositPendingById

> DepositPending getUserDepositPendingById(id)

Consultar depósito via chave Pix

Retorna um depósito via chave Pix.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7r1u50005q8f2m1g6c8fj"; // String | Id do depósito pendente.
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
| **id** | **String**| Id do depósito pendente. | |

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
| **200** | Depósito pendente. |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

## getUserDepositPendingByIdWithHttpInfo

> ApiResponse<DepositPending> getUserDepositPendingByIdWithHttpInfo(id)

Consultar depósito via chave Pix

Retorna um depósito via chave Pix.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "cm3w7r1u50005q8f2m1g6c8fj"; // String | Id do depósito pendente.
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
| **id** | **String**| Id do depósito pendente. | |

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
| **200** | Depósito pendente. |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |


## getUserReport

> ReportJobDetail getUserReport(id)

Consultar status do relatório

Retorna o status e os metadados de um job de relatório específico pelo &#x60;id&#x60;.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | ID do relatório.
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
| **id** | **UUID**| ID do relatório. | |

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
| **200** | Job de relatório |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Relatório não encontrado |  -  |

## getUserReportWithHttpInfo

> ApiResponse<ReportJobDetail> getUserReportWithHttpInfo(id)

Consultar status do relatório

Retorna o status e os metadados de um job de relatório específico pelo &#x60;id&#x60;.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        UUID id = UUID.fromString("01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78"); // UUID | ID do relatório.
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
| **id** | **UUID**| ID do relatório. | |

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
| **200** | Job de relatório |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Relatório não encontrado |  -  |


## getUserSummary

> Summary getUserSummary(dateFrom, dateTo, groupBy, grouped)

Resumo de transações

Totais agregados de depósitos, saques e comissão num período.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01T00:00:00-03:00"); // OffsetDateTime | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31T23:59:59-03:00"); // OffsetDateTime | Data final. Padrão: agora.
        String groupBy = "day"; // String | Agrupamento das transações.
        Boolean grouped = true; // Boolean | Quando true, retorna uma série agrupada por data.
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
| **dateFrom** | **OffsetDateTime**| Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | [optional] |
| **dateTo** | **OffsetDateTime**| Data final. Padrão: agora. | [optional] |
| **groupBy** | **String**| Agrupamento das transações. | [optional] [default to day] [enum: day] |
| **grouped** | **Boolean**| Quando true, retorna uma série agrupada por data. | [optional] |

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
| **200** | Resumo. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

## getUserSummaryWithHttpInfo

> ApiResponse<Summary> getUserSummaryWithHttpInfo(dateFrom, dateTo, groupBy, grouped)

Resumo de transações

Totais agregados de depósitos, saques e comissão num período.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01T00:00:00-03:00"); // OffsetDateTime | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31T23:59:59-03:00"); // OffsetDateTime | Data final. Padrão: agora.
        String groupBy = "day"; // String | Agrupamento das transações.
        Boolean grouped = true; // Boolean | Quando true, retorna uma série agrupada por data.
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
| **dateFrom** | **OffsetDateTime**| Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | [optional] |
| **dateTo** | **OffsetDateTime**| Data final. Padrão: agora. | [optional] |
| **groupBy** | **String**| Agrupamento das transações. | [optional] [default to day] [enum: day] |
| **grouped** | **Boolean**| Quando true, retorna uma série agrupada por data. | [optional] |

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
| **200** | Resumo. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |


## getUserTransactionById

> GetUserTransactionById200Response getUserTransactionById(id)

Listar detalhes da transação

Recupera uma única transação com seu log de callback e as infrações vinculadas.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
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
| **id** | **String**| ID da transação. | |

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
| **200** | Detalhes da transação |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação não encontrada |  -  |

## getUserTransactionByIdWithHttpInfo

> ApiResponse<GetUserTransactionById200Response> getUserTransactionByIdWithHttpInfo(id)

Listar detalhes da transação

Recupera uma única transação com seu log de callback e as infrações vinculadas.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
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
| **id** | **String**| ID da transação. | |

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
| **200** | Detalhes da transação |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação não encontrada |  -  |


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode)

Listar transações

Lista paginada das transações da conta com filtros.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01T00:00:00-03:00"); // OffsetDateTime | Data-hora inicial (ISO 8601).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31T23:59:59-03:00"); // OffsetDateTime | Data-hora final (ISO 8601).
        Integer limit = 10; // Integer | Itens por página.
        Integer page = 1; // Integer | Número da página.
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        String status = "COMPLETED,PENDING"; // String | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR`
        String type = "DEPOSIT,WITHDRAW"; // String | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
        String method = "PIX,INTERNAL_TRANSFER"; // String | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED`
        BigDecimal amount = new BigDecimal("15000"); // BigDecimal | Filtro por valor. Mínimo 0.01.
        String document = "12345678901"; // String | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação.
        String name = "Alice"; // String | Filtro por nome.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String sortBy = "createdAt"; // String | Campo pelo qual ordenar
        String sortDirection = "asc"; // String | Direção da ordenação
        String clientReference = "order_12345"; // String | Filtra por referência externa
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
        Boolean hasQrCode = true; // Boolean | Só transações com (true) ou sem (false) QR Code.
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
| **dateFrom** | **OffsetDateTime**| Data-hora inicial (ISO 8601). | [optional] |
| **dateTo** | **OffsetDateTime**| Data-hora final (ISO 8601). | [optional] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **id** | **String**| ID da transação. | [optional] |
| **status** | **String**| Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | [optional] |
| **type** | **String**| Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **String**| Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | [optional] |
| **amount** | **BigDecimal**| Filtro por valor. Mínimo 0.01. | [optional] |
| **document** | **String**| CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [optional] |
| **name** | **String**| Filtro por nome. | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
| **sortBy** | **String**| Campo pelo qual ordenar | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Direção da ordenação | [optional] [default to desc] [enum: asc, desc] |
| **clientReference** | **String**| Filtra por referência externa | [optional] |
| **virtualAccount** | **String**| Subconta usada na criação. | [optional] |
| **hasQrCode** | **Boolean**| Só transações com (true) ou sem (false) QR Code. | [optional] |

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
| **200** | Página de transações |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## getUserTransactionsWithHttpInfo

> ApiResponse<GetUserTransactions200Response> getUserTransactionsWithHttpInfo(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode)

Listar transações

Lista paginada das transações da conta com filtros.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        OffsetDateTime dateFrom = OffsetDateTime.parse("2026-08-01T00:00:00-03:00"); // OffsetDateTime | Data-hora inicial (ISO 8601).
        OffsetDateTime dateTo = OffsetDateTime.parse("2026-08-31T23:59:59-03:00"); // OffsetDateTime | Data-hora final (ISO 8601).
        Integer limit = 10; // Integer | Itens por página.
        Integer page = 1; // Integer | Número da página.
        String id = "PAYZU20260814T6NX1CV9MK000000"; // String | ID da transação.
        String status = "COMPLETED,PENDING"; // String | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR`
        String type = "DEPOSIT,WITHDRAW"; // String | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
        String method = "PIX,INTERNAL_TRANSFER"; // String | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED`
        BigDecimal amount = new BigDecimal("15000"); // BigDecimal | Filtro por valor. Mínimo 0.01.
        String document = "12345678901"; // String | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação.
        String name = "Alice"; // String | Filtro por nome.
        String endToEndId = "E00000000202508172159kZ8dQ2mNb1x"; // String | ID end-to-end do Pix.
        String sortBy = "createdAt"; // String | Campo pelo qual ordenar
        String sortDirection = "asc"; // String | Direção da ordenação
        String clientReference = "order_12345"; // String | Filtra por referência externa
        String virtualAccount = "loja-centro-01"; // String | Subconta usada na criação.
        Boolean hasQrCode = true; // Boolean | Só transações com (true) ou sem (false) QR Code.
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
| **dateFrom** | **OffsetDateTime**| Data-hora inicial (ISO 8601). | [optional] |
| **dateTo** | **OffsetDateTime**| Data-hora final (ISO 8601). | [optional] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **id** | **String**| ID da transação. | [optional] |
| **status** | **String**| Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | [optional] |
| **type** | **String**| Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **String**| Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | [optional] |
| **amount** | **BigDecimal**| Filtro por valor. Mínimo 0.01. | [optional] |
| **document** | **String**| CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [optional] |
| **name** | **String**| Filtro por nome. | [optional] |
| **endToEndId** | **String**| ID end-to-end do Pix. | [optional] |
| **sortBy** | **String**| Campo pelo qual ordenar | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Direção da ordenação | [optional] [default to desc] [enum: asc, desc] |
| **clientReference** | **String**| Filtra por referência externa | [optional] |
| **virtualAccount** | **String**| Subconta usada na criação. | [optional] |
| **hasQrCode** | **Boolean**| Só transações com (true) ou sem (false) QR Code. | [optional] |

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
| **200** | Página de transações |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |


## listUserReports

> ListUserReports200Response listUserReports(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection)

Listar jobs de relatório

Lista os jobs de relatório criados pelo usuário autenticado.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String status = "COMPLETED,FAILED"; // String | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: criado a partir de.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: criado até.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: atualizado a partir de.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: atualizado até.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
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
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **status** | **String**| Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filtro: criado a partir de. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filtro: criado até. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filtro: atualizado a partir de. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filtro: atualizado até. | [optional] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |

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
| **200** | Página de jobs de relatório |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

## listUserReportsWithHttpInfo

> ApiResponse<ListUserReports200Response> listUserReportsWithHttpInfo(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection)

Listar jobs de relatório

Lista os jobs de relatório criados pelo usuário autenticado.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        ReportsApi apiInstance = new ReportsApi(defaultClient);
        Integer page = 1; // Integer | Número da página.
        Integer limit = 10; // Integer | Itens por página.
        String status = "COMPLETED,FAILED"; // String | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED.
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: criado a partir de.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: criado até.
        OffsetDateTime updatedAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Filtro: atualizado a partir de.
        OffsetDateTime updatedAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | Filtro: atualizado até.
        String sortBy = "createdAt"; // String | Campo de ordenação.
        String sortDirection = "asc"; // String | Direção da ordenação.
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
| **page** | **Integer**| Número da página. | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página. | [optional] [default to 10] |
| **status** | **String**| Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Filtro: criado a partir de. | [optional] |
| **createdAtTo** | **OffsetDateTime**| Filtro: criado até. | [optional] |
| **updatedAtFrom** | **OffsetDateTime**| Filtro: atualizado a partir de. | [optional] |
| **updatedAtTo** | **OffsetDateTime**| Filtro: atualizado até. | [optional] |
| **sortBy** | **String**| Campo de ordenação. | [optional] [default to createdAt] [enum: createdAt, updatedAt] |
| **sortDirection** | **String**| Direção da ordenação. | [optional] [default to desc] [enum: asc, desc] |

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
| **200** | Página de jobs de relatório |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |


## postUserReport

> ReportJobAccepted postUserReport(postUserReportRequest)

Gerar relatório de transações

Enfileira um job assíncrono que gera um relatório CSV das transações para o período e filtros informados.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **422** | Nenhuma transação no filtro |  -  |

## postUserReportWithHttpInfo

> ApiResponse<ReportJobAccepted> postUserReportWithHttpInfo(postUserReportRequest)

Gerar relatório de transações

Enfileira um job assíncrono que gera um relatório CSV das transações para o período e filtros informados.

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
        defaultClient.updateBaseUri("https://api.pix.payzu.com.br/v1");
        
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
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **422** | Nenhuma transação no filtro |  -  |

