# DefenseHistoryEntry

Defesa registrada no histórico da infração, sem o campo infractionId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da defesa. | [optional] 
**defense** | **str** | Texto da defesa | [optional] 
**status** | **str** | Status da defesa | [optional] 
**created_at** | **datetime** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional] 
**updated_at** | **datetime** | Momento da última alteração da defesa. | [optional] 
**files** | [**List[DefenseHistoryEntryFilesInner]**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes. | [optional] 

## Example

```python
from payzu_pix.models.defense_history_entry import DefenseHistoryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseHistoryEntry from a JSON string
defense_history_entry_instance = DefenseHistoryEntry.from_json(json)
# print the JSON string representation of the object
print(DefenseHistoryEntry.to_json())

# convert the object into a dict
defense_history_entry_dict = defense_history_entry_instance.to_dict()
# create an instance of DefenseHistoryEntry from a dict
defense_history_entry_from_dict = DefenseHistoryEntry.from_dict(defense_history_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


