# ApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Marcador fixo de resposta de erro. | 
**error** | **str** | Nome do status HTTP correspondente. | 
**error_code** | **str** | Código de erro estável e legível por máquina, quando disponível. | 
**message** | **str** | Mensagem de erro legível. | 
**status_code** | **int** | Código de status HTTP. | 
**request_id** | **str** | ID único de correlação da requisição (cuid). | 
**details** | [**List[ApiErrorDetailsInner]**](ApiErrorDetailsInner.md) | Erros de validação por campo, quando aplicável. | [optional] 
**retry_after_seconds** | **int** | Segundos a aguardar antes de tentar novamente. | [optional] 

## Example

```python
from payzu_pix.models.api_error import ApiError

# TODO update the JSON string below
json = "{}"
# create an instance of ApiError from a JSON string
api_error_instance = ApiError.from_json(json)
# print the JSON string representation of the object
print(ApiError.to_json())

# convert the object into a dict
api_error_dict = api_error_instance.to_dict()
# create an instance of ApiError from a dict
api_error_from_dict = ApiError.from_dict(api_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


