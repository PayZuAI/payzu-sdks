# GetUser200ResponseServiceFee

Cash-in and cash-out fees of the account, in reais.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_in_minimum** | **float** | Floor of the cash-in fee, in reais. | [optional] 
**cash_in_fixed** | **float** | Fixed part of the cash-in fee, in reais. | [optional] 
**cash_in_percent** | **float** | Percentage of the cash-in fee. | [optional] 
**cash_out_minimum** | **float** | Floor of the withdrawal fee, in reais. | [optional] 
**cash_out_fixed** | **float** | Fixed part of the withdrawal fee, in reais. | [optional] 
**cash_out_percent** | **float** | Percentage of the withdrawal fee. | [optional] 

## Example

```python
from payzu_pix.models.get_user200_response_service_fee import GetUser200ResponseServiceFee

# TODO update the JSON string below
json = "{}"
# create an instance of GetUser200ResponseServiceFee from a JSON string
get_user200_response_service_fee_instance = GetUser200ResponseServiceFee.from_json(json)
# print the JSON string representation of the object
print(GetUser200ResponseServiceFee.to_json())

# convert the object into a dict
get_user200_response_service_fee_dict = get_user200_response_service_fee_instance.to_dict()
# create an instance of GetUser200ResponseServiceFee from a dict
get_user200_response_service_fee_from_dict = GetUser200ResponseServiceFee.from_dict(get_user200_response_service_fee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


