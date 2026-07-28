# Transaction

Unified transaction representation used by all endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**status** | **str** | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR | [optional] 
**amount** | **float** |  | [optional] 
**type** | **str** | DEPOSIT or WITHDRAW | [optional] 
**qr_code_text** | **str** |  | [optional] 
**qr_code_base64** | **str** |  | [optional] 
**qr_code_url** | **str** |  | [optional] 
**generated_name** | **str** |  | [optional] 
**generated_document** | **str** |  | [optional] 
**generated_email** | **str** |  | [optional] 
**payer_name** | **str** |  | [optional] 
**payer_document** | **str** |  | [optional] 
**payer_institution_ispb** | **str** |  | [optional] 
**payer_institution_name** | **str** |  | [optional] 
**payer_account_number** | **str** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. | [optional] 
**service_fee_charged** | **float** |  | [optional] 
**withdraw_pix_key** | **str** |  | [optional] 
**withdraw_pix_type** | **str** |  | [optional] 
**receiver_name** | **str** |  | [optional] 
**receiver_document** | **str** |  | [optional] 
**receiver_institution_ispb** | **str** |  | [optional] 
**receiver_institution_name** | **str** |  | [optional] 
**receiver_account_number** | **str** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. | [optional] 
**end_to_end_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**paid_at** | **str** |  | [optional] 
**client_reference** | **str** |  | [optional] 
**refund_end_to_end_id** | **str** | End-to-end ID of the refund transaction | [optional] 
**refund_amount** | **float** | Amount refunded | [optional] 
**refund_status** | **str** | Status of the refund (PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR) | [optional] 
**refund_reason** | **str** | Reason for the refund | [optional] 
**refund_description** | **str** | Description of the refund | [optional] 
**refunded_at** | **str** | Date and time when the refund was processed | [optional] 
**cancellation_reason** | **str** | Reason for cancellation (if cancelled) | [optional] 
**virtual_account** | **str** | Virtual sub-account provided at creation. | [optional] 
**method** | **str** | Transaction method/rail. | [optional] 

## Example

```python
from payzu_pix.models.transaction import Transaction

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction from a JSON string
transaction_instance = Transaction.from_json(json)
# print the JSON string representation of the object
print(Transaction.to_json())

# convert the object into a dict
transaction_dict = transaction_instance.to_dict()
# create an instance of Transaction from a dict
transaction_from_dict = Transaction.from_dict(transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


