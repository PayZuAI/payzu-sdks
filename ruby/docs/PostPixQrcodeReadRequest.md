# PayZuPix::PostPixQrcodeReadRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **emv** | **String** | The EMV payload string from the Pix QR Code. |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostPixQrcodeReadRequest.new(
  emv: 00020101021226770014br.gov.bcb.pix2555api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5916PAYZU 6007SAOPAULO6217051320260118278956304EC55
)
```

