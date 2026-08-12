
# SentWebhookDetail


## Properties

Name | Type
------------ | -------------
`id` | string
`webhookId` | string
`userId` | string
`transactionId` | string
`url` | string
`body` | { [key: string]: any; }
`status` | number
`responseHeaders` | { [key: string]: any; }
`responseBody` | string
`error` | string
`responseTime` | number
`eventType` | string
`createdAt` | Date

## Example

```typescript
import type { SentWebhookDetail } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "webhookId": null,
  "userId": null,
  "transactionId": null,
  "url": null,
  "body": null,
  "status": 200,
  "responseHeaders": null,
  "responseBody": null,
  "error": null,
  "responseTime": 342,
  "eventType": null,
  "createdAt": null,
} satisfies SentWebhookDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SentWebhookDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


