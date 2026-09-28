# ResendUserCallbackSingle200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Fixed text confirming that the resend of the given transaction was queued. | [optional] 

## Example

```python
from payzu_pix.models.resend_user_callback_single200_response import ResendUserCallbackSingle200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ResendUserCallbackSingle200Response from a JSON string
resend_user_callback_single200_response_instance = ResendUserCallbackSingle200Response.from_json(json)
# print the JSON string representation of the object
print(ResendUserCallbackSingle200Response.to_json())

# convert the object into a dict
resend_user_callback_single200_response_dict = resend_user_callback_single200_response_instance.to_dict()
# create an instance of ResendUserCallbackSingle200Response from a dict
resend_user_callback_single200_response_from_dict = ResendUserCallbackSingle200Response.from_dict(resend_user_callback_single200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


