
# QRCodeReadResponse

Decoded information from a Pix QR Code.

## Properties

Name | Type
------------ | -------------
`qrCodeType` | string
`name` | string
`document` | string
`amount` | number
`originalAmount` | number
`txid` | string
`additionalInfo` | string
`expiresIn` | number
`createdAt` | Date
`amountEditable` | boolean
`dueDate` | string

## Example

```typescript
import type { QRCodeReadResponse } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "qrCodeType": null,
  "name": null,
  "document": null,
  "amount": null,
  "originalAmount": null,
  "txid": null,
  "additionalInfo": null,
  "expiresIn": null,
  "createdAt": null,
  "amountEditable": null,
  "dueDate": null,
} satisfies QRCodeReadResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QRCodeReadResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


