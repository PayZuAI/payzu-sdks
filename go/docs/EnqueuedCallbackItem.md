# EnqueuedCallbackItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionId** | Pointer to **string** | Transaction whose callback was queued. | [optional] 
**WebhookId** | Pointer to **string** | Webhook that receives the delivery. | [optional] 
**EventType** | Pointer to [**WebhookEventType**](WebhookEventType.md) | Event that triggered the callback, when the log records it. | [optional] 

## Methods

### NewEnqueuedCallbackItem

`func NewEnqueuedCallbackItem() *EnqueuedCallbackItem`

NewEnqueuedCallbackItem instantiates a new EnqueuedCallbackItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnqueuedCallbackItemWithDefaults

`func NewEnqueuedCallbackItemWithDefaults() *EnqueuedCallbackItem`

NewEnqueuedCallbackItemWithDefaults instantiates a new EnqueuedCallbackItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionId

`func (o *EnqueuedCallbackItem) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *EnqueuedCallbackItem) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *EnqueuedCallbackItem) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *EnqueuedCallbackItem) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetWebhookId

`func (o *EnqueuedCallbackItem) GetWebhookId() string`

GetWebhookId returns the WebhookId field if non-nil, zero value otherwise.

### GetWebhookIdOk

`func (o *EnqueuedCallbackItem) GetWebhookIdOk() (*string, bool)`

GetWebhookIdOk returns a tuple with the WebhookId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookId

`func (o *EnqueuedCallbackItem) SetWebhookId(v string)`

SetWebhookId sets WebhookId field to given value.

### HasWebhookId

`func (o *EnqueuedCallbackItem) HasWebhookId() bool`

HasWebhookId returns a boolean if a field has been set.

### GetEventType

`func (o *EnqueuedCallbackItem) GetEventType() WebhookEventType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *EnqueuedCallbackItem) GetEventTypeOk() (*WebhookEventType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *EnqueuedCallbackItem) SetEventType(v WebhookEventType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *EnqueuedCallbackItem) HasEventType() bool`

HasEventType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


