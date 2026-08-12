
# BankStatementListResponsePagination


## Properties

Name | Type
------------ | -------------
`page` | number
`limit` | number
`hasNextPage` | boolean

## Example

```typescript
import type { BankStatementListResponsePagination } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "limit": null,
  "hasNextPage": null,
} satisfies BankStatementListResponsePagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankStatementListResponsePagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


