# PayZuPix::DictConsultResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pix_key** | **String** | Normalized Pix key. | [optional] |
| **name** | **String** | Name of the key holder as returned by the institution queried. | [optional] |
| **document** | **String** | Masked CPF/CNPJ of the key holder. | [optional] |
| **person_type** | **String** | Type of person: PF, PJ, or empty when not informed. | [optional] |
| **account_type** | **String** |  | [optional] |
| **institution_ispb** | **String** | ISPB code of the account institution. | [optional] |
| **institution_name** | **String** | Name of the institution where the holder account is registered, as the lookup returns it. | [optional] |

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

