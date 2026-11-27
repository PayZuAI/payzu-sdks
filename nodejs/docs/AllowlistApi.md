# AllowlistApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserWhitelistCnpj**](AllowlistApi.md#getuserwhitelistcnpj) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados |
| [**getUserWhitelistPixKey**](AllowlistApi.md#getuserwhitelistpixkey) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas |



## getUserWhitelistCnpj

> GetUserWhitelistCnpj200Response getUserWhitelistCnpj(from, to, active, cursor, limit)

Listar CNPJs autorizados

Lista os CNPJs autorizados na lista de permissão da conta.

### Example

```ts
import {
  Configuration,
  AllowlistApi,
} from 'payzu-pix';
import type { GetUserWhitelistCnpjRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllowlistApi(config);

  const body = {
    // Date (optional)
    from: 2026-08-01T00:00:00Z,
    // Date (optional)
    to: 2026-08-08T23:59:59Z,
    // boolean (optional)
    active: true,
    // string (optional)
    cursor: cmf0w1t3l0001qk08cnpj0001,
    // number (optional)
    limit: 20,
  } satisfies GetUserWhitelistCnpjRequest;

  try {
    const data = await api.getUserWhitelistCnpj(body);
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
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**GetUserWhitelistCnpj200Response**](GetUserWhitelistCnpj200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | CNPJs retornados com sucesso. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWhitelistPixKey

> GetUserWhitelistPixKey200Response getUserWhitelistPixKey(from, to, active, cursor, limit)

Listar chaves Pix autorizadas

Lista as chaves Pix autorizadas na lista de permissão da conta.

### Example

```ts
import {
  Configuration,
  AllowlistApi,
} from 'payzu-pix';
import type { GetUserWhitelistPixKeyRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AllowlistApi(config);

  const body = {
    // Date (optional)
    from: 2026-08-01T00:00:00Z,
    // Date (optional)
    to: 2026-08-08T23:59:59Z,
    // boolean (optional)
    active: true,
    // string (optional)
    cursor: cmf0w1t3l0001qk08pixk0001,
    // number (optional)
    limit: 20,
  } satisfies GetUserWhitelistPixKeyRequest;

  try {
    const data = await api.getUserWhitelistPixKey(body);
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
| **from** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **to** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**GetUserWhitelistPixKey200Response**](GetUserWhitelistPixKey200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chaves PIX retornadas com sucesso. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

