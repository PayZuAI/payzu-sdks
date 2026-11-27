# PayZuPix::DefenseListItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da defesa. | [optional] |
| **defense** | **String** | Texto da defesa | [optional] |
| **status** | **String** | Status da defesa | [optional] |
| **infraction_id** | **String** | Identifica a contestação a que a defesa pertence. | [optional] |
| **created_at** | **Time** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional] |
| **updated_at** | **Time** | Momento da última alteração da defesa. | [optional] |
| **files** | [**Array&lt;DefenseHistoryEntryFilesInner&gt;**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes, sem o link de download. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseListItem.new(
  id: null,
  defense: null,
  status: null,
  infraction_id: null,
  created_at: null,
  updated_at: null,
  files: null
)
```

