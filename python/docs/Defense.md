# Defense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da defesa. | [optional] 
**defense** | **str** | Texto da defesa | [optional] 
**status** | **str** | Status da defesa | [optional] 
**infraction_id** | **str** | Identifica a contestação a que a defesa pertence. | [optional] 
**created_at** | **datetime** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional] 
**updated_at** | **datetime** | Momento da última alteração da defesa. | [optional] 
**files** | [**List[DefenseFilesInner]**](DefenseFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes. | [optional] 

## Example

```python
from payzu_pix.models.defense import Defense

# TODO update the JSON string below
json = "{}"
# create an instance of Defense from a JSON string
defense_instance = Defense.from_json(json)
# print the JSON string representation of the object
print(Defense.to_json())

# convert the object into a dict
defense_dict = defense_instance.to_dict()
# create an instance of Defense from a dict
defense_from_dict = Defense.from_dict(defense_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


