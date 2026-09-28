# PayZuPix::EnqueuedCallbackEnqueued

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** | Total number of callbacks sent for queueing. Not limited by the size of items. | [optional] |
| **truncated** | **Boolean** | True when items lists only part of the callbacks. The resend still covers all of them. | [optional] |
| **items** | [**Array&lt;EnqueuedCallbackItem&gt;**](EnqueuedCallbackItem.md) | Queued callbacks, capped at 500 entries. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::EnqueuedCallbackEnqueued.new(
  count: 12,
  truncated: false,
  items: null
)
```

