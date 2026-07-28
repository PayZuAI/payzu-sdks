
# GetUser200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`accountNumber` | string
`branch` | string
`name` | string
`role` | string
`balanceAvailable` | number
`balanceBlocked` | number
`status` | string
`allowWithdraw` | boolean
`allowDeposit` | boolean
`allowInfraction` | boolean
`cashInTicketMin` | number
`cashInTicketMax` | number
`cashOutTicketMin` | number
`cashOutTicketMax` | number
`autoWithdraw` | object
`serviceFee` | [GetUser200ResponseServiceFee](GetUser200ResponseServiceFee.md)
`dailyWithdrawLimit` | [GetUser200ResponseDailyWithdrawLimit](GetUser200ResponseDailyWithdrawLimit.md)

## Example

```typescript
import type { GetUser200Response } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountNumber": null,
  "branch": 0001,
  "name": null,
  "role": null,
  "balanceAvailable": null,
  "balanceBlocked": null,
  "status": null,
  "allowWithdraw": null,
  "allowDeposit": null,
  "allowInfraction": null,
  "cashInTicketMin": null,
  "cashInTicketMax": null,
  "cashOutTicketMin": null,
  "cashOutTicketMax": null,
  "autoWithdraw": null,
  "serviceFee": null,
  "dailyWithdrawLimit": null,
} satisfies GetUser200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUser200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


