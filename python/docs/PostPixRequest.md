# PostPixRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL. Must be &gt;&#x3D; 1. | 
**callback_url** | **str** | URL for transaction notifications (http or https). | [optional] 
**generated_name** | **str** | Payer full name. Letters and spaces only. | [optional] 
**generated_email** | **str** | Payer email (optional). | [optional] 
**generated_document** | **str** | Payer CPF (11 digits) or CNPJ (14 digits), no punctuation, with valid check digits. | [optional] 
**expires_in** | **float** | Seconds until the QR Code expires. | [optional] 
**client_reference** | **str** | External reference (order, invoice, etc.). A clientReference already used returns the transaction created with it. | [optional] 
**virtual_account** | **str** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Example

```python
from payzu_pix.models.post_pix_request import PostPixRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostPixRequest from a JSON string
post_pix_request_instance = PostPixRequest.from_json(json)
# print the JSON string representation of the object
print(PostPixRequest.to_json())

# convert the object into a dict
post_pix_request_dict = post_pix_request_instance.to_dict()
# create an instance of PostPixRequest from a dict
post_pix_request_from_dict = PostPixRequest.from_dict(post_pix_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


