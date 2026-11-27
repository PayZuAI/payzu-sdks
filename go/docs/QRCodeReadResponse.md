# QRCodeReadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QrCodeType** | Pointer to **string** | Tipo de QR Code. | [optional] 
**Name** | Pointer to **NullableString** | Nome do recebedor do pagamento. | [optional] 
**Document** | Pointer to **NullableString** | CPF ou CNPJ do recebedor. | [optional] 
**Amount** | Pointer to **NullableFloat32** | Valor a ser pago. | [optional] 
**OriginalAmount** | Pointer to **NullableFloat32** | Valor embutido no QR Code. | [optional] 
**Txid** | Pointer to **NullableString** | Identificador da transação. | [optional] 
**AdditionalInfo** | Pointer to **NullableString** | Informações adicionais ou descrição. | [optional] 
**ExpiresIn** | Pointer to **NullableFloat32** | Segundos até o QR Code expirar (0 para QR Codes estáticos). | [optional] 
**CreatedAt** | Pointer to **NullableString** | Data de criação do QR Code dinâmico, como veio no QR Code: o horário pode vir sem fuso. | [optional] 
**AmountEditable** | Pointer to **NullableBool** | Indica se o pagador pode alterar o valor. | [optional] 
**DueDate** | Pointer to **NullableString** | Data de vencimento da cobrança, quando o QR Code tiver. | [optional] 

## Methods

### NewQRCodeReadResponse

`func NewQRCodeReadResponse() *QRCodeReadResponse`

NewQRCodeReadResponse instantiates a new QRCodeReadResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQRCodeReadResponseWithDefaults

`func NewQRCodeReadResponseWithDefaults() *QRCodeReadResponse`

NewQRCodeReadResponseWithDefaults instantiates a new QRCodeReadResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQrCodeType

`func (o *QRCodeReadResponse) GetQrCodeType() string`

GetQrCodeType returns the QrCodeType field if non-nil, zero value otherwise.

### GetQrCodeTypeOk

`func (o *QRCodeReadResponse) GetQrCodeTypeOk() (*string, bool)`

GetQrCodeTypeOk returns a tuple with the QrCodeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeType

`func (o *QRCodeReadResponse) SetQrCodeType(v string)`

SetQrCodeType sets QrCodeType field to given value.

### HasQrCodeType

`func (o *QRCodeReadResponse) HasQrCodeType() bool`

HasQrCodeType returns a boolean if a field has been set.

### GetName

`func (o *QRCodeReadResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *QRCodeReadResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *QRCodeReadResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *QRCodeReadResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *QRCodeReadResponse) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *QRCodeReadResponse) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetDocument

`func (o *QRCodeReadResponse) GetDocument() string`

GetDocument returns the Document field if non-nil, zero value otherwise.

### GetDocumentOk

`func (o *QRCodeReadResponse) GetDocumentOk() (*string, bool)`

GetDocumentOk returns a tuple with the Document field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocument

`func (o *QRCodeReadResponse) SetDocument(v string)`

SetDocument sets Document field to given value.

### HasDocument

`func (o *QRCodeReadResponse) HasDocument() bool`

HasDocument returns a boolean if a field has been set.

### SetDocumentNil

`func (o *QRCodeReadResponse) SetDocumentNil(b bool)`

 SetDocumentNil sets the value for Document to be an explicit nil

### UnsetDocument
`func (o *QRCodeReadResponse) UnsetDocument()`

UnsetDocument ensures that no value is present for Document, not even an explicit nil
### GetAmount

`func (o *QRCodeReadResponse) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *QRCodeReadResponse) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *QRCodeReadResponse) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *QRCodeReadResponse) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### SetAmountNil

`func (o *QRCodeReadResponse) SetAmountNil(b bool)`

 SetAmountNil sets the value for Amount to be an explicit nil

### UnsetAmount
`func (o *QRCodeReadResponse) UnsetAmount()`

UnsetAmount ensures that no value is present for Amount, not even an explicit nil
### GetOriginalAmount

`func (o *QRCodeReadResponse) GetOriginalAmount() float32`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *QRCodeReadResponse) GetOriginalAmountOk() (*float32, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *QRCodeReadResponse) SetOriginalAmount(v float32)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *QRCodeReadResponse) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### SetOriginalAmountNil

`func (o *QRCodeReadResponse) SetOriginalAmountNil(b bool)`

 SetOriginalAmountNil sets the value for OriginalAmount to be an explicit nil

### UnsetOriginalAmount
`func (o *QRCodeReadResponse) UnsetOriginalAmount()`

UnsetOriginalAmount ensures that no value is present for OriginalAmount, not even an explicit nil
### GetTxid

`func (o *QRCodeReadResponse) GetTxid() string`

GetTxid returns the Txid field if non-nil, zero value otherwise.

### GetTxidOk

`func (o *QRCodeReadResponse) GetTxidOk() (*string, bool)`

GetTxidOk returns a tuple with the Txid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxid

`func (o *QRCodeReadResponse) SetTxid(v string)`

SetTxid sets Txid field to given value.

### HasTxid

`func (o *QRCodeReadResponse) HasTxid() bool`

HasTxid returns a boolean if a field has been set.

### SetTxidNil

`func (o *QRCodeReadResponse) SetTxidNil(b bool)`

 SetTxidNil sets the value for Txid to be an explicit nil

### UnsetTxid
`func (o *QRCodeReadResponse) UnsetTxid()`

UnsetTxid ensures that no value is present for Txid, not even an explicit nil
### GetAdditionalInfo

`func (o *QRCodeReadResponse) GetAdditionalInfo() string`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *QRCodeReadResponse) GetAdditionalInfoOk() (*string, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *QRCodeReadResponse) SetAdditionalInfo(v string)`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *QRCodeReadResponse) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.

### SetAdditionalInfoNil

`func (o *QRCodeReadResponse) SetAdditionalInfoNil(b bool)`

 SetAdditionalInfoNil sets the value for AdditionalInfo to be an explicit nil

### UnsetAdditionalInfo
`func (o *QRCodeReadResponse) UnsetAdditionalInfo()`

UnsetAdditionalInfo ensures that no value is present for AdditionalInfo, not even an explicit nil
### GetExpiresIn

`func (o *QRCodeReadResponse) GetExpiresIn() float32`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *QRCodeReadResponse) GetExpiresInOk() (*float32, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *QRCodeReadResponse) SetExpiresIn(v float32)`

SetExpiresIn sets ExpiresIn field to given value.

### HasExpiresIn

`func (o *QRCodeReadResponse) HasExpiresIn() bool`

HasExpiresIn returns a boolean if a field has been set.

### SetExpiresInNil

`func (o *QRCodeReadResponse) SetExpiresInNil(b bool)`

 SetExpiresInNil sets the value for ExpiresIn to be an explicit nil

### UnsetExpiresIn
`func (o *QRCodeReadResponse) UnsetExpiresIn()`

UnsetExpiresIn ensures that no value is present for ExpiresIn, not even an explicit nil
### GetCreatedAt

`func (o *QRCodeReadResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *QRCodeReadResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *QRCodeReadResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *QRCodeReadResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *QRCodeReadResponse) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *QRCodeReadResponse) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetAmountEditable

`func (o *QRCodeReadResponse) GetAmountEditable() bool`

GetAmountEditable returns the AmountEditable field if non-nil, zero value otherwise.

### GetAmountEditableOk

`func (o *QRCodeReadResponse) GetAmountEditableOk() (*bool, bool)`

GetAmountEditableOk returns a tuple with the AmountEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountEditable

`func (o *QRCodeReadResponse) SetAmountEditable(v bool)`

SetAmountEditable sets AmountEditable field to given value.

### HasAmountEditable

`func (o *QRCodeReadResponse) HasAmountEditable() bool`

HasAmountEditable returns a boolean if a field has been set.

### SetAmountEditableNil

`func (o *QRCodeReadResponse) SetAmountEditableNil(b bool)`

 SetAmountEditableNil sets the value for AmountEditable to be an explicit nil

### UnsetAmountEditable
`func (o *QRCodeReadResponse) UnsetAmountEditable()`

UnsetAmountEditable ensures that no value is present for AmountEditable, not even an explicit nil
### GetDueDate

`func (o *QRCodeReadResponse) GetDueDate() string`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *QRCodeReadResponse) GetDueDateOk() (*string, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *QRCodeReadResponse) SetDueDate(v string)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *QRCodeReadResponse) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### SetDueDateNil

`func (o *QRCodeReadResponse) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *QRCodeReadResponse) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


