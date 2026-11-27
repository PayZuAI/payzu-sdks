# WithdrawalsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWithdraw**](WithdrawalsApi.md#getwithdraw) | **GET** /withdraw | Consultar Saque |
| [**getWithdrawProof**](WithdrawalsApi.md#getwithdrawproof) | **GET** /withdraw/proof/{id} | Obter comprovante de saque |
| [**postWithdraw**](WithdrawalsApi.md#postwithdrawoperation) | **POST** /withdraw | Criar saque (chave Pix) |
| [**postWithdrawQrcode**](WithdrawalsApi.md#postwithdrawqrcodeoperation) | **POST** /withdraw/qrcode | Criar Saque usando QR Code |



## getWithdraw

> Transaction getWithdraw(id, clientReference, endToEndId, virtualAccount)

Consultar Saque

Retorna o status e os detalhes atuais de uma transação da conta. Informe pelo menos um destes parâmetros: &#x60;id&#x60;, &#x60;clientReference&#x60; ou &#x60;endToEndId&#x60;. Se informar mais de um, todos são aplicados como filtro (AND), o que pode não retornar registro caso não apontem para a mesma transação.

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
    // string | ID da transação. (optional)
    id: PAYZU20260817B3PL8SG5WQ000000,
    // string | Referência externa informada na criação do saque. (optional)
    clientReference: order_12345,
    // string | ID end-to-end do Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // string | Subconta usada na criação. (optional)
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
| **id** | `string` | ID da transação. | [Optional] [Defaults to `undefined`] |
| **clientReference** | `string` | Referência externa informada na criação do saque. | [Optional] [Defaults to `undefined`] |
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
| **200** | Estado atual do saque |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWithdrawProof

> ProofResponse getWithdrawProof(id, type)

Obter comprovante de saque

Retorna o comprovante da transação. Por padrão (&#x60;type&#x3D;pdf&#x60;) a resposta é o arquivo PDF; com &#x60;type&#x3D;base64&#x60; é um JSON com o campo &#x60;base64&#x60;, o PDF como data URI.

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
    // string | ID da transação.
    id: PAYZU20260817B3PL8SG5WQ000000,
    // 'pdf' | 'base64' | Formato de retorno. (optional)
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


## postWithdraw

> Transaction postWithdraw(postWithdrawRequest)

Criar saque (chave Pix)

Envie um **cash out** Pix para a chave Pix especificada.

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
| **200** | Saque criado |  -  |
| **400** | Bad Request |  -  |
| **401** | Token Bearer ausente ou inválido |  -  |
| **403** |  |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postWithdrawQrcode

> Transaction postWithdrawQrcode(postWithdrawQrcodeRequest)

Criar Saque usando QR Code

Realiza o pagamento (cash out) usando um **QR Code Pix** (estático/dinâmico). Se &#x60;amount&#x60; não for informado, o valor embutido no QR Code será utilizado. PayZu processa QR Code dinâmico e estático.

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
| **200** | Saque criado a partir do QR Code |  -  |
| **400** | QR Code inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **410** | QR Code vencido ou removido |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

