# PayZuPix::Refund

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Refund identifier. | [optional] |
| **amount** | **Float** | Refunded amount in BRL. | [optional] |
| **reason** | **String** | Refund reason. | [optional] |
| **description** | **String** | Refund description. | [optional] |
| **status** | **String** | Refund status. | [optional] |
| **end_to_end_id** | **String** | End-to-end ID of the refund Pix. | [optional] |
| **refunded_at** | **Time** | When the refund was completed. | [optional] |
| **created_at** | **Time** | When the refund was requested. | [optional] |
| **updated_at** | **Time** | Last change to the refund. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Refund.new(
  id: null,
  amount: null,
  reason: null,
  description: null,
  status: null,
  end_to_end_id: null,
  refunded_at: null,
  created_at: null,
  updated_at: null
)
```

