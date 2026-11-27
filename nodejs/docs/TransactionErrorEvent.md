
# TransactionErrorEvent

A transação como está no momento do envio. Cada tentativa lê a transação de novo.

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`status` | string
`method` | string
`clientReference` | string
`virtualAccount` | string
`qrCodeText` | string
`qrCodeUrl` | string
`generatedName` | string
`generatedDocument` | string
`generatedEmail` | string
`payerName` | string
`payerDocument` | string
`payerAccountNumber` | string
`payerInstitutionIspb` | string
`payerInstitutionName` | string
`receiverName` | string
`receiverDocument` | string
`receiverInstitutionIspb` | string
`receiverInstitutionName` | string
`withdrawPixKey` | string
`withdrawPixType` | string
`withdrawQrCodeText` | string
`endToEndId` | string
`cancellationReason` | string
`paidAt` | Date
`refundEndToEndId` | string
`refundAmount` | string
`refundStatus` | string
`refundReason` | string
`refundDescription` | string
`refundedAt` | Date
`qrCodeBase64` | string
`createdAt` | Date
`updatedAt` | Date
`callbackUrl` | string
`amount` | number
`serviceFeeCharged` | number
`receiverAccountNumber` | string

## Example

```typescript
import type { TransactionErrorEvent } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "status": null,
  "method": null,
  "clientReference": null,
  "virtualAccount": null,
  "qrCodeText": null,
  "qrCodeUrl": null,
  "generatedName": null,
  "generatedDocument": null,
  "generatedEmail": null,
  "payerName": null,
  "payerDocument": null,
  "payerAccountNumber": null,
  "payerInstitutionIspb": null,
  "payerInstitutionName": null,
  "receiverName": null,
  "receiverDocument": null,
  "receiverInstitutionIspb": null,
  "receiverInstitutionName": null,
  "withdrawPixKey": null,
  "withdrawPixType": null,
  "withdrawQrCodeText": null,
  "endToEndId": null,
  "cancellationReason": null,
  "paidAt": null,
  "refundEndToEndId": null,
  "refundAmount": null,
  "refundStatus": null,
  "refundReason": null,
  "refundDescription": null,
  "refundedAt": null,
  "qrCodeBase64": null,
  "createdAt": null,
  "updatedAt": null,
  "callbackUrl": null,
  "amount": null,
  "serviceFeeCharged": null,
  "receiverAccountNumber": null,
} satisfies TransactionErrorEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionErrorEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


