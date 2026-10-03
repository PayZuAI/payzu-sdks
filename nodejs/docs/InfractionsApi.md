# InfractionsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInfractions**](InfractionsApi.md#getinfractions) | **GET** /user/infractions | List Infractions |
| [**getInfractionsById**](InfractionsApi.md#getinfractionsbyid) | **GET** /user/infractions/{id} | Get Infraction |
| [**getInfractionsDefenseById**](InfractionsApi.md#getinfractionsdefensebyid) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**getInfractionsDefenses**](InfractionsApi.md#getinfractionsdefenses) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**postInfractionsDefense**](InfractionsApi.md#postinfractionsdefense) | **POST** /user/infractions/{id}/defenses | Create Defense |



## getInfractions

> InfractionListResponse getInfractions(page, limit, status, type, endToEndId, transactionId, amountMin, amountMax, analysisResult, reportedBy, participantDocument, participantName, sortBy, sortDirection, reportedAtFrom, reportedAtTo, createdAtFrom, createdAtTo, expiresAtFrom, expiresAtTo, updatedAtFrom, updatedAtTo, id, protocol)

List Infractions

List all infractions for the authenticated user with pagination and filters.

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
    // number | Page number. (optional)
    page: 56,
    // number | Items per page. (optional)
    limit: 56,
    // string | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) (optional)
    status: OPEN,
    // string | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) (optional)
    type: REFUND_REQUEST,
    // string | End-to-end ID of the Pix. (optional)
    endToEndId: E00000000202508172159kZ8dQ2mNb1x,
    // string | Transaction ID. (optional)
    transactionId: PAYZU20260814T6NX1CV9MK000000,
    // number | Minimum amount. (optional)
    amountMin: 10.9,
    // number | Maximum amount. (optional)
    amountMax: 500,
    // string | Comma-separated AnalysisResult: AGREED, DISAGREED. (optional)
    analysisResult: AGREED,
    // string | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) (optional)
    reportedBy: DEBITED_PARTICIPANT,
    // string | CPF or CNPJ of the participant. (optional)
    participantDocument: 12345678901,
    // string | Name of the participant. (optional)
    participantName: John Doe,
    // 'createdAt' | 'updatedAt' | Sort field. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction. (optional)
    sortDirection: sortDirection_example,
    // Date | Filter: reportedAt from. (optional)
    reportedAtFrom: 2026-08-01,
    // Date | Filter: reportedAt up to. (optional)
    reportedAtTo: 2026-08-31,
    // Date | Filter: createdAt from. (optional)
    createdAtFrom: 2026-08-01,
    // Date | Filter: createdAt up to. (optional)
    createdAtTo: 2026-08-31,
    // Date | Filter: expiresAt from. (optional)
    expiresAtFrom: 2026-08-01,
    // Date | Filter: expiresAt up to. (optional)
    expiresAtTo: 2026-08-31,
    // Date | Filter: updatedAt from. (optional)
    updatedAtFrom: 2026-08-01,
    // Date | Filter: updatedAt up to. (optional)
    updatedAtTo: 2026-08-31,
    // string | Filter by infraction ID. (optional)
    id: cm3w7n2p60002q8f2h7d3z5cf,
    // string | Filter by protocol. (optional)
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
| **page** | `number` | Page number. | [Optional] [Defaults to `1`] |
| **limit** | `number` | Items per page. | [Optional] [Defaults to `10`] |
| **status** | `string` | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [Optional] [Defaults to `undefined`] |
| **endToEndId** | `string` | End-to-end ID of the Pix. | [Optional] [Defaults to `undefined`] |
| **transactionId** | `string` | Transaction ID. | [Optional] [Defaults to `undefined`] |
| **amountMin** | `number` | Minimum amount. | [Optional] [Defaults to `undefined`] |
| **amountMax** | `number` | Maximum amount. | [Optional] [Defaults to `undefined`] |
| **analysisResult** | `string` | Comma-separated AnalysisResult: AGREED, DISAGREED. | [Optional] [Defaults to `undefined`] |
| **reportedBy** | `string` | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [Optional] [Defaults to `undefined`] |
| **participantDocument** | `string` | CPF or CNPJ of the participant. | [Optional] [Defaults to `undefined`] |
| **participantName** | `string` | Name of the participant. | [Optional] [Defaults to `undefined`] |
| **sortBy** | `createdAt`, `updatedAt` | Sort field. | [Optional] [Defaults to `&#39;createdAt&#39;`] [Enum: createdAt, updatedAt] |
| **sortDirection** | `asc`, `desc` | Sort direction. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **reportedAtFrom** | `Date` | Filter: reportedAt from. | [Optional] [Defaults to `undefined`] |
| **reportedAtTo** | `Date` | Filter: reportedAt up to. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `Date` | Filter: createdAt from. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `Date` | Filter: createdAt up to. | [Optional] [Defaults to `undefined`] |
| **expiresAtFrom** | `Date` | Filter: expiresAt from. | [Optional] [Defaults to `undefined`] |
| **expiresAtTo** | `Date` | Filter: expiresAt up to. | [Optional] [Defaults to `undefined`] |
| **updatedAtFrom** | `Date` | Filter: updatedAt from. | [Optional] [Defaults to `undefined`] |
| **updatedAtTo** | `Date` | Filter: updatedAt up to. | [Optional] [Defaults to `undefined`] |
| **id** | `string` | Filter by infraction ID. | [Optional] [Defaults to `undefined`] |
| **protocol** | `string` | Filter by protocol. | [Optional] [Defaults to `undefined`] |

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
| **200** | List of infractions with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsById

> InfractionDetail getInfractionsById(id)

Get Infraction

Get a specific infraction by ID.

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
    // string | Infraction ID
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
| **id** | `string` | Infraction ID | [Defaults to `undefined`] |

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
| **200** | Infraction details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Infraction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsDefenseById

> Defense getInfractionsDefenseById(infractionId, defenseId)

Get Defense

Get a specific defense for an infraction.

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
    // string | Infraction ID
    infractionId: cm3w7n2p60002q8f2h7d3z5cf,
    // string | Defense ID
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
| **infractionId** | `string` | Infraction ID | [Defaults to `undefined`] |
| **defenseId** | `string` | Defense ID | [Defaults to `undefined`] |

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
| **200** | Defense details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Defense not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getInfractionsDefenses

> Array&lt;Defense&gt; getInfractionsDefenses(id)

List Defenses

List all defenses for a specific infraction.

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
    // string | Infraction ID
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
| **id** | `string` | Infraction ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;Defense&gt;**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of defenses |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postInfractionsDefense

> Defense postInfractionsDefense(id, defense, files)

Create Defense

Create a defense for a specific infraction.

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
    // string | Infraction ID
    id: cm3w7n2p60002q8f2h7d3z5cf,
    // string | Defense text (max: 1000 characters)
    defense: defense_example,
    // Array<Blob> | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. (optional)
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
| **id** | `string` | Infraction ID | [Defaults to `undefined`] |
| **defense** | `string` | Defense text (max: 1000 characters) | [Defaults to `undefined`] |
| **files** | `Array<Blob>` | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. | [Optional] |

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
| **201** | Defense created |  -  |
| **400** | Invalid request or file: files above 10 MB in total or with a blocked extension |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Infraction not found |  -  |
| **413** | More than 5 files or a single file larger than 10 MB |  -  |
| **422** | Infraction not open for defense |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

