# SummaryBlockGroupedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 

## Example

```python
from payzu_pix.models.summary_block_grouped_inner import SummaryBlockGroupedInner

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryBlockGroupedInner from a JSON string
summary_block_grouped_inner_instance = SummaryBlockGroupedInner.from_json(json)
# print the JSON string representation of the object
print(SummaryBlockGroupedInner.to_json())

# convert the object into a dict
summary_block_grouped_inner_dict = summary_block_grouped_inner_instance.to_dict()
# create an instance of SummaryBlockGroupedInner from a dict
summary_block_grouped_inner_from_dict = SummaryBlockGroupedInner.from_dict(summary_block_grouped_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


