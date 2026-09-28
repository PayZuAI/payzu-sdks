
# ApiError


## Properties

Name | Type
------------ | -------------
`status` | string
`error` | string
`errorCode` | string
`message` | string
`statusCode` | number
`requestId` | string
`details` | [Array&lt;ApiErrorDetailsInner&gt;](ApiErrorDetailsInner.md)
`retryAfterSeconds` | number

## Example

```typescript
import type { ApiError } from 'payzu-pix'

// TODO: Update the object below with actual values
const example = {
  "status": ERROR,
  "error": Bad Request,
  "errorCode": PZV001,
  "message": Invalid data. Check the fields provided.,
  "statusCode": 400,
  "requestId": cmbz0f8qk0001js04hp3e2n0f,
  "details": null,
  "retryAfterSeconds": 30,
} satisfies ApiError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


