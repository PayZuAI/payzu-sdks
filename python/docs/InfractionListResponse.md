# InfractionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infractions** | [**List[InfractionDetail]**](InfractionDetail.md) | Infractions of the requested page, each in the same format as the detail. | [optional] 
**pagination** | [**InfractionListResponsePagination**](InfractionListResponsePagination.md) |  | [optional] 

## Example

```python
from payzu_pix.models.infraction_list_response import InfractionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionListResponse from a JSON string
infraction_list_response_instance = InfractionListResponse.from_json(json)
# print the JSON string representation of the object
print(InfractionListResponse.to_json())

# convert the object into a dict
infraction_list_response_dict = infraction_list_response_instance.to_dict()
# create an instance of InfractionListResponse from a dict
infraction_list_response_from_dict = InfractionListResponse.from_dict(infraction_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


