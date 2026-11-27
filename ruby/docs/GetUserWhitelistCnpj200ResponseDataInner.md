# PayZuPix::GetUserWhitelistCnpj200ResponseDataInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **cnpj** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **active** | **Boolean** |  |  |
| **created_at** | **Time** |  |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserWhitelistCnpj200ResponseDataInner.new(
  id: cuid_cnpj_wh_123,
  cnpj: 12345678000199,
  description: Empresa Distribuidora,
  active: true,
  created_at: 2026-08-08T10:00:00Z
)
```

