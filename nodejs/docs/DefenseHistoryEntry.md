
# DefenseHistoryEntry

Defense recorded in the infraction history, without the infractionId field.

## Properties

Name | Type
------------ | -------------
`id` | string
`defense` | string
`status` | string
`createdAt` | Date
`updatedAt` | Date
`files` | [Array&lt;DefenseHistoryEntryFilesInner&gt;](DefenseHistoryEntryFilesInner.md)

## Example

```typescript
import type { DefenseHistoryEntry } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "defense": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
  "files": null,
} satisfies DefenseHistoryEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DefenseHistoryEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


