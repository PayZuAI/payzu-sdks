
# DepositPending


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`amount` | number
`payerDocument` | string
`payerName` | string
`payerAccountNumber` | string
`payerInstitutionIspb` | string
`payerInstitutionName` | string
`receiverDocument` | string
`receiverName` | string
`receiverAccountNumber` | string
`receiverInstitutionIspb` | string
`receiverInstitutionName` | string
`endToEndId` | string
`paidAt` | Date
`pixKey` | string
`description` | string
`approvedAt` | Date
`rejectedAt` | Date
`rejectionReason` | string
`transactionId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { DepositPending } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "amount": null,
  "payerDocument": null,
  "payerName": null,
  "payerAccountNumber": null,
  "payerInstitutionIspb": null,
  "payerInstitutionName": null,
  "receiverDocument": null,
  "receiverName": null,
  "receiverAccountNumber": null,
  "receiverInstitutionIspb": null,
  "receiverInstitutionName": null,
  "endToEndId": null,
  "paidAt": null,
  "pixKey": null,
  "description": null,
  "approvedAt": null,
  "rejectedAt": null,
  "rejectionReason": null,
  "transactionId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies DepositPending

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DepositPending
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


