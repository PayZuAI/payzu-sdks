
# InfractionDetailTransaction

Summary of the disputed Pix.

## Properties

Name | Type
------------ | -------------
`id` | string
`amount` | number
`payerName` | string
`payerDocument` | string
`receiverName` | string
`receiverDocument` | string
`endToEndId` | string

## Example

```typescript
import type { InfractionDetailTransaction } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "amount": null,
  "payerName": null,
  "payerDocument": null,
  "receiverName": null,
  "receiverDocument": null,
  "endToEndId": null,
} satisfies InfractionDetailTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfractionDetailTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


