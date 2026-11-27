# RefundsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postRefund**](RefundsApi.md#postrefund) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido |



## postRefund

> TransactionWithRefunds postRefund(transactionId, refundRequest)

Solicitar a devolução de um Pix recebido

Devolve um Pix recebido. Informe &#x60;amount&#x60; para uma devolução parcial, ou omita para devolver o valor total. O processamento é **assíncrono**: a resposta volta com &#x60;refundStatus: PENDING&#x60;; a conclusão é confirmada depois pelo callback.  Envie &#x60;{}&#x60; para devolver o valor total. O corpo só aceita &#x60;amount&#x60;, &#x60;description&#x60; e &#x60;clientReference&#x60;; outro campo é recusado com 400.

### Example

```ts
import {
  Configuration,
  RefundsApi,
} from 'payzu-pix';
import type { PostRefundRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RefundsApi(config);

  const body = {
    // string | ID da transação a devolver.
    transactionId: PAYZU20260814T6NX1CV9MK000000,
    // RefundRequest
    refundRequest: ...,
  } satisfies PostRefundRequest;

  try {
    const data = await api.postRefund(body);
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
| **transactionId** | `string` | ID da transação a devolver. | [Defaults to `undefined`] |
| **refundRequest** | [RefundRequest](RefundRequest.md) |  | |

### Return type

[**TransactionWithRefunds**](TransactionWithRefunds.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Devolução enfileirada |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |
| **422** | Devolução não permitida |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

