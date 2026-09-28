# Defense

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Defense identifier. | [optional] 
**Defense** | Pointer to **string** | Defense text | [optional] 
**Status** | Pointer to **string** | Defense status | [optional] 
**InfractionId** | Pointer to **string** | Identifies the infraction the defense belongs to. | [optional] 
**CreatedAt** | Pointer to **time.Time** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Moment of the last change to the defense. | [optional] 
**Files** | Pointer to [**[]DefenseFilesInner**](DefenseFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional] 

## Methods

### NewDefense

`func NewDefense() *Defense`

NewDefense instantiates a new Defense object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefenseWithDefaults

`func NewDefenseWithDefaults() *Defense`

NewDefenseWithDefaults instantiates a new Defense object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Defense) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Defense) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Defense) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Defense) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDefense

`func (o *Defense) GetDefense() string`

GetDefense returns the Defense field if non-nil, zero value otherwise.

### GetDefenseOk

`func (o *Defense) GetDefenseOk() (*string, bool)`

GetDefenseOk returns a tuple with the Defense field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefense

`func (o *Defense) SetDefense(v string)`

SetDefense sets Defense field to given value.

### HasDefense

`func (o *Defense) HasDefense() bool`

HasDefense returns a boolean if a field has been set.

### GetStatus

`func (o *Defense) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Defense) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Defense) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Defense) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetInfractionId

`func (o *Defense) GetInfractionId() string`

GetInfractionId returns the InfractionId field if non-nil, zero value otherwise.

### GetInfractionIdOk

`func (o *Defense) GetInfractionIdOk() (*string, bool)`

GetInfractionIdOk returns a tuple with the InfractionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfractionId

`func (o *Defense) SetInfractionId(v string)`

SetInfractionId sets InfractionId field to given value.

### HasInfractionId

`func (o *Defense) HasInfractionId() bool`

HasInfractionId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Defense) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Defense) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Defense) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Defense) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Defense) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Defense) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Defense) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Defense) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetFiles

`func (o *Defense) GetFiles() []DefenseFilesInner`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *Defense) GetFilesOk() (*[]DefenseFilesInner, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *Defense) SetFiles(v []DefenseFilesInner)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *Defense) HasFiles() bool`

HasFiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


