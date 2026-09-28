# InfractionDetailTransaction

Summary of the disputed Pix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**amount** | **float** | Amount of the disputed transaction, in reais with decimal places. | [optional] 
**payer_name** | **str** | Name of the Pix payer, as reported by the provider. | [optional] 
**payer_document** | **str** | CPF or CNPJ of the Pix payer, as reported by the provider. | [optional] 
**receiver_name** | **str** | Name of the Pix receiver, as reported by the provider. | [optional] 
**receiver_document** | **str** | CPF or CNPJ of the Pix receiver, as reported by the provider. | [optional] 
**end_to_end_id** | **str** | End-to-end identifier of the Pix, reported by the provider at settlement. | [optional] 

## Example

```python
from payzu_pix.models.infraction_detail_transaction import InfractionDetailTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionDetailTransaction from a JSON string
infraction_detail_transaction_instance = InfractionDetailTransaction.from_json(json)
# print the JSON string representation of the object
print(InfractionDetailTransaction.to_json())

# convert the object into a dict
infraction_detail_transaction_dict = infraction_detail_transaction_instance.to_dict()
# create an instance of InfractionDetailTransaction from a dict
infraction_detail_transaction_from_dict = InfractionDetailTransaction.from_dict(infraction_detail_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


