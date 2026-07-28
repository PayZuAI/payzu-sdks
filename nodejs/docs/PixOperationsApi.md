# PixOperationsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPix**](PixOperationsApi.md#getpix) | **GET** /pix | Retrieve Charge |
| [**getPixQrcode**](PixOperationsApi.md#getpixqrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**getProof**](PixOperationsApi.md#getproof) | **GET** /proof/{id} | Get Transaction Receipt |
| [**postPix**](PixOperationsApi.md#postpixoperation) | **POST** /pix | Create Charge (Pix deposit) |



## getPix

> Transaction getPix(id, clientReference, endToEndId, virtualAccount)

Retrieve Charge

Get the latest status and details for a Pix **deposit (charge)**. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60; (&#x60;virtualAccount&#x60; is also accepted). When more than one parameter is provided, they are combined as filters (AND).

### Example

```ts
import {
  Configuration,
  PixOperationsApi,
} from 'payzu-pix';
import type { GetPixRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PixOperationsApi(config);

  const body = {
    // string | Transaction ID. (optional)
    id: PAYZU20250817215911F49RDOBJ,
    // string | External reference provided when creating the charge. (optional)
    clientReference: clientReference_example,
    // string | Pix end-to-end ID. (optional)
    endToEndId: endToEndId_example,
    // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
    virtualAccount: virtualAccount_example,
  } satisfies GetPixRequest;

  try {
    const data = await api.getPix(body);
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
| **clientReference** | `string` | External reference provided when creating the charge. | [Optional] [Defaults to `undefined`] |
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
| **200** | Current transaction state |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPixQrcode

> Blob getPixQrcode(transactionId)

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image

### Example

```ts
import {
  Configuration,
  PixOperationsApi,
} from 'payzu-pix';
import type { GetPixQrcodeRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PixOperationsApi(config);

  const body = {
    // string
    transactionId: transactionId_example,
  } satisfies GetPixQrcodeRequest;

  try {
    const data = await api.getPixQrcode(body);
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

**Blob**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `image/png`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR code image |  -  |
| **400** | Transaction is not a DEPOSIT or has no QR code |  -  |
| **404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProof

> ProofResponse getProof(id, type)

Get Transaction Receipt

Returns the transaction receipt as JSON with a &#x60;base64&#x60; field (encoded PDF). Decode it to display or save as &#x60;.pdf&#x60;.

### Example

```ts
import {
  Configuration,
  PixOperationsApi,
} from 'payzu-pix';
import type { GetProofRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PixOperationsApi(config);

  const body = {
    // string | Transaction ID.
    id: PAYZU2025081418333632CYKN8M,
    // 'pdf' | 'base64' | Return format. (optional)
    type: pdf,
  } satisfies GetProofRequest;

  try {
    const data = await api.getProof(body);
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
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPix

> Transaction postPix(postPixRequest)

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.

### Example

```ts
import {
  Configuration,
  PixOperationsApi,
} from 'payzu-pix';
import type { PostPixOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PixOperationsApi(config);

  const body = {
    // PostPixRequest
    postPixRequest: ...,
  } satisfies PostPixOperationRequest;

  try {
    const data = await api.postPix(body);
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
| **postPixRequest** | [PostPixRequest](PostPixRequest.md) |  | |

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
| **200** | Charge created |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

