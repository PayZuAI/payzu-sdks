# \WebhooksAPI

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteUserWebhook**](WebhooksAPI.md#DeleteUserWebhook) | **Delete** /user/webhooks/{id} | Delete webhook
[**GetUserWebhook**](WebhooksAPI.md#GetUserWebhook) | **Get** /user/webhooks/{id} | Get webhook
[**GetUserWebhookSentDetail**](WebhooksAPI.md#GetUserWebhookSentDetail) | **Get** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail
[**GetUserWebhooks**](WebhooksAPI.md#GetUserWebhooks) | **Get** /user/webhooks | List webhooks
[**GetUserWebhooksSentQuantity**](WebhooksAPI.md#GetUserWebhooksSentQuantity) | **Get** /user/webhooks/sent/quantity | Count sent callbacks
[**PatchUserWebhook**](WebhooksAPI.md#PatchUserWebhook) | **Patch** /user/webhooks/{id} | Update webhook
[**PostUserWebhook**](WebhooksAPI.md#PostUserWebhook) | **Post** /user/webhooks | Create webhook
[**PostUserWebhookRotateSecret**](WebhooksAPI.md#PostUserWebhookRotateSecret) | **Post** /user/webhooks/{id}/rotate-secret | Rotate webhook secret



## DeleteUserWebhook

> DeleteUserWebhook(ctx, id).Execute()

Delete webhook



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
	id := "id_example" // string | Webhook id.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WebhooksAPI.DeleteUserWebhook(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.DeleteUserWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Webhook id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUserWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserWebhook

> Webhook GetUserWebhook(ctx, id).Execute()

Get webhook



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
	id := "id_example" // string | Webhook id.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.GetUserWebhook(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.GetUserWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWebhook`: Webhook
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.GetUserWebhook`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Webhook id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserWebhookSentDetail

> SentWebhookDetail GetUserWebhookSentDetail(ctx, id, callbackId).Execute()

Get sent callback detail



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
	id := "id_example" // string | Webhook id.
	callbackId := "callbackId_example" // string | Callback log id.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.GetUserWebhookSentDetail(context.Background(), id, callbackId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.GetUserWebhookSentDetail``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWebhookSentDetail`: SentWebhookDetail
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.GetUserWebhookSentDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Webhook id. | 
**callbackId** | **string** | Callback log id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWebhookSentDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**SentWebhookDetail**](SentWebhookDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserWebhooks

> WebhookListResponse GetUserWebhooks(ctx).Active(active).Execute()

List webhooks



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
	active := true // bool | Filter by active status. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.GetUserWebhooks(context.Background()).Active(active).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.GetUserWebhooks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWebhooks`: WebhookListResponse
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.GetUserWebhooks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWebhooksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool** | Filter by active status. | 

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserWebhooksSentQuantity

> SentWebhooksQuantity GetUserWebhooksSentQuantity(ctx).WebhookId(webhookId).Execute()

Count sent callbacks



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
	webhookId := "webhookId_example" // string | Filter the count by webhook id. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.GetUserWebhooksSentQuantity(context.Background()).WebhookId(webhookId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.GetUserWebhooksSentQuantity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWebhooksSentQuantity`: SentWebhooksQuantity
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.GetUserWebhooksSentQuantity`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWebhooksSentQuantityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **string** | Filter the count by webhook id. | 

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PatchUserWebhook

> Webhook PatchUserWebhook(ctx, id).WebhookUpdateRequest(webhookUpdateRequest).Execute()

Update webhook



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
	id := "id_example" // string | Webhook id.
	webhookUpdateRequest := *openapiclient.NewWebhookUpdateRequest() // WebhookUpdateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.PatchUserWebhook(context.Background(), id).WebhookUpdateRequest(webhookUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.PatchUserWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchUserWebhook`: Webhook
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.PatchUserWebhook`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Webhook id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchUserWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **webhookUpdateRequest** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md) |  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostUserWebhook

> WebhookWithSecret PostUserWebhook(ctx).WebhookCreateRequest(webhookCreateRequest).Execute()

Create webhook



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
	webhookCreateRequest := *openapiclient.NewWebhookCreateRequest("https://sualoja.com.br/webhook") // WebhookCreateRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.PostUserWebhook(context.Background()).WebhookCreateRequest(webhookCreateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.PostUserWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostUserWebhook`: WebhookWithSecret
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.PostUserWebhook`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostUserWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookCreateRequest** | [**WebhookCreateRequest**](WebhookCreateRequest.md) |  | 

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostUserWebhookRotateSecret

> RotateSecretResponse PostUserWebhookRotateSecret(ctx, id).Execute()

Rotate webhook secret



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
	id := "id_example" // string | Webhook id.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.PostUserWebhookRotateSecret(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.PostUserWebhookRotateSecret``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostUserWebhookRotateSecret`: RotateSecretResponse
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.PostUserWebhookRotateSecret`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Webhook id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostUserWebhookRotateSecretRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

