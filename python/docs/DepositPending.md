# DepositPending


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**payer_document** | **str** |  | [optional] 
**payer_name** | **str** |  | [optional] 
**payer_account_number** | **str** |  | [optional] 
**payer_institution_ispb** | **str** |  | [optional] 
**payer_institution_name** | **str** |  | [optional] 
**receiver_document** | **str** |  | [optional] 
**receiver_name** | **str** |  | [optional] 
**receiver_account_number** | **str** |  | [optional] 
**receiver_institution_ispb** | **str** |  | [optional] 
**receiver_institution_name** | **str** |  | [optional] 
**end_to_end_id** | **str** |  | [optional] 
**paid_at** | **datetime** |  | [optional] 
**pix_key** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**approved_at** | **datetime** |  | [optional] 
**rejected_at** | **datetime** |  | [optional] 
**rejection_reason** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from payzu_pix.models.deposit_pending import DepositPending

# TODO update the JSON string below
json = "{}"
# create an instance of DepositPending from a JSON string
deposit_pending_instance = DepositPending.from_json(json)
# print the JSON string representation of the object
print(DepositPending.to_json())

# convert the object into a dict
deposit_pending_dict = deposit_pending_instance.to_dict()
# create an instance of DepositPending from a dict
deposit_pending_from_dict = DepositPending.from_dict(deposit_pending_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


