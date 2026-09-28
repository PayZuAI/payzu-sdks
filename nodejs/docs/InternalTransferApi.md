# InternalTransferApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getInternalTransfer**](InternalTransferApi.md#getinternaltransfer) | **GET** /internal-transfer | Get internal transfer |
| [**postInternalTransfer**](InternalTransferApi.md#postinternaltransferoperation) | **POST** /internal-transfer | Create internal transfer |



## getInternalTransfer

> Transaction getInternalTransfer(id, clientReference, virtualAccount)

Get internal transfer

Returns the details of an internal transfer. Provide at least one of &#x60;id&#x60; or &#x60;clientReference&#x60; (&#x60;virtualAccount&#x60; is also accepted). If more than one is provided, all are applied as filters (AND).  Token permission: &#x60;WITHDRAW&#x60;.

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
    // string | Transaction ID (optional)
    id: PAYZU20260814T6NX1CV9MK000000,
    // string | External reference (optional)
    clientReference: order_12345,
    // string | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
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
| **id** | `string` | Transaction ID | [Optional] [Defaults to `undefined`] |
| **clientReference** | `string` | External reference | [Optional] [Defaults to `undefined`] |
| **virtualAccount** | `string` | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [Optional] [Defaults to `undefined`] |

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
| **200** | Transfer details |  -  |
| **400** | Provide either &#x60;id&#x60; or &#x60;clientReference&#x60; |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transfer not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postInternalTransfer

> Transaction postInternalTransfer(postInternalTransferRequest)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.  Token permission: &#x60;WITHDRAW&#x60;.

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
| **200** | Transfer completed |  -  |
| **400** | Invalid payload (e.g. payerAccountNumber does not belong to the requester) |  -  |
| **401** | Authentication failure |  -  |
| **403** | allowInternalTransfer disabled or token missing WITHDRAW permission |  -  |
| **404** | Receiver account not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |
| **422** | Insufficient balance / amount below ticket minimum |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

