# PixKeyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PixKey** | Pointer to **string** | The Pix key that was looked up. | [optional] 
**Document** | Pointer to **string** | CPF or CNPJ of the owner (partially masked for privacy). | [optional] 
**Name** | Pointer to **string** | Name of the Pix key owner. | [optional] 
**Branch** | Pointer to **string** | Bank branch number (masked). | [optional] 
**AccountNumber** | Pointer to **string** | Account number (masked). | [optional] 
**PersonType** | Pointer to **string** | Type of person: PF, PJ, or empty when not informed. | [optional] 
**AccountType** | Pointer to **string** | Account type returned by DICT, such as CACC, SVGS, TRAN or SLRY. | [optional] 
**InstitutionIspb** | Pointer to **string** | ISPB code of the financial institution. | [optional] 
**InstitutionCode** | Pointer to **string** | COMPE code of the financial institution. | [optional] 
**InstitutionName** | Pointer to **string** | Name of the financial institution. | [optional] 

## Methods

### NewPixKeyInfo

`func NewPixKeyInfo() *PixKeyInfo`

NewPixKeyInfo instantiates a new PixKeyInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPixKeyInfoWithDefaults

`func NewPixKeyInfoWithDefaults() *PixKeyInfo`

NewPixKeyInfoWithDefaults instantiates a new PixKeyInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPixKey

`func (o *PixKeyInfo) GetPixKey() string`

GetPixKey returns the PixKey field if non-nil, zero value otherwise.

### GetPixKeyOk

`func (o *PixKeyInfo) GetPixKeyOk() (*string, bool)`

GetPixKeyOk returns a tuple with the PixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPixKey

`func (o *PixKeyInfo) SetPixKey(v string)`

SetPixKey sets PixKey field to given value.

### HasPixKey

`func (o *PixKeyInfo) HasPixKey() bool`

HasPixKey returns a boolean if a field has been set.

### GetDocument

`func (o *PixKeyInfo) GetDocument() string`

GetDocument returns the Document field if non-nil, zero value otherwise.

### GetDocumentOk

`func (o *PixKeyInfo) GetDocumentOk() (*string, bool)`

GetDocumentOk returns a tuple with the Document field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocument

`func (o *PixKeyInfo) SetDocument(v string)`

SetDocument sets Document field to given value.

### HasDocument

`func (o *PixKeyInfo) HasDocument() bool`

HasDocument returns a boolean if a field has been set.

### GetName

`func (o *PixKeyInfo) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PixKeyInfo) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PixKeyInfo) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PixKeyInfo) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBranch

`func (o *PixKeyInfo) GetBranch() string`

GetBranch returns the Branch field if non-nil, zero value otherwise.

### GetBranchOk

`func (o *PixKeyInfo) GetBranchOk() (*string, bool)`

GetBranchOk returns a tuple with the Branch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranch

`func (o *PixKeyInfo) SetBranch(v string)`

SetBranch sets Branch field to given value.

### HasBranch

`func (o *PixKeyInfo) HasBranch() bool`

HasBranch returns a boolean if a field has been set.

### GetAccountNumber

`func (o *PixKeyInfo) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *PixKeyInfo) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *PixKeyInfo) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *PixKeyInfo) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### GetPersonType

`func (o *PixKeyInfo) GetPersonType() string`

GetPersonType returns the PersonType field if non-nil, zero value otherwise.

### GetPersonTypeOk

`func (o *PixKeyInfo) GetPersonTypeOk() (*string, bool)`

GetPersonTypeOk returns a tuple with the PersonType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonType

`func (o *PixKeyInfo) SetPersonType(v string)`

SetPersonType sets PersonType field to given value.

### HasPersonType

`func (o *PixKeyInfo) HasPersonType() bool`

HasPersonType returns a boolean if a field has been set.

### GetAccountType

`func (o *PixKeyInfo) GetAccountType() string`

GetAccountType returns the AccountType field if non-nil, zero value otherwise.

### GetAccountTypeOk

`func (o *PixKeyInfo) GetAccountTypeOk() (*string, bool)`

GetAccountTypeOk returns a tuple with the AccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountType

`func (o *PixKeyInfo) SetAccountType(v string)`

SetAccountType sets AccountType field to given value.

### HasAccountType

`func (o *PixKeyInfo) HasAccountType() bool`

HasAccountType returns a boolean if a field has been set.

### GetInstitutionIspb

`func (o *PixKeyInfo) GetInstitutionIspb() string`

GetInstitutionIspb returns the InstitutionIspb field if non-nil, zero value otherwise.

### GetInstitutionIspbOk

`func (o *PixKeyInfo) GetInstitutionIspbOk() (*string, bool)`

GetInstitutionIspbOk returns a tuple with the InstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstitutionIspb

`func (o *PixKeyInfo) SetInstitutionIspb(v string)`

SetInstitutionIspb sets InstitutionIspb field to given value.

### HasInstitutionIspb

`func (o *PixKeyInfo) HasInstitutionIspb() bool`

HasInstitutionIspb returns a boolean if a field has been set.

### GetInstitutionCode

`func (o *PixKeyInfo) GetInstitutionCode() string`

GetInstitutionCode returns the InstitutionCode field if non-nil, zero value otherwise.

### GetInstitutionCodeOk

`func (o *PixKeyInfo) GetInstitutionCodeOk() (*string, bool)`

GetInstitutionCodeOk returns a tuple with the InstitutionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstitutionCode

`func (o *PixKeyInfo) SetInstitutionCode(v string)`

SetInstitutionCode sets InstitutionCode field to given value.

### HasInstitutionCode

`func (o *PixKeyInfo) HasInstitutionCode() bool`

HasInstitutionCode returns a boolean if a field has been set.

### GetInstitutionName

`func (o *PixKeyInfo) GetInstitutionName() string`

GetInstitutionName returns the InstitutionName field if non-nil, zero value otherwise.

### GetInstitutionNameOk

`func (o *PixKeyInfo) GetInstitutionNameOk() (*string, bool)`

GetInstitutionNameOk returns a tuple with the InstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstitutionName

`func (o *PixKeyInfo) SetInstitutionName(v string)`

SetInstitutionName sets InstitutionName field to given value.

### HasInstitutionName

`func (o *PixKeyInfo) HasInstitutionName() bool`

HasInstitutionName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


