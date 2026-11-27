# PostPixQrcodeReadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emv** | **str** | A string do payload EMV do QR Code Pix. | 

## Example

```python
from payzu_pix.models.post_pix_qrcode_read_request import PostPixQrcodeReadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostPixQrcodeReadRequest from a JSON string
post_pix_qrcode_read_request_instance = PostPixQrcodeReadRequest.from_json(json)
# print the JSON string representation of the object
print(PostPixQrcodeReadRequest.to_json())

# convert the object into a dict
post_pix_qrcode_read_request_dict = post_pix_qrcode_read_request_instance.to_dict()
# create an instance of PostPixQrcodeReadRequest from a dict
post_pix_qrcode_read_request_from_dict = PostPixQrcodeReadRequest.from_dict(post_pix_qrcode_read_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


