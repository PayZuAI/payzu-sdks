# DefenseFilesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the file sent with the defense. | [optional] 
**MimeType** | Pointer to **string** | MIME type of the file, provided on upload, for example application/pdf or image/png. | [optional] 
**Size** | Pointer to **int32** | Size of the file in bytes. | [optional] 
**Url** | Pointer to **NullableString** | Signed download URL, valid for 9 minutes; null when unavailable. Returned when creating the defense and when fetching a single defense. | [optional] 

## Methods

### NewDefenseFilesInner

`func NewDefenseFilesInner() *DefenseFilesInner`

NewDefenseFilesInner instantiates a new DefenseFilesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefenseFilesInnerWithDefaults

`func NewDefenseFilesInnerWithDefaults() *DefenseFilesInner`

NewDefenseFilesInnerWithDefaults instantiates a new DefenseFilesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DefenseFilesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DefenseFilesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DefenseFilesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DefenseFilesInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMimeType

`func (o *DefenseFilesInner) GetMimeType() string`

GetMimeType returns the MimeType field if non-nil, zero value otherwise.

### GetMimeTypeOk

`func (o *DefenseFilesInner) GetMimeTypeOk() (*string, bool)`

GetMimeTypeOk returns a tuple with the MimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMimeType

`func (o *DefenseFilesInner) SetMimeType(v string)`

SetMimeType sets MimeType field to given value.

### HasMimeType

`func (o *DefenseFilesInner) HasMimeType() bool`

HasMimeType returns a boolean if a field has been set.

### GetSize

`func (o *DefenseFilesInner) GetSize() int32`

GetSize returns the Size field if non-nil, zero value otherwise.

### GetSizeOk

`func (o *DefenseFilesInner) GetSizeOk() (*int32, bool)`

GetSizeOk returns a tuple with the Size field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSize

`func (o *DefenseFilesInner) SetSize(v int32)`

SetSize sets Size field to given value.

### HasSize

`func (o *DefenseFilesInner) HasSize() bool`

HasSize returns a boolean if a field has been set.

### GetUrl

`func (o *DefenseFilesInner) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *DefenseFilesInner) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *DefenseFilesInner) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *DefenseFilesInner) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### SetUrlNil

`func (o *DefenseFilesInner) SetUrlNil(b bool)`

 SetUrlNil sets the value for Url to be an explicit nil

### UnsetUrl
`func (o *DefenseFilesInner) UnsetUrl()`

UnsetUrl ensures that no value is present for Url, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


