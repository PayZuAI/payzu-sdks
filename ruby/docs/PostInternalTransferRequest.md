# PayZuPix::PostInternalTransferRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_account_number** | **String** | Payer account number (6 digits). Must match the authenticated user&#39;s accountNumber. |  |
| **receiver_account_number** | **String** | Destination account number (6 digits). |  |
| **amount** | **Float** | Transfer amount in BRL, with at most 2 decimal places. |  |
| **description** | **String** | Optional transfer description. | [optional] |
| **callback_url** | **String** | URL for transaction notifications (http or https). | [optional] |
| **client_reference** | **String** | External reference for idempotency / reconciliation. | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostInternalTransferRequest.new(
  payer_account_number: 000000,
  receiver_account_number: 987654,
  amount: 100.5,
  description: Pagamento referente a fatura #1234,
  callback_url: https://webhook.cool/,
  client_reference: transfer_abc_123,
  virtual_account: loja-centro-01
)
```

