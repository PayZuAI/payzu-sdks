# PayZuPix::DefenseHistoryEntryFilesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Nome do arquivo enviado como anexo da defesa. | [optional] |
| **mime_type** | **String** | Tipo MIME do anexo, informado no upload, por exemplo application/pdf ou image/png. | [optional] |
| **size** | **Integer** | Tamanho do anexo em bytes. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseHistoryEntryFilesInner.new(
  name: null,
  mime_type: null,
  size: null
)
```

