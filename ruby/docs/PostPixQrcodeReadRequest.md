# PayZuPix::PostPixQrcodeReadRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **emv** | **String** | A string do payload EMV do QR Code Pix. |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostPixQrcodeReadRequest.new(
  emv: 00020101021226780014br.gov.bcb.pix2556api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5905PAYZU6008SAOPAULO6217051320260118278956304FEFF
)
```

