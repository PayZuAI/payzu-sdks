# DefenseListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identificador da defesa. | [optional] 
**Defense** | Pointer to **string** | Texto da defesa | [optional] 
**Status** | Pointer to **string** | Status da defesa | [optional] 
**InfractionId** | Pointer to **string** | Identifica a contestação a que a defesa pertence. | [optional] 
**CreatedAt** | Pointer to **time.Time** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Momento da última alteração da defesa. | [optional] 
**Files** | Pointer to [**[]DefenseHistoryEntryFilesInner**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes, sem o link de download. | [optional] 

## Methods

### NewDefenseListItem

`func NewDefenseListItem() *DefenseListItem`

NewDefenseListItem instantiates a new DefenseListItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefenseListItemWithDefaults

`func NewDefenseListItemWithDefaults() *DefenseListItem`

NewDefenseListItemWithDefaults instantiates a new DefenseListItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DefenseListItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DefenseListItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DefenseListItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DefenseListItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDefense

`func (o *DefenseListItem) GetDefense() string`

GetDefense returns the Defense field if non-nil, zero value otherwise.

### GetDefenseOk

`func (o *DefenseListItem) GetDefenseOk() (*string, bool)`

GetDefenseOk returns a tuple with the Defense field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefense

`func (o *DefenseListItem) SetDefense(v string)`

SetDefense sets Defense field to given value.

### HasDefense

`func (o *DefenseListItem) HasDefense() bool`

HasDefense returns a boolean if a field has been set.

### GetStatus

`func (o *DefenseListItem) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DefenseListItem) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DefenseListItem) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DefenseListItem) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetInfractionId

`func (o *DefenseListItem) GetInfractionId() string`

GetInfractionId returns the InfractionId field if non-nil, zero value otherwise.

### GetInfractionIdOk

`func (o *DefenseListItem) GetInfractionIdOk() (*string, bool)`

GetInfractionIdOk returns a tuple with the InfractionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfractionId

`func (o *DefenseListItem) SetInfractionId(v string)`

SetInfractionId sets InfractionId field to given value.

### HasInfractionId

`func (o *DefenseListItem) HasInfractionId() bool`

HasInfractionId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *DefenseListItem) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DefenseListItem) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DefenseListItem) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DefenseListItem) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *DefenseListItem) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DefenseListItem) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DefenseListItem) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *DefenseListItem) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetFiles

`func (o *DefenseListItem) GetFiles() []DefenseHistoryEntryFilesInner`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *DefenseListItem) GetFilesOk() (*[]DefenseHistoryEntryFilesInner, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *DefenseListItem) SetFiles(v []DefenseHistoryEntryFilesInner)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *DefenseListItem) HasFiles() bool`

HasFiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


