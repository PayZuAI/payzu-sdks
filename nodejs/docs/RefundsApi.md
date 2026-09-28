# RefundsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postRefund**](RefundsApi.md#postrefund) | **POST** /refund/{transactionId} | Refund a Pix |



## postRefund

> TransactionWithRefunds postRefund(transactionId, refundRequest)

Refund a Pix

Refund a received Pix charge. Provide &#x60;amount&#x60; for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with &#x60;refundStatus: PENDING&#x60;; completion is confirmed later by webhook.  Send &#x60;{}&#x60; to refund the full amount.  Token permission: &#x60;WITHDRAW&#x60;.

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
    // string | ID of the transaction to refund.
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
| **transactionId** | `string` | ID of the transaction to refund. | [Defaults to `undefined`] |
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
| **200** | Refund accepted and enqueued (asynchronous). |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |
| **422** | Refund not allowed for this transaction or amount. |  -  |
| **429** | Rate limit exceeded |  -  |
| **500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

