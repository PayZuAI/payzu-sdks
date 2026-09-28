# PostWithdrawQrcodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code** | **str** | Pix QR Code payload (EMV format). | 
**amount** | **float** | Amount in BRL, with at most 2 decimal places. Optional: if not provided, uses the QR Code&#39;s embedded value. | [optional] 
**callback_url** | **str** | URL for transaction notifications (http or https). | [optional] 
**description** | **str** | Optional description for the payment. | [optional] 
**client_reference** | **str** | External reference for this withdrawal. Repeating it with the same amount and QR Code returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional] 
**virtual_account** | **str** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Example

```python
from payzu_pix.models.post_withdraw_qrcode_request import PostWithdrawQrcodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostWithdrawQrcodeRequest from a JSON string
post_withdraw_qrcode_request_instance = PostWithdrawQrcodeRequest.from_json(json)
# print the JSON string representation of the object
print(PostWithdrawQrcodeRequest.to_json())

# convert the object into a dict
post_withdraw_qrcode_request_dict = post_withdraw_qrcode_request_instance.to_dict()
# create an instance of PostWithdrawQrcodeRequest from a dict
post_withdraw_qrcode_request_from_dict = PostWithdrawQrcodeRequest.from_dict(post_withdraw_qrcode_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


