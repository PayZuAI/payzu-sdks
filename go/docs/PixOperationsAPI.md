# \PixOperationsAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPix**](PixOperationsAPI.md#GetPix) | **Get** /pix | Retrieve Charge
[**GetPixQrcode**](PixOperationsAPI.md#GetPixQrcode) | **Get** /pix/qr-code/{transactionId} | Render Pix QR code (PNG)
[**GetProof**](PixOperationsAPI.md#GetProof) | **Get** /proof/{id} | Get Transaction Receipt
[**PostPix**](PixOperationsAPI.md#PostPix) | **Post** /pix | Create Charge (Pix deposit)



## GetPix

> Transaction GetPix(ctx).Id(id).ClientReference(clientReference).EndToEndId(endToEndId).VirtualAccount(virtualAccount).Execute()

Retrieve Charge



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go"
)

func main() {
	id := "PAYZU20250817215911F49RDOBJ" // string | Transaction ID. (optional)
	clientReference := "clientReference_example" // string | External reference provided when creating the charge. (optional)
	endToEndId := "endToEndId_example" // string | Pix end-to-end ID. (optional)
	virtualAccount := "virtualAccount_example" // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PixOperationsAPI.GetPix(context.Background()).Id(id).ClientReference(clientReference).EndToEndId(endToEndId).VirtualAccount(virtualAccount).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PixOperationsAPI.GetPix``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPix`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `PixOperationsAPI.GetPix`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPixRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | Transaction ID. | 
 **clientReference** | **string** | External reference provided when creating the charge. | 
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


## GetPixQrcode

> *os.File GetPixQrcode(ctx, transactionId).Execute()

Render Pix QR code (PNG)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go"
)

func main() {
	transactionId := "transactionId_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PixOperationsAPI.GetPixQrcode(context.Background(), transactionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PixOperationsAPI.GetPixQrcode``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPixQrcode`: *os.File
	fmt.Fprintf(os.Stdout, "Response from `PixOperationsAPI.GetPixQrcode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPixQrcodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[***os.File**](*os.File.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProof

> ProofResponse GetProof(ctx, id).Type_(type_).Execute()

Get Transaction Receipt



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go"
)

func main() {
	id := "PAYZU2025081418333632CYKN8M" // string | Transaction ID.
	type_ := "pdf" // string | Return format. (optional) (default to "pdf")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PixOperationsAPI.GetProof(context.Background(), id).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PixOperationsAPI.GetProof``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProof`: ProofResponse
	fmt.Fprintf(os.Stdout, "Response from `PixOperationsAPI.GetProof`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Transaction ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProofRequest struct via the builder pattern


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


## PostPix

> Transaction PostPix(ctx).PostPixRequest(postPixRequest).Execute()

Create Charge (Pix deposit)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go"
)

func main() {
	postPixRequest := *openapiclient.NewPostPixRequest(float32(10.9)) // PostPixRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PixOperationsAPI.PostPix(context.Background()).PostPixRequest(postPixRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PixOperationsAPI.PostPix``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostPix`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `PixOperationsAPI.PostPix`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostPixRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPixRequest** | [**PostPixRequest**](PostPixRequest.md) |  | 

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

