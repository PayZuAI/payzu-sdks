# DefenseListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da defesa. | [optional] 
**defense** | **str** | Texto da defesa | [optional] 
**status** | **str** | Status da defesa | [optional] 
**infraction_id** | **str** | Identifica a contestação a que a defesa pertence. | [optional] 
**created_at** | **datetime** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional] 
**updated_at** | **datetime** | Momento da última alteração da defesa. | [optional] 
**files** | [**List[DefenseHistoryEntryFilesInner]**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes, sem o link de download. | [optional] 

## Example

```python
from payzu_pix.models.defense_list_item import DefenseListItem

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseListItem from a JSON string
defense_list_item_instance = DefenseListItem.from_json(json)
# print the JSON string representation of the object
print(DefenseListItem.to_json())

# convert the object into a dict
defense_list_item_dict = defense_list_item_instance.to_dict()
# create an instance of DefenseListItem from a dict
defense_list_item_from_dict = DefenseListItem.from_dict(defense_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


