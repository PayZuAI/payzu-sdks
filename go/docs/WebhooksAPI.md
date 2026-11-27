# \WebhooksAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteUserWebhook**](WebhooksAPI.md#DeleteUserWebhook) | **Delete** /user/webhooks/{id} | Remover webhook
[**GetUserWebhook**](WebhooksAPI.md#GetUserWebhook) | **Get** /user/webhooks/{id} | Consultar webhook
[**GetUserWebhookSentDetail**](WebhooksAPI.md#GetUserWebhookSentDetail) | **Get** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado
[**GetUserWebhooks**](WebhooksAPI.md#GetUserWebhooks) | **Get** /user/webhooks | Listar webhooks
[**GetUserWebhooksSentQuantity**](WebhooksAPI.md#GetUserWebhooksSentQuantity) | **Get** /user/webhooks/sent/quantity | Contar callbacks enviados
[**PatchUserWebhook**](WebhooksAPI.md#PatchUserWebhook) | **Patch** /user/webhooks/{id} | Atualizar webhook
[**PostUserWebhook**](WebhooksAPI.md#PostUserWebhook) | **Post** /user/webhooks | Criar webhook
[**PostUserWebhookRotateSecret**](WebhooksAPI.md#PostUserWebhookRotateSecret) | **Post** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook



## DeleteUserWebhook

> DeleteUserWebhook(ctx, id).Execute()

Remover webhook



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
	id := "cm3w7k1t40000q8f2r5b9x3ad" // string | Id do webhook.

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
**id** | **string** | Id do webhook. | 

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
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserWebhook

> Webhook GetUserWebhook(ctx, id).Execute()

Consultar webhook



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
	id := "cm3w7k1t40000q8f2r5b9x3ad" // string | Id do webhook.

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
**id** | **string** | Id do webhook. | 

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

> SentWebhookDetailResponse GetUserWebhookSentDetail(ctx, id, callbackId).Execute()

Detalhe de callback enviado



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
	id := "cm3w7k1t40000q8f2r5b9x3ad" // string | Id do webhook.
	callbackId := "cm3w7l9v20001q8f2u6c1y4be" // string | Id do log de callback.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.GetUserWebhookSentDetail(context.Background(), id, callbackId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.GetUserWebhookSentDetail``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserWebhookSentDetail`: SentWebhookDetailResponse
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.GetUserWebhookSentDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Id do webhook. | 
**callbackId** | **string** | Id do log de callback. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserWebhookSentDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)

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

Listar webhooks



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
	active := true // bool | Filtra pelo status ativo. (optional)

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
 **active** | **bool** | Filtra pelo status ativo. | 

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

Contar callbacks enviados



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
	webhookId := "cm3w7k1t40000q8f2r5b9x3ad" // string | Filtra a contagem por id de webhook. (optional)

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
 **webhookId** | **string** | Filtra a contagem por id de webhook. | 

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

Atualizar webhook



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
	id := "cm3w7k1t40000q8f2r5b9x3ad" // string | Id do webhook.
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
**id** | **string** | Id do webhook. | 

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

Criar webhook



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

Rotacionar segredo do webhook



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
	id := "cm3w7k1t40000q8f2r5b9x3ad" // string | Id do webhook.

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
**id** | **string** | Id do webhook. | 

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

