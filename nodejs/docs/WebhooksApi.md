# WebhooksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteUserWebhook**](WebhooksApi.md#deleteuserwebhook) | **DELETE** /user/webhooks/{id} | Delete webhook |
| [**getUserWebhook**](WebhooksApi.md#getuserwebhook) | **GET** /user/webhooks/{id} | Get webhook |
| [**getUserWebhookSentDetail**](WebhooksApi.md#getuserwebhooksentdetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail |
| [**getUserWebhooks**](WebhooksApi.md#getuserwebhooks) | **GET** /user/webhooks | List webhooks |
| [**getUserWebhooksSentQuantity**](WebhooksApi.md#getuserwebhookssentquantity) | **GET** /user/webhooks/sent/quantity | Count sent callbacks |
| [**patchUserWebhook**](WebhooksApi.md#patchuserwebhook) | **PATCH** /user/webhooks/{id} | Update webhook |
| [**postUserWebhook**](WebhooksApi.md#postuserwebhook) | **POST** /user/webhooks | Create webhook |
| [**postUserWebhookRotateSecret**](WebhooksApi.md#postuserwebhookrotatesecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret |



## deleteUserWebhook

> deleteUserWebhook(id)

Delete webhook

Removes a webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { DeleteUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook id.
    id: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies DeleteUserWebhookRequest;

  try {
    const data = await api.deleteUserWebhook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook id. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook deleted. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhook

> Webhook getUserWebhook(id)

Get webhook

Returns a single webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook id.
    id: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies GetUserWebhookRequest;

  try {
    const data = await api.getUserWebhook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook id. | [Defaults to `undefined`] |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhookSentDetail

> SentWebhookDetailResponse getUserWebhookSentDetail(id, callbackId)

Get sent callback detail

Returns the delivery detail of a single sent callback.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhookSentDetailRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook id.
    id: cm3w7k1t40000q8f2r5b9x3ad,
    // string | Callback log id.
    callbackId: cm3w7l9v20001q8f2u6c1y4be,
  } satisfies GetUserWebhookSentDetailRequest;

  try {
    const data = await api.getUserWebhookSentDetail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook id. | [Defaults to `undefined`] |
| **callbackId** | `string` | Callback log id. | [Defaults to `undefined`] |

### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback delivery detail. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhooks

> WebhookListResponse getUserWebhooks(active)

List webhooks

Lists the webhooks registered for the account.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhooksRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // boolean | Filter by active status. (optional)
    active: true,
  } satisfies GetUserWebhooksRequest;

  try {
    const data = await api.getUserWebhooks(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **active** | `boolean` | Filter by active status. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook list. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhooksSentQuantity

> SentWebhooksQuantity getUserWebhooksSentQuantity(webhookId)

Count sent callbacks

Returns how many webhook deliveries were made, optionally filtered by webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhooksSentQuantityRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Filter the count by webhook id. (optional)
    webhookId: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies GetUserWebhooksSentQuantityRequest;

  try {
    const data = await api.getUserWebhooksSentQuantity(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | `string` | Filter the count by webhook id. | [Optional] [Defaults to `undefined`] |

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quantity. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchUserWebhook

> Webhook patchUserWebhook(id, webhookUpdateRequest)

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { PatchUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook id.
    id: cm3w7k1t40000q8f2r5b9x3ad,
    // WebhookUpdateRequest
    webhookUpdateRequest: ...,
  } satisfies PatchUserWebhookRequest;

  try {
    const data = await api.patchUserWebhook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook id. | [Defaults to `undefined`] |
| **webhookUpdateRequest** | [WebhookUpdateRequest](WebhookUpdateRequest.md) |  | |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook updated. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserWebhook

> WebhookWithSecret postUserWebhook(webhookCreateRequest)

Create webhook

Registers a webhook endpoint. If &#x60;generateSecret&#x60; is true, the response includes the HMAC &#x60;secret&#x60; (shown only here).

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { PostUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // WebhookCreateRequest
    webhookCreateRequest: ...,
  } satisfies PostUserWebhookRequest;

  try {
    const data = await api.postUserWebhook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookCreateRequest** | [WebhookCreateRequest](WebhookCreateRequest.md) |  | |

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook created. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **409** | Conflict with the current state of the resource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserWebhookRotateSecret

> RotateSecretResponse postUserWebhookRotateSecret(id)

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new &#x60;secret&#x60; is shown only in this response.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { PostUserWebhookRotateSecretRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook id.
    id: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies PostUserWebhookRotateSecretRequest;

  try {
    const data = await api.postUserWebhookRotateSecret(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Webhook id. | [Defaults to `undefined`] |

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New secret. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

