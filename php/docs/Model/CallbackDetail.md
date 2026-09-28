# CallbackDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique callback ID | [optional]
**url** | **string** | Webhook URL that received the callback | [optional]
**status** | **float** | HTTP response status code | [optional]
**transaction_id** | **string** | Related transaction ID | [optional]
**created_at** | **\DateTime** | Date and time when the callback log was created | [optional]
**body** | **object** | Request body sent (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional]
**response_body** | **string** | Response body received (string) | [optional]
**response_headers** | **object** | Response headers (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional]
**response_time** | **float** | Webhook round-trip time in milliseconds | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
