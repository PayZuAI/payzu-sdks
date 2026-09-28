# DefenseHistoryEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Defense identifier. | [optional] 
**Defense** | Pointer to **string** | Defense text | [optional] 
**Status** | Pointer to **string** | Defense status | [optional] 
**CreatedAt** | Pointer to **time.Time** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Moment of the last change to the defense. | [optional] 
**Files** | Pointer to [**[]DefenseHistoryEntryFilesInner**](DefenseHistoryEntryFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional] 

## Methods

### NewDefenseHistoryEntry

`func NewDefenseHistoryEntry() *DefenseHistoryEntry`

NewDefenseHistoryEntry instantiates a new DefenseHistoryEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefenseHistoryEntryWithDefaults

`func NewDefenseHistoryEntryWithDefaults() *DefenseHistoryEntry`

NewDefenseHistoryEntryWithDefaults instantiates a new DefenseHistoryEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DefenseHistoryEntry) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DefenseHistoryEntry) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DefenseHistoryEntry) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DefenseHistoryEntry) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDefense

`func (o *DefenseHistoryEntry) GetDefense() string`

GetDefense returns the Defense field if non-nil, zero value otherwise.

### GetDefenseOk

`func (o *DefenseHistoryEntry) GetDefenseOk() (*string, bool)`

GetDefenseOk returns a tuple with the Defense field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefense

`func (o *DefenseHistoryEntry) SetDefense(v string)`

SetDefense sets Defense field to given value.

### HasDefense

`func (o *DefenseHistoryEntry) HasDefense() bool`

HasDefense returns a boolean if a field has been set.

### GetStatus

`func (o *DefenseHistoryEntry) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DefenseHistoryEntry) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DefenseHistoryEntry) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DefenseHistoryEntry) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreatedAt

`func (o *DefenseHistoryEntry) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DefenseHistoryEntry) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DefenseHistoryEntry) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DefenseHistoryEntry) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *DefenseHistoryEntry) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DefenseHistoryEntry) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DefenseHistoryEntry) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *DefenseHistoryEntry) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetFiles

`func (o *DefenseHistoryEntry) GetFiles() []DefenseHistoryEntryFilesInner`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *DefenseHistoryEntry) GetFilesOk() (*[]DefenseHistoryEntryFilesInner, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *DefenseHistoryEntry) SetFiles(v []DefenseHistoryEntryFilesInner)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *DefenseHistoryEntry) HasFiles() bool`

HasFiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


