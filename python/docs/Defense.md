# Defense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Defense identifier. | [optional] 
**defense** | **str** | Defense text | [optional] 
**status** | **str** | Defense status | [optional] 
**infraction_id** | **str** | Identifies the infraction the defense belongs to. | [optional] 
**created_at** | **datetime** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional] 
**updated_at** | **datetime** | Moment of the last change to the defense. | [optional] 
**files** | [**List[DefenseFilesInner]**](DefenseFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional] 

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


