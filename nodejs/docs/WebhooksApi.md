# WebhooksApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteUserWebhook**](WebhooksApi.md#deleteuserwebhook) | **DELETE** /user/webhooks/{id} | Remover webhook |
| [**getUserWebhook**](WebhooksApi.md#getuserwebhook) | **GET** /user/webhooks/{id} | Consultar webhook |
| [**getUserWebhookSentDetail**](WebhooksApi.md#getuserwebhooksentdetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Detalhe de callback enviado |
| [**getUserWebhooks**](WebhooksApi.md#getuserwebhooks) | **GET** /user/webhooks | Listar webhooks |
| [**getUserWebhooksSentQuantity**](WebhooksApi.md#getuserwebhookssentquantity) | **GET** /user/webhooks/sent/quantity | Contar callbacks enviados |
| [**patchUserWebhook**](WebhooksApi.md#patchuserwebhook) | **PATCH** /user/webhooks/{id} | Atualizar webhook |
| [**postUserWebhook**](WebhooksApi.md#postuserwebhook) | **POST** /user/webhooks | Criar webhook |
| [**postUserWebhookRotateSecret**](WebhooksApi.md#postuserwebhookrotatesecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotacionar segredo do webhook |



## deleteUserWebhook

> deleteUserWebhook(id)

Remover webhook

Remove um webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { DeleteUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Id do webhook.
    id: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies DeleteUserWebhookRequest;

  try {
    const data = await api.deleteUserWebhook(body);
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
| **id** | `string` | Id do webhook. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook removido. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhook

> Webhook getUserWebhook(id)

Consultar webhook

Retorna um webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Id do webhook.
    id: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies GetUserWebhookRequest;

  try {
    const data = await api.getUserWebhook(body);
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
| **id** | `string` | Id do webhook. | [Defaults to `undefined`] |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhookSentDetail

> SentWebhookDetailResponse getUserWebhookSentDetail(id, callbackId)

Detalhe de callback enviado

Retorna o detalhe de entrega de um callback enviado.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhookSentDetailRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Id do webhook.
    id: cm3w7k1t40000q8f2r5b9x3ad,
    // string | Id do log de callback.
    callbackId: cm3w7l9v20001q8f2u6c1y4be,
  } satisfies GetUserWebhookSentDetailRequest;

  try {
    const data = await api.getUserWebhookSentDetail(body);
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
| **id** | `string` | Id do webhook. | [Defaults to `undefined`] |
| **callbackId** | `string` | Id do log de callback. | [Defaults to `undefined`] |

### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhe de entrega do callback. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhooks

> WebhookListResponse getUserWebhooks(active)

Listar webhooks

Lista os webhooks cadastrados na conta.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhooksRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // boolean | Filtra pelo status ativo. (optional)
    active: true,
  } satisfies GetUserWebhooksRequest;

  try {
    const data = await api.getUserWebhooks(body);
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
| **active** | `boolean` | Filtra pelo status ativo. | [Optional] [Defaults to `undefined`] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de webhooks. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserWebhooksSentQuantity

> SentWebhooksQuantity getUserWebhooksSentQuantity(webhookId)

Contar callbacks enviados

Retorna quantas entregas de webhook foram feitas, opcionalmente filtradas por webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { GetUserWebhooksSentQuantityRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Filtra a contagem por id de webhook. (optional)
    webhookId: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies GetUserWebhooksSentQuantityRequest;

  try {
    const data = await api.getUserWebhooksSentQuantity(body);
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
| **webhookId** | `string` | Filtra a contagem por id de webhook. | [Optional] [Defaults to `undefined`] |

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quantidade. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchUserWebhook

> Webhook patchUserWebhook(id, webhookUpdateRequest)

Atualizar webhook

Atualiza a url, o status ativo ou os eventos de um webhook. Informe pelo menos um campo.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { PatchUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Id do webhook.
    id: cm3w7k1t40000q8f2r5b9x3ad,
    // WebhookUpdateRequest
    webhookUpdateRequest: ...,
  } satisfies PatchUserWebhookRequest;

  try {
    const data = await api.patchUserWebhook(body);
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
| **id** | `string` | Id do webhook. | [Defaults to `undefined`] |
| **webhookUpdateRequest** | [WebhookUpdateRequest](WebhookUpdateRequest.md) |  | |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook atualizado. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserWebhook

> WebhookWithSecret postUserWebhook(webhookCreateRequest)

Criar webhook

Cadastra um endpoint de webhook. Se &#x60;generateSecret&#x60; for true, a resposta traz o &#x60;secret&#x60; HMAC (exibido só aqui).

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { PostUserWebhookRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // WebhookCreateRequest
    webhookCreateRequest: ...,
  } satisfies PostUserWebhookRequest;

  try {
    const data = await api.postUserWebhook(body);
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
| **webhookCreateRequest** | [WebhookCreateRequest](WebhookCreateRequest.md) |  | |

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook criado. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **409** | Conflito com o estado atual do recurso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserWebhookRotateSecret

> RotateSecretResponse postUserWebhookRotateSecret(id)

Rotacionar segredo do webhook

Gera um novo segredo de assinatura HMAC e invalida o anterior. O novo &#x60;secret&#x60; é exibido só nesta resposta.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'payzu-pix';
import type { PostUserWebhookRotateSecretRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Id do webhook.
    id: cm3w7k1t40000q8f2r5b9x3ad,
  } satisfies PostUserWebhookRotateSecretRequest;

  try {
    const data = await api.postUserWebhookRotateSecret(body);
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
| **id** | `string` | Id do webhook. | [Defaults to `undefined`] |

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Novo segredo. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

