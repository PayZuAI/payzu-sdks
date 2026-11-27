# CallbacksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserCallbackSecret**](CallbacksApi.md#createusercallbacksecret) | **POST** /user/callbacks/secret | Criar segredo de callback |
| [**getUserCallbackById**](CallbacksApi.md#getusercallbackbyid) | **GET** /user/callbacks/{id} | Obter Callback |
| [**getUserCallbacks**](CallbacksApi.md#getusercallbacks) | **GET** /user/callbacks | Listar Callbacks |
| [**resendUserCallbackSingle**](CallbacksApi.md#resendusercallbacksingle) | **POST** /user/callbacks/resend/{transactionId} | Reenviar callback (individual) |
| [**resendUserCallbacks**](CallbacksApi.md#resendusercallbacksoperation) | **POST** /user/callbacks/resend | Reenviar callbacks (em lote) |
| [**resendUserCallbacksWebhook**](CallbacksApi.md#resendusercallbackswebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Reenviar callbacks por webhook |
| [**resendUserCallbacksWebhooks**](CallbacksApi.md#resendusercallbackswebhooks) | **POST** /user/callbacks/resend/webhook | Reenviar callbacks de webhook por filtros |
| [**rotateUserCallbackSecret**](CallbacksApi.md#rotateusercallbacksecret) | **PATCH** /user/callbacks/secret/rotate | Rotacionar segredo de callback |



## createUserCallbackSecret

> CallbackSecretResponse createUserCallbackSecret()

Criar segredo de callback

Cria o segredo de callback da conta, usado para assinar as entregas feitas ao callbackUrl da transação. O segredo é devolvido uma única vez e não pode ser lido depois.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { CreateUserCallbackSecretRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  try {
    const data = await api.createUserCallbackSecret();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CallbackSecretResponse**](CallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Criar segredo de callback |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **409** | A conta já possui segredo de callback. Use a rota de rotação. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserCallbackById

> CallbackDetail getUserCallbackById(id)

Obter Callback

Retorna os detalhes de um log de callback específico.

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
    // string | ID único do callback
    id: cm3w7l9v20001q8f2u6c1y4be,
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
| **id** | `string` | ID único do callback | [Defaults to `undefined`] |

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
| **200** | Detalhes do callback |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Callback não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserCallbacks

> CallbackListResponse getUserCallbacks(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType)

Listar Callbacks

Retorna uma lista paginada de logs de callback (webhook) das transações do usuário.

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
    // number | Número da página. (optional)
    page: 56,
    // number | Itens por página. (optional)
    limit: 56,
    // 'createdAt' | 'status' | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Direção da ordenação. (optional)
    sortDirection: sortDirection_example,
    // string | Filtra por ID de callback (optional)
    id: cm3w7l9v20001q8f2u6c1y4be,
    // string | Filtra por callback URL (optional)
    url: https://webhook.cool/,
    // number | Status HTTP devolvido pelo seu endpoint. (optional)
    status: 200,
    // string | ID da transação. (optional)
    transactionId: PAYZU20260814T6NX1CV9MK000000,
    // boolean | Filtra callbacks que apresentaram erro (optional)
    hasError: true,
    // Date | Data de criação inicial. (optional)
    createdAtFrom: 2026-08-01,
    // Date | Data de criação final. (optional)
    createdAtTo: 2026-08-31,
    // string | Id do webhook. (optional)
    webhookId: webhookId_example,
    // WebhookEventType | Tipo de evento do webhook. (optional)
    eventType: ...,
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
| **page** | `number` | Número da página. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Itens por página. | [Optional] [Defaults to `10`] |
| **sortBy** | `createdAt`, `status` | Campo de ordenação. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, status] |
| **sortDirection** | `asc`, `desc` | Direção da ordenação. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **id** | `string` | Filtra por ID de callback | [Optional] [Defaults to `undefined`] |
| **url** | `string` | Filtra por callback URL | [Optional] [Defaults to `undefined`] |
| **status** | `number` | Status HTTP devolvido pelo seu endpoint. | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` | ID da transação. | [Optional] [Defaults to `undefined`] |
| **hasError** | `boolean` | Filtra callbacks que apresentaram erro | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **webhookId** | `string` | Id do webhook. | [Optional] [Defaults to `undefined`] |
| **eventType** | `WebhookEventType` | Tipo de evento do webhook. | [Optional] [Defaults to `undefined`] [Enum: TRANSACTION_PENDING, TRANSACTION_COMPLETED, TRANSACTION_CANCELED, TRANSACTION_WAITING_FOR_REFUND, TRANSACTION_REFUNDED, TRANSACTION_EXPIRED, TRANSACTION_ERROR, TRANSACTION_SUSPECTED_FRAUD, TRANSACTION_SUSPECTED_FRAUD_REVERSAL, INFRACTION_CHANGED] |

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
| **200** | Lista de callbacks |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbackSingle

> ResendUserCallbackSingle200Response resendUserCallbackSingle(transactionId)

Reenviar callback (individual)

Reenvia o callback de uma única transação.

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
    // string | ID da transação.
    transactionId: PAYZU20260814T6NX1CV9MK000000,
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
| **transactionId** | `string` | ID da transação. | [Defaults to `undefined`] |

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
| **200** | Reenvio disparado |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação sem callbackUrl |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbacks

> ResendUserCallbacks200Response resendUserCallbacks(resendUserCallbacksRequest)

Reenviar callbacks (em lote)

Reenvia callbacks em lote para transações que correspondem aos filtros informados.

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
| **200** | Reenvio disparado |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Nenhuma transação correspondente |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbacksWebhook

> EnqueuedCallback resendUserCallbacksWebhook(webhookId)

Reenviar callbacks por webhook

Enfileira o reenvio em lote dos callbacks falhos de um webhook.

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
    // string | Id do webhook.
    webhookId: cm3w7k1t40000q8f2r5b9x3ad,
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
| **webhookId** | `string` | Id do webhook. | [Defaults to `undefined`] |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Webhook não encontrado, inativo ou de outra conta (PZW300), ou nenhum callback falho para os filtros (PZW310). |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resendUserCallbacksWebhooks

> EnqueuedCallback resendUserCallbacksWebhooks(resendWebhookCallbacksRequest)

Reenviar callbacks de webhook por filtros

Enfileira o reenvio das entregas de webhook que falharam num período. Para cada webhook, transação e evento, vale só a última tentativa de entrega no período, e ela só é reenviada se falhou. Os filtros se aplicam às transações dessas entregas.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { ResendUserCallbacksWebhooksRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  const body = {
    // ResendWebhookCallbacksRequest
    resendWebhookCallbacksRequest: ...,
  } satisfies ResendUserCallbacksWebhooksRequest;

  try {
    const data = await api.resendUserCallbacksWebhooks(body);
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
| **resendWebhookCallbacksRequest** | [ResendWebhookCallbacksRequest](ResendWebhookCallbacksRequest.md) |  | |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks aceitos para reenvio. Aceite não é entrega: o enfileiramento acontece depois da resposta. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Nenhum webhook ativo para os critérios (PZW301), ou nenhum callback falho para os filtros (PZW311). |  -  |
| **422** | Limite de reenvios atingido: 5 requisições por minuto por conta, somadas entre todas as rotas /user/callbacks/resend |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rotateUserCallbackSecret

> RotateCallbackSecretResponse rotateUserCallbackSecret()

Rotacionar segredo de callback

Troca o segredo de callback da conta. As entregas passam a ser assinadas com o novo segredo imediatamente.

### Example

```ts
import {
  Configuration,
  CallbacksApi,
} from 'payzu-pix';
import type { RotateUserCallbackSecretRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CallbacksApi(config);

  try {
    const data = await api.rotateUserCallbackSecret();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rotacionar segredo de callback |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **404** | A conta não possui segredo de callback para rotacionar. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

