# PayZuPix::DictConsultResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pix_key** | **String** | Chave Pix normalizada. | [optional] |
| **name** | **String** | Nome do titular da chave conforme devolvido pela instituição consultada. | [optional] |
| **document** | **String** | CPF/CNPJ mascarado do titular da chave. | [optional] |
| **person_type** | **String** | Tipo de pessoa: PF, PJ ou vazio quando não informado. | [optional] |
| **account_type** | **String** |  | [optional] |
| **institution_ispb** | **String** | Código ISPB da instituição da conta. | [optional] |
| **institution_name** | **String** | Nome da instituição onde a conta do titular está registrada, do jeito que a consulta devolve. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DictConsultResponse.new(
  pix_key: null,
  name: null,
  document: null,
  person_type: null,
  account_type: null,
  institution_ispb: null,
  institution_name: null
)
```

