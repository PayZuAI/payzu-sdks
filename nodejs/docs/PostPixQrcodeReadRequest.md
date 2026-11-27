
# PostPixQrcodeReadRequest


## Properties

Name | Type
------------ | -------------
`emv` | string

## Example

```typescript
import type { PostPixQrcodeReadRequest } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "emv": 00020101021226780014br.gov.bcb.pix2556api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5905PAYZU6008SAOPAULO6217051320260118278956304FEFF,
} satisfies PostPixQrcodeReadRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostPixQrcodeReadRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


