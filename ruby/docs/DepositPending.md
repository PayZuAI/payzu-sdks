# PayZuPix::DepositPending

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identifier of the pending deposit. | [optional] |
| **status** | **String** | Deposit status: PENDING, COMPLETED or REJECTED. | [optional] |
| **amount** | **Float** | Amount received. | [optional] |
| **payer_document** | **String** | CNPJ of the payer of the Pix. | [optional] |
| **payer_name** | **String** | Name of the payer of the Pix. | [optional] |
| **payer_account_number** | **String** | Account number of the payer inside the platform. | [optional] |
| **payer_institution_ispb** | **String** | ISPB code of the institution the Pix was sent from. | [optional] |
| **payer_institution_name** | **String** | Name of the institution the Pix was sent from. | [optional] |
| **receiver_document** | **String** | CPF or CNPJ of the account that received the Pix. | [optional] |
| **receiver_name** | **String** | Name of the account that received the Pix. | [optional] |
| **receiver_account_number** | **String** | Number of your PayZu account that receives the credit if the deposit is approved. | [optional] |
| **receiver_institution_ispb** | **String** | ISPB code of the institution that received the Pix. | [optional] |
| **receiver_institution_name** | **String** | Name of the institution where the Pix was settled on the receiving side. | [optional] |
| **end_to_end_id** | **String** | End-to-end identifier of the Pix. | [optional] |
| **paid_at** | **Time** | Date and time the Pix was settled. | [optional] |
| **pix_key** | **String** |  | [optional] |
| **description** | **String** | Free text that would accompany the Pix. | [optional] |
| **approved_at** | **Time** | Date and time the deposit was approved. | [optional] |
| **rejected_at** | **Time** | Date and time the deposit was rejected. | [optional] |
| **rejection_reason** | **String** | Reason the deposit was rejected. | [optional] |
| **transaction_id** | **String** | Deposit transaction created on approval. | [optional] |
| **created_at** | **Time** | Moment the received Pix was recorded, before the credit. | [optional] |
| **updated_at** | **Time** | Moment of the last change to the record, which changes when the deposit is approved or rejected. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DepositPending.new(
  id: null,
  status: null,
  amount: null,
  payer_document: null,
  payer_name: null,
  payer_account_number: null,
  payer_institution_ispb: null,
  payer_institution_name: null,
  receiver_document: null,
  receiver_name: null,
  receiver_account_number: null,
  receiver_institution_ispb: null,
  receiver_institution_name: null,
  end_to_end_id: null,
  paid_at: null,
  pix_key: null,
  description: null,
  approved_at: null,
  rejected_at: null,
  rejection_reason: null,
  transaction_id: null,
  created_at: null,
  updated_at: null
)
```

