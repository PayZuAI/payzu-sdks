# ListUserReports200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Number of report requests of the user that match the filters. | [optional] 
**pages** | **int** | Number of pages for the limit provided, computed from total rounded up. | [optional] 
**reports** | [**List[ReportJob]**](ReportJob.md) | Report requests of the requested page, with id, status and dates. | [optional] 

## Example

```python
from payzu_pix.models.list_user_reports200_response import ListUserReports200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserReports200Response from a JSON string
list_user_reports200_response_instance = ListUserReports200Response.from_json(json)
# print the JSON string representation of the object
print(ListUserReports200Response.to_json())

# convert the object into a dict
list_user_reports200_response_dict = list_user_reports200_response_instance.to_dict()
# create an instance of ListUserReports200Response from a dict
list_user_reports200_response_from_dict = ListUserReports200Response.from_dict(list_user_reports200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


