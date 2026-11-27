# PayZuPix::GetUserPixKeys200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pix_key** | **String** | Chave Pix de recebimento da conta. |  |
| **account_name** | **String** | Titular da conta da chave. |  |
| **account_document** | **String** | CPF ou CNPJ do titular da conta da chave. |  |
| **institution_name** | **String** | Instituição da conta da chave. |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserPixKeys200Response.new(
  pix_key: null,
  account_name: null,
  account_document: null,
  institution_name: null
)
```

