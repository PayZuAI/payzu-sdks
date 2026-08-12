# CallbackResendResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**count** | **int** | Number of callbacks queued for resend. | [optional] 

## Example

```python
from payzu_pix.models.callback_resend_response import CallbackResendResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackResendResponse from a JSON string
callback_resend_response_instance = CallbackResendResponse.from_json(json)
# print the JSON string representation of the object
print(CallbackResendResponse.to_json())

# convert the object into a dict
callback_resend_response_dict = callback_resend_response_instance.to_dict()
# create an instance of CallbackResendResponse from a dict
callback_resend_response_from_dict = CallbackResendResponse.from_dict(callback_resend_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


