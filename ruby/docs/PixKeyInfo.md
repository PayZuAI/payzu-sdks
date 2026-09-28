# PayZuPix::PixKeyInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pix_key** | **String** | The Pix key that was looked up. | [optional] |
| **document** | **String** | CPF or CNPJ of the owner (partially masked for privacy). | [optional] |
| **name** | **String** | Name of the Pix key owner. | [optional] |
| **branch** | **String** | Bank branch number (masked). | [optional] |
| **account_number** | **String** | Account number (masked). | [optional] |
| **person_type** | **String** | Type of person: PF, PJ, or empty when not informed. | [optional] |
| **account_type** | **String** | Account type returned by DICT, such as CACC, SVGS, TRAN or SLRY. | [optional] |
| **institution_ispb** | **String** | ISPB code of the financial institution. | [optional] |
| **institution_code** | **String** | COMPE code of the financial institution. | [optional] |
| **institution_name** | **String** | Name of the financial institution. | [optional] |

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

