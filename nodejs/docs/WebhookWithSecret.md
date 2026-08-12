
# WebhookWithSecret


## Properties

Name | Type
------------ | -------------
`id` | string
`url` | string
`active` | boolean
`events` | [Array&lt;WebhookEventType&gt;](WebhookEventType.md)
`hasSecret` | boolean
`createdAt` | Date
`updatedAt` | Date
`secret` | string

## Example

```typescript
import type { WebhookWithSecret } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": yl9k2m0c8x1,
  "url": https://sualoja.com.br/webhook,
  "active": true,
  "events": null,
  "hasSecret": true,
  "createdAt": null,
  "updatedAt": null,
  "secret": whsec_9f8a2b7c6d5e4f3a2b1c0d9e8f7a6b5c,
} satisfies WebhookWithSecret

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookWithSecret
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


