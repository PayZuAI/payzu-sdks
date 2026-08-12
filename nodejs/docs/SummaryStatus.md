
# SummaryStatus


## Properties

Name | Type
------------ | -------------
`count` | number
`amount` | number
`serviceFeeCharged` | number

## Example

```typescript
import type { SummaryStatus } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "amount": null,
  "serviceFeeCharged": null,
} satisfies SummaryStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SummaryStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


