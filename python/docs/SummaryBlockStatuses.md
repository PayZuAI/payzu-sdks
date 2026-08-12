# SummaryBlockStatuses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**completed** | [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**canceled** | [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**expired** | [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**refunded** | [**SummaryStatus**](SummaryStatus.md) |  | [optional] 

## Example

```python
from payzu_pix.models.summary_block_statuses import SummaryBlockStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryBlockStatuses from a JSON string
summary_block_statuses_instance = SummaryBlockStatuses.from_json(json)
# print the JSON string representation of the object
print(SummaryBlockStatuses.to_json())

# convert the object into a dict
summary_block_statuses_dict = summary_block_statuses_instance.to_dict()
# create an instance of SummaryBlockStatuses from a dict
summary_block_statuses_from_dict = SummaryBlockStatuses.from_dict(summary_block_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


