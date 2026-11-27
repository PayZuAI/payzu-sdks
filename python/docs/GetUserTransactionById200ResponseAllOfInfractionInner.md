# GetUserTransactionById200ResponseAllOfInfractionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da infração ligada a esta transação. | [optional] 
**status** | **str** | Situação atual da infração. | [optional] 
**created_at** | **datetime** | Data e hora em que a infração foi registrada na PayZu. | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração no registro da infração. | [optional] 

## Example

```python
from payzu_pix.models.get_user_transaction_by_id200_response_all_of_infraction_inner import GetUserTransactionById200ResponseAllOfInfractionInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserTransactionById200ResponseAllOfInfractionInner from a JSON string
get_user_transaction_by_id200_response_all_of_infraction_inner_instance = GetUserTransactionById200ResponseAllOfInfractionInner.from_json(json)
# print the JSON string representation of the object
print(GetUserTransactionById200ResponseAllOfInfractionInner.to_json())

# convert the object into a dict
get_user_transaction_by_id200_response_all_of_infraction_inner_dict = get_user_transaction_by_id200_response_all_of_infraction_inner_instance.to_dict()
# create an instance of GetUserTransactionById200ResponseAllOfInfractionInner from a dict
get_user_transaction_by_id200_response_all_of_infraction_inner_from_dict = GetUserTransactionById200ResponseAllOfInfractionInner.from_dict(get_user_transaction_by_id200_response_all_of_infraction_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


