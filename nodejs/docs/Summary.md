
# Summary


## Properties

Name | Type
------------ | -------------
`totalTransactions` | number
`deposit` | [SummaryBlock](SummaryBlock.md)
`withdraw` | [SummaryBlock](SummaryBlock.md)
`commission` | [SummaryBlock](SummaryBlock.md)

## Example

```typescript
import type { Summary } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "totalTransactions": null,
  "deposit": null,
  "withdraw": null,
  "commission": null,
} satisfies Summary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Summary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


