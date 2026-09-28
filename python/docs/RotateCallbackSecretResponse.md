# RotateCallbackSecretResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | **str** | Callback secret, 43 base64url characters. Store it: there is no route to read it again. | [optional] 

## Example

```python
from payzu_pix.models.rotate_callback_secret_response import RotateCallbackSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RotateCallbackSecretResponse from a JSON string
rotate_callback_secret_response_instance = RotateCallbackSecretResponse.from_json(json)
# print the JSON string representation of the object
print(RotateCallbackSecretResponse.to_json())

# convert the object into a dict
rotate_callback_secret_response_dict = rotate_callback_secret_response_instance.to_dict()
# create an instance of RotateCallbackSecretResponse from a dict
rotate_callback_secret_response_from_dict = RotateCallbackSecretResponse.from_dict(rotate_callback_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


