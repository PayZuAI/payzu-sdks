# \AllowlistAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetUserWhitelistCnpj**](AllowlistAPI.md#GetUserWhitelistCnpj) | **Get** /user/whitelist/cnpj | Listar CNPJs autorizados
[**GetUserWhitelistPixKey**](AllowlistAPI.md#GetUserWhitelistPixKey) | **Get** /user/whitelist/pix-key | Listar chaves Pix autorizadas



## GetUserWhitelistCnpj

> GetUserWhitelistCnpj200Response GetUserWhitelistCnpj(ctx).From(from).To(to).Active(active).Cursor(cursor).Limit(limit).Execute()

Listar CNPJs autorizados



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
	from := time.Now() // time.Time |  (optional)
	to := time.Now() // time.Time |  (optional)
	active := true // bool |  (optional)
	cursor := "cmf0w1t3l0001qk08cnpj0001" // string |  (optional)
	limit := int32(20) // int32 |  (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AllowlistAPI.GetUserWhitelistCnpj(context.Background()).From(from).To(to).Active(active).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AllowlistAPI.GetUserWhitelistCnpj``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWhitelistCnpj`: GetUserWhitelistCnpj200Response
	fmt.Fprintf(os.Stdout, "Response from `AllowlistAPI.GetUserWhitelistCnpj`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWhitelistCnpjRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **time.Time** |  | 
 **to** | **time.Time** |  | 
 **active** | **bool** |  | 
 **cursor** | **string** |  | 
 **limit** | **int32** |  | [default to 20]

### Return type

[**GetUserWhitelistCnpj200Response**](GetUserWhitelistCnpj200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserWhitelistPixKey

> GetUserWhitelistPixKey200Response GetUserWhitelistPixKey(ctx).From(from).To(to).Active(active).Cursor(cursor).Limit(limit).Execute()

Listar chaves Pix autorizadas



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
	from := time.Now() // time.Time |  (optional)
	to := time.Now() // time.Time |  (optional)
	active := true // bool |  (optional)
	cursor := "cmf0w1t3l0001qk08pixk0001" // string |  (optional)
	limit := int32(20) // int32 |  (optional) (default to 20)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AllowlistAPI.GetUserWhitelistPixKey(context.Background()).From(from).To(to).Active(active).Cursor(cursor).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AllowlistAPI.GetUserWhitelistPixKey``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWhitelistPixKey`: GetUserWhitelistPixKey200Response
	fmt.Fprintf(os.Stdout, "Response from `AllowlistAPI.GetUserWhitelistPixKey`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWhitelistPixKeyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **time.Time** |  | 
 **to** | **time.Time** |  | 
 **active** | **bool** |  | 
 **cursor** | **string** |  | 
 **limit** | **int32** |  | [default to 20]

### Return type

[**GetUserWhitelistPixKey200Response**](GetUserWhitelistPixKey200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

