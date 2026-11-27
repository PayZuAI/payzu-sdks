
# PixKeyInfo

Informações sobre uma chave Pix a partir da consulta ao DICT.

## Properties

Name | Type
------------ | -------------
`pixKey` | string
`document` | string
`name` | string
`branch` | string
`accountNumber` | string
`personType` | string
`accountType` | string
`institutionIspb` | string
`institutionCode` | string
`institutionName` | string

## Example

```typescript
import type { PixKeyInfo } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "pixKey": null,
  "document": null,
  "name": null,
  "branch": null,
  "accountNumber": null,
  "personType": null,
  "accountType": null,
  "institutionIspb": null,
  "institutionCode": null,
  "institutionName": null,
} satisfies PixKeyInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PixKeyInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


