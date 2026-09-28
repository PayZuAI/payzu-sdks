# DefenseHistoryEntryFilesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the file sent with the defense. | [optional] 
**MimeType** | Pointer to **string** | MIME type of the file, provided on upload, for example application/pdf or image/png. | [optional] 
**Size** | Pointer to **int32** | Size of the file in bytes. | [optional] 

## Methods

### NewDefenseHistoryEntryFilesInner

`func NewDefenseHistoryEntryFilesInner() *DefenseHistoryEntryFilesInner`

NewDefenseHistoryEntryFilesInner instantiates a new DefenseHistoryEntryFilesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefenseHistoryEntryFilesInnerWithDefaults

`func NewDefenseHistoryEntryFilesInnerWithDefaults() *DefenseHistoryEntryFilesInner`

NewDefenseHistoryEntryFilesInnerWithDefaults instantiates a new DefenseHistoryEntryFilesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DefenseHistoryEntryFilesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DefenseHistoryEntryFilesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DefenseHistoryEntryFilesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DefenseHistoryEntryFilesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMimeType

`func (o *DefenseHistoryEntryFilesInner) GetMimeType() string`

GetMimeType returns the MimeType field if non-nil, zero value otherwise.

### GetMimeTypeOk

`func (o *DefenseHistoryEntryFilesInner) GetMimeTypeOk() (*string, bool)`

GetMimeTypeOk returns a tuple with the MimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMimeType

`func (o *DefenseHistoryEntryFilesInner) SetMimeType(v string)`

SetMimeType sets MimeType field to given value.

### HasMimeType

`func (o *DefenseHistoryEntryFilesInner) HasMimeType() bool`

HasMimeType returns a boolean if a field has been set.

### GetSize

`func (o *DefenseHistoryEntryFilesInner) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *DefenseHistoryEntryFilesInner) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *DefenseHistoryEntryFilesInner) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *DefenseHistoryEntryFilesInner) HasSize() bool`

HasSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


