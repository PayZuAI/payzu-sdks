
# DictConsultResponse


## Properties

Name | Type
------------ | -------------
`pixKey` | string
`name` | string
`document` | string
`personType` | string
`accountType` | string
`institutionIspb` | string
`institutionName` | string

## Example

```typescript
import type { DictConsultResponse } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "pixKey": null,
  "name": null,
  "document": null,
  "personType": null,
  "accountType": null,
  "institutionIspb": null,
  "institutionName": null,
} satisfies DictConsultResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DictConsultResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


