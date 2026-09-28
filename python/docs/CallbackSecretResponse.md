# CallbackSecretResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Confirmation of the created secret. | [optional] 
**secret** | **str** | Callback secret, 43 base64url characters. Store it: there is no route to read it again. | [optional] 

## Example

```python
from payzu_pix.models.callback_secret_response import CallbackSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackSecretResponse from a JSON string
callback_secret_response_instance = CallbackSecretResponse.from_json(json)
# print the JSON string representation of the object
print(CallbackSecretResponse.to_json())

# convert the object into a dict
callback_secret_response_dict = callback_secret_response_instance.to_dict()
# create an instance of CallbackSecretResponse from a dict
callback_secret_response_from_dict = CallbackSecretResponse.from_dict(callback_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


