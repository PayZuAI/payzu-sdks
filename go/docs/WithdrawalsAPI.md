# \WithdrawalsAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetWithdraw**](WithdrawalsAPI.md#GetWithdraw) | **Get** /withdraw | Retrieve Withdrawal
[**GetWithdrawProof**](WithdrawalsAPI.md#GetWithdrawProof) | **Get** /withdraw/proof/{id} | Get Withdrawal Receipt
[**PostWithdraw**](WithdrawalsAPI.md#PostWithdraw) | **Post** /withdraw | Create Withdrawal (Pix key)
[**PostWithdrawQrcode**](WithdrawalsAPI.md#PostWithdrawQrcode) | **Post** /withdraw/qrcode | Create Withdrawal using QR Code



## GetWithdraw

> Transaction GetWithdraw(ctx).Id(id).ClientReference(clientReference).EndToEndId(endToEndId).VirtualAccount(virtualAccount).Execute()

Retrieve Withdrawal



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
	id := "PAYZU20260817B3PL8SG5WQ000000" // string | Transaction ID. (optional)
	clientReference := "order_12345" // string | External reference provided when creating the withdrawal. (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | Pix end-to-end ID. (optional)
	virtualAccount := "loja-centro-01" // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WithdrawalsAPI.GetWithdraw(context.Background()).Id(id).ClientReference(clientReference).EndToEndId(endToEndId).VirtualAccount(virtualAccount).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WithdrawalsAPI.GetWithdraw``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWithdraw`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `WithdrawalsAPI.GetWithdraw`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWithdrawRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | Transaction ID. | 
 **clientReference** | **string** | External reference provided when creating the withdrawal. | 
 **endToEndId** | **string** | Pix end-to-end ID. | 
 **virtualAccount** | **string** | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWithdrawProof

> ProofResponse GetWithdrawProof(ctx, id).Type_(type_).Execute()

Get Withdrawal Receipt



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
	id := "PAYZU20260817B3PL8SG5WQ000000" // string | Transaction ID.
	type_ := "pdf" // string | Return format. (optional) (default to "pdf")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WithdrawalsAPI.GetWithdrawProof(context.Background(), id).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WithdrawalsAPI.GetWithdrawProof``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetWithdrawProof`: ProofResponse
	fmt.Fprintf(os.Stdout, "Response from `WithdrawalsAPI.GetWithdrawProof`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Transaction ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWithdrawProofRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | **string** | Return format. | [default to &quot;pdf&quot;]

### Return type

[**ProofResponse**](ProofResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostWithdraw

> Transaction PostWithdraw(ctx).PostWithdrawRequest(postWithdrawRequest).Execute()

Create Withdrawal (Pix key)



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
	postWithdrawRequest := *openapiclient.NewPostWithdrawRequest(float32(2), "teste@teste.com", "email") // PostWithdrawRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WithdrawalsAPI.PostWithdraw(context.Background()).PostWithdrawRequest(postWithdrawRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WithdrawalsAPI.PostWithdraw``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostWithdraw`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `WithdrawalsAPI.PostWithdraw`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostWithdrawRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postWithdrawRequest** | [**PostWithdrawRequest**](PostWithdrawRequest.md) |  | 

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


## PostWithdrawQrcode

> Transaction PostWithdrawQrcode(ctx).PostWithdrawQrcodeRequest(postWithdrawQrcodeRequest).Execute()

Create Withdrawal using QR Code



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
	postWithdrawQrcodeRequest := *openapiclient.NewPostWithdrawQrcodeRequest("00020101021226770014br.gov.bcb.pix2555api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5916PAYZU 6007SAOPAULO6217051320260118278956304EC55") // PostWithdrawQrcodeRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WithdrawalsAPI.PostWithdrawQrcode(context.Background()).PostWithdrawQrcodeRequest(postWithdrawQrcodeRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WithdrawalsAPI.PostWithdrawQrcode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostWithdrawQrcode`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `WithdrawalsAPI.PostWithdrawQrcode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostWithdrawQrcodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postWithdrawQrcodeRequest** | [**PostWithdrawQrcodeRequest**](PostWithdrawQrcodeRequest.md) |  | 

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

