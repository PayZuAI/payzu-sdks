# CallbacksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserCallbackById**](CallbacksApi.md#getusercallbackbyid) | **GET** /user/callbacks/{id} | Get Callback |
| [**getUserCallbacks**](CallbacksApi.md#getusercallbacks) | **GET** /user/callbacks | List Callbacks |
| [**resendUserCallbackSingle**](CallbacksApi.md#resendusercallbacksingle) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single) |
| [**resendUserCallbacks**](CallbacksApi.md#resendusercallbacksoperation) | **POST** /user/callbacks/resend | Re-send callbacks (bulk) |
| [**resendUserCallbacksWebhook**](CallbacksApi.md#resendusercallbackswebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook |



## getUserCallbackById

> CallbackDetail getUserCallbackById(id)

Get Callback

Returns the details of a specific callback log.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { GetUserCallbackByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  const body = {
    // string | Unique callback ID
    id: id_example,
  } satisfies GetUserCallbackByIdRequest;

  try {
    const data = await api.getUserCallbackById(body);
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
| **id** | `string` | Unique callback ID | [Defaults to `undefined`] |

### Return type

[**CallbackDetail**](CallbackDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback details |  -  |
| **404** | Callback not found or does not belong to the user |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserCallbacks

> CallbackListResponse getUserCallbacks(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo)

List Callbacks

Returns a paginated list of webhook callback logs for the user\&#39;s transactions.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { GetUserCallbacksRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // 'createdAt' | 'status' (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' (optional)
    sortDirection: sortDirection_example,
    // string | Filter by callback ID (optional)
    id: id_example,
    // string | Filter by callback URL (optional)
    url: url_example,
    // number | HTTP status code (optional)
    status: 56,
    // string (optional)
    transactionId: transactionId_example,
    // boolean | Filter callbacks that errored (optional)
    hasError: true,
    // Date (optional)
    createdAtFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    createdAtTo: 2013-10-20T19:20:30+01:00,
  } satisfies GetUserCallbacksRequest;

  try {
    const data = await api.getUserCallbacks(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **sortBy** | `createdAt`, `status` |  | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, status] |
| **sortDirection** | `asc`, `desc` |  | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **id** | `string` | Filter by callback ID | [Optional] [Defaults to `undefined`] |
| **url** | `string` | Filter by callback URL | [Optional] [Defaults to `undefined`] |
| **status** | `number` | HTTP status code | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **hasError** | `boolean` | Filter callbacks that errored | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CallbackListResponse**](CallbackListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of callback logs with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbackSingle

> ResendUserCallbackSingle200Response resendUserCallbackSingle(transactionId)

Re-send callback (single)

Resend the callback of a single transaction.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { ResendUserCallbackSingleRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  const body = {
    // string
    transactionId: transactionId_example,
  } satisfies ResendUserCallbackSingleRequest;

  try {
    const data = await api.resendUserCallbackSingle(body);
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
| **transactionId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend dispatched |  -  |
| **404** | Transaction not found or has no callbackUrl configured |  -  |
| **429** | Rate limit exceeded (5/min) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbacks

> ResendUserCallbacks200Response resendUserCallbacks(resendUserCallbacksRequest)

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { ResendUserCallbacksOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  const body = {
    // ResendUserCallbacksRequest
    resendUserCallbacksRequest: {"createdAtFrom":"2026-05-05T00:00:00Z","createdAtTo":"2026-05-06T00:00:00Z"},
  } satisfies ResendUserCallbacksOperationRequest;

  try {
    const data = await api.resendUserCallbacks(body);
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
| **resendUserCallbacksRequest** | [ResendUserCallbacksRequest](ResendUserCallbacksRequest.md) |  | |

### Return type

[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend dispatched |  -  |
| **404** | No matching transactions |  -  |
| **429** | Rate limit exceeded (5/min) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbacksWebhook

> CallbackResendResponse resendUserCallbacksWebhook(webhookId)

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { ResendUserCallbacksWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  const body = {
    // string | Webhook id.
    webhookId: webhookId_example,
  } satisfies ResendUserCallbacksWebhookRequest;

  try {
    const data = await api.resendUserCallbacksWebhook(body);
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
| **webhookId** | `string` | Webhook id. | [Defaults to `undefined`] |

### Return type

[**CallbackResendResponse**](CallbackResendResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend queued. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

