
# PostInternalTransferRequest


## Properties

Name | Type
------------ | -------------
`payerAccountNumber` | string
`receiverAccountNumber` | string
`amount` | number
`description` | string
`callbackUrl` | string
`clientReference` | string
`virtualAccount` | string

## Example

```typescript
import type { PostInternalTransferRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "payerAccountNumber": 000000,
  "receiverAccountNumber": 987654,
  "amount": 100.5,
  "description": Pagamento referente a fatura #1234,
  "callbackUrl": https://webhook.cool/,
  "clientReference": transfer_abc_123,
  "virtualAccount": loja-centro-01,
} satisfies PostInternalTransferRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostInternalTransferRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


