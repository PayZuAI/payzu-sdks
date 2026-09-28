# PayZuPix::Transaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identifier of the transaction at PayZu. | [optional] |
| **status** | **String** | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR | [optional] |
| **amount** | **Float** | Amount of the transaction, before the fee. | [optional] |
| **type** | **String** | Transaction type: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION or ADJUSTMENT. | [optional] |
| **qr_code_text** | **String** | Copy-and-paste Pix code. | [optional] |
| **qr_code_base64** | **String** | PNG image of the QR Code in base64, without the data: prefix. | [optional] |
| **qr_code_url** | **String** | Authenticated route that returns the PNG of the QR Code. | [optional] |
| **generated_name** | **String** | Name used to build the charge. | [optional] |
| **generated_document** | **String** | CPF or CNPJ used as the debtor of the charge. | [optional] |
| **generated_email** | **String** | Email used to build the charge. | [optional] |
| **payer_name** | **String** | Name of the holder of the account that sent the Pix, as reported by the originating institution. | [optional] |
| **payer_document** | **String** | CPF or CNPJ of the payer of the Pix, reported by the originating institution. | [optional] |
| **payer_institution_ispb** | **String** | ISPB code of the institution the Pix was sent from. | [optional] |
| **payer_institution_name** | **String** | Name of the institution the Pix was sent from. | [optional] |
| **payer_account_number** | **String** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. | [optional] |
| **service_fee_charged** | **Float** | PayZu fee charged on the operation, in reais. It may carry more than two decimal places — do not round when reconciling. | [optional] |
| **withdraw_pix_key** | **String** | Destination Pix key of the withdrawal, already normalized. | [optional] |
| **withdraw_pix_type** | **String** | Type of the destination key of the withdrawal, with evp being the random key. | [optional] |
| **receiver_name** | **String** | Name of the holder of the receiving account. | [optional] |
| **receiver_document** | **String** | CPF or CNPJ of the receiver. | [optional] |
| **receiver_institution_ispb** | **String** | ISPB code of the institution that receives the Pix. | [optional] |
| **receiver_institution_name** | **String** | Name of the institution that receives the Pix. | [optional] |
| **receiver_account_number** | **String** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. | [optional] |
| **end_to_end_id** | **String** | Identifier of the Pix in the Bacen arrangement, used to track the settlement and request a return. | [optional] |
| **created_at** | **String** | Date and time the transaction was recorded. | [optional] |
| **updated_at** | **String** | Date and time of the last change. | [optional] |
| **paid_at** | **String** | Date and time the Pix was settled, reported by the institution. | [optional] |
| **client_reference** | **String** | Your identifier of the transaction, returned in queries and callbacks. | [optional] |
| **refund_end_to_end_id** | **String** | End-to-end ID of the refund transaction | [optional] |
| **refund_amount** | **Float** | Amount refunded | [optional] |
| **refund_status** | **String** | Refund status: PENDING, COMPLETED or CANCELED. | [optional] |
| **refund_reason** | **String** | Reason for the refund | [optional] |
| **refund_description** | **String** | Description of the refund | [optional] |
| **refunded_at** | **String** | Date and time when the refund was processed | [optional] |
| **cancellation_reason** | **String** | Reason for cancellation (if cancelled) | [optional] |
| **virtual_account** | **String** | Virtual sub-account provided at creation. | [optional] |
| **method** | **String** | Transaction method/rail. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Transaction.new(
  id: null,
  status: null,
  amount: null,
  type: null,
  qr_code_text: null,
  qr_code_base64: null,
  qr_code_url: null,
  generated_name: null,
  generated_document: null,
  generated_email: null,
  payer_name: null,
  payer_document: null,
  payer_institution_ispb: null,
  payer_institution_name: null,
  payer_account_number: null,
  service_fee_charged: null,
  withdraw_pix_key: null,
  withdraw_pix_type: null,
  receiver_name: null,
  receiver_document: null,
  receiver_institution_ispb: null,
  receiver_institution_name: null,
  receiver_account_number: null,
  end_to_end_id: null,
  created_at: null,
  updated_at: null,
  paid_at: null,
  client_reference: null,
  refund_end_to_end_id: null,
  refund_amount: null,
  refund_status: null,
  refund_reason: null,
  refund_description: null,
  refunded_at: null,
  cancellation_reason: null,
  virtual_account: null,
  method: null
)
```

