# PayZuPix::DefenseFilesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Nome do arquivo enviado como anexo da defesa. | [optional] |
| **mime_type** | **String** | Tipo MIME do anexo, informado no upload, por exemplo application/pdf ou image/png. | [optional] |
| **size** | **Integer** | Tamanho do anexo em bytes. | [optional] |
| **url** | **String** | URL assinada de download, válida por 9 minutos; nula quando indisponível. Vem na criação da defesa e na consulta de uma defesa. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseFilesInner.new(
  name: null,
  mime_type: null,
  size: null,
  url: null
)
```

