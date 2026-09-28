
# EnqueuedCallbackItem


## Properties

Name | Type
------------ | -------------
`transactionId` | string
`webhookId` | string
`eventType` | [WebhookEventType](WebhookEventType.md)

## Example

```typescript
import type { EnqueuedCallbackItem } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "transactionId": PAYZU20260811K7M2X9QP4T000000,
  "webhookId": cm3w7k1t40000q8f2r5b9x3ad,
  "eventType": null,
} satisfies EnqueuedCallbackItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EnqueuedCallbackItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


