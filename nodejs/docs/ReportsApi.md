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
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
| **id** | `string` |  | [Defaults to `undefined`] |

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
    id: id_example,
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
    createdAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | End date (required).
    createdAtTo: 2013-10-20T19:20:30+01:00,
    // string (optional)
    id: id_example,
    // 'INCREMENT' | 'DECREMENT' (optional)
    operation: operation_example,
    // string (optional)
    reason: reason_example,
    // string (optional)
    transactionId: transactionId_example,
    // number (optional)
    amountFrom: 8.14,
    // number (optional)
    amountTo: 8.14,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // 'createdAt' | 'amount' (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' (optional)
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
| **id** | `string` |  | [Optional] [Defaults to `undefined`] |
| **operation** | `INCREMENT`, `DECREMENT` |  | [Optional] [Defaults to `undefined`] [Enum: INCREMENT, DECREMENT] |
| **reason** | `string` |  | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `number` |  | [Optional] [Defaults to `undefined`] |
| **amountTo** | `number` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **sortBy** | `createdAt`, `amount` |  | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, amount] |
| **sortDirection** | `asc`, `desc` |  | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

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
    status: status_example,
    // string (optional)
    document: document_example,
    // string (optional)
    name: name_example,
    // string (optional)
    endToEndId: endToEndId_example,
    // number (optional)
    amountMin: 8.14,
    // number (optional)
    amountMax: 8.14,
    // Date (optional)
    createdAtFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    createdAtTo: 2013-10-20T19:20:30+01:00,
    // number (optional)
    page: 56,
    // number (optional)
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
| **document** | `string` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` |  | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` |  | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

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
    id: id_example,
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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserReport

> ReportJob getUserReport(id)

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
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report job |  -  |
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
    // Date (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // Date (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // 'day' | 'hour' (optional)
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
| **dateFrom** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **dateTo** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **groupBy** | `day`, `hour` |  | [Optional] [Defaults to `&#39;day&#39;`] [Enum: day, hour] |
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
    // string
    id: id_example,
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
| **id** | `string` |  | [Defaults to `undefined`] |

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
| **404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(dateFrom, dateTo, limit, page, id, status, type, method, amount, document, name, endToEndId, sortBy, sortDirection, clientReference, virtualAccount)

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
    // string | Start date (YYYY-MM-DD). (optional)
    dateFrom: 2025-08-01,
    // string | End date (YYYY-MM-DD). (optional)
    dateTo: 2025-08-17,
    // number | Items per page (max 1000). (optional)
    limit: 10,
    // number | Page number (default 1). (optional)
    page: 1,
    // string | Transaction ID. (optional)
    id: PAYZU2025081418333632CYKN8M,
    // string | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. (optional)
    status: COMPLETED,
    // string | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION. (optional)
    type: DEPOSIT,
    // string | Transaction method/rail. Accepts CSV: PIX,BANK_SLIP,INTERNAL_TRANSFER. (optional)
    method: PIX,
    // number | Amount filter. Minimum 0.01. (optional)
    amount: 15000,
    // string | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. (optional)
    document: 12345678901,
    // string | Name filter. (optional)
    name: Alice,
    // string | Pix end-to-end ID. (optional)
    endToEndId: E00360305202508141833bcf1f37b487,
    // 'createdAt' | 'updatedAt' | Field to sort by (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
    // string | Filter by external reference (optional)
    clientReference: clientReference_example,
    // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
    virtualAccount: virtualAccount_example,
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
| **dateFrom** | `string` | Start date (YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **dateTo** | `string` | End date (YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Items per page (max 1000). | [Optional] [Defaults to `10`] |
| **page** | `number` | Page number (default 1). | [Optional] [Defaults to `1`] |
| **id** | `string` | Transaction ID. | [Optional] [Defaults to `undefined`] |
| **status** | `string` | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION. | [Optional] [Defaults to `undefined`] |
| **method** | `string` | Transaction method/rail. Accepts CSV: PIX,BANK_SLIP,INTERNAL_TRANSFER. | [Optional] [Defaults to `undefined`] |
| **amount** | `number` | Amount filter. Minimum 0.01. | [Optional] [Defaults to `undefined`] |
| **document** | `string` | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Name filter. | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | Pix end-to-end ID. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Field to sort by | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **clientReference** | `string` | Filter by external reference | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [Optional] [Defaults to `undefined`] |

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
| **404** | Resource not found |  -  |

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
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED' (optional)
    status: status_example,
    // Date | Filter: created from. (optional)
    createdAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filter: created up to. (optional)
    createdAtTo: 2013-10-20T19:20:30+01:00,
    // Date | Filter: updated from. (optional)
    updatedAtFrom: 2013-10-20T19:20:30+01:00,
    // Date | Filter: updated up to. (optional)
    updatedAtTo: 2013-10-20T19:20:30+01:00,
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `10`] |
| **status** | `PENDING`, `RUNNING`, `COMPLETED`, `FAILED` |  | [Optional] [Defaults to `undefined`] [Enum: PENDING, RUNNING, COMPLETED, FAILED] |
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
| **404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUserReport

> ReportJob postUserReport(postUserReportRequest)

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

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Report job aceito (job enfileirado) |  -  |
| **422** | No transactions match the filter / concurrency limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

