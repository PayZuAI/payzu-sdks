
# SummaryBlockStatuses


## Properties

Name | Type
------------ | -------------
`pending` | [SummaryStatus](SummaryStatus.md)
`completed` | [SummaryStatus](SummaryStatus.md)
`canceled` | [SummaryStatus](SummaryStatus.md)
`expired` | [SummaryStatus](SummaryStatus.md)
`refunded` | [SummaryStatus](SummaryStatus.md)

## Example

```typescript
import type { SummaryBlockStatuses } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "pending": null,
  "completed": null,
  "canceled": null,
  "expired": null,
  "refunded": null,
} satisfies SummaryBlockStatuses

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SummaryBlockStatuses
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


