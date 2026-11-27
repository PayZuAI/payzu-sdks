# GetUserWhitelistCnpj200ResponseDataInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Cnpj** | **string** |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**Active** | **bool** |  | 
**CreatedAt** | **time.Time** |  | 

## Methods

### NewGetUserWhitelistCnpj200ResponseDataInner

`func NewGetUserWhitelistCnpj200ResponseDataInner(id string, cnpj string, active bool, createdAt time.Time, ) *GetUserWhitelistCnpj200ResponseDataInner`

NewGetUserWhitelistCnpj200ResponseDataInner instantiates a new GetUserWhitelistCnpj200ResponseDataInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserWhitelistCnpj200ResponseDataInnerWithDefaults

`func NewGetUserWhitelistCnpj200ResponseDataInnerWithDefaults() *GetUserWhitelistCnpj200ResponseDataInner`

NewGetUserWhitelistCnpj200ResponseDataInnerWithDefaults instantiates a new GetUserWhitelistCnpj200ResponseDataInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetUserWhitelistCnpj200ResponseDataInner) SetId(v string)`

SetId sets Id field to given value.


### GetCnpj

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetCnpj() string`

GetCnpj returns the Cnpj field if non-nil, zero value otherwise.

### GetCnpjOk

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetCnpjOk() (*string, bool)`

GetCnpjOk returns a tuple with the Cnpj field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCnpj

`func (o *GetUserWhitelistCnpj200ResponseDataInner) SetCnpj(v string)`

SetCnpj sets Cnpj field to given value.


### GetDescription

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GetUserWhitelistCnpj200ResponseDataInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GetUserWhitelistCnpj200ResponseDataInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *GetUserWhitelistCnpj200ResponseDataInner) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *GetUserWhitelistCnpj200ResponseDataInner) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetActive

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *GetUserWhitelistCnpj200ResponseDataInner) SetActive(v bool)`

SetActive sets Active field to given value.


### GetCreatedAt

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetUserWhitelistCnpj200ResponseDataInner) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetUserWhitelistCnpj200ResponseDataInner) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


