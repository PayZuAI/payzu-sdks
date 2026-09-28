# PayZuPix::QRCodeReadResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **qr_code_type** | **String** | Type of QR Code. | [optional] |
| **name** | **String** | Name of the payment receiver. | [optional] |
| **document** | **String** | CPF or CNPJ of the receiver. | [optional] |
| **amount** | **Float** | Amount to be paid (may differ from originalAmount for dynamic QR Codes). | [optional] |
| **original_amount** | **Float** | Original amount embedded in the QR Code. | [optional] |
| **txid** | **String** | Transaction identifier. | [optional] |
| **additional_info** | **String** | Additional information or description. | [optional] |
| **expires_in** | **Float** | Seconds until QR Code expires (0 for static QR Codes). | [optional] |
| **created_at** | **Time** | Creation date of the QR Code (for dynamic QR Codes). | [optional] |
| **amount_editable** | **Boolean** | Whether the payer can change the amount. | [optional] |
| **due_date** | **String** | Due date of the charge, when the QR Code has one. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::QRCodeReadResponse.new(
  qr_code_type: null,
  name: null,
  document: null,
  amount: null,
  original_amount: null,
  txid: null,
  additional_info: null,
  expires_in: null,
  created_at: null,
  amount_editable: null,
  due_date: null
)
```

