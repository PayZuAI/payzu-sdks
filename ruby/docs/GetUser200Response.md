# PayZuPix::GetUser200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_number** | **String** | Public account identifier (6 digits, unique). Used as destination for internal transfers. | [optional] |
| **branch** | **String** | Branch number (4 digits). | [optional] |
| **name** | **String** | Registered name of the account. | [optional] |
| **role** | **String** | Account role. | [optional] |
| **balance_available** | **Float** | Balance free for withdrawals and transfers, in reais. | [optional] |
| **balance_blocked** | **Float** | Part of the balance held, in reais. | [optional] |
| **status** | **String** | Account status. | [optional] |
| **allow_withdraw** | **Boolean** | When false, creating withdrawals is refused for lack of permission (PZS200). | [optional] |
| **allow_deposit** | **Boolean** | When false, creating inbound Pix charges is refused for lack of permission (PZD200). | [optional] |
| **cash_in_ticket_min** | **Float** | Minimum amount accepted in each inbound charge, in reais; below the floor the creation is refused. | [optional] |
| **cash_in_ticket_max** | **Float** | Maximum amount accepted in each inbound charge, in reais; above the cap the creation is refused. | [optional] |
| **cash_out_ticket_min** | **Float** | Minimum amount per withdrawal or internal transfer, in reais; below the floor the request is refused. | [optional] |
| **cash_out_ticket_max** | **Float** | Maximum amount per withdrawal or internal transfer, in reais; above the cap the request is refused. | [optional] |
| **service_fee** | [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional] |
| **daily_withdraw_limit** | [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUser200Response.new(
  account_number: null,
  branch: 0001,
  name: null,
  role: null,
  balance_available: null,
  balance_blocked: null,
  status: null,
  allow_withdraw: null,
  allow_deposit: null,
  cash_in_ticket_min: null,
  cash_in_ticket_max: null,
  cash_out_ticket_min: null,
  cash_out_ticket_max: null,
  service_fee: null,
  daily_withdraw_limit: null
)
```

