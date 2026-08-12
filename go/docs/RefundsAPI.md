# \RefundsAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PostRefund**](RefundsAPI.md#PostRefund) | **Post** /refund/{transactionId} | Refund a Pix



## PostRefund

> Transaction PostRefund(ctx, transactionId).RefundRequest(refundRequest).Execute()

Refund a Pix



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuPlus/payzu-sdks/go"
)

func main() {
	transactionId := "transactionId_example" // string | ID of the transaction to refund.
	refundRequest := *openapiclient.NewRefundRequest() // RefundRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RefundsAPI.PostRefund(context.Background(), transactionId).RefundRequest(refundRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RefundsAPI.PostRefund``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostRefund`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `RefundsAPI.PostRefund`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | ID of the transaction to refund. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRefundRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **refundRequest** | [**RefundRequest**](RefundRequest.md) |  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

