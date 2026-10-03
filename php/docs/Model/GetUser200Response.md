# GetUser200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **string** | Public account identifier (6 digits, unique). Used as destination for internal transfers. | [optional]
**branch** | **string** | Branch number (4 digits). | [optional]
**name** | **string** | Registered name of the account. | [optional]
**role** | **string** | Account role. | [optional]
**balance_available** | **float** | Balance free for withdrawals and transfers, in reais. | [optional]
**balance_blocked** | **float** | Part of the balance held, in reais. | [optional]
**status** | **string** | Account status. | [optional]
**cash_in_ticket_min** | **float** | Minimum amount accepted in each inbound charge, in reais; below the floor the creation is refused. | [optional]
**cash_in_ticket_max** | **float** | Maximum amount accepted in each inbound charge, in reais; above the cap the creation is refused. | [optional]
**cash_out_ticket_min** | **float** | Minimum amount per withdrawal or internal transfer, in reais; below the floor the request is refused. | [optional]
**cash_out_ticket_max** | **float** | Maximum amount per withdrawal or internal transfer, in reais; above the cap the request is refused. | [optional]
**service_fee** | [**\PayZu\Pix\Model\GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional]
**daily_withdraw_limit** | [**\PayZu\Pix\Model\GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
