# PostWithdrawRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL, with at most 2 decimal places. Must be &gt;&#x3D; 0.01. | 
**pix_key** | **str** | Destination Pix key in the format of pixType: CPF or CNPJ with valid check digits and no punctuation, phone as +55 followed by area code and number, email, or random key (EVP). | 
**pix_type** | **str** | Pix key type. | 
**callback_url** | **str** | URL for transaction notifications (http or https). | [optional] 
**client_reference** | **str** | External reference for this withdrawal. Repeating it with the same amount and key returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional] 
**description** | **str** | Optional description. | [optional] 
**virtual_account** | **str** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Example

```python
from payzu_pix.models.post_withdraw_request import PostWithdrawRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostWithdrawRequest from a JSON string
post_withdraw_request_instance = PostWithdrawRequest.from_json(json)
# print the JSON string representation of the object
print(PostWithdrawRequest.to_json())

# convert the object into a dict
post_withdraw_request_dict = post_withdraw_request_instance.to_dict()
# create an instance of PostWithdrawRequest from a dict
post_withdraw_request_from_dict = PostWithdrawRequest.from_dict(post_withdraw_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


