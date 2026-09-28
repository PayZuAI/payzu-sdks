# DepositPending


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the pending deposit. | [optional] 
**status** | **str** | Deposit status: PENDING, COMPLETED or REJECTED. | [optional] 
**amount** | **float** | Amount received. | [optional] 
**payer_document** | **str** | CNPJ of the payer of the Pix. | [optional] 
**payer_name** | **str** | Name of the payer of the Pix. | [optional] 
**payer_account_number** | **str** | Account number of the payer inside the platform. | [optional] 
**payer_institution_ispb** | **str** | ISPB code of the institution the Pix was sent from. | [optional] 
**payer_institution_name** | **str** | Name of the institution the Pix was sent from. | [optional] 
**receiver_document** | **str** | CPF or CNPJ of the account that received the Pix. | [optional] 
**receiver_name** | **str** | Name of the account that received the Pix. | [optional] 
**receiver_account_number** | **str** | Number of your PayZu account that receives the credit if the deposit is approved. | [optional] 
**receiver_institution_ispb** | **str** | ISPB code of the institution that received the Pix. | [optional] 
**receiver_institution_name** | **str** | Name of the institution where the Pix was settled on the receiving side. | [optional] 
**end_to_end_id** | **str** | End-to-end identifier of the Pix. | [optional] 
**paid_at** | **datetime** | Date and time the Pix was settled. | [optional] 
**pix_key** | **str** |  | [optional] 
**description** | **str** | Free text that would accompany the Pix. | [optional] 
**approved_at** | **datetime** | Date and time the deposit was approved. | [optional] 
**rejected_at** | **datetime** | Date and time the deposit was rejected. | [optional] 
**rejection_reason** | **str** | Reason the deposit was rejected. | [optional] 
**transaction_id** | **str** | Deposit transaction created on approval. | [optional] 
**created_at** | **datetime** | Moment the received Pix was recorded, before the credit. | [optional] 
**updated_at** | **datetime** | Moment of the last change to the record, which changes when the deposit is approved or rejected. | [optional] 

## Example

```python
from payzu_pix.models.deposit_pending import DepositPending

# TODO update the JSON string below
json = "{}"
# create an instance of DepositPending from a JSON string
deposit_pending_instance = DepositPending.from_json(json)
# print the JSON string representation of the object
print(DepositPending.to_json())

# convert the object into a dict
deposit_pending_dict = deposit_pending_instance.to_dict()
# create an instance of DepositPending from a dict
deposit_pending_from_dict = DepositPending.from_dict(deposit_pending_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


