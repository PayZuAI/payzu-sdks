
# PostWithdrawRequest


## Properties

Name | Type
------------ | -------------
`amount` | number
`pixKey` | string
`pixType` | string
`callbackUrl` | string
`clientReference` | string
`description` | string
`virtualAccount` | string

## Example

```typescript
import type { PostWithdrawRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "amount": 2,
  "pixKey": teste@teste.com,
  "pixType": email,
  "callbackUrl": https://webhook.cool/,
  "clientReference": withdraw_98765,
  "description": Weekly payout,
  "virtualAccount": loja-centro-01,
} satisfies PostWithdrawRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostWithdrawRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


