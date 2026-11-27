# PixKeyInfo

Informações sobre uma chave Pix a partir da consulta ao DICT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | A chave Pix que foi consultada. | [optional] 
**document** | **str** | CPF ou CNPJ do titular (parcialmente mascarado por privacidade). | [optional] 
**name** | **str** | Nome do titular da chave Pix. | [optional] 
**branch** | **str** | Número da agência bancária (mascarado). | [optional] 
**account_number** | **str** | Número da conta (mascarado). | [optional] 
**person_type** | **str** | Tipo de pessoa: PF, PJ ou vazio quando não informado. | [optional] 
**account_type** | **str** | Tipo de conta devolvido pelo DICT, como CACC, SVGS, TRAN ou SLRY. | [optional] 
**institution_ispb** | **str** | Código ISPB da instituição financeira. | [optional] 
**institution_code** | **str** | Código COMPE da instituição financeira. | [optional] 
**institution_name** | **str** | Nome da instituição financeira. | [optional] 

## Example

```python
from payzu_pix.models.pix_key_info import PixKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PixKeyInfo from a JSON string
pix_key_info_instance = PixKeyInfo.from_json(json)
# print the JSON string representation of the object
print(PixKeyInfo.to_json())

# convert the object into a dict
pix_key_info_dict = pix_key_info_instance.to_dict()
# create an instance of PixKeyInfo from a dict
pix_key_info_from_dict = PixKeyInfo.from_dict(pix_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


