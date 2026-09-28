# KeysAndDICTApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPixKey**](KeysAndDICTApi.md#getpixkey) | **GET** /pix/key | Pix key lookup (DICT) |
| [**getUserDict**](KeysAndDICTApi.md#getuserdict) | **GET** /user/dict | Resolve DICT key |
| [**postPixQrcodeRead**](KeysAndDICTApi.md#postpixqrcodereadoperation) | **POST** /pix/qrcode/read | Read QR Code |



## getPixKey

> PixKeyInfo getPixKey(pixKey)

Pix key lookup (DICT)

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner\&#39;s details and associated financial institution.  Token permission: &#x60;DEPOSIT&#x60; or &#x60;WITHDRAW&#x60;.

### Example

```ts
import {
  Configuration,
  KeysAndDICTApi,
} from 'payzu-pix';
import type { GetPixKeyRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KeysAndDICTApi(config);

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
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Pix key not found in DICT |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDict

> DictConsultResponse getUserDict(key)

Resolve DICT key

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Example

```ts
import {
  Configuration,
  KeysAndDICTApi,
} from 'payzu-pix';
import type { GetUserDictRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KeysAndDICTApi(config);

  const body = {
    // string | Pix key to look up (CPF, CNPJ, email, phone or EVP).
    key: john.doe@example.com,
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
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **422** | Operation refused |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPixQrcodeRead

> QRCodeReadResponse postPixQrcodeRead(postPixQrcodeReadRequest)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.  Token permission: &#x60;DEPOSIT&#x60; or &#x60;WITHDRAW&#x60;.

### Example

```ts
import {
  Configuration,
  KeysAndDICTApi,
} from 'payzu-pix';
import type { PostPixQrcodeReadOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KeysAndDICTApi(config);

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
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **424** | Failure at the financial institution |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

