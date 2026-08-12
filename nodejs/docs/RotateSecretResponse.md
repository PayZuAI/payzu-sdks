
# RotateSecretResponse


## Properties

Name | Type
------------ | -------------
`secret` | string

## Example

```typescript
import type { RotateSecretResponse } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "secret": whsec_1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d,
} satisfies RotateSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RotateSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


