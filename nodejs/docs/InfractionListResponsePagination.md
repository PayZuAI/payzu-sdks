
# InfractionListResponsePagination

Page, limit, total of items and of pages.

## Properties

Name | Type
------------ | -------------
`page` | number
`limit` | number
`totalItems` | number
`totalPages` | number

## Example

```typescript
import type { InfractionListResponsePagination } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "limit": null,
  "totalItems": null,
  "totalPages": null,
} satisfies InfractionListResponsePagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfractionListResponsePagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


