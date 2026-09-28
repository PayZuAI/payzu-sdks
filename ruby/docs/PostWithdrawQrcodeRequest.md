# PayZuPix::PostWithdrawQrcodeRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **qr_code** | **String** | Pix QR Code payload (EMV format). |  |
| **amount** | **Float** | Amount in BRL, with at most 2 decimal places. Optional: if not provided, uses the QR Code&#39;s embedded value. | [optional] |
| **callback_url** | **String** | URL for transaction notifications (http or https). | [optional] |
| **description** | **String** | Optional description for the payment. | [optional] |
| **client_reference** | **String** | External reference for this withdrawal. Repeating it with the same amount and QR Code returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostWithdrawQrcodeRequest.new(
  qr_code: 00020101021226770014br.gov.bcb.pix2555api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5916PAYZU 6007SAOPAULO6217051320260118278956304EC55,
  amount: 20,
  callback_url: https://webhook.cool/,
  description: Pagamento via QR Code,
  client_reference: order-123,
  virtual_account: loja-centro-01
)
```

