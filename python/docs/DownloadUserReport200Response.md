# DownloadUserReport200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL assinada de curta duração para baixar o CSV (validade de 5 min) | [optional] 
**expires_at** | **datetime** | Quando a URL assinada expira | [optional] 

## Example

```python
from payzu_pix.models.download_user_report200_response import DownloadUserReport200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadUserReport200Response from a JSON string
download_user_report200_response_instance = DownloadUserReport200Response.from_json(json)
# print the JSON string representation of the object
print(DownloadUserReport200Response.to_json())

# convert the object into a dict
download_user_report200_response_dict = download_user_report200_response_instance.to_dict()
# create an instance of DownloadUserReport200Response from a dict
download_user_report200_response_from_dict = DownloadUserReport200Response.from_dict(download_user_report200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


