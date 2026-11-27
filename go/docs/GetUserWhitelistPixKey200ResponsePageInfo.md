# GetUserWhitelistPixKey200ResponsePageInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextCursor** | Pointer to **string** | Cursor da próxima página; não vem na última. | [optional] 
**HasNextPage** | **bool** |  | 

## Methods

### NewGetUserWhitelistPixKey200ResponsePageInfo

`func NewGetUserWhitelistPixKey200ResponsePageInfo(hasNextPage bool, ) *GetUserWhitelistPixKey200ResponsePageInfo`

NewGetUserWhitelistPixKey200ResponsePageInfo instantiates a new GetUserWhitelistPixKey200ResponsePageInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserWhitelistPixKey200ResponsePageInfoWithDefaults

`func NewGetUserWhitelistPixKey200ResponsePageInfoWithDefaults() *GetUserWhitelistPixKey200ResponsePageInfo`

NewGetUserWhitelistPixKey200ResponsePageInfoWithDefaults instantiates a new GetUserWhitelistPixKey200ResponsePageInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNextCursor

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.

### GetHasNextPage

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) GetHasNextPage() bool`

GetHasNextPage returns the HasNextPage field if non-nil, zero value otherwise.

### GetHasNextPageOk

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) GetHasNextPageOk() (*bool, bool)`

GetHasNextPageOk returns a tuple with the HasNextPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNextPage

`func (o *GetUserWhitelistPixKey200ResponsePageInfo) SetHasNextPage(v bool)`

SetHasNextPage sets HasNextPage field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


