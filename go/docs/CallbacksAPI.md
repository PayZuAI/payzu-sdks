# \CallbacksAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetUserCallbackById**](CallbacksAPI.md#GetUserCallbackById) | **Get** /user/callbacks/{id} | Get Callback
[**GetUserCallbacks**](CallbacksAPI.md#GetUserCallbacks) | **Get** /user/callbacks | List Callbacks
[**ResendUserCallbackSingle**](CallbacksAPI.md#ResendUserCallbackSingle) | **Post** /user/callbacks/resend/{transactionId} | Re-send callback (single)
[**ResendUserCallbacks**](CallbacksAPI.md#ResendUserCallbacks) | **Post** /user/callbacks/resend | Re-send callbacks (bulk)
[**ResendUserCallbacksWebhook**](CallbacksAPI.md#ResendUserCallbacksWebhook) | **Post** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook



## GetUserCallbackById

> CallbackDetail GetUserCallbackById(ctx, id).Execute()

Get Callback



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
	id := "id_example" // string | Unique callback ID

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.GetUserCallbackById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.GetUserCallbackById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserCallbackById`: CallbackDetail
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.GetUserCallbackById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Unique callback ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserCallbackByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CallbackDetail**](CallbackDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserCallbacks

> CallbackListResponse GetUserCallbacks(ctx).Page(page).Limit(limit).SortBy(sortBy).SortDirection(sortDirection).Id(id).Url(url).Status(status).TransactionId(transactionId).HasError(hasError).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).Execute()

List Callbacks



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go"
)

func main() {
	page := int32(56) // int32 |  (optional) (default to 1)
	limit := int32(56) // int32 |  (optional) (default to 10)
	sortBy := "sortBy_example" // string |  (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string |  (optional) (default to "desc")
	id := "id_example" // string | Filter by callback ID (optional)
	url := "url_example" // string | Filter by callback URL (optional)
	status := int32(56) // int32 | HTTP status code (optional)
	transactionId := "transactionId_example" // string |  (optional)
	hasError := true // bool | Filter callbacks that errored (optional)
	createdAtFrom := time.Now() // time.Time |  (optional)
	createdAtTo := time.Now() // time.Time |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.GetUserCallbacks(context.Background()).Page(page).Limit(limit).SortBy(sortBy).SortDirection(sortDirection).Id(id).Url(url).Status(status).TransactionId(transactionId).HasError(hasError).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.GetUserCallbacks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserCallbacks`: CallbackListResponse
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.GetUserCallbacks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserCallbacksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** |  | [default to 1]
 **limit** | **int32** |  | [default to 10]
 **sortBy** | **string** |  | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** |  | [default to &quot;desc&quot;]
 **id** | **string** | Filter by callback ID | 
 **url** | **string** | Filter by callback URL | 
 **status** | **int32** | HTTP status code | 
 **transactionId** | **string** |  | 
 **hasError** | **bool** | Filter callbacks that errored | 
 **createdAtFrom** | **time.Time** |  | 
 **createdAtTo** | **time.Time** |  | 

### Return type

[**CallbackListResponse**](CallbackListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResendUserCallbackSingle

> ResendUserCallbackSingle200Response ResendUserCallbackSingle(ctx, transactionId).Execute()

Re-send callback (single)



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
	resp, r, err := apiClient.CallbacksAPI.ResendUserCallbackSingle(context.Background(), transactionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.ResendUserCallbackSingle``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResendUserCallbackSingle`: ResendUserCallbackSingle200Response
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.ResendUserCallbackSingle`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiResendUserCallbackSingleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResendUserCallbacks

> ResendUserCallbacks200Response ResendUserCallbacks(ctx).ResendUserCallbacksRequest(resendUserCallbacksRequest).Execute()

Re-send callbacks (bulk)



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go"
)

func main() {
	resendUserCallbacksRequest := *openapiclient.NewResendUserCallbacksRequest(time.Now(), time.Now()) // ResendUserCallbacksRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.ResendUserCallbacks(context.Background()).ResendUserCallbacksRequest(resendUserCallbacksRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.ResendUserCallbacks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResendUserCallbacks`: ResendUserCallbacks200Response
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.ResendUserCallbacks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiResendUserCallbacksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendUserCallbacksRequest** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md) |  | 

### Return type

[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResendUserCallbacksWebhook

> CallbackResendResponse ResendUserCallbacksWebhook(ctx, webhookId).Execute()

Resend callbacks by webhook



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
	webhookId := "webhookId_example" // string | Webhook id.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.ResendUserCallbacksWebhook(context.Background(), webhookId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.ResendUserCallbacksWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResendUserCallbacksWebhook`: CallbackResendResponse
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.ResendUserCallbacksWebhook`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**webhookId** | **string** | Webhook id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiResendUserCallbacksWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CallbackResendResponse**](CallbackResendResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

