# GetUser200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional]
**account_number** | **string** | Public account identifier (6 digits, unique). Used as destination for internal transfers. | [optional]
**branch** | **string** | Branch number (4 digits). | [optional]
**name** | **string** |  | [optional]
**role** | **string** |  | [optional]
**balance_available** | **float** |  | [optional]
**balance_blocked** | **float** |  | [optional]
**status** | **string** |  | [optional]
**allow_withdraw** | **bool** |  | [optional]
**allow_deposit** | **bool** |  | [optional]
**allow_infraction** | **bool** |  | [optional]
**cash_in_ticket_min** | **float** |  | [optional]
**cash_in_ticket_max** | **float** |  | [optional]
**cash_out_ticket_min** | **float** |  | [optional]
**cash_out_ticket_max** | **float** |  | [optional]
**auto_withdraw** | **object** |  | [optional]
**service_fee** | [**\OpenAPI\Client\Model\GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional]
**daily_withdraw_limit** | [**\OpenAPI\Client\Model\GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
