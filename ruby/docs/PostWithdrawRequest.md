# PayZuPix::PostWithdrawRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Float** | Amount in BRL, with at most 2 decimal places. Must be &gt;&#x3D; 0.01. |  |
| **pix_key** | **String** | Destination Pix key in the format of pixType: CPF or CNPJ with valid check digits and no punctuation, phone as +55 followed by area code and number, email, or random key (EVP). |  |
| **pix_type** | **String** | Pix key type. |  |
| **callback_url** | **String** | URL for transaction notifications (http or https). | [optional] |
| **client_reference** | **String** | External reference for this withdrawal. Repeating it with the same amount and key returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional] |
| **description** | **String** | Optional description. | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostWithdrawRequest.new(
  amount: 2,
  pix_key: teste@teste.com,
  pix_type: email,
  callback_url: https://webhook.cool/,
  client_reference: withdraw_98765,
  description: Weekly payout,
  virtual_account: loja-centro-01
)
```

