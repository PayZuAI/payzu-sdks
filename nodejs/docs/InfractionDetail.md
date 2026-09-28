
# InfractionDetail


## Properties

Name | Type
------------ | -------------
`id` | string
`protocol` | string
`status` | string
`type` | string
`reportedBy` | string
`reportDetails` | string
`analysisResult` | string
`analysisDetails` | string
`reportedAt` | Date
`expiresAt` | Date
`transaction` | [InfractionDetailTransaction](InfractionDetailTransaction.md)
`defenseHistory` | [Array&lt;DefenseHistoryEntry&gt;](DefenseHistoryEntry.md)

## Example

```typescript
import type { InfractionDetail } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "protocol": null,
  "status": null,
  "type": null,
  "reportedBy": null,
  "reportDetails": null,
  "analysisResult": null,
  "analysisDetails": null,
  "reportedAt": null,
  "expiresAt": null,
  "transaction": null,
  "defenseHistory": null,
} satisfies InfractionDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfractionDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


