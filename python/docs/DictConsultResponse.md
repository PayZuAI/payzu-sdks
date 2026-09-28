# DictConsultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | Normalized Pix key. | [optional] 
**name** | **str** | Name of the key holder as returned by the institution queried. | [optional] 
**document** | **str** | Masked CPF/CNPJ of the key holder. | [optional] 
**person_type** | **str** | Type of person: PF, PJ, or empty when not informed. | [optional] 
**account_type** | **str** |  | [optional] 
**institution_ispb** | **str** | ISPB code of the account institution. | [optional] 
**institution_name** | **str** | Name of the institution where the holder account is registered, as the lookup returns it. | [optional] 

## Example

```python
from payzu_pix.models.dict_consult_response import DictConsultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DictConsultResponse from a JSON string
dict_consult_response_instance = DictConsultResponse.from_json(json)
# print the JSON string representation of the object
print(DictConsultResponse.to_json())

# convert the object into a dict
dict_consult_response_dict = dict_consult_response_instance.to_dict()
# create an instance of DictConsultResponse from a dict
dict_consult_response_from_dict = DictConsultResponse.from_dict(dict_consult_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


