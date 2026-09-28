# GetUserTransactionById200ResponseAllOfInfractionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the infraction linked to this transaction. | [optional] 
**status** | **str** | Current state of the infraction. | [optional] 
**created_at** | **datetime** | Date and time the infraction was recorded at PayZu. | [optional] 
**updated_at** | **datetime** | Date and time of the last change to the infraction record. | [optional] 

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


