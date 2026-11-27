
# GetUserWhitelistCnpj200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`cnpj` | string
`description` | string
`active` | boolean
`createdAt` | Date

## Example

```typescript
import type { GetUserWhitelistCnpj200ResponseDataInner } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "id": cuid_cnpj_wh_123,
  "cnpj": 12345678000199,
  "description": Empresa Distribuidora,
  "active": true,
  "createdAt": 2026-08-08T10:00:00Z,
} satisfies GetUserWhitelistCnpj200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetUserWhitelistCnpj200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


