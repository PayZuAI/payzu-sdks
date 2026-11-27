# PayZuPix::GetUserWhitelistPixKey200ResponseDataInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **pix_key** | **String** |  |  |
| **pix_type** | **String** |  |  |
| **description** | **String** |  | [optional] |
| **active** | **Boolean** |  |  |
| **created_at** | **Time** |  |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserWhitelistPixKey200ResponseDataInner.new(
  id: cuid_pix_key_wh_123,
  pix_key: destino@parceiro.com.br,
  pix_type: email,
  description: Conta de repasse da integradora,
  active: true,
  created_at: 2026-08-08T10:00:00Z
)
```

