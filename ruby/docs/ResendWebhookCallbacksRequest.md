# PayZuPix::ResendWebhookCallbacksRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at_from** | **Time** | Start of the delivery period. At most 30 days ago. |  |
| **created_at_to** | **Time** | End of the delivery period, on or after createdAtFrom. The window cannot exceed 7 days. |  |
| **webhook_ids** | **Array&lt;String&gt;** | Webhooks to resend. Omitted: all active webhooks of the account. | [optional] |
| **transaction_ids** | **Array&lt;String&gt;** | Restrict to specific transaction IDs. | [optional] |
| **transaction_types** | **Array&lt;String&gt;** | Filter by transaction type. | [optional] |
| **transaction_status** | **Array&lt;String&gt;** | Filter by the current transaction status. | [optional] |
| **transaction_end_to_end_ids** | **Array&lt;String&gt;** | Restrict to specific end-to-end IDs. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ResendWebhookCallbacksRequest.new(
  created_at_from: 2026-08-05T00:00:00Z,
  created_at_to: 2026-08-11T23:59:59Z,
  webhook_ids: null,
  transaction_ids: null,
  transaction_types: null,
  transaction_status: null,
  transaction_end_to_end_ids: null
)
```

