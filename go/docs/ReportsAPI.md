# \ReportsAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DownloadUserReport**](ReportsAPI.md#DownloadUserReport) | **Post** /user/report/{id}/download | Download report
[**GetUserBankStatement**](ReportsAPI.md#GetUserBankStatement) | **Get** /user/bank-statements/{id} | Get bank statement
[**GetUserBankStatements**](ReportsAPI.md#GetUserBankStatements) | **Get** /user/bank-statements | List bank statements
[**GetUserDepositPending**](ReportsAPI.md#GetUserDepositPending) | **Get** /user/deposit-pending | List pending deposits
[**GetUserDepositPendingById**](ReportsAPI.md#GetUserDepositPendingById) | **Get** /user/deposit-pending/{id} | Get pending deposit
[**GetUserReport**](ReportsAPI.md#GetUserReport) | **Get** /user/report/{id} | Get report job status
[**GetUserSummary**](ReportsAPI.md#GetUserSummary) | **Get** /user/summary | Transaction summary
[**GetUserTransactionById**](ReportsAPI.md#GetUserTransactionById) | **Get** /user/transactions/{id} | List transaction details
[**GetUserTransactions**](ReportsAPI.md#GetUserTransactions) | **Get** /user/transactions | List Transactions
[**ListUserReports**](ReportsAPI.md#ListUserReports) | **Get** /user/report | List report jobs
[**PostUserReport**](ReportsAPI.md#PostUserReport) | **Post** /user/report | Generate transactions report



## DownloadUserReport

> DownloadUserReport200Response DownloadUserReport(ctx, id).Execute()

Download report



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	id := "01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78" // string | Report ID.

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
**id** | **string** | Report ID. | 

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

Get bank statement



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	id := "cm3w7q8s10004q8f2k9f5b7eh" // string | Statement entry id.

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
**id** | **string** | Statement entry id. | 

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

List bank statements



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	createdAtFrom := time.Now() // time.Time | Start date (required).
	createdAtTo := time.Now() // time.Time | End date (required).
	id := "cm3w7q8s10004q8f2k9f5b7eh" // string | Entry ID. (optional)
	operation := "operation_example" // string | Operation type.  `INCREMENT` `DECREMENT` (optional)
	reason := "Estorno" // string | Reason for the entry. (optional)
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | Transaction ID. (optional)
	amountFrom := float32(10.9) // float32 | Minimum amount. (optional)
	amountTo := float32(500) // float32 | Maximum amount. (optional)
	page := int32(56) // int32 | Page number. (optional) (default to 1)
	limit := int32(56) // int32 | Items per page. (optional) (default to 10)
	sortBy := "sortBy_example" // string | Sort field. (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Sort direction. (optional) (default to "desc")

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
 **createdAtFrom** | **time.Time** | Start date (required). | 
 **createdAtTo** | **time.Time** | End date (required). | 
 **id** | **string** | Entry ID. | 
 **operation** | **string** | Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | 
 **reason** | **string** | Reason for the entry. | 
 **transactionId** | **string** | Transaction ID. | 
 **amountFrom** | **float32** | Minimum amount. | 
 **amountTo** | **float32** | Maximum amount. | 
 **page** | **int32** | Page number. | [default to 1]
 **limit** | **int32** | Items per page. | [default to 10]
 **sortBy** | **string** | Sort field. | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Sort direction. | [default to &quot;desc&quot;]

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

List pending deposits



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	status := "PENDING" // string | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. (optional)
	document := "12345678901" // string | CPF or CNPJ, digits only. (optional)
	name := "John Doe" // string | Name of the payer or receiver. (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | End-to-end ID of the Pix. (optional)
	amountMin := float32(10.9) // float32 | Minimum amount. (optional)
	amountMax := float32(500) // float32 | Maximum amount. (optional)
	createdAtFrom := time.Now() // time.Time | Start of the creation date range. (optional)
	createdAtTo := time.Now() // time.Time | End of the creation date range. (optional)
	page := int32(56) // int32 | Page number. (optional) (default to 1)
	limit := int32(56) // int32 | Items per page. (optional) (default to 20)

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
 **status** | **string** | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | 
 **document** | **string** | CPF or CNPJ, digits only. | 
 **name** | **string** | Name of the payer or receiver. | 
 **endToEndId** | **string** | End-to-end ID of the Pix. | 
 **amountMin** | **float32** | Minimum amount. | 
 **amountMax** | **float32** | Maximum amount. | 
 **createdAtFrom** | **time.Time** | Start of the creation date range. | 
 **createdAtTo** | **time.Time** | End of the creation date range. | 
 **page** | **int32** | Page number. | [default to 1]
 **limit** | **int32** | Items per page. | [default to 20]

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

Get pending deposit



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	id := "cm3w7r1u50005q8f2m1g6c8fj" // string | Pending deposit id.

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
**id** | **string** | Pending deposit id. | 

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

Get report job status



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	id := "01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78" // string | Report ID.

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
**id** | **string** | Report ID. | 

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

Transaction summary



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	dateFrom := time.Now() // time.Time | Start date. Default: start of the previous day (America/Sao_Paulo). (optional)
	dateTo := time.Now() // time.Time | End date. Default: now. (optional)
	groupBy := "groupBy_example" // string | Grouping applied to the transactions. (optional) (default to "day")
	grouped := true // bool | When true, returns a series grouped by date. (optional)

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
 **dateFrom** | **time.Time** | Start date. Default: start of the previous day (America/Sao_Paulo). | 
 **dateTo** | **time.Time** | End date. Default: now. | 
 **groupBy** | **string** | Grouping applied to the transactions. | [default to &quot;day&quot;]
 **grouped** | **bool** | When true, returns a series grouped by date. | 

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

List transaction details



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	id := "PAYZU20260814T6NX1CV9MK000000" // string | Transaction ID.

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
**id** | **string** | Transaction ID. | 

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

List Transactions



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	dateFrom := time.Now() // time.Time | Start date or date-time (ISO 8601). (optional)
	dateTo := time.Now() // time.Time | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. (optional)
	limit := int32(10) // int32 | Items per page (max 1000). (optional) (default to 10)
	page := int32(1) // int32 | Page number (default 1). (optional) (default to 1)
	id := "PAYZU20260814T6NX1CV9MK000000" // string | Transaction ID. (optional)
	status := "COMPLETED" // string | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. (optional)
	type_ := "DEPOSIT" // string | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. (optional)
	method := "PIX" // string | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. (optional)
	amount := float32(15000) // float32 | Amount filter. Minimum 0.01. (optional)
	document := "12345678901" // string | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. (optional)
	name := "Alice" // string | Name filter. (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | Pix end-to-end ID. (optional)
	sortBy := "sortBy_example" // string | Field to sort by (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Sort direction (optional) (default to "desc")
	clientReference := "order_12345" // string | Filter by external reference (optional)
	virtualAccount := "loja-centro-01" // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
	hasQrCode := true // bool | Only transactions with (true) or without (false) QR Code. (optional)

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
 **dateFrom** | **time.Time** | Start date or date-time (ISO 8601). | 
 **dateTo** | **time.Time** | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. | 
 **limit** | **int32** | Items per page (max 1000). | [default to 10]
 **page** | **int32** | Page number (default 1). | [default to 1]
 **id** | **string** | Transaction ID. | 
 **status** | **string** | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | 
 **type_** | **string** | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | 
 **method** | **string** | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | 
 **amount** | **float32** | Amount filter. Minimum 0.01. | 
 **document** | **string** | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | 
 **name** | **string** | Name filter. | 
 **endToEndId** | **string** | Pix end-to-end ID. | 
 **sortBy** | **string** | Field to sort by | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Sort direction | [default to &quot;desc&quot;]
 **clientReference** | **string** | Filter by external reference | 
 **virtualAccount** | **string** | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | 
 **hasQrCode** | **bool** | Only transactions with (true) or without (false) QR Code. | 

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

List report jobs



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
)

func main() {
	page := int32(56) // int32 | Page number. (optional) (default to 1)
	limit := int32(56) // int32 | Items per page. (optional) (default to 10)
	status := "COMPLETED,FAILED" // string | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. (optional)
	createdAtFrom := time.Now() // time.Time | Filter: created from. (optional)
	createdAtTo := time.Now() // time.Time | Filter: created up to. (optional)
	updatedAtFrom := time.Now() // time.Time | Filter: updated from. (optional)
	updatedAtTo := time.Now() // time.Time | Filter: updated up to. (optional)
	sortBy := "sortBy_example" // string | Sort field. (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Sort direction. (optional) (default to "desc")

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
 **page** | **int32** | Page number. | [default to 1]
 **limit** | **int32** | Items per page. | [default to 10]
 **status** | **string** | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | 
 **createdAtFrom** | **time.Time** | Filter: created from. | 
 **createdAtTo** | **time.Time** | Filter: created up to. | 
 **updatedAtFrom** | **time.Time** | Filter: updated from. | 
 **updatedAtTo** | **time.Time** | Filter: updated up to. | 
 **sortBy** | **string** | Sort field. | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Sort direction. | [default to &quot;desc&quot;]

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

Generate transactions report



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v2"
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

