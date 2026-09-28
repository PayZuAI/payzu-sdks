# EnqueuedCallbackEnqueued

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** | Total number of callbacks sent for queueing. Not limited by the size of items. | [optional] 
**Truncated** | Pointer to **bool** | True when items lists only part of the callbacks. The resend still covers all of them. | [optional] 
**Items** | Pointer to [**[]EnqueuedCallbackItem**](EnqueuedCallbackItem.md) | Queued callbacks, capped at 500 entries. | [optional] 

## Methods

### NewEnqueuedCallbackEnqueued

`func NewEnqueuedCallbackEnqueued() *EnqueuedCallbackEnqueued`

NewEnqueuedCallbackEnqueued instantiates a new EnqueuedCallbackEnqueued object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnqueuedCallbackEnqueuedWithDefaults

`func NewEnqueuedCallbackEnqueuedWithDefaults() *EnqueuedCallbackEnqueued`

NewEnqueuedCallbackEnqueuedWithDefaults instantiates a new EnqueuedCallbackEnqueued object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *EnqueuedCallbackEnqueued) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *EnqueuedCallbackEnqueued) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *EnqueuedCallbackEnqueued) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *EnqueuedCallbackEnqueued) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetTruncated

`func (o *EnqueuedCallbackEnqueued) GetTruncated() bool`

GetTruncated returns the Truncated field if non-nil, zero value otherwise.

### GetTruncatedOk

`func (o *EnqueuedCallbackEnqueued) GetTruncatedOk() (*bool, bool)`

GetTruncatedOk returns a tuple with the Truncated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTruncated

`func (o *EnqueuedCallbackEnqueued) SetTruncated(v bool)`

SetTruncated sets Truncated field to given value.

### HasTruncated

`func (o *EnqueuedCallbackEnqueued) HasTruncated() bool`

HasTruncated returns a boolean if a field has been set.

### GetItems

`func (o *EnqueuedCallbackEnqueued) GetItems() []EnqueuedCallbackItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *EnqueuedCallbackEnqueued) GetItemsOk() (*[]EnqueuedCallbackItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *EnqueuedCallbackEnqueued) SetItems(v []EnqueuedCallbackItem)`

SetItems sets Items field to given value.

### HasItems

`func (o *EnqueuedCallbackEnqueued) HasItems() bool`

HasItems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


