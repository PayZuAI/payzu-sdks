# ApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Fixed marker of an error response. | 
**error** | **str** | Name of the corresponding HTTP status. | 
**error_code** | **str** | Stable machine-readable error code, when available. | 
**message** | **str** | Human-readable error message. | 
**status_code** | **int** | HTTP status code. | 
**request_id** | **str** | Unique request correlation ID (cuid). Include it when contacting support. | 
**details** | [**List[ApiErrorDetailsInner]**](ApiErrorDetailsInner.md) | Field-level validation errors, when applicable. | [optional] 
**retry_after_seconds** | **int** | Seconds to wait before retrying. Present only on 429 responses. | [optional] 

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


