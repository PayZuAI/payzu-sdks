# Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_transactions** | **int** | Number of transactions in the period. | [optional] 
**deposit** | [**SummaryBlock**](SummaryBlock.md) | Summary of the account inflows in the period, that is, of the transactions of type DEPOSIT. | [optional] 
**withdraw** | [**SummaryBlock**](SummaryBlock.md) | Summary of the account outflows in the period, that is, of the transactions of type WITHDRAW. | [optional] 
**commission** | [**SummaryBlock**](SummaryBlock.md) | Summary of the commissions credited to the account in the period (transactions of type COMMISSION). | [optional] 
**adjustment** | [**SummaryBlock**](SummaryBlock.md) | Summary of the adjustments in the period (transactions of type ADJUSTMENT). | [optional] 

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


