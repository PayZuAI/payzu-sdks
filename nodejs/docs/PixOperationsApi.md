# PixOperationsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPix**](PixOperationsApi.md#getpix) | **GET** /pix | Recuperar Cobrança |
| [**getPixQrcode**](PixOperationsApi.md#getpixqrcode) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG) |
| [**getProof**](PixOperationsApi.md#getproof) | **GET** /proof/{id} | Obter comprovante da transação |
| [**postPix**](PixOperationsApi.md#postpixoperation) | **POST** /pix | Criar Cobrança (depósito Pix) |



## getPix

> Transaction getPix(id, clientReference, endToEndId, virtualAccount)

Recuperar Cobrança

Obtém o status e os detalhes mais recentes de uma transação da conta. Informe pelo menos um dentre &#x60;id&#x60;, &#x60;clientReference&#x60; ou &#x60;endToEndId&#x60; (&#x60;virtualAccount&#x60; também é aceito). Ao informar mais de um parâmetro, todos são combinados como filtros (AND).

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
    // string | ID da transação. (optional)
    id: PAYZU20260811R4TZ8WD1NC000000,
    // string | Referência externa fornecida na criação da cobrança. (optional)
    clientReference: order_12345,
    // string | ID end-to-end do Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // string | Subconta usada na criação. (optional)
    virtualAccount: loja-centro-01,
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
| **id** | `string` | ID da transação. | [Optional] [Defaults to `undefined`] |
| **clientReference** | `string` | Referência externa fornecida na criação da cobrança. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | ID end-to-end do Pix. | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Subconta usada na criação. | [Optional] [Defaults to `undefined`] |

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
| **200** | Estado atual da transação |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPixQrcode

> Blob getPixQrcode(transactionId)

Renderiza o QR Code Pix (PNG)

Renderiza o QR Code Pix de um depósito como uma imagem PNG binária

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
    // string | ID da transação.
    transactionId: PAYZU20260814T6NX1CV9MK000000,
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
| **transactionId** | `string` | ID da transação. | [Defaults to `undefined`] |

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
| **200** | Imagem do QR Code |  -  |
| **400** | Transação sem QR Code |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProof

> ProofResponse getProof(id, type)

Obter comprovante da transação

Retorna o comprovante da transação. Por padrão (&#x60;type&#x3D;pdf&#x60;) a resposta é o arquivo PDF; com &#x60;type&#x3D;base64&#x60; é um JSON com o campo &#x60;base64&#x60;, o PDF como data URI.

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
    // string | ID da transação.
    id: PAYZU20260814T6NX1CV9MK000000,
    // 'pdf' | 'base64' | Formato de retorno. (optional)
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
| **id** | `string` | ID da transação. | [Defaults to `undefined`] |
| **type** | `pdf`, `base64` | Formato de retorno. | [Optional] [Defaults to `&#39;pdf&#39;`] [Enum: pdf, base64] |

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
| **200** | Comprovante em PDF ou base64 |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **422** | Operação recusada |  -  |
| **500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPix

> Transaction postPix(postPixRequest)

Criar Cobrança (depósito Pix)

Crie um novo **depósito** Pix (cobrança). Retorna o QR Code e os detalhes da transação.

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
| **200** | Cobrança criada |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

