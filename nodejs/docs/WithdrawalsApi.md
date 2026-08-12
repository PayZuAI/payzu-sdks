# WithdrawalsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPixKey**](WithdrawalsApi.md#getpixkey) | **GET** /pix/key | Dict Pix Key Lookup |
| [**getUserDict**](WithdrawalsApi.md#getuserdict) | **GET** /user/dict | DICT key lookup |
| [**getWithdraw**](WithdrawalsApi.md#getwithdraw) | **GET** /withdraw | Retrieve Withdrawal |
| [**getWithdrawProof**](WithdrawalsApi.md#getwithdrawproof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**postPixQrcodeRead**](WithdrawalsApi.md#postpixqrcodereadoperation) | **POST** /pix/qrcode/read | Read QR Code |
| [**postWithdraw**](WithdrawalsApi.md#postwithdrawoperation) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**postWithdrawQrcode**](WithdrawalsApi.md#postwithdrawqrcodeoperation) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |



## getPixKey

> PixKeyInfo getPixKey(pixKey)

Dict Pix Key Lookup

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner\&#39;s details and associated financial institution.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { GetPixKeyRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // string | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).
    pixKey: example@payzu.com.br,
  } satisfies GetPixKeyRequest;

  try {
    const data = await api.getPixKey(body);
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
| **pixKey** | `string` | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). | [Defaults to `undefined`] |

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pix key information retrieved successfully |  -  |
| **400** | Invalid Pix key format |  -  |
| **404** | Pix key not found in DICT |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDict

> DictConsultResponse getUserDict(key)

DICT key lookup

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { GetUserDictRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // string | Pix key to look up (CPF, CNPJ, email, phone or EVP).
    key: key_example,
  } satisfies GetUserDictRequest;

  try {
    const data = await api.getUserDict(body);
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
| **key** | `string` | Pix key to look up (CPF, CNPJ, email, phone or EVP). | [Defaults to `undefined`] |

### Return type

[**DictConsultResponse**](DictConsultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Key holder details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWithdraw

> Transaction getWithdraw(id, clientReference, endToEndId, virtualAccount)

Retrieve Withdrawal

Get the latest status and details for a withdrawal. Provide at least one of &#x60;id&#x60;, &#x60;clientReference&#x60;, or &#x60;endToEndId&#x60;. If more than one is provided, all are applied as filters (AND), which may return no record if they do not point to the same transaction.

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
    id: PAYZU2025081721512946OOLK75,
    // string | External reference provided when creating the withdrawal. (optional)
    clientReference: clientReference_example,
    // string | Pix end-to-end ID. (optional)
    endToEndId: endToEndId_example,
    // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
    virtualAccount: virtualAccount_example,
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
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWithdrawProof

> ProofResponse getWithdrawProof(id, type)

Get Withdrawal Receipt

Returns the transaction receipt as JSON with a &#x60;base64&#x60; field (encoded PDF). Decode it to display or save as &#x60;.pdf&#x60;.

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
    id: PAYZU2025081721512946OOLK75,
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
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPixQrcodeRead

> QRCodeReadResponse postPixQrcodeRead(postPixQrcodeReadRequest)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.

### Example

```ts
import {
  Configuration,
  WithdrawalsApi,
} from 'payzu-pix';
import type { PostPixQrcodeReadOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WithdrawalsApi(config);

  const body = {
    // PostPixQrcodeReadRequest
    postPixQrcodeReadRequest: ...,
  } satisfies PostPixQrcodeReadOperationRequest;

  try {
    const data = await api.postPixQrcodeRead(body);
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
| **postPixQrcodeReadRequest** | [PostPixQrcodeReadRequest](PostPixQrcodeReadRequest.md) |  | |

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR Code decoded successfully |  -  |
| **400** | Invalid QR Code format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWithdraw

> Transaction postWithdraw(postWithdrawRequest)

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.

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
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWithdrawQrcode

> Transaction postWithdrawQrcode(postWithdrawQrcodeRequest)

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If &#x60;amount&#x60; is not provided, the QR Code\&#39;s embedded value will be used. PayZu processes both dynamic and static QR Codes.

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

