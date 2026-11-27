# GetUserTransactionById200ResponseAllOfCallbackLogInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador do registro de envio; há um registro por tentativa de callback da transação. | [optional] 
**url** | **str** | Endereço que recebeu o callback: a callbackUrl da transação ou a URL do webhook cadastrado. | [optional] 
**status** | **int** | Código de status HTTP retornado pelo receptor | [optional] 
**response_time** | **float** | Tempo de ida e volta em ms | [optional] 
**created_at** | **datetime** | Data e hora em que a tentativa de envio do callback foi registrada. | [optional] 

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


