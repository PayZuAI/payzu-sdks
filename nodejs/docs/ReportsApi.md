# ReportsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadUserReport**](ReportsApi.md#downloaduserreport) | **POST** /user/report/{id}/download | Baixar relatório |
| [**getUserBankStatement**](ReportsApi.md#getuserbankstatement) | **GET** /user/bank-statements/{id} | Consultar lançamento |
| [**getUserBankStatements**](ReportsApi.md#getuserbankstatements) | **GET** /user/bank-statements | Listar extrato |
| [**getUserDepositPending**](ReportsApi.md#getuserdepositpending) | **GET** /user/deposit-pending | Listar depósitos via chave Pix |
| [**getUserDepositPendingById**](ReportsApi.md#getuserdepositpendingbyid) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix |
| [**getUserReport**](ReportsApi.md#getuserreport) | **GET** /user/report/{id} | Consultar status do relatório |
| [**getUserSummary**](ReportsApi.md#getusersummary) | **GET** /user/summary | Resumo de transações |
| [**getUserTransactionById**](ReportsApi.md#getusertransactionbyid) | **GET** /user/transactions/{id} | Listar detalhes da transação |
| [**getUserTransactions**](ReportsApi.md#getusertransactions) | **GET** /user/transactions | Listar transações |
| [**listUserReports**](ReportsApi.md#listuserreports) | **GET** /user/report | Listar jobs de relatório |
| [**postUserReport**](ReportsApi.md#postuserreportoperation) | **POST** /user/report | Gerar relatório de transações |



## downloadUserReport

> DownloadUserReport200Response downloadUserReport(id)

Baixar relatório

Retorna uma URL assinada de curta duração para baixar o arquivo CSV.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { DownloadUserReportRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | ID do relatório.
    id: 01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78,
  } satisfies DownloadUserReportRequest;

  try {
    const data = await api.downloadUserReport(body);
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
| **id** | `string` | ID do relatório. | [Defaults to `undefined`] |

### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | URL de download assinada |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Relatório não encontrado |  -  |
| **410** | Arquivo do relatório expirado |  -  |
| **422** | Relatório ainda processando |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserBankStatement

> BankStatement getUserBankStatement(id)

Consultar lançamento

Retorna um lançamento do extrato.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserBankStatementRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | Id do lançamento do extrato.
    id: cm3w7q8s10004q8f2k9f5b7eh,
  } satisfies GetUserBankStatementRequest;

  try {
    const data = await api.getUserBankStatement(body);
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
| **id** | `string` | Id do lançamento do extrato. | [Defaults to `undefined`] |

### Return type

[**BankStatement**](BankStatement.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lançamento. |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserBankStatements

> BankStatementListResponse getUserBankStatements(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection)

Listar extrato

Lista os lançamentos do extrato da conta. &#x60;createdAtFrom&#x60; e &#x60;createdAtTo&#x60; são obrigatórios.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserBankStatementsRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // Date | Data inicial (obrigatória).
    createdAtFrom: 2026-08-01T00:00:00-03:00,
    // Date | Data final (obrigatória).
    createdAtTo: 2026-08-31T23:59:59-03:00,
    // string | ID do lançamento. (optional)
    id: cm3w7q8s10004q8f2k9f5b7eh,
    // 'INCREMENT' | 'DECREMENT' | Tipo de operação.  `INCREMENT` `DECREMENT` (optional)
    operation: operation_example,
    // string | Razão do lançamento. (optional)
    reason: PIX_DEPOSIT,
    // string | ID da transação. (optional)
    transactionId: PAYZU20260814T6NX1CV9MK000000,
    // number | Valor mínimo. (optional)
    amountFrom: 10.9,
    // number | Valor máximo. (optional)
    amountTo: 500,
    // number | Número da página. (optional)
    page: 56,
    // number | Itens por página. (optional)
    limit: 56,
    // 'createdAt' | 'amount' | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Direção da ordenação. (optional)
    sortDirection: sortDirection_example,
  } satisfies GetUserBankStatementsRequest;

  try {
    const data = await api.getUserBankStatements(body);
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
| **createdAtFrom** | `Date` | Data inicial (obrigatória). | [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Data final (obrigatória). | [Defaults to `undefined`] |
| **id** | `string` | ID do lançamento. | [Optional] [Defaults to `undefined`] |
| **operation** | `INCREMENT`, `DECREMENT` | Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [Optional] [Defaults to `undefined`] [Enum: INCREMENT, DECREMENT] |
| **reason** | `string` | Razão do lançamento. | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` | ID da transação. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `number` | Valor mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `number` | Valor máximo. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Número da página. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Itens por página. | [Optional] [Defaults to `10`] |
| **sortBy** | `createdAt`, `amount` | Campo de ordenação. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, amount] |
| **sortDirection** | `asc`, `desc` | Direção da ordenação. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**BankStatementListResponse**](BankStatementListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Página do extrato. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDepositPending

> DepositPendingListResponse getUserDepositPending(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit)

Listar depósitos via chave Pix

Lista os depósitos via chave Pix: Pix que entraram na conta pela chave, sem passar por uma cobrança criada por &#x60;POST /pix&#x60;.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserDepositPendingRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED` (optional)
    status: PENDING,
    // string | CPF ou CNPJ, apenas dígitos. (optional)
    document: 12345678901,
    // string | Nome do pagador ou recebedor. (optional)
    name: John Doe,
    // string | ID end-to-end do Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // number | Valor mínimo. (optional)
    amountMin: 10.9,
    // number | Valor máximo. (optional)
    amountMax: 500,
    // Date | Data de criação inicial. (optional)
    createdAtFrom: 2026-08-01,
    // Date | Data de criação final. (optional)
    createdAtTo: 2026-08-31,
    // number | Número da página. Valor inválido vira 1. (optional)
    page: 56,
    // number | Itens por página. Valor inválido vira 20. (optional)
    limit: 56,
  } satisfies GetUserDepositPendingRequest;

  try {
    const data = await api.getUserDepositPending(body);
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
| **status** | `string` | Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | [Optional] [Defaults to `undefined`] |
| **document** | `string` | CPF ou CNPJ, apenas dígitos. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Nome do pagador ou recebedor. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | ID end-to-end do Pix. | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` | Valor mínimo. | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` | Valor máximo. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Número da página. Valor inválido vira 1. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Itens por página. Valor inválido vira 20. | [Optional] [Defaults to `20`] |

### Return type

[**DepositPendingListResponse**](DepositPendingListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Página de pendentes. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDepositPendingById

> DepositPending getUserDepositPendingById(id)

Consultar depósito via chave Pix

Retorna um depósito via chave Pix.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserDepositPendingByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | Id do depósito pendente.
    id: cm3w7r1u50005q8f2m1g6c8fj,
  } satisfies GetUserDepositPendingByIdRequest;

  try {
    const data = await api.getUserDepositPendingById(body);
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
| **id** | `string` | Id do depósito pendente. | [Defaults to `undefined`] |

### Return type

[**DepositPending**](DepositPending.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Depósito pendente. |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserReport

> ReportJobDetail getUserReport(id)

Consultar status do relatório

Retorna o status e os metadados de um job de relatório específico pelo &#x60;id&#x60;.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserReportRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | ID do relatório.
    id: 01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78,
  } satisfies GetUserReportRequest;

  try {
    const data = await api.getUserReport(body);
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
| **id** | `string` | ID do relatório. | [Defaults to `undefined`] |

### Return type

[**ReportJobDetail**](ReportJobDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Job de relatório |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Relatório não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserSummary

> Summary getUserSummary(dateFrom, dateTo, groupBy, grouped)

Resumo de transações

Totais agregados de depósitos, saques e comissão num período.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserSummaryRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // Date | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). (optional)
    dateFrom: 2026-08-01T00:00:00-03:00,
    // Date | Data final. Padrão: agora. (optional)
    dateTo: 2026-08-31T23:59:59-03:00,
    // 'day' | Agrupamento das transações. (optional)
    groupBy: groupBy_example,
    // boolean | Quando true, retorna uma série agrupada por data. (optional)
    grouped: true,
  } satisfies GetUserSummaryRequest;

  try {
    const data = await api.getUserSummary(body);
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
| **dateFrom** | `Date` | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | Data final. Padrão: agora. | [Optional] [Defaults to `undefined`] |
| **groupBy** | `day` | Agrupamento das transações. | [Optional] [Defaults to `&#39;day&#39;`] [Enum: day] |
| **grouped** | `boolean` | Quando true, retorna uma série agrupada por data. | [Optional] [Defaults to `undefined`] |

### Return type

[**Summary**](Summary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resumo. |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactionById

> GetUserTransactionById200Response getUserTransactionById(id)

Listar detalhes da transação

Recupera uma única transação com seu log de callback e as infrações vinculadas.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserTransactionByIdRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // string | ID da transação.
    id: PAYZU20260814T6NX1CV9MK000000,
  } satisfies GetUserTransactionByIdRequest;

  try {
    const data = await api.getUserTransactionById(body);
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

### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da transação |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Transação não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode)

Listar transações

Lista paginada das transações da conta com filtros.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { GetUserTransactionsRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // Date | Data-hora inicial (ISO 8601). (optional)
    dateFrom: 2026-08-01T00:00:00-03:00,
    // Date | Data-hora final (ISO 8601). (optional)
    dateTo: 2026-08-31T23:59:59-03:00,
    // number | Itens por página. (optional)
    limit: 10,
    // number | Número da página. (optional)
    page: 1,
    // string | ID da transação. (optional)
    id: PAYZU20260814T6NX1CV9MK000000,
    // string | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR` (optional)
    status: COMPLETED,
    // string | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. (optional)
    type: DEPOSIT,
    // string | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED` (optional)
    method: PIX,
    // number | Filtro por valor. Mínimo 0.01. (optional)
    amount: 15000,
    // string | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. (optional)
    document: 12345678901,
    // string | Filtro por nome. (optional)
    name: Alice,
    // string | ID end-to-end do Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // 'createdAt' | 'updatedAt' | Campo pelo qual ordenar (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Direção da ordenação (optional)
    sortDirection: sortDirection_example,
    // string | Filtra por referência externa (optional)
    clientReference: order_12345,
    // string | Subconta usada na criação. (optional)
    virtualAccount: loja-centro-01,
    // boolean | Só transações com (true) ou sem (false) QR Code. (optional)
    hasQrCode: true,
  } satisfies GetUserTransactionsRequest;

  try {
    const data = await api.getUserTransactions(body);
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
| **dateFrom** | `Date` | Data-hora inicial (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | Data-hora final (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Itens por página. | [Optional] [Defaults to `10`] |
| **page** | `number` | Número da página. | [Optional] [Defaults to `1`] |
| **id** | `string` | ID da transação. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [Optional] [Defaults to `undefined`] |
| **method** | `string` | Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | [Optional] [Defaults to `undefined`] |
| **amount** | `number` | Filtro por valor. Mínimo 0.01. | [Optional] [Defaults to `undefined`] |
| **document** | `string` | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Filtro por nome. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | ID end-to-end do Pix. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Campo pelo qual ordenar | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Direção da ordenação | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **clientReference** | `string` | Filtra por referência externa | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Subconta usada na criação. | [Optional] [Defaults to `undefined`] |
| **hasQrCode** | `boolean` | Só transações com (true) ou sem (false) QR Code. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Página de transações |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUserReports

> ListUserReports200Response listUserReports(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection)

Listar jobs de relatório

Lista os jobs de relatório criados pelo usuário autenticado.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { ListUserReportsRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // number | Número da página. (optional)
    page: 56,
    // number | Itens por página. (optional)
    limit: 56,
    // string | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. (optional)
    status: COMPLETED,FAILED,
    // Date | Filtro: criado a partir de. (optional)
    createdAtFrom: 2026-08-01,
    // Date | Filtro: criado até. (optional)
    createdAtTo: 2026-08-31,
    // Date | Filtro: atualizado a partir de. (optional)
    updatedAtFrom: 2026-08-01,
    // Date | Filtro: atualizado até. (optional)
    updatedAtTo: 2026-08-31,
    // 'createdAt' | 'updatedAt' | Campo de ordenação. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Direção da ordenação. (optional)
    sortDirection: sortDirection_example,
  } satisfies ListUserReportsRequest;

  try {
    const data = await api.listUserReports(body);
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
| **status** | `string` | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Filtro: criado a partir de. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Filtro: criado até. | [Optional] [Defaults to `undefined`] |
| **updatedAtFrom** | `Date` | Filtro: atualizado a partir de. | [Optional] [Defaults to `undefined`] |
| **updatedAtTo** | `Date` | Filtro: atualizado até. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Campo de ordenação. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Direção da ordenação. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Página de jobs de relatório |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserReport

> ReportJobAccepted postUserReport(postUserReportRequest)

Gerar relatório de transações

Enfileira um job assíncrono que gera um relatório CSV das transações para o período e filtros informados.

### Example

```ts
import {
  Configuration,
  ReportsApi,
} from 'payzu-pix';
import type { PostUserReportOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ReportsApi(config);

  const body = {
    // PostUserReportRequest
    postUserReportRequest: ...,
  } satisfies PostUserReportOperationRequest;

  try {
    const data = await api.postUserReport(body);
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
| **postUserReportRequest** | [PostUserReportRequest](PostUserReportRequest.md) |  | |

### Return type

[**ReportJobAccepted**](ReportJobAccepted.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Report job aceito (job enfileirado) |  -  |
| **400** | Requisição inválida |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **422** | Nenhuma transação no filtro |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

