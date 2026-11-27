# Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_transactions** | **int** | Quantidade de transações no período. | [optional] 
**deposit** | [**SummaryBlock**](SummaryBlock.md) | Resumo das entradas da conta no período, ou seja, das transações do tipo DEPOSIT. | [optional] 
**withdraw** | [**SummaryBlock**](SummaryBlock.md) | Resumo das saídas da conta no período, ou seja, das transações do tipo WITHDRAW. | [optional] 
**commission** | [**SummaryBlock**](SummaryBlock.md) | Resumo das comissões creditadas à conta no período (transações do tipo COMMISSION). | [optional] 
**adjustment** | [**SummaryBlock**](SummaryBlock.md) | Resumo dos ajustes no período (transações do tipo ADJUSTMENT). | [optional] 

## Example

```python
from payzu_pix.models.summary import Summary

# TODO update the JSON string below
json = "{}"
# create an instance of Summary from a JSON string
summary_instance = Summary.from_json(json)
# print the JSON string representation of the object
print(Summary.to_json())

# convert the object into a dict
summary_dict = summary_instance.to_dict()
# create an instance of Summary from a dict
summary_from_dict = Summary.from_dict(summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


