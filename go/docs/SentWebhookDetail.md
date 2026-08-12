# SentWebhookDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**WebhookId** | Pointer to **string** |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 
**TransactionId** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**Body** | Pointer to **map[string]interface{}** |  | [optional] 
**Status** | Pointer to **int32** | HTTP status returned by your endpoint. | [optional] 
**ResponseHeaders** | Pointer to **map[string]interface{}** |  | [optional] 
**ResponseBody** | Pointer to **string** |  | [optional] 
**Error** | Pointer to **string** |  | [optional] 
**ResponseTime** | Pointer to **int32** | Response time of your endpoint, in milliseconds. | [optional] 
**EventType** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewSentWebhookDetail

`func NewSentWebhookDetail() *SentWebhookDetail`

NewSentWebhookDetail instantiates a new SentWebhookDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentWebhookDetailWithDefaults

`func NewSentWebhookDetailWithDefaults() *SentWebhookDetail`

NewSentWebhookDetailWithDefaults instantiates a new SentWebhookDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SentWebhookDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SentWebhookDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SentWebhookDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SentWebhookDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetWebhookId

`func (o *SentWebhookDetail) GetWebhookId() string`

GetWebhookId returns the WebhookId field if non-nil, zero value otherwise.

### GetWebhookIdOk

`func (o *SentWebhookDetail) GetWebhookIdOk() (*string, bool)`

GetWebhookIdOk returns a tuple with the WebhookId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookId

`func (o *SentWebhookDetail) SetWebhookId(v string)`

SetWebhookId sets WebhookId field to given value.

### HasWebhookId

`func (o *SentWebhookDetail) HasWebhookId() bool`

HasWebhookId returns a boolean if a field has been set.

### GetUserId

`func (o *SentWebhookDetail) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *SentWebhookDetail) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *SentWebhookDetail) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *SentWebhookDetail) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetTransactionId

`func (o *SentWebhookDetail) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *SentWebhookDetail) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *SentWebhookDetail) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *SentWebhookDetail) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetUrl

`func (o *SentWebhookDetail) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *SentWebhookDetail) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *SentWebhookDetail) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *SentWebhookDetail) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetBody

`func (o *SentWebhookDetail) GetBody() map[string]interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *SentWebhookDetail) GetBodyOk() (*map[string]interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *SentWebhookDetail) SetBody(v map[string]interface{})`

SetBody sets Body field to given value.

### HasBody

`func (o *SentWebhookDetail) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetStatus

`func (o *SentWebhookDetail) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SentWebhookDetail) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SentWebhookDetail) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SentWebhookDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetResponseHeaders

`func (o *SentWebhookDetail) GetResponseHeaders() map[string]interface{}`

GetResponseHeaders returns the ResponseHeaders field if non-nil, zero value otherwise.

### GetResponseHeadersOk

`func (o *SentWebhookDetail) GetResponseHeadersOk() (*map[string]interface{}, bool)`

GetResponseHeadersOk returns a tuple with the ResponseHeaders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseHeaders

`func (o *SentWebhookDetail) SetResponseHeaders(v map[string]interface{})`

SetResponseHeaders sets ResponseHeaders field to given value.

### HasResponseHeaders

`func (o *SentWebhookDetail) HasResponseHeaders() bool`

HasResponseHeaders returns a boolean if a field has been set.

### GetResponseBody

`func (o *SentWebhookDetail) GetResponseBody() string`

GetResponseBody returns the ResponseBody field if non-nil, zero value otherwise.

### GetResponseBodyOk

`func (o *SentWebhookDetail) GetResponseBodyOk() (*string, bool)`

GetResponseBodyOk returns a tuple with the ResponseBody field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseBody

`func (o *SentWebhookDetail) SetResponseBody(v string)`

SetResponseBody sets ResponseBody field to given value.

### HasResponseBody

`func (o *SentWebhookDetail) HasResponseBody() bool`

HasResponseBody returns a boolean if a field has been set.

### GetError

`func (o *SentWebhookDetail) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *SentWebhookDetail) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *SentWebhookDetail) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *SentWebhookDetail) HasError() bool`

HasError returns a boolean if a field has been set.

### GetResponseTime

`func (o *SentWebhookDetail) GetResponseTime() int32`

GetResponseTime returns the ResponseTime field if non-nil, zero value otherwise.

### GetResponseTimeOk

`func (o *SentWebhookDetail) GetResponseTimeOk() (*int32, bool)`

GetResponseTimeOk returns a tuple with the ResponseTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseTime

`func (o *SentWebhookDetail) SetResponseTime(v int32)`

SetResponseTime sets ResponseTime field to given value.

### HasResponseTime

`func (o *SentWebhookDetail) HasResponseTime() bool`

HasResponseTime returns a boolean if a field has been set.

### GetEventType

`func (o *SentWebhookDetail) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *SentWebhookDetail) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *SentWebhookDetail) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *SentWebhookDetail) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetCreatedAt

`func (o *SentWebhookDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *SentWebhookDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *SentWebhookDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *SentWebhookDetail) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


