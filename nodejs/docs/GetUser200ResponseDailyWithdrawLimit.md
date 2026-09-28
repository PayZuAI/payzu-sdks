
# GetUser200ResponseDailyWithdrawLimit

Control of the daily outbound cap.

## Properties

Name | Type
------------ | -------------
`limit` | number
`used` | number
`updatedAt` | Date
`lastReset` | Date

## Example

```typescript
import type { GetUser200ResponseDailyWithdrawLimit } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "limit": null,
  "used": null,
  "updatedAt": null,
  "lastReset": null,
} satisfies GetUser200ResponseDailyWithdrawLimit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUser200ResponseDailyWithdrawLimit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


