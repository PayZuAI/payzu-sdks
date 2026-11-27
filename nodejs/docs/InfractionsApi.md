# InfractionsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInfractions**](InfractionsApi.md#getinfractions) | **GET** /user/infractions | Listar infrações |
| [**getInfractionsById**](InfractionsApi.md#getinfractionsbyid) | **GET** /user/infractions/{id} | Obter Infração |
| [**getInfractionsDefenseById**](InfractionsApi.md#getinfractionsdefensebyid) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa |
| [**getInfractionsDefenses**](InfractionsApi.md#getinfractionsdefenses) | **GET** /user/infractions/{id}/defenses | Listar Defesas |
| [**postInfractionsDefense**](InfractionsApi.md#postinfractionsdefense) | **POST** /user/infractions/{id}/defenses | Criar Defesa |



## getInfractions

> InfractionListResponse getInfractions(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol)

Listar infrações

Lista todas as infrações do usuário autenticado com paginação e filtros.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // number | Número da página. (optional)
    page: 56,
    // number | Itens por página. (optional)
    limit: 56,
    // string | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED` (optional)
    status: OPEN,
    // string | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED` (optional)
    type: REFUND_REQUEST,
    // string | ID end-to-end do Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // string | ID da transação. (optional)
    transactionId: PAYZU20260814T6NX1CV9MK000000,
    // number | Valor mínimo. (optional)
    amountMin: 10.9,
    // number | Valor máximo. (optional)
    amountMax: 500,
    // string | AnalysisResult separados por vírgula: AGREED, DISAGREED. (optional)
    analysisResult: AGREED,
    // string | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT` (optional)
    reportedBy: DEBITED_PARTICIPANT,
    // string | CPF ou CNPJ do participante. (optional)
    participantDocument: 12345678901,
    // string | Nome do participante. (optional)
    participantName: John Doe,
    // 'createdAt' | 'updatedAt' | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Direção da ordenação. (optional)
    sortDirection: sortDirection_example,
    // Date | Filtro: reportedAt a partir de. (optional)
    reportedAtFrom: 2026-08-01,
    // Date | Filtro: reportedAt até. (optional)
    reportedAtTo: 2026-08-31,
    // Date | Filtro: createdAt a partir de. (optional)
    createdAtFrom: 2026-08-01,
    // Date | Filtro: createdAt até. (optional)
    createdAtTo: 2026-08-31,
    // Date | Filtro: expiresAt a partir de. (optional)
    expiresAtFrom: 2026-08-01,
    // Date | Filtro: expiresAt até. (optional)
    expiresAtTo: 2026-08-31,
    // Date | Filtro: updatedAt a partir de. (optional)
    updatedAtFrom: 2026-08-01,
    // Date | Filtro: updatedAt até. (optional)
    updatedAtTo: 2026-08-31,
    // string | Filtro por ID da infração. (optional)
    id: cm3w7n2p60002q8f2h7d3z5cf,
    // string | Filtro por protocolo. (optional)
    protocol: 2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210,
  } satisfies GetInfractionsRequest;

  try {
    const data = await api.getInfractions(body);
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
| **status** | `string` | Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | ID end-to-end do Pix. | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` | ID da transação. | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` | Valor mínimo. | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` | Valor máximo. | [Optional] [Defaults to `undefined`] |
| **analysisResult** | `string` | AnalysisResult separados por vírgula: AGREED, DISAGREED. | [Optional] [Defaults to `undefined`] |
| **reportedBy** | `string` | Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | [Optional] [Defaults to `undefined`] |
| **participantDocument** | `string` | CPF ou CNPJ do participante. | [Optional] [Defaults to `undefined`] |
| **participantName** | `string` | Nome do participante. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Campo de ordenação. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Direção da ordenação. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **reportedAtFrom** | `Date` | Filtro: reportedAt a partir de. | [Optional] [Defaults to `undefined`] |
| **reportedAtTo** | `Date` | Filtro: reportedAt até. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Filtro: createdAt a partir de. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Filtro: createdAt até. | [Optional] [Defaults to `undefined`] |
| **expiresAtFrom** | `Date` | Filtro: expiresAt a partir de. | [Optional] [Defaults to `undefined`] |
| **expiresAtTo** | `Date` | Filtro: expiresAt até. | [Optional] [Defaults to `undefined`] |
| **updatedAtFrom** | `Date` | Filtro: updatedAt a partir de. | [Optional] [Defaults to `undefined`] |
| **updatedAtTo** | `Date` | Filtro: updatedAt até. | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Filtro por ID da infração. | [Optional] [Defaults to `undefined`] |
| **protocol** | `string` | Filtro por protocolo. | [Optional] [Defaults to `undefined`] |

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de infrações com paginação |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsById

> InfractionDetail getInfractionsById(id)

Obter Infração

Obtém uma infração específica por ID.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | ID da infração
    id: cm3w7n2p60002q8f2h7d3z5cf,
  } satisfies GetInfractionsByIdRequest;

  try {
    const data = await api.getInfractionsById(body);
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
| **id** | `string` | ID da infração | [Defaults to `undefined`] |

### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da infração |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Infração não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsDefenseById

> Defense getInfractionsDefenseById(infractionId, defenseId)

Obter Defesa

Obtém uma defesa específica de uma infração.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsDefenseByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | ID da infração
    infractionId: cm3w7n2p60002q8f2h7d3z5cf,
    // string | ID da defesa
    defenseId: cm3w7p5r90003q8f2j8e4a6dg,
  } satisfies GetInfractionsDefenseByIdRequest;

  try {
    const data = await api.getInfractionsDefenseById(body);
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
| **infractionId** | `string` | ID da infração | [Defaults to `undefined`] |
| **defenseId** | `string` | ID da defesa | [Defaults to `undefined`] |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da defesa |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Defesa não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsDefenses

> Array&lt;DefenseListItem&gt; getInfractionsDefenses(id)

Listar Defesas

Lista todas as defesas de uma infração específica.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { GetInfractionsDefensesRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | ID da infração
    id: cm3w7n2p60002q8f2h7d3z5cf,
  } satisfies GetInfractionsDefensesRequest;

  try {
    const data = await api.getInfractionsDefenses(body);
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
| **id** | `string` | ID da infração | [Defaults to `undefined`] |

### Return type

[**Array&lt;DefenseListItem&gt;**](DefenseListItem.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de defesas |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postInfractionsDefense

> Defense postInfractionsDefense(id, defense, files)

Criar Defesa

Cria uma defesa para uma infração específica.

### Example

```ts
import {
  Configuration,
  InfractionsApi,
} from 'payzu-pix';
import type { PostInfractionsDefenseRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InfractionsApi(config);

  const body = {
    // string | ID da infração
    id: cm3w7n2p60002q8f2h7d3z5cf,
    // string | Texto da defesa (máx: 1000 caracteres)
    defense: defense_example,
    // Array<Blob> | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. (optional)
    files: /path/to/file.txt,
  } satisfies PostInfractionsDefenseRequest;

  try {
    const data = await api.postInfractionsDefense(body);
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
| **id** | `string` | ID da infração | [Defaults to `undefined`] |
| **defense** | `string` | Texto da defesa (máx: 1000 caracteres) | [Defaults to `undefined`] |
| **files** | `Array<Blob>` | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | [Optional] |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Defesa criada |  -  |
| **400** | Requisição ou arquivo inválido: arquivos acima de 10 MB no total ou com extensão bloqueada |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Infração não encontrada |  -  |
| **413** | Mais de 5 arquivos ou um arquivo maior que 10 MB |  -  |
| **422** | Infração não aberta para defesa |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

