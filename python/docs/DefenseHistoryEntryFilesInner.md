# DefenseHistoryEntryFilesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the file sent with the defense. | [optional] 
**mime_type** | **str** | MIME type of the file, provided on upload, for example application/pdf or image/png. | [optional] 
**size** | **int** | Size of the file in bytes. | [optional] 

## Example

```python
from payzu_pix.models.defense_history_entry_files_inner import DefenseHistoryEntryFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseHistoryEntryFilesInner from a JSON string
defense_history_entry_files_inner_instance = DefenseHistoryEntryFilesInner.from_json(json)
# print the JSON string representation of the object
print(DefenseHistoryEntryFilesInner.to_json())

# convert the object into a dict
defense_history_entry_files_inner_dict = defense_history_entry_files_inner_instance.to_dict()
# create an instance of DefenseHistoryEntryFilesInner from a dict
defense_history_entry_files_inner_from_dict = DefenseHistoryEntryFilesInner.from_dict(defense_history_entry_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


