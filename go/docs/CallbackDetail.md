# CallbackDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique callback ID | [optional] 
**Url** | Pointer to **string** | Webhook URL that received the callback | [optional] 
**Status** | Pointer to **float32** | HTTP response status code | [optional] 
**TransactionId** | Pointer to **string** | Related transaction ID | [optional] 
**CreatedAt** | Pointer to **time.Time** | Date and time when the callback log was created | [optional] 
**Body** | Pointer to **map[string]interface{}** | Request body sent (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional] 
**ResponseBody** | Pointer to **string** | Response body received (string) | [optional] 
**ResponseHeaders** | Pointer to **map[string]interface{}** | Response headers (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional] 
**ResponseTime** | Pointer to **float32** | Webhook round-trip time in milliseconds | [optional] 

## Methods

### NewCallbackDetail

`func NewCallbackDetail() *CallbackDetail`

NewCallbackDetail instantiates a new CallbackDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallbackDetailWithDefaults

`func NewCallbackDetailWithDefaults() *CallbackDetail`

NewCallbackDetailWithDefaults instantiates a new CallbackDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CallbackDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CallbackDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CallbackDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CallbackDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetUrl

`func (o *CallbackDetail) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CallbackDetail) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CallbackDetail) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CallbackDetail) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetStatus

`func (o *CallbackDetail) GetStatus() float32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CallbackDetail) GetStatusOk() (*float32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CallbackDetail) SetStatus(v float32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CallbackDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTransactionId

`func (o *CallbackDetail) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *CallbackDetail) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *CallbackDetail) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *CallbackDetail) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *CallbackDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CallbackDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CallbackDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *CallbackDetail) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetBody

`func (o *CallbackDetail) GetBody() map[string]interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *CallbackDetail) GetBodyOk() (*map[string]interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *CallbackDetail) SetBody(v map[string]interface{})`

SetBody sets Body field to given value.

### HasBody

`func (o *CallbackDetail) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetResponseBody

`func (o *CallbackDetail) GetResponseBody() string`

GetResponseBody returns the ResponseBody field if non-nil, zero value otherwise.

### GetResponseBodyOk

`func (o *CallbackDetail) GetResponseBodyOk() (*string, bool)`

GetResponseBodyOk returns a tuple with the ResponseBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseBody

`func (o *CallbackDetail) SetResponseBody(v string)`

SetResponseBody sets ResponseBody field to given value.

### HasResponseBody

`func (o *CallbackDetail) HasResponseBody() bool`

HasResponseBody returns a boolean if a field has been set.

### GetResponseHeaders

`func (o *CallbackDetail) GetResponseHeaders() map[string]interface{}`

GetResponseHeaders returns the ResponseHeaders field if non-nil, zero value otherwise.

### GetResponseHeadersOk

`func (o *CallbackDetail) GetResponseHeadersOk() (*map[string]interface{}, bool)`

GetResponseHeadersOk returns a tuple with the ResponseHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseHeaders

`func (o *CallbackDetail) SetResponseHeaders(v map[string]interface{})`

SetResponseHeaders sets ResponseHeaders field to given value.

### HasResponseHeaders

`func (o *CallbackDetail) HasResponseHeaders() bool`

HasResponseHeaders returns a boolean if a field has been set.

### GetResponseTime

`func (o *CallbackDetail) GetResponseTime() float32`

GetResponseTime returns the ResponseTime field if non-nil, zero value otherwise.

### GetResponseTimeOk

`func (o *CallbackDetail) GetResponseTimeOk() (*float32, bool)`

GetResponseTimeOk returns a tuple with the ResponseTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseTime

`func (o *CallbackDetail) SetResponseTime(v float32)`

SetResponseTime sets ResponseTime field to given value.

### HasResponseTime

`func (o *CallbackDetail) HasResponseTime() bool`

HasResponseTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


