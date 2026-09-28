
# PostPixRequest


## Properties

Name | Type
------------ | -------------
`amount` | number
`callbackUrl` | string
`generatedName` | string
`generatedEmail` | string
`generatedDocument` | string
`expiresIn` | number
`clientReference` | string
`virtualAccount` | string

## Example

```typescript
import type { PostPixRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "amount": 10.9,
  "callbackUrl": https://webhook.cool/,
  "generatedName": John Doe,
  "generatedEmail": john.doe@example.com,
  "generatedDocument": 12345678901,
  "expiresIn": 600,
  "clientReference": order_12345,
  "virtualAccount": loja-centro-01,
} satisfies PostPixRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostPixRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


