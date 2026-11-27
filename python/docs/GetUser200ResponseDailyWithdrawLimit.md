# GetUser200ResponseDailyWithdrawLimit

Controle do teto diário de saída.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **float** | Teto diário de saída, em reais, somando saques e transferências internas. | [optional] 
**used** | **float** | Total consumido do teto no dia, em reais, por saques e transferências internas. | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração do limite diário. | [optional] 
**last_reset** | **datetime** | Momento da última zeragem do consumo diário. | [optional] 

## Example

```python
from payzu_pix.models.get_user200_response_daily_withdraw_limit import GetUser200ResponseDailyWithdrawLimit

# TODO update the JSON string below
json = "{}"
# create an instance of GetUser200ResponseDailyWithdrawLimit from a JSON string
get_user200_response_daily_withdraw_limit_instance = GetUser200ResponseDailyWithdrawLimit.from_json(json)
# print the JSON string representation of the object
print(GetUser200ResponseDailyWithdrawLimit.to_json())

# convert the object into a dict
get_user200_response_daily_withdraw_limit_dict = get_user200_response_daily_withdraw_limit_instance.to_dict()
# create an instance of GetUser200ResponseDailyWithdrawLimit from a dict
get_user200_response_daily_withdraw_limit_from_dict = GetUser200ResponseDailyWithdrawLimit.from_dict(get_user200_response_daily_withdraw_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


