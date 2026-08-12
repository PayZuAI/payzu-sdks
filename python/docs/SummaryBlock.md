# SummaryBlock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_amount** | **float** |  | [optional] 
**total_transactions** | **int** |  | [optional] 
**statuses** | [**SummaryBlockStatuses**](SummaryBlockStatuses.md) |  | [optional] 
**grouped** | [**List[SummaryBlockGroupedInner]**](SummaryBlockGroupedInner.md) | Present only when grouped&#x3D;true. | [optional] 

## Example

```python
from payzu_pix.models.summary_block import SummaryBlock

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryBlock from a JSON string
summary_block_instance = SummaryBlock.from_json(json)
# print the JSON string representation of the object
print(SummaryBlock.to_json())

# convert the object into a dict
summary_block_dict = summary_block_instance.to_dict()
# create an instance of SummaryBlock from a dict
summary_block_from_dict = SummaryBlock.from_dict(summary_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


