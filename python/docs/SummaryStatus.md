# SummaryStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**amount** | **float** |  | [optional] 
**service_fee_charged** | **float** | Service fee charged (hidden for limited accounts). | [optional] 

## Example

```python
from payzu_pix.models.summary_status import SummaryStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryStatus from a JSON string
summary_status_instance = SummaryStatus.from_json(json)
# print the JSON string representation of the object
print(SummaryStatus.to_json())

# convert the object into a dict
summary_status_dict = summary_status_instance.to_dict()
# create an instance of SummaryStatus from a dict
summary_status_from_dict = SummaryStatus.from_dict(summary_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


