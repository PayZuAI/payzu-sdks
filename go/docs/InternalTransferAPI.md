# \InternalTransferAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInternalTransfer**](InternalTransferAPI.md#GetInternalTransfer) | **Get** /internal-transfer | Obter transferência interna
[**PostInternalTransfer**](InternalTransferAPI.md#PostInternalTransfer) | **Post** /internal-transfer | Criar transferência interna



## GetInternalTransfer

> Transaction GetInternalTransfer(ctx).Id(id).ClientReference(clientReference).VirtualAccount(virtualAccount).Execute()

Obter transferência interna



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	id := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação (optional)
	clientReference := "order_12345" // string | Referência externa (optional)
	virtualAccount := "loja-centro-01" // string | Subconta usada na criação. (optional)

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
 **id** | **string** | ID da transação | 
 **clientReference** | **string** | Referência externa | 
 **virtualAccount** | **string** | Subconta usada na criação. | 

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

Criar transferência interna



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	postInternalTransferRequest := *openapiclient.NewPostInternalTransferRequest("000000", "987654", float32(100.5)) // PostInternalTransferRequest | 

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

