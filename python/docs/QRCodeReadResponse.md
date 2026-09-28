# QRCodeReadResponse

Decoded information from a Pix QR Code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code_type** | **str** | Type of QR Code. | [optional] 
**name** | **str** | Name of the payment receiver. | [optional] 
**document** | **str** | CPF or CNPJ of the receiver. | [optional] 
**amount** | **float** | Amount to be paid (may differ from originalAmount for dynamic QR Codes). | [optional] 
**original_amount** | **float** | Original amount embedded in the QR Code. | [optional] 
**txid** | **str** | Transaction identifier. | [optional] 
**additional_info** | **str** | Additional information or description. | [optional] 
**expires_in** | **float** | Seconds until QR Code expires (0 for static QR Codes). | [optional] 
**created_at** | **datetime** | Creation date of the QR Code (for dynamic QR Codes). | [optional] 
**amount_editable** | **bool** | Whether the payer can change the amount. | [optional] 
**due_date** | **str** | Due date of the charge, when the QR Code has one. | [optional] 

## Example

```python
from payzu_pix.models.qr_code_read_response import QRCodeReadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QRCodeReadResponse from a JSON string
qr_code_read_response_instance = QRCodeReadResponse.from_json(json)
# print the JSON string representation of the object
print(QRCodeReadResponse.to_json())

# convert the object into a dict
qr_code_read_response_dict = qr_code_read_response_instance.to_dict()
# create an instance of QRCodeReadResponse from a dict
qr_code_read_response_from_dict = QRCodeReadResponse.from_dict(qr_code_read_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


