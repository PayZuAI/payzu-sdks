
# InfractionChangedData

A infração como está no momento do envio.

## Properties

Name | Type
------------ | -------------
`id` | string
`protocol` | string
`status` | string
`type` | string
`reportDetails` | string
`reportedBy` | string
`analysisResult` | string
`analysisDetails` | string
`reportedAt` | Date
`expiresAt` | Date
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { InfractionChangedData } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "protocol": null,
  "status": null,
  "type": null,
  "reportDetails": null,
  "reportedBy": null,
  "analysisResult": null,
  "analysisDetails": null,
  "reportedAt": null,
  "expiresAt": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies InfractionChangedData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfractionChangedData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


