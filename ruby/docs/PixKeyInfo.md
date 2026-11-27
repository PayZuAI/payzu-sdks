# PayZuPix::PixKeyInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pix_key** | **String** | A chave Pix que foi consultada. | [optional] |
| **document** | **String** | CPF ou CNPJ do titular (parcialmente mascarado por privacidade). | [optional] |
| **name** | **String** | Nome do titular da chave Pix. | [optional] |
| **branch** | **String** | Número da agência bancária (mascarado). | [optional] |
| **account_number** | **String** | Número da conta (mascarado). | [optional] |
| **person_type** | **String** | Tipo de pessoa: PF, PJ ou vazio quando não informado. | [optional] |
| **account_type** | **String** | Tipo de conta devolvido pelo DICT, como CACC, SVGS, TRAN ou SLRY. | [optional] |
| **institution_ispb** | **String** | Código ISPB da instituição financeira. | [optional] |
| **institution_code** | **String** | Código COMPE da instituição financeira. | [optional] |
| **institution_name** | **String** | Nome da instituição financeira. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PixKeyInfo.new(
  pix_key: null,
  document: null,
  name: null,
  branch: null,
  account_number: null,
  person_type: null,
  account_type: null,
  institution_ispb: null,
  institution_code: null,
  institution_name: null
)
```

