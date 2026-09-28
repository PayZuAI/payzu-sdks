# GetUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Public account identifier (6 digits, unique). Used as destination for internal transfers. | [optional] 
**branch** | **str** | Branch number (4 digits). | [optional] 
**name** | **str** | Registered name of the account. | [optional] 
**role** | **str** | Account role. | [optional] 
**balance_available** | **float** | Balance free for withdrawals and transfers, in reais. | [optional] 
**balance_blocked** | **float** | Part of the balance held, in reais. | [optional] 
**status** | **str** | Account status. | [optional] 
**allow_withdraw** | **bool** | When false, creating withdrawals is refused for lack of permission (PZS200). | [optional] 
**allow_deposit** | **bool** | When false, creating inbound Pix charges is refused for lack of permission (PZD200). | [optional] 
**cash_in_ticket_min** | **float** | Minimum amount accepted in each inbound charge, in reais; below the floor the creation is refused. | [optional] 
**cash_in_ticket_max** | **float** | Maximum amount accepted in each inbound charge, in reais; above the cap the creation is refused. | [optional] 
**cash_out_ticket_min** | **float** | Minimum amount per withdrawal or internal transfer, in reais; below the floor the request is refused. | [optional] 
**cash_out_ticket_max** | **float** | Maximum amount per withdrawal or internal transfer, in reais; above the cap the request is refused. | [optional] 
**service_fee** | [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional] 
**daily_withdraw_limit** | [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional] 

## Example

```python
from payzu_pix.models.get_user200_response import GetUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUser200Response from a JSON string
get_user200_response_instance = GetUser200Response.from_json(json)
# print the JSON string representation of the object
print(GetUser200Response.to_json())

# convert the object into a dict
get_user200_response_dict = get_user200_response_instance.to_dict()
# create an instance of GetUser200Response from a dict
get_user200_response_from_dict = GetUser200Response.from_dict(get_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


