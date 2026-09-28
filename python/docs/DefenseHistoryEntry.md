# DefenseHistoryEntry

Defense recorded in the infraction history, without the infractionId field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Defense identifier. | [optional] 
**defense** | **str** | Defense text | [optional] 
**status** | **str** | Defense status | [optional] 
**created_at** | **datetime** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional] 
**updated_at** | **datetime** | Moment of the last change to the defense. | [optional] 
**files** | [**List[DefenseHistoryEntryFilesInner]**](DefenseHistoryEntryFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional] 

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


