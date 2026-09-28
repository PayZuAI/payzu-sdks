
# PostWithdrawQrcodeRequest


## Properties

Name | Type
------------ | -------------
`qrCode` | string
`amount` | number
`callbackUrl` | string
`description` | string
`clientReference` | string
`virtualAccount` | string

## Example

```typescript
import type { PostWithdrawQrcodeRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "qrCode": 00020101021226770014br.gov.bcb.pix2555api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5916PAYZU 6007SAOPAULO6217051320260118278956304EC55,
  "amount": 20,
  "callbackUrl": https://webhook.cool/,
  "description": Pagamento via QR Code,
  "clientReference": order-123,
  "virtualAccount": loja-centro-01,
} satisfies PostWithdrawQrcodeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWithdrawQrcodeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


