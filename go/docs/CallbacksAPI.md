# \CallbacksAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateUserCallbackSecret**](CallbacksAPI.md#CreateUserCallbackSecret) | **Post** /user/callbacks/secret | Create callback secret
[**GetUserCallbackById**](CallbacksAPI.md#GetUserCallbackById) | **Get** /user/callbacks/{id} | Get Callback
[**GetUserCallbacks**](CallbacksAPI.md#GetUserCallbacks) | **Get** /user/callbacks | List Callbacks
[**ResendUserCallbackSingle**](CallbacksAPI.md#ResendUserCallbackSingle) | **Post** /user/callbacks/resend/{transactionId} | Re-send callback (single)
[**ResendUserCallbacks**](CallbacksAPI.md#ResendUserCallbacks) | **Post** /user/callbacks/resend | Re-send callbacks (bulk)
[**ResendUserCallbacksWebhook**](CallbacksAPI.md#ResendUserCallbacksWebhook) | **Post** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook
[**ResendUserCallbacksWebhooks**](CallbacksAPI.md#ResendUserCallbacksWebhooks) | **Post** /user/callbacks/resend/webhook | Resend webhook callbacks by filters
[**RotateUserCallbackSecret**](CallbacksAPI.md#RotateUserCallbackSecret) | **Patch** /user/callbacks/secret/rotate | Rotate callback secret



## CreateUserCallbackSecret

> CallbackSecretResponse CreateUserCallbackSecret(ctx).Execute()

Create callback secret



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.CreateUserCallbackSecret(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.CreateUserCallbackSecret``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateUserCallbackSecret`: CallbackSecretResponse
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.CreateUserCallbackSecret`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiCreateUserCallbackSecretRequest struct via the builder pattern


### Return type

[**CallbackSecretResponse**](CallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


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
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	id := "cm3w7l9v20001q8f2u6c1y4be" // string | Unique callback ID

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

> CallbackListResponse GetUserCallbacks(ctx).Page(page).Limit(limit).SortBy(sortBy).SortDirection(sortDirection).Id(id).Url(url).Status(status).TransactionId(transactionId).HasError(hasError).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).WebhookId(webhookId).EventType(eventType).Execute()

List Callbacks



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
	page := int32(56) // int32 | Page number. (optional) (default to 1)
	limit := int32(56) // int32 | Items per page. (optional) (default to 10)
	sortBy := "sortBy_example" // string | Sort field. (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Sort direction. (optional) (default to "desc")
	id := "cm3w7l9v20001q8f2u6c1y4be" // string | Filter by callback ID (optional)
	url := "https://webhook.cool/" // string | Filter by callback URL (optional)
	status := int32(200) // int32 | HTTP status code (optional)
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | Transaction ID. (optional)
	hasError := true // bool | Filter callbacks that errored (optional)
	createdAtFrom := time.Now() // time.Time | Start of the creation date range. (optional)
	createdAtTo := time.Now() // time.Time | End of the creation date range. (optional)
	webhookId := "webhookId_example" // string | Webhook id. (optional)
	eventType := openapiclient.WebhookEventType("TRANSACTION_PENDING") // WebhookEventType | Webhook event type. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.GetUserCallbacks(context.Background()).Page(page).Limit(limit).SortBy(sortBy).SortDirection(sortDirection).Id(id).Url(url).Status(status).TransactionId(transactionId).HasError(hasError).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).WebhookId(webhookId).EventType(eventType).Execute()
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
 **page** | **int32** | Page number. | [default to 1]
 **limit** | **int32** | Items per page. | [default to 10]
 **sortBy** | **string** | Sort field. | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Sort direction. | [default to &quot;desc&quot;]
 **id** | **string** | Filter by callback ID | 
 **url** | **string** | Filter by callback URL | 
 **status** | **int32** | HTTP status code | 
 **transactionId** | **string** | Transaction ID. | 
 **hasError** | **bool** | Filter callbacks that errored | 
 **createdAtFrom** | **time.Time** | Start of the creation date range. | 
 **createdAtTo** | **time.Time** | End of the creation date range. | 
 **webhookId** | **string** | Webhook id. | 
 **eventType** | [**WebhookEventType**](WebhookEventType.md) | Webhook event type. | 

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
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
)

func main() {
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | Transaction ID.

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
**transactionId** | **string** | Transaction ID. | 

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
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v3"
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

> EnqueuedCallback ResendUserCallbacksWebhook(ctx, webhookId).Execute()

Resend callbacks by webhook



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
	webhookId := "cm3w7k1t40000q8f2r5b9x3ad" // string | Webhook id.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.ResendUserCallbacksWebhook(context.Background(), webhookId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.ResendUserCallbacksWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResendUserCallbacksWebhook`: EnqueuedCallback
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

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResendUserCallbacksWebhooks

> EnqueuedCallback ResendUserCallbacksWebhooks(ctx).ResendWebhookCallbacksRequest(resendWebhookCallbacksRequest).Execute()

Resend webhook callbacks by filters



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
	resendWebhookCallbacksRequest := *openapiclient.NewResendWebhookCallbacksRequest(time.Now(), time.Now()) // ResendWebhookCallbacksRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.ResendUserCallbacksWebhooks(context.Background()).ResendWebhookCallbacksRequest(resendWebhookCallbacksRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.ResendUserCallbacksWebhooks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ResendUserCallbacksWebhooks`: EnqueuedCallback
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.ResendUserCallbacksWebhooks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiResendUserCallbacksWebhooksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendWebhookCallbacksRequest** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md) |  | 

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RotateUserCallbackSecret

> RotateCallbackSecretResponse RotateUserCallbackSecret(ctx).Execute()

Rotate callback secret



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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CallbacksAPI.RotateUserCallbackSecret(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CallbacksAPI.RotateUserCallbackSecret``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RotateUserCallbackSecret`: RotateCallbackSecretResponse
	fmt.Fprintf(os.Stdout, "Response from `CallbacksAPI.RotateUserCallbackSecret`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiRotateUserCallbackSecretRequest struct via the builder pattern


### Return type

[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

