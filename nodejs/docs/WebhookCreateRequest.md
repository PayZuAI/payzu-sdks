
# WebhookCreateRequest


## Properties

Name | Type
------------ | -------------
`url` | string
`events` | [Array&lt;WebhookEventType&gt;](WebhookEventType.md)
`generateSecret` | boolean
`active` | boolean

## Example

```typescript
import type { WebhookCreateRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "url": https://sualoja.com.br/webhook,
  "events": null,
  "generateSecret": null,
  "active": null,
} satisfies WebhookCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


