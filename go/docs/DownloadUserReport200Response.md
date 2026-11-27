# DownloadUserReport200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | Pointer to **string** | URL assinada de curta duração para baixar o CSV (validade de 5 min) | [optional] 
**ExpiresAt** | Pointer to **time.Time** | Quando a URL assinada expira | [optional] 

## Methods

### NewDownloadUserReport200Response

`func NewDownloadUserReport200Response() *DownloadUserReport200Response`

NewDownloadUserReport200Response instantiates a new DownloadUserReport200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDownloadUserReport200ResponseWithDefaults

`func NewDownloadUserReport200ResponseWithDefaults() *DownloadUserReport200Response`

NewDownloadUserReport200ResponseWithDefaults instantiates a new DownloadUserReport200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *DownloadUserReport200Response) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *DownloadUserReport200Response) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *DownloadUserReport200Response) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *DownloadUserReport200Response) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetExpiresAt

`func (o *DownloadUserReport200Response) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *DownloadUserReport200Response) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *DownloadUserReport200Response) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *DownloadUserReport200Response) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


