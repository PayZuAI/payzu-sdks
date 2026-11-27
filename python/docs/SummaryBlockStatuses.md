# SummaryBlockStatuses

Totais por status no período.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma dos valores, em reais, das transações com status PENDING no período consultado. | [optional] 
**completed** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma das transações concluídas, em reais. | [optional] 
**canceled** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma das transações canceladas, em reais. | [optional] 
**expired** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma das transações expiradas, em reais. | [optional] 
**refunded** | [**SummaryStatus**](SummaryStatus.md) | Contagem e valor devolvido no período, em reais. | [optional] 

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


