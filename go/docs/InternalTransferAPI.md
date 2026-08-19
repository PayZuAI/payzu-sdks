# \InternalTransferAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInternalTransfer**](InternalTransferAPI.md#GetInternalTransfer) | **Get** /internal-transfer | Get internal transfer
[**PostInternalTransfer**](InternalTransferAPI.md#PostInternalTransfer) | **Post** /internal-transfer | Create internal transfer



## GetInternalTransfer

> Transaction GetInternalTransfer(ctx).Id(id).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()

Get internal transfer



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
	id := "id_example" // string | Transaction ID (optional)
	clientReference := "clientReference_example" // string | External reference (optional)
	virtualAccount := "virtualAccount_example" // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InternalTransferAPI.GetInternalTransfer(context.Background()).Id(id).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InternalTransferAPI.GetInternalTransfer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInternalTransfer`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `InternalTransferAPI.GetInternalTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInternalTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | Transaction ID | 
 **clientReference** | **string** | External reference | 
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


## PostInternalTransfer

> Transaction PostInternalTransfer(ctx).PostInternalTransferRequest(postInternalTransferRequest).Execute()

Create internal transfer



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
	postInternalTransferRequest := *openapiclient.NewPostInternalTransferRequest("513579", "987654", float32(100.5)) // PostInternalTransferRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InternalTransferAPI.PostInternalTransfer(context.Background()).PostInternalTransferRequest(postInternalTransferRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InternalTransferAPI.PostInternalTransfer``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostInternalTransfer`: Transaction
	fmt.Fprintf(os.Stdout, "Response from `InternalTransferAPI.PostInternalTransfer`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostInternalTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postInternalTransferRequest** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md) |  | 

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

