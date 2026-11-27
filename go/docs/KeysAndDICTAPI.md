# \KeysAndDICTAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPixKey**](KeysAndDICTAPI.md#GetPixKey) | **Get** /pix/key | Consulta de chave Pix no DICT
[**PostPixQrcodeRead**](KeysAndDICTAPI.md#PostPixQrcodeRead) | **Post** /pix/qrcode/read | Ler QR Code



## GetPixKey

> PixKeyInfo GetPixKey(ctx).PixKey(pixKey).Execute()

Consulta de chave Pix no DICT



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
	pixKey := "example@payzu.com.br" // string | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KeysAndDICTAPI.GetPixKey(context.Background()).PixKey(pixKey).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KeysAndDICTAPI.GetPixKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPixKey`: PixKeyInfo
	fmt.Fprintf(os.Stdout, "Response from `KeysAndDICTAPI.GetPixKey`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPixKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pixKey** | **string** | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). | 

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPixQrcodeRead

> QRCodeReadResponse PostPixQrcodeRead(ctx).PostPixQrcodeReadRequest(postPixQrcodeReadRequest).Execute()

Ler QR Code



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
	postPixQrcodeReadRequest := *openapiclient.NewPostPixQrcodeReadRequest("00020101021226780014br.gov.bcb.pix2556api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5905PAYZU6008SAOPAULO6217051320260118278956304FEFF") // PostPixQrcodeReadRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KeysAndDICTAPI.PostPixQrcodeRead(context.Background()).PostPixQrcodeReadRequest(postPixQrcodeReadRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KeysAndDICTAPI.PostPixQrcodeRead``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostPixQrcodeRead`: QRCodeReadResponse
	fmt.Fprintf(os.Stdout, "Response from `KeysAndDICTAPI.PostPixQrcodeRead`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostPixQrcodeReadRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPixQrcodeReadRequest** | [**PostPixQrcodeReadRequest**](PostPixQrcodeReadRequest.md) |  | 

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

