# ResendUserCallbacks200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Confirmation that the callbacks were queued. | [optional] 
**total** | **int** | Number of callbacks dispatched | [optional] 

## Example

```python
from payzu_pix.models.resend_user_callbacks200_response import ResendUserCallbacks200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ResendUserCallbacks200Response from a JSON string
resend_user_callbacks200_response_instance = ResendUserCallbacks200Response.from_json(json)
# print the JSON string representation of the object
print(ResendUserCallbacks200Response.to_json())

# convert the object into a dict
resend_user_callbacks200_response_dict = resend_user_callbacks200_response_instance.to_dict()
# create an instance of ResendUserCallbacks200Response from a dict
resend_user_callbacks200_response_from_dict = ResendUserCallbacks200Response.from_dict(resend_user_callbacks200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


