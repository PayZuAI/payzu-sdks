# SummaryBlockStatuses

Totals by status in the period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the amounts, in reais, of the transactions with status PENDING in the queried period. | [optional] 
**completed** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the completed transactions, in reais. | [optional] 
**canceled** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the canceled transactions, in reais. | [optional] 
**expired** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the expired transactions, in reais. | [optional] 
**refunded** | [**SummaryStatus**](SummaryStatus.md) | Count and refunded amount in the period, in reais. | [optional] 

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


