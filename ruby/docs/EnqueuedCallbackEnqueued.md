# PayZuPix::EnqueuedCallbackEnqueued

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** | Total de callbacks enviados para enfileiramento. Não é limitado pelo tamanho de items. | [optional] |
| **truncated** | **Boolean** | true quando items lista apenas parte dos callbacks. O reenvio cobre todos mesmo assim. | [optional] |
| **items** | [**Array&lt;EnqueuedCallbackItem&gt;**](EnqueuedCallbackItem.md) | Callbacks enfileirados, no máximo 500 entradas. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::EnqueuedCallbackEnqueued.new(
  count: 12,
  truncated: false,
  items: null
)
```

