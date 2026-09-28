# ReportsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**downloadUserReport**](ReportsApi.md#downloaduserreport) | **POST** /user/report/{id}/download | Download report |
| [**getUserBankStatement**](ReportsApi.md#getuserbankstatement) | **GET** /user/bank-statements/{id} | Get bank statement |
| [**getUserBankStatements**](ReportsApi.md#getuserbankstatements) | **GET** /user/bank-statements | List bank statements |
| [**getUserDepositPending**](ReportsApi.md#getuserdepositpending) | **GET** /user/deposit-pending | List pending deposits |
| [**getUserDepositPendingById**](ReportsApi.md#getuserdepositpendingbyid) | **GET** /user/deposit-pending/{id} | Get pending deposit |
| [**getUserReport**](ReportsApi.md#getuserreport) | **GET** /user/report/{id} | Get report job status |
| [**getUserSummary**](ReportsApi.md#getusersummary) | **GET** /user/summary | Transaction summary |
| [**getUserTransactionById**](ReportsApi.md#getusertransactionbyid) | **GET** /user/transactions/{id} | List transaction details |
| [**getUserTransactions**](ReportsApi.md#getusertransactions) | **GET** /user/transactions | List Transactions |
| [**listUserReports**](ReportsApi.md#listuserreports) | **GET** /user/report | List report jobs |
| [**postUserReport**](ReportsApi.md#postuserreportoperation) | **POST** /user/report | Generate transactions report |



## downloadUserReport

> DownloadUserReport200Response downloadUserReport(id)

Download report

Returns a short-lived signed URL to download the CSV file.

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
    // string | Report ID.
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
| **id** | `string` | Report ID. | [Defaults to `undefined`] |

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
| **200** | Signed download URL |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Report not found |  -  |
| **410** | Report file expired |  -  |
| **422** | Report not ready (still processing) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserBankStatement

> BankStatement getUserBankStatement(id)

Get bank statement

Returns a single statement entry.

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
    // string | Statement entry id.
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
| **id** | `string` | Statement entry id. | [Defaults to `undefined`] |

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
| **200** | Statement entry. |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserBankStatements

> BankStatementListResponse getUserBankStatements(createdAtFrom, createdAtTo, id, operation, reason, transactionId, amountFrom, amountTo, page, limit, sortBy, sortDirection)

List bank statements

Lists the account statement entries. &#x60;createdAtFrom&#x60; and &#x60;createdAtTo&#x60; are required.

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
    // Date | Start date (required).
    createdAtFrom: 2026-08-01,
    // Date | End date (required).
    createdAtTo: 2026-08-31,
    // string | Entry ID. (optional)
    id: cm3w7q8s10004q8f2k9f5b7eh,
    // 'INCREMENT' | 'DECREMENT' | Operation type.  `INCREMENT` `DECREMENT` (optional)
    operation: operation_example,
    // string | Reason for the entry. (optional)
    reason: Estorno,
    // string | Transaction ID. (optional)
    transactionId: PAYZU20260814T6NX1CV9MK000000,
    // number | Minimum amount. (optional)
    amountFrom: 10.9,
    // number | Maximum amount. (optional)
    amountTo: 500,
    // number | Page number. (optional)
    page: 56,
    // number | Items per page. (optional)
    limit: 56,
    // 'createdAt' | 'amount' | Sort field. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction. (optional)
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
| **createdAtFrom** | `Date` | Start date (required). | [Defaults to `undefined`] |
| **createdAtTo** | `Date` | End date (required). | [Defaults to `undefined`] |
| **id** | `string` | Entry ID. | [Optional] [Defaults to `undefined`] |
| **operation** | `INCREMENT`, `DECREMENT` | Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [Optional] [Defaults to `undefined`] [Enum: INCREMENT, DECREMENT] |
| **reason** | `string` | Reason for the entry. | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` | Transaction ID. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `number` | Minimum amount. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `number` | Maximum amount. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Items per page. | [Optional] [Defaults to `10`] |
| **sortBy** | `createdAt`, `amount` | Sort field. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, amount] |
| **sortDirection** | `asc`, `desc` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

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
| **200** | Statement page. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDepositPending

> DepositPendingListResponse getUserDepositPending(status, document, name, endToEndId, amountMin, amountMax, createdAtFrom, createdAtTo, page, limit)

List pending deposits

Lists deposits that are pending / not yet reconciled.

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
    // string | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. (optional)
    status: PENDING,
    // string | CPF or CNPJ, digits only. (optional)
    document: 12345678901,
    // string | Name of the payer or receiver. (optional)
    name: John Doe,
    // string | End-to-end ID of the Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // number | Minimum amount. (optional)
    amountMin: 10.9,
    // number | Maximum amount. (optional)
    amountMax: 500,
    // Date | Start of the creation date range. (optional)
    createdAtFrom: 2026-08-01,
    // Date | End of the creation date range. (optional)
    createdAtTo: 2026-08-31,
    // number | Page number. (optional)
    page: 56,
    // number | Items per page. (optional)
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
| **status** | `string` | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | [Optional] [Defaults to `undefined`] |
| **document** | `string` | CPF or CNPJ, digits only. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Name of the payer or receiver. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | End-to-end ID of the Pix. | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` | Minimum amount. | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` | Maximum amount. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Start of the creation date range. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | End of the creation date range. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Items per page. | [Optional] [Defaults to `20`] |

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
| **200** | Pending deposit page. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserDepositPendingById

> DepositPending getUserDepositPendingById(id)

Get pending deposit

Returns a single pending deposit.

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
    // string | Pending deposit id.
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
| **id** | `string` | Pending deposit id. | [Defaults to `undefined`] |

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
| **200** | Pending deposit. |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserReport

> ReportJobDetail getUserReport(id)

Get report job status

Returns the status and metadata of a specific report job by &#x60;id&#x60;.

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
    // string | Report ID.
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
| **id** | `string` | Report ID. | [Defaults to `undefined`] |

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
| **200** | Report job |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Report not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserSummary

> Summary getUserSummary(dateFrom, dateTo, groupBy, grouped)

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

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
    // Date | Start date. Default: start of the previous day (America/Sao_Paulo). (optional)
    dateFrom: 2026-08-01,
    // Date | End date. Default: now. (optional)
    dateTo: 2026-08-31,
    // 'day' | Grouping applied to the transactions. (optional)
    groupBy: groupBy_example,
    // boolean | When true, returns a series grouped by date. (optional)
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
| **dateFrom** | `Date` | Start date. Default: start of the previous day (America/Sao_Paulo). | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | End date. Default: now. | [Optional] [Defaults to `undefined`] |
| **groupBy** | `day` | Grouping applied to the transactions. | [Optional] [Defaults to `&#39;day&#39;`] [Enum: day] |
| **grouped** | `boolean` | When true, returns a series grouped by date. | [Optional] [Defaults to `undefined`] |

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
| **200** | Summary. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactionById

> GetUserTransactionById200Response getUserTransactionById(id)

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

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
    // string | Transaction ID.
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
| **id** | `string` | Transaction ID. | [Defaults to `undefined`] |

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
| **200** | Transaction details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount, hasQrCode)

List Transactions

Paginated list of account transactions with filters.

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
    // Date | Start date or date-time (ISO 8601). (optional)
    dateFrom: 2026-08-01,
    // Date | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. (optional)
    dateTo: 2026-08-31,
    // number | Items per page (max 1000). (optional)
    limit: 10,
    // number | Page number (default 1). (optional)
    page: 1,
    // string | Transaction ID. (optional)
    id: PAYZU20260814T6NX1CV9MK000000,
    // string | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. (optional)
    status: COMPLETED,
    // string | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. (optional)
    type: DEPOSIT,
    // string | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. (optional)
    method: PIX,
    // number | Amount filter. Minimum 0.01. (optional)
    amount: 15000,
    // string | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. (optional)
    document: 12345678901,
    // string | Name filter. (optional)
    name: Alice,
    // string | Pix end-to-end ID. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // 'createdAt' | 'updatedAt' | Field to sort by (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
    // string | Filter by external reference (optional)
    clientReference: order_12345,
    // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
    virtualAccount: loja-centro-01,
    // boolean | Only transactions with (true) or without (false) QR Code. (optional)
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
| **dateFrom** | `Date` | Start date or date-time (ISO 8601). | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` | End date or date-time (ISO 8601). A date without time means 00:00 UTC of that day. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Items per page (max 1000). | [Optional] [Defaults to `10`] |
| **page** | `number` | Page number (default 1). | [Optional] [Defaults to `1`] |
| **id** | `string` | Transaction ID. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [Optional] [Defaults to `undefined`] |
| **method** | `string` | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | [Optional] [Defaults to `undefined`] |
| **amount** | `number` | Amount filter. Minimum 0.01. | [Optional] [Defaults to `undefined`] |
| **document** | `string` | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Name filter. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | Pix end-to-end ID. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Field to sort by | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **clientReference** | `string` | Filter by external reference | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [Optional] [Defaults to `undefined`] |
| **hasQrCode** | `boolean` | Only transactions with (true) or without (false) QR Code. | [Optional] [Defaults to `undefined`] |

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
| **200** | Transaction page |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listUserReports

> ListUserReports200Response listUserReports(page, limit, status, createdAtFrom, createdAtTo, updatedAtFrom, updatedAtTo, sortBy, sortDirection)

List report jobs

List report jobs created by the authenticated user.

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
    // number | Page number. (optional)
    page: 56,
    // number | Items per page. (optional)
    limit: 56,
    // string | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. (optional)
    status: COMPLETED,FAILED,
    // Date | Filter: created from. (optional)
    createdAtFrom: 2026-08-01,
    // Date | Filter: created up to. (optional)
    createdAtTo: 2026-08-31,
    // Date | Filter: updated from. (optional)
    updatedAtFrom: 2026-08-01,
    // Date | Filter: updated up to. (optional)
    updatedAtTo: 2026-08-31,
    // 'createdAt' | 'updatedAt' | Sort field. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction. (optional)
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
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Items per page. | [Optional] [Defaults to `10`] |
| **status** | `string` | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Filter: created from. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Filter: created up to. | [Optional] [Defaults to `undefined`] |
| **updatedAtFrom** | `Date` | Filter: updated from. | [Optional] [Defaults to `undefined`] |
| **updatedAtTo** | `Date` | Filter: updated up to. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Sort field. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

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
| **200** | Page of report jobs |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserReport

> ReportJobAccepted postUserReport(postUserReportRequest)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

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
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **422** | No transactions match the filter / concurrency limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

