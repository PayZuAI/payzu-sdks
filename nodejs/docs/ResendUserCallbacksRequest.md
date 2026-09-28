
# ResendUserCallbacksRequest


## Properties

Name | Type
------------ | -------------
`createdAtFrom` | Date
`createdAtTo` | Date
`transactionIds` | Array&lt;string&gt;
`transactionTypes` | Array&lt;string&gt;
`transactionStatus` | Array&lt;string&gt;
`transactionEndToEndIds` | Array&lt;string&gt;

## Example

```typescript
import type { ResendUserCallbacksRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "createdAtFrom": 2026-08-05T00:00:00Z,
  "createdAtTo": 2026-08-11T23:59:59Z,
  "transactionIds": null,
  "transactionTypes": null,
  "transactionStatus": null,
  "transactionEndToEndIds": null,
} satisfies ResendUserCallbacksRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResendUserCallbacksRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


