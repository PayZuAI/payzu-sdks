# ListUserReports200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Quantidade de solicitações de relatório do usuário que atendem aos filtros. | [optional] 
**pages** | **int** | Número de páginas para o limit informado, calculado a partir de total arredondado para cima. | [optional] 
**reports** | [**List[ReportJob]**](ReportJob.md) | Solicitações de relatório da página pedida, com id, status e datas. | [optional] 

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


