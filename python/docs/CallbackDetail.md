# CallbackDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique callback ID | [optional] 
**url** | **str** | Webhook URL that received the callback | [optional] 
**status** | **float** | HTTP response status code | [optional] 
**transaction_id** | **str** | Related transaction ID | [optional] 
**created_at** | **datetime** | Date and time when the callback log was created | [optional] 
**body** | **object** | Request body sent (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional] 
**response_body** | **str** | Response body received (string) | [optional] 
**response_headers** | **object** | Response headers (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional] 
**response_time** | **float** | Webhook round-trip time in milliseconds | [optional] 

## Example

```python
from payzu_pix.models.callback_detail import CallbackDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackDetail from a JSON string
callback_detail_instance = CallbackDetail.from_json(json)
# print the JSON string representation of the object
print(CallbackDetail.to_json())

# convert the object into a dict
callback_detail_dict = callback_detail_instance.to_dict()
# create an instance of CallbackDetail from a dict
callback_detail_from_dict = CallbackDetail.from_dict(callback_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


