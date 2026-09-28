
# Refund


## Properties

Name | Type
------------ | -------------
`id` | string
`amount` | number
`reason` | string
`description` | string
`status` | string
`endToEndId` | string
`refundedAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { Refund } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "amount": null,
  "reason": null,
  "description": null,
  "status": null,
  "endToEndId": null,
  "refundedAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies Refund

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Refund
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


