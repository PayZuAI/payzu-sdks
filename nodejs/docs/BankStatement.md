
# BankStatement


## Properties

Name | Type
------------ | -------------
`id` | string
`amount` | number
`operation` | string
`reason` | string
`balanceType` | string
`previousBalanceAvailable` | number
`previousBalanceBlocked` | number
`newBalanceAvailable` | number
`newBalanceBlocked` | number
`transactionId` | string
`infractionId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { BankStatement } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "amount": null,
  "operation": null,
  "reason": null,
  "balanceType": null,
  "previousBalanceAvailable": null,
  "previousBalanceBlocked": null,
  "newBalanceAvailable": null,
  "newBalanceBlocked": null,
  "transactionId": null,
  "infractionId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies BankStatement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankStatement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


