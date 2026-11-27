# \PixOperationsAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPix**](PixOperationsAPI.md#GetPix) | **Get** /pix | Recuperar Cobrança
[**GetPixQrcode**](PixOperationsAPI.md#GetPixQrcode) | **Get** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG)
[**GetProof**](PixOperationsAPI.md#GetProof) | **Get** /proof/{id} | Obter comprovante da transação
[**PostPix**](PixOperationsAPI.md#PostPix) | **Post** /pix | Criar Cobrança (depósito Pix)



## GetPix

> Transaction GetPix(ctx).Id(id).ClientReference(clientReference).EndToEndId(endToEndId).VirtualAccount(virtualAccount).Execute()

Recuperar Cobrança



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
	id := "PAYZU20260811R4TZ8WD1NC000000" // string | ID da transação. (optional)
	clientReference := "order_12345" // string | Referência externa fornecida na criação da cobrança. (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | ID end-to-end do Pix. (optional)
	virtualAccount := "loja-centro-01" // string | Subconta usada na criação. (optional)

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
 **id** | **string** | ID da transação. | 
 **clientReference** | **string** | Referência externa fornecida na criação da cobrança. | 
 **endToEndId** | **string** | ID end-to-end do Pix. | 
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


## GetPixQrcode

> *os.File GetPixQrcode(ctx, transactionId).Execute()

Renderiza o QR Code Pix (PNG)



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
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação.

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
**transactionId** | **string** | ID da transação. | 

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

Obter comprovante da transação



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
	id := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação.
	type_ := "pdf" // string | Formato de retorno. (optional) (default to "pdf")

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
**id** | **string** | ID da transação. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProofRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | **string** | Formato de retorno. | [default to &quot;pdf&quot;]

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

Criar Cobrança (depósito Pix)



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

