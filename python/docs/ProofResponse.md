# ProofResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_base64** | **str** | PDF receipt as a base64 data URI (&#x60;data:application/pdf;base64,...&#x60;), returned when type&#x3D;base64. | [optional] 

## Example

```python
from payzu_pix.models.proof_response import ProofResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProofResponse from a JSON string
proof_response_instance = ProofResponse.from_json(json)
# print the JSON string representation of the object
print(ProofResponse.to_json())

# convert the object into a dict
proof_response_dict = proof_response_instance.to_dict()
# create an instance of ProofResponse from a dict
proof_response_from_dict = ProofResponse.from_dict(proof_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


