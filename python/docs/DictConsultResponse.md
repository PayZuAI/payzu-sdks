# DictConsultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | Chave Pix normalizada. | [optional] 
**name** | **str** | Nome do titular da chave conforme devolvido pela instituição consultada. | [optional] 
**document** | **str** | CPF/CNPJ mascarado do titular da chave. | [optional] 
**person_type** | **str** | Tipo de pessoa: PF, PJ ou vazio quando não informado. | [optional] 
**account_type** | **str** |  | [optional] 
**institution_ispb** | **str** | Código ISPB da instituição da conta. | [optional] 
**institution_name** | **str** | Nome da instituição onde a conta do titular está registrada, do jeito que a consulta devolve. | [optional] 

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


