# Refund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Refund identifier. | [optional] 
**amount** | **float** | Refunded amount in BRL. | [optional] 
**reason** | **str** | Refund reason. | [optional] 
**description** | **str** | Refund description. | [optional] 
**status** | **str** | Refund status. | [optional] 
**end_to_end_id** | **str** | End-to-end ID of the refund Pix. | [optional] 
**refunded_at** | **datetime** | When the refund was completed. | [optional] 
**created_at** | **datetime** | When the refund was requested. | [optional] 
**updated_at** | **datetime** | Last change to the refund. | [optional] 

## Example

```python
from payzu_pix.models.refund import Refund

# TODO update the JSON string below
json = "{}"
# create an instance of Refund from a JSON string
refund_instance = Refund.from_json(json)
# print the JSON string representation of the object
print(Refund.to_json())

# convert the object into a dict
refund_dict = refund_instance.to_dict()
# create an instance of Refund from a dict
refund_from_dict = Refund.from_dict(refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


