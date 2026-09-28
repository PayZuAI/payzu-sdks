# DefenseFilesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the file sent with the defense. | [optional] 
**mime_type** | **str** | MIME type of the file, provided on upload, for example application/pdf or image/png. | [optional] 
**size** | **int** | Size of the file in bytes. | [optional] 
**url** | **str** | Signed download URL, valid for 9 minutes; null when unavailable. Returned when creating the defense and when fetching a single defense. | [optional] 

## Example

```python
from payzu_pix.models.defense_files_inner import DefenseFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of DefenseFilesInner from a JSON string
defense_files_inner_instance = DefenseFilesInner.from_json(json)
# print the JSON string representation of the object
print(DefenseFilesInner.to_json())

# convert the object into a dict
defense_files_inner_dict = defense_files_inner_instance.to_dict()
# create an instance of DefenseFilesInner from a dict
defense_files_inner_from_dict = DefenseFilesInner.from_dict(defense_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


