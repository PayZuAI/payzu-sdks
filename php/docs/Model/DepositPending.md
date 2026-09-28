# DepositPending

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of the pending deposit. | [optional]
**status** | **string** | Deposit status: PENDING, COMPLETED or REJECTED. | [optional]
**amount** | **float** | Amount received. | [optional]
**payer_document** | **string** | CNPJ of the payer of the Pix. | [optional]
**payer_name** | **string** | Name of the payer of the Pix. | [optional]
**payer_account_number** | **string** | Account number of the payer inside the platform. | [optional]
**payer_institution_ispb** | **string** | ISPB code of the institution the Pix was sent from. | [optional]
**payer_institution_name** | **string** | Name of the institution the Pix was sent from. | [optional]
**receiver_document** | **string** | CPF or CNPJ of the account that received the Pix. | [optional]
**receiver_name** | **string** | Name of the account that received the Pix. | [optional]
**receiver_account_number** | **string** | Number of your PayZu account that receives the credit if the deposit is approved. | [optional]
**receiver_institution_ispb** | **string** | ISPB code of the institution that received the Pix. | [optional]
**receiver_institution_name** | **string** | Name of the institution where the Pix was settled on the receiving side. | [optional]
**end_to_end_id** | **string** | End-to-end identifier of the Pix. | [optional]
**paid_at** | **\DateTime** | Date and time the Pix was settled. | [optional]
**pix_key** | **string** |  | [optional]
**description** | **string** | Free text that would accompany the Pix. | [optional]
**approved_at** | **\DateTime** | Date and time the deposit was approved. | [optional]
**rejected_at** | **\DateTime** | Date and time the deposit was rejected. | [optional]
**rejection_reason** | **string** | Reason the deposit was rejected. | [optional]
**transaction_id** | **string** | Deposit transaction created on approval. | [optional]
**created_at** | **\DateTime** | Moment the received Pix was recorded, before the credit. | [optional]
**updated_at** | **\DateTime** | Moment of the last change to the record, which changes when the deposit is approved or rejected. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
