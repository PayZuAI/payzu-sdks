# WithdrawalsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWithdraw**](WithdrawalsApi.md#getwithdraw) | **GET** /withdraw | Retrieve Withdrawal |
| [**getWithdrawProof**](WithdrawalsApi.md#getwithdrawproof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**postWithdraw**](WithdrawalsApi.md#postwithdrawoperation) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**postWithdrawQrcode**](WithdrawalsApi.md#postwithdrawqrcodeoperation) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |



## getWithdraw

> Transaction getWithdraw(id, clientReference, endToEndId, virtualAccount)

Retrieve Withdrawal

Get the latest status and details of a transaction of the account. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60;. If more than one is provided, all are applied as filters (AND), which may return no record if they do not point to the same transaction.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { GetWithdrawRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // string | Transaction ID. (optional)
    id: PAYZU20260817B3PL8SG5WQ000000,
    // string | External reference provided when creating the withdrawal. (optional)
    clientReference: order_12345,
    // string | Pix end-to-end ID. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
    virtualAccount: loja-centro-01,
  } satisfies GetWithdrawRequest;

  try {
    const data = await api.getWithdraw(body);
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
| **id** | `string` | Transaction ID. | [Optional] [Defaults to `undefined`] |
| **clientReference** | `string` | External reference provided when creating the withdrawal. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | Pix end-to-end ID. | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [Optional] [Defaults to `undefined`] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current withdrawal state |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWithdrawProof

> ProofResponse getWithdrawProof(id, type)

Get Withdrawal Receipt

Returns the transaction receipt. By default (&#x60;type&#x3D;pdf&#x60;) the response is the PDF file; with &#x60;type&#x3D;base64&#x60; it is JSON with the &#x60;base64&#x60; field, the PDF as a data URI.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { GetWithdrawProofRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // string | Transaction ID.
    id: PAYZU20260817B3PL8SG5WQ000000,
    // 'pdf' | 'base64' | Return format. (optional)
    type: pdf,
  } satisfies GetWithdrawProofRequest;

  try {
    const data = await api.getWithdrawProof(body);
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
| **id** | `string` | Transaction ID. | [Defaults to `undefined`] |
| **type** | `pdf`, `base64` | Return format. | [Optional] [Defaults to `&#39;pdf&#39;`] [Enum: pdf, base64] |

### Return type

[**ProofResponse**](ProofResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/pdf`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Base64 if &#x60;type&#x3D;base64&#x60;, otherwise binary PDF. |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **404** | Resource not found |  -  |
| **422** | Operation refused |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWithdraw

> Transaction postWithdraw(postWithdrawRequest)

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { PostWithdrawOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // PostWithdrawRequest
    postWithdrawRequest: ...,
  } satisfies PostWithdrawOperationRequest;

  try {
    const data = await api.postWithdraw(body);
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
| **postWithdrawRequest** | [PostWithdrawRequest](PostWithdrawRequest.md) |  | |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Withdrawal created |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Missing or invalid Bearer token |  -  |
| **403** | Operation not allowed, including a token without the required permission (PZA200) |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWithdrawQrcode

> Transaction postWithdrawQrcode(postWithdrawQrcodeRequest)

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If &#x60;amount&#x60; is not provided, the QR Code\&#39;s embedded value will be used. PayZu processes both dynamic and static QR Codes.  Token permission: &#x60;WITHDRAW&#x60;.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { PostWithdrawQrcodeOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // PostWithdrawQrcodeRequest
    postWithdrawQrcodeRequest: ...,
  } satisfies PostWithdrawQrcodeOperationRequest;

  try {
    const data = await api.postWithdrawQrcode(body);
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
| **postWithdrawQrcodeRequest** | [PostWithdrawQrcodeRequest](PostWithdrawQrcodeRequest.md) |  | |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Withdrawal created from QR Code |  -  |
| **400** | Invalid QR Code or missing amount for static QR Code without value |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

