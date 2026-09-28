
# CallbackSecretResponse


## Properties

Name | Type
------------ | -------------
`message` | string
`secret` | string

## Example

```typescript
import type { CallbackSecretResponse } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "secret": Zk8Qk1Yb3nS6xPwT2cVrJ9dLmHgA4eN7uKfR0iXsBqE,
} satisfies CallbackSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CallbackSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


