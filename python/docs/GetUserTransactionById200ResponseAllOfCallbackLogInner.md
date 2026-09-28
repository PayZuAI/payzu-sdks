# GetUserTransactionById200ResponseAllOfCallbackLogInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the delivery record; there is one record per callback attempt of the transaction. | [optional] 
**url** | **str** | Address that received the callback: the callbackUrl of the transaction or the URL of the registered webhook. | [optional] 
**status** | **int** | HTTP status code returned by the receiver | [optional] 
**response_time** | **float** | Round-trip time in ms | [optional] 
**created_at** | **datetime** | Date and time the callback delivery attempt was recorded. | [optional] 

## Example

```python
from payzu_pix.models.get_user_transaction_by_id200_response_all_of_callback_log_inner import GetUserTransactionById200ResponseAllOfCallbackLogInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserTransactionById200ResponseAllOfCallbackLogInner from a JSON string
get_user_transaction_by_id200_response_all_of_callback_log_inner_instance = GetUserTransactionById200ResponseAllOfCallbackLogInner.from_json(json)
# print the JSON string representation of the object
print(GetUserTransactionById200ResponseAllOfCallbackLogInner.to_json())

# convert the object into a dict
get_user_transaction_by_id200_response_all_of_callback_log_inner_dict = get_user_transaction_by_id200_response_all_of_callback_log_inner_instance.to_dict()
# create an instance of GetUserTransactionById200ResponseAllOfCallbackLogInner from a dict
get_user_transaction_by_id200_response_all_of_callback_log_inner_from_dict = GetUserTransactionById200ResponseAllOfCallbackLogInner.from_dict(get_user_transaction_by_id200_response_all_of_callback_log_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


