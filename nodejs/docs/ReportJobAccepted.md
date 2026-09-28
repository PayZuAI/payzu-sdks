
# ReportJobAccepted

Report job just queued.

## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`createdAt` | Date
`updatedAt` | Date
`params` | { [key: string]: any; }
`writtenRows` | number
`storageExpiresAt` | Date

## Example

```typescript
import type { ReportJobAccepted } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
  "params": null,
  "writtenRows": null,
  "storageExpiresAt": null,
} satisfies ReportJobAccepted

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReportJobAccepted
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


