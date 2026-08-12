
# WebhookUpdateRequest

Provide at least one field.

## Properties

Name | Type
------------ | -------------
`url` | string
`active` | boolean
`events` | [Array&lt;WebhookEventType&gt;](WebhookEventType.md)

## Example

```typescript
import type { WebhookUpdateRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "active": null,
  "events": null,
} satisfies WebhookUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


