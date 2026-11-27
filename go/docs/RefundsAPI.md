# \RefundsAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PostRefund**](RefundsAPI.md#PostRefund) | **Post** /refund/{transactionId} | Solicitar a devolução de um Pix recebido



## PostRefund

> TransactionWithRefunds PostRefund(ctx, transactionId).RefundRequest(refundRequest).Execute()

Solicitar a devolução de um Pix recebido



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
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação a devolver.
	refundRequest := *openapiclient.NewRefundRequest() // RefundRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RefundsAPI.PostRefund(context.Background(), transactionId).RefundRequest(refundRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RefundsAPI.PostRefund``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostRefund`: TransactionWithRefunds
	fmt.Fprintf(os.Stdout, "Response from `RefundsAPI.PostRefund`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | ID da transação a devolver. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRefundRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **refundRequest** | [**RefundRequest**](RefundRequest.md) |  | 

### Return type

[**TransactionWithRefunds**](TransactionWithRefunds.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

