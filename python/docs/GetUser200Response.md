# GetUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**account_number** | **str** | Public account identifier (6 digits, unique). Used as destination for internal transfers. | [optional] 
**branch** | **str** | Branch number (4 digits). | [optional] 
**name** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**balance_available** | **float** |  | [optional] 
**balance_blocked** | **float** |  | [optional] 
**status** | **str** |  | [optional] 
**allow_withdraw** | **bool** |  | [optional] 
**allow_deposit** | **bool** |  | [optional] 
**allow_infraction** | **bool** |  | [optional] 
**cash_in_ticket_min** | **float** |  | [optional] 
**cash_in_ticket_max** | **float** |  | [optional] 
**cash_out_ticket_min** | **float** |  | [optional] 
**cash_out_ticket_max** | **float** |  | [optional] 
**auto_withdraw** | **object** |  | [optional] 
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


