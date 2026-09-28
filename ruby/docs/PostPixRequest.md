# PayZuPix::PostPixRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Float** | Amount in BRL. Must be &gt;&#x3D; 1. |  |
| **callback_url** | **String** | URL for transaction notifications (http or https). | [optional] |
| **generated_name** | **String** | Payer full name. Letters and spaces only. | [optional] |
| **generated_email** | **String** | Payer email (optional). | [optional] |
| **generated_document** | **String** | Payer CPF (11 digits) or CNPJ (14 digits), no punctuation, with valid check digits. | [optional] |
| **expires_in** | **Float** | Seconds until the QR Code expires. | [optional] |
| **client_reference** | **String** | External reference (order, invoice, etc.). A clientReference already used returns the transaction created with it. | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostPixRequest.new(
  amount: 10.9,
  callback_url: https://webhook.cool/,
  generated_name: John Doe,
  generated_email: john.doe@example.com,
  generated_document: 12345678901,
  expires_in: 600,
  client_reference: order_12345,
  virtual_account: loja-centro-01
)
```

