# PayZuPix::GetUserTransactionById200ResponseAllOfInfractionInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identifier of the infraction linked to this transaction. | [optional] |
| **status** | **String** | Current state of the infraction. | [optional] |
| **created_at** | **Time** | Date and time the infraction was recorded at PayZu. | [optional] |
| **updated_at** | **Time** | Date and time of the last change to the infraction record. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserTransactionById200ResponseAllOfInfractionInner.new(
  id: null,
  status: null,
  created_at: null,
  updated_at: null
)
```

