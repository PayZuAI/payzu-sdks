# InternalTransferApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInternalTransfer**](InternalTransferApi.md#getinternaltransfer) | **GET** /internal-transfer | Obter transferência interna |
| [**postInternalTransfer**](InternalTransferApi.md#postinternaltransferoperation) | **POST** /internal-transfer | Criar transferência interna |



## getInternalTransfer

> Transaction getInternalTransfer(id, clientReference, virtualAccount)

Obter transferência interna

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: &#x60;id&#x60; ou &#x60;clientReference&#x60; (também aceita &#x60;virtualAccount&#x60;). Se informar mais de um, todos são aplicados como filtro (AND).

### Example

```ts
import {
  Configuration,
  InternalTransferApi,
} from 'payzu-pix';
import type { GetInternalTransferRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InternalTransferApi(config);

  const body = {
    // string | ID da transação (optional)
    id: PAYZU20260814T6NX1CV9MK000000,
    // string | Referência externa (optional)
    clientReference: order_12345,
    // string | Subconta usada na criação. (optional)
    virtualAccount: loja-centro-01,
  } satisfies GetInternalTransferRequest;

  try {
    const data = await api.getInternalTransfer(body);
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
| **id** | `string` | ID da transação | [Optional] [Defaults to `undefined`] |
| **clientReference** | `string` | Referência externa | [Optional] [Defaults to `undefined`] |
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
| **200** | Detalhes da transferência |  -  |
| **400** | Informe &#x60;id&#x60; ou &#x60;clientReference&#x60; |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transferência não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postInternalTransfer

> Transaction postInternalTransfer(postInternalTransferRequest)

Criar transferência interna

Envia fundos para outra conta PayZu usando seu accountNumber de 6 dígitos. Liquida instantaneamente dentro da PayZu.

### Example

```ts
import {
  Configuration,
  InternalTransferApi,
} from 'payzu-pix';
import type { PostInternalTransferOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InternalTransferApi(config);

  const body = {
    // PostInternalTransferRequest
    postInternalTransferRequest: ...,
  } satisfies PostInternalTransferOperationRequest;

  try {
    const data = await api.postInternalTransfer(body);
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
| **postInternalTransferRequest** | [PostInternalTransferRequest](PostInternalTransferRequest.md) |  | |

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
| **200** | Transferência concluída |  -  |
| **400** | Payload inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Sem permissão para transferir |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Saldo insuficiente |  -  |
| **429** | Limite de requisições excedido |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

