# GetUserTransactionById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the transaction at PayZu. | [optional] 
**status** | **str** | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR | [optional] 
**amount** | **float** | Amount of the transaction, before the fee. | [optional] 
**type** | **str** | Transaction type: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION or ADJUSTMENT. | [optional] 
**qr_code_text** | **str** | Copy-and-paste Pix code. | [optional] 
**qr_code_base64** | **str** | PNG image of the QR Code in base64, without the data: prefix. | [optional] 
**qr_code_url** | **str** | Authenticated route that returns the PNG of the QR Code. | [optional] 
**generated_name** | **str** | Name used to build the charge. | [optional] 
**generated_document** | **str** | CPF or CNPJ used as the debtor of the charge. | [optional] 
**generated_email** | **str** | Email used to build the charge. | [optional] 
**payer_name** | **str** | Name of the holder of the account that sent the Pix, as reported by the originating institution. | [optional] 
**payer_document** | **str** | CPF or CNPJ of the payer of the Pix, reported by the originating institution. | [optional] 
**payer_institution_ispb** | **str** | ISPB code of the institution the Pix was sent from. | [optional] 
**payer_institution_name** | **str** | Name of the institution the Pix was sent from. | [optional] 
**payer_account_number** | **str** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. | [optional] 
**service_fee_charged** | **float** | PayZu fee charged on the operation, in reais. It may carry more than two decimal places — do not round when reconciling. | [optional] 
**withdraw_pix_key** | **str** | Destination Pix key of the withdrawal, already normalized. | [optional] 
**withdraw_pix_type** | **str** | Type of the destination key of the withdrawal, with evp being the random key. | [optional] 
**receiver_name** | **str** | Name of the holder of the receiving account. | [optional] 
**receiver_document** | **str** | CPF or CNPJ of the receiver. | [optional] 
**receiver_institution_ispb** | **str** | ISPB code of the institution that receives the Pix. | [optional] 
**receiver_institution_name** | **str** | Name of the institution that receives the Pix. | [optional] 
**receiver_account_number** | **str** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. | [optional] 
**end_to_end_id** | **str** | Identifier of the Pix in the Bacen arrangement, used to track the settlement and request a return. | [optional] 
**created_at** | **str** | Date and time the transaction was recorded. | [optional] 
**updated_at** | **str** | Date and time of the last change. | [optional] 
**paid_at** | **str** | Date and time the Pix was settled, reported by the institution. | [optional] 
**client_reference** | **str** | Your identifier of the transaction, returned in queries and callbacks. | [optional] 
**refund_end_to_end_id** | **str** | End-to-end ID of the refund transaction | [optional] 
**refund_amount** | **float** | Amount refunded | [optional] 
**refund_status** | **str** | Refund status: PENDING, COMPLETED or CANCELED. | [optional] 
**refund_reason** | **str** | Reason for the refund | [optional] 
**refund_description** | **str** | Description of the refund | [optional] 
**refunded_at** | **str** | Date and time when the refund was processed | [optional] 
**cancellation_reason** | **str** | Reason for cancellation (if cancelled) | [optional] 
**virtual_account** | **str** | Virtual sub-account provided at creation. | [optional] 
**method** | **str** | Transaction method/rail. | [optional] 
**infraction** | [**List[GetUserTransactionById200ResponseAllOfInfractionInner]**](GetUserTransactionById200ResponseAllOfInfractionInner.md) | Complete infraction history for this transaction. | [optional] 
**callback_log** | [**List[GetUserTransactionById200ResponseAllOfCallbackLogInner]**](GetUserTransactionById200ResponseAllOfCallbackLogInner.md) | Webhook delivery attempts for this transaction (most recent first) | [optional] 

## Example

```python
from payzu_pix.models.get_user_transaction_by_id200_response import GetUserTransactionById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserTransactionById200Response from a JSON string
get_user_transaction_by_id200_response_instance = GetUserTransactionById200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserTransactionById200Response.to_json())

# convert the object into a dict
get_user_transaction_by_id200_response_dict = get_user_transaction_by_id200_response_instance.to_dict()
# create an instance of GetUserTransactionById200Response from a dict
get_user_transaction_by_id200_response_from_dict = GetUserTransactionById200Response.from_dict(get_user_transaction_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


