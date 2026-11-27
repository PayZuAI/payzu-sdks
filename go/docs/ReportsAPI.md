# \ReportsAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DownloadUserReport**](ReportsAPI.md#DownloadUserReport) | **Post** /user/report/{id}/download | Baixar relatório
[**GetUserBankStatement**](ReportsAPI.md#GetUserBankStatement) | **Get** /user/bank-statements/{id} | Consultar lançamento
[**GetUserBankStatements**](ReportsAPI.md#GetUserBankStatements) | **Get** /user/bank-statements | Listar extrato
[**GetUserDepositPending**](ReportsAPI.md#GetUserDepositPending) | **Get** /user/deposit-pending | Listar depósitos via chave Pix
[**GetUserDepositPendingById**](ReportsAPI.md#GetUserDepositPendingById) | **Get** /user/deposit-pending/{id} | Consultar depósito via chave Pix
[**GetUserReport**](ReportsAPI.md#GetUserReport) | **Get** /user/report/{id} | Consultar status do relatório
[**GetUserSummary**](ReportsAPI.md#GetUserSummary) | **Get** /user/summary | Resumo de transações
[**GetUserTransactionById**](ReportsAPI.md#GetUserTransactionById) | **Get** /user/transactions/{id} | Listar detalhes da transação
[**GetUserTransactions**](ReportsAPI.md#GetUserTransactions) | **Get** /user/transactions | Listar transações
[**ListUserReports**](ReportsAPI.md#ListUserReports) | **Get** /user/report | Listar jobs de relatório
[**PostUserReport**](ReportsAPI.md#PostUserReport) | **Post** /user/report | Gerar relatório de transações



## DownloadUserReport

> DownloadUserReport200Response DownloadUserReport(ctx, id).Execute()

Baixar relatório



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	id := "01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78" // string | ID do relatório.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.DownloadUserReport(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.DownloadUserReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DownloadUserReport`: DownloadUserReport200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.DownloadUserReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID do relatório. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadUserReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserBankStatement

> BankStatement GetUserBankStatement(ctx, id).Execute()

Consultar lançamento



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	id := "cm3w7q8s10004q8f2k9f5b7eh" // string | Id do lançamento do extrato.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserBankStatement(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserBankStatement``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserBankStatement`: BankStatement
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserBankStatement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id do lançamento do extrato. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserBankStatementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BankStatement**](BankStatement.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserBankStatements

> BankStatementListResponse GetUserBankStatements(ctx).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).Id(id).Operation(operation).Reason(reason).TransactionId(transactionId).AmountFrom(amountFrom).AmountTo(amountTo).Page(page).Limit(limit).SortBy(sortBy).SortDirection(sortDirection).Execute()

Listar extrato



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	createdAtFrom := time.Now() // time.Time | Data inicial (obrigatória).
	createdAtTo := time.Now() // time.Time | Data final (obrigatória).
	id := "cm3w7q8s10004q8f2k9f5b7eh" // string | ID do lançamento. (optional)
	operation := "operation_example" // string | Tipo de operação.  `INCREMENT` `DECREMENT` (optional)
	reason := "PIX_DEPOSIT" // string | Razão do lançamento. (optional)
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação. (optional)
	amountFrom := float32(10.9) // float32 | Valor mínimo. (optional)
	amountTo := float32(500) // float32 | Valor máximo. (optional)
	page := int32(56) // int32 | Número da página. (optional) (default to 1)
	limit := int32(56) // int32 | Itens por página. (optional) (default to 10)
	sortBy := "sortBy_example" // string | Campo de ordenação. (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Direção da ordenação. (optional) (default to "desc")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserBankStatements(context.Background()).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).Id(id).Operation(operation).Reason(reason).TransactionId(transactionId).AmountFrom(amountFrom).AmountTo(amountTo).Page(page).Limit(limit).SortBy(sortBy).SortDirection(sortDirection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserBankStatements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserBankStatements`: BankStatementListResponse
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserBankStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserBankStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdAtFrom** | **time.Time** | Data inicial (obrigatória). | 
 **createdAtTo** | **time.Time** | Data final (obrigatória). | 
 **id** | **string** | ID do lançamento. | 
 **operation** | **string** | Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | 
 **reason** | **string** | Razão do lançamento. | 
 **transactionId** | **string** | ID da transação. | 
 **amountFrom** | **float32** | Valor mínimo. | 
 **amountTo** | **float32** | Valor máximo. | 
 **page** | **int32** | Número da página. | [default to 1]
 **limit** | **int32** | Itens por página. | [default to 10]
 **sortBy** | **string** | Campo de ordenação. | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Direção da ordenação. | [default to &quot;desc&quot;]

### Return type

[**BankStatementListResponse**](BankStatementListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserDepositPending

> DepositPendingListResponse GetUserDepositPending(ctx).Status(status).Document(document).Name(name).EndToEndId(endToEndId).AmountMin(amountMin).AmountMax(amountMax).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).Page(page).Limit(limit).Execute()

Listar depósitos via chave Pix



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	status := "PENDING" // string | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED` (optional)
	document := "12345678901" // string | CPF ou CNPJ, apenas dígitos. (optional)
	name := "John Doe" // string | Nome do pagador ou recebedor. (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | ID end-to-end do Pix. (optional)
	amountMin := float32(10.9) // float32 | Valor mínimo. (optional)
	amountMax := float32(500) // float32 | Valor máximo. (optional)
	createdAtFrom := time.Now() // time.Time | Data de criação inicial. (optional)
	createdAtTo := time.Now() // time.Time | Data de criação final. (optional)
	page := int32(56) // int32 | Número da página. Valor inválido vira 1. (optional) (default to 1)
	limit := int32(56) // int32 | Itens por página. Valor inválido vira 20. (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserDepositPending(context.Background()).Status(status).Document(document).Name(name).EndToEndId(endToEndId).AmountMin(amountMin).AmountMax(amountMax).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).Page(page).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserDepositPending``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserDepositPending`: DepositPendingListResponse
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserDepositPending`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserDepositPendingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **string** | Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | 
 **document** | **string** | CPF ou CNPJ, apenas dígitos. | 
 **name** | **string** | Nome do pagador ou recebedor. | 
 **endToEndId** | **string** | ID end-to-end do Pix. | 
 **amountMin** | **float32** | Valor mínimo. | 
 **amountMax** | **float32** | Valor máximo. | 
 **createdAtFrom** | **time.Time** | Data de criação inicial. | 
 **createdAtTo** | **time.Time** | Data de criação final. | 
 **page** | **int32** | Número da página. Valor inválido vira 1. | [default to 1]
 **limit** | **int32** | Itens por página. Valor inválido vira 20. | [default to 20]

### Return type

[**DepositPendingListResponse**](DepositPendingListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserDepositPendingById

> DepositPending GetUserDepositPendingById(ctx, id).Execute()

Consultar depósito via chave Pix



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	id := "cm3w7r1u50005q8f2m1g6c8fj" // string | Id do depósito pendente.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserDepositPendingById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserDepositPendingById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserDepositPendingById`: DepositPending
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserDepositPendingById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id do depósito pendente. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserDepositPendingByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DepositPending**](DepositPending.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserReport

> ReportJobDetail GetUserReport(ctx, id).Execute()

Consultar status do relatório



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	id := "01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78" // string | ID do relatório.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserReport(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserReport`: ReportJobDetail
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserReport`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID do relatório. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ReportJobDetail**](ReportJobDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserSummary

> Summary GetUserSummary(ctx).DateFrom(dateFrom).DateTo(dateTo).GroupBy(groupBy).Grouped(grouped).Execute()

Resumo de transações



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	dateFrom := time.Now() // time.Time | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). (optional)
	dateTo := time.Now() // time.Time | Data final. Padrão: agora. (optional)
	groupBy := "groupBy_example" // string | Agrupamento das transações. (optional) (default to "day")
	grouped := true // bool | Quando true, retorna uma série agrupada por data. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserSummary(context.Background()).DateFrom(dateFrom).DateTo(dateTo).GroupBy(groupBy).Grouped(grouped).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserSummary`: Summary
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserSummary`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateFrom** | **time.Time** | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | 
 **dateTo** | **time.Time** | Data final. Padrão: agora. | 
 **groupBy** | **string** | Agrupamento das transações. | [default to &quot;day&quot;]
 **grouped** | **bool** | Quando true, retorna uma série agrupada por data. | 

### Return type

[**Summary**](Summary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserTransactionById

> GetUserTransactionById200Response GetUserTransactionById(ctx, id).Execute()

Listar detalhes da transação



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	id := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserTransactionById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserTransactionById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserTransactionById`: GetUserTransactionById200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserTransactionById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID da transação. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserTransactionByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserTransactions

> GetUserTransactions200Response GetUserTransactions(ctx).DateFrom(dateFrom).DateTo(dateTo).Limit(limit).Page(page).Id(id).Status(status).Type_(type_).Method(method).Amount(amount).Document(document).Name(name).EndToEndId(endToEndId).SortBy(sortBy).SortDirection(sortDirection).ClientReference(clientReference).VirtualAccount(virtualAccount).HasQrCode(hasQrCode).Execute()

Listar transações



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	dateFrom := time.Now() // time.Time | Data-hora inicial (ISO 8601). (optional)
	dateTo := time.Now() // time.Time | Data-hora final (ISO 8601). (optional)
	limit := int32(10) // int32 | Itens por página. (optional) (default to 10)
	page := int32(1) // int32 | Número da página. (optional) (default to 1)
	id := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação. (optional)
	status := "COMPLETED" // string | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR` (optional)
	type_ := "DEPOSIT" // string | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. (optional)
	method := "PIX" // string | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED` (optional)
	amount := float32(15000) // float32 | Filtro por valor. Mínimo 0.01. (optional)
	document := "12345678901" // string | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. (optional)
	name := "Alice" // string | Filtro por nome. (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | ID end-to-end do Pix. (optional)
	sortBy := "sortBy_example" // string | Campo pelo qual ordenar (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Direção da ordenação (optional) (default to "desc")
	clientReference := "order_12345" // string | Filtra por referência externa (optional)
	virtualAccount := "loja-centro-01" // string | Subconta usada na criação. (optional)
	hasQrCode := true // bool | Só transações com (true) ou sem (false) QR Code. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.GetUserTransactions(context.Background()).DateFrom(dateFrom).DateTo(dateTo).Limit(limit).Page(page).Id(id).Status(status).Type_(type_).Method(method).Amount(amount).Document(document).Name(name).EndToEndId(endToEndId).SortBy(sortBy).SortDirection(sortDirection).ClientReference(clientReference).VirtualAccount(virtualAccount).HasQrCode(hasQrCode).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.GetUserTransactions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserTransactions`: GetUserTransactions200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.GetUserTransactions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateFrom** | **time.Time** | Data-hora inicial (ISO 8601). | 
 **dateTo** | **time.Time** | Data-hora final (ISO 8601). | 
 **limit** | **int32** | Itens por página. | [default to 10]
 **page** | **int32** | Número da página. | [default to 1]
 **id** | **string** | ID da transação. | 
 **status** | **string** | Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | 
 **type_** | **string** | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | 
 **method** | **string** | Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | 
 **amount** | **float32** | Filtro por valor. Mínimo 0.01. | 
 **document** | **string** | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | 
 **name** | **string** | Filtro por nome. | 
 **endToEndId** | **string** | ID end-to-end do Pix. | 
 **sortBy** | **string** | Campo pelo qual ordenar | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Direção da ordenação | [default to &quot;desc&quot;]
 **clientReference** | **string** | Filtra por referência externa | 
 **virtualAccount** | **string** | Subconta usada na criação. | 
 **hasQrCode** | **bool** | Só transações com (true) ou sem (false) QR Code. | 

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListUserReports

> ListUserReports200Response ListUserReports(ctx).Page(page).Limit(limit).Status(status).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).UpdatedAtFrom(updatedAtFrom).UpdatedAtTo(updatedAtTo).SortBy(sortBy).SortDirection(sortDirection).Execute()

Listar jobs de relatório



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	page := int32(56) // int32 | Número da página. (optional) (default to 1)
	limit := int32(56) // int32 | Itens por página. (optional) (default to 10)
	status := "COMPLETED,FAILED" // string | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. (optional)
	createdAtFrom := time.Now() // time.Time | Filtro: criado a partir de. (optional)
	createdAtTo := time.Now() // time.Time | Filtro: criado até. (optional)
	updatedAtFrom := time.Now() // time.Time | Filtro: atualizado a partir de. (optional)
	updatedAtTo := time.Now() // time.Time | Filtro: atualizado até. (optional)
	sortBy := "sortBy_example" // string | Campo de ordenação. (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Direção da ordenação. (optional) (default to "desc")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.ListUserReports(context.Background()).Page(page).Limit(limit).Status(status).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).UpdatedAtFrom(updatedAtFrom).UpdatedAtTo(updatedAtTo).SortBy(sortBy).SortDirection(sortDirection).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.ListUserReports``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListUserReports`: ListUserReports200Response
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.ListUserReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUserReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Número da página. | [default to 1]
 **limit** | **int32** | Itens por página. | [default to 10]
 **status** | **string** | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | 
 **createdAtFrom** | **time.Time** | Filtro: criado a partir de. | 
 **createdAtTo** | **time.Time** | Filtro: criado até. | 
 **updatedAtFrom** | **time.Time** | Filtro: atualizado a partir de. | 
 **updatedAtTo** | **time.Time** | Filtro: atualizado até. | 
 **sortBy** | **string** | Campo de ordenação. | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Direção da ordenação. | [default to &quot;desc&quot;]

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostUserReport

> ReportJobAccepted PostUserReport(ctx).PostUserReportRequest(postUserReportRequest).Execute()

Gerar relatório de transações



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	postUserReportRequest := *openapiclient.NewPostUserReportRequest(time.Now(), time.Now()) // PostUserReportRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ReportsAPI.PostUserReport(context.Background()).PostUserReportRequest(postUserReportRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ReportsAPI.PostUserReport``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostUserReport`: ReportJobAccepted
	fmt.Fprintf(os.Stdout, "Response from `ReportsAPI.PostUserReport`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostUserReportRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postUserReportRequest** | [**PostUserReportRequest**](PostUserReportRequest.md) |  | 

### Return type

[**ReportJobAccepted**](ReportJobAccepted.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

