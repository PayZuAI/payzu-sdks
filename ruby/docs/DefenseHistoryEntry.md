# PayZuPix::DefenseHistoryEntry

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da defesa. | [optional] |
| **defense** | **String** | Texto da defesa | [optional] |
| **status** | **String** | Status da defesa | [optional] |
| **created_at** | **Time** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional] |
| **updated_at** | **Time** | Momento da última alteração da defesa. | [optional] |
| **files** | [**Array&lt;DefenseHistoryEntryFilesInner&gt;**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseHistoryEntry.new(
  id: null,
  defense: null,
  status: null,
  created_at: null,
  updated_at: null,
  files: null
)
```

