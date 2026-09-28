# Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identifier of the transaction at PayZu. | [optional] 
**Status** | Pointer to **string** | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR | [optional] 
**Amount** | Pointer to **float32** | Amount of the transaction, before the fee. | [optional] 
**Type** | Pointer to **string** | Transaction type: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION or ADJUSTMENT. | [optional] 
**QrCodeText** | Pointer to **NullableString** | Copy-and-paste Pix code. | [optional] 
**QrCodeBase64** | Pointer to **NullableString** | PNG image of the QR Code in base64, without the data: prefix. | [optional] 
**QrCodeUrl** | Pointer to **NullableString** | Authenticated route that returns the PNG of the QR Code. | [optional] 
**GeneratedName** | Pointer to **NullableString** | Name used to build the charge. | [optional] 
**GeneratedDocument** | Pointer to **NullableString** | CPF or CNPJ used as the debtor of the charge. | [optional] 
**GeneratedEmail** | Pointer to **NullableString** | Email used to build the charge. | [optional] 
**PayerName** | Pointer to **NullableString** | Name of the holder of the account that sent the Pix, as reported by the originating institution. | [optional] 
**PayerDocument** | Pointer to **NullableString** | CPF or CNPJ of the payer of the Pix, reported by the originating institution. | [optional] 
**PayerInstitutionIspb** | Pointer to **NullableString** | ISPB code of the institution the Pix was sent from. | [optional] 
**PayerInstitutionName** | Pointer to **NullableString** | Name of the institution the Pix was sent from. | [optional] 
**PayerAccountNumber** | Pointer to **NullableString** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. | [optional] 
**ServiceFeeCharged** | Pointer to **NullableFloat32** | PayZu fee charged on the operation, in reais. It may carry more than two decimal places — do not round when reconciling. | [optional] 
**WithdrawPixKey** | Pointer to **NullableString** | Destination Pix key of the withdrawal, already normalized. | [optional] 
**WithdrawPixType** | Pointer to **NullableString** | Type of the destination key of the withdrawal, with evp being the random key. | [optional] 
**ReceiverName** | Pointer to **NullableString** | Name of the holder of the receiving account. | [optional] 
**ReceiverDocument** | Pointer to **NullableString** | CPF or CNPJ of the receiver. | [optional] 
**ReceiverInstitutionIspb** | Pointer to **NullableString** | ISPB code of the institution that receives the Pix. | [optional] 
**ReceiverInstitutionName** | Pointer to **NullableString** | Name of the institution that receives the Pix. | [optional] 
**ReceiverAccountNumber** | Pointer to **NullableString** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. | [optional] 
**EndToEndId** | Pointer to **NullableString** | Identifier of the Pix in the Bacen arrangement, used to track the settlement and request a return. | [optional] 
**CreatedAt** | Pointer to **string** | Date and time the transaction was recorded. | [optional] 
**UpdatedAt** | Pointer to **string** | Date and time of the last change. | [optional] 
**PaidAt** | Pointer to **NullableString** | Date and time the Pix was settled, reported by the institution. | [optional] 
**ClientReference** | Pointer to **NullableString** | Your identifier of the transaction, returned in queries and callbacks. | [optional] 
**RefundEndToEndId** | Pointer to **NullableString** | End-to-end ID of the refund transaction | [optional] 
**RefundAmount** | Pointer to **NullableFloat32** | Amount refunded | [optional] 
**RefundStatus** | Pointer to **NullableString** | Refund status: PENDING, COMPLETED or CANCELED. | [optional] 
**RefundReason** | Pointer to **NullableString** | Reason for the refund | [optional] 
**RefundDescription** | Pointer to **NullableString** | Description of the refund | [optional] 
**RefundedAt** | Pointer to **NullableString** | Date and time when the refund was processed | [optional] 
**CancellationReason** | Pointer to **NullableString** | Reason for cancellation (if cancelled) | [optional] 
**VirtualAccount** | Pointer to **NullableString** | Virtual sub-account provided at creation. | [optional] 
**Method** | Pointer to **string** | Transaction method/rail. | [optional] 

## Methods

### NewTransaction

`func NewTransaction() *Transaction`

NewTransaction instantiates a new Transaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionWithDefaults

`func NewTransactionWithDefaults() *Transaction`

NewTransactionWithDefaults instantiates a new Transaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Transaction) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Transaction) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Transaction) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Transaction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *Transaction) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Transaction) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Transaction) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Transaction) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAmount

`func (o *Transaction) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Transaction) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Transaction) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *Transaction) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetType

`func (o *Transaction) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Transaction) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Transaction) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Transaction) HasType() bool`

HasType returns a boolean if a field has been set.

### GetQrCodeText

`func (o *Transaction) GetQrCodeText() string`

GetQrCodeText returns the QrCodeText field if non-nil, zero value otherwise.

### GetQrCodeTextOk

`func (o *Transaction) GetQrCodeTextOk() (*string, bool)`

GetQrCodeTextOk returns a tuple with the QrCodeText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeText

`func (o *Transaction) SetQrCodeText(v string)`

SetQrCodeText sets QrCodeText field to given value.

### HasQrCodeText

`func (o *Transaction) HasQrCodeText() bool`

HasQrCodeText returns a boolean if a field has been set.

### SetQrCodeTextNil

`func (o *Transaction) SetQrCodeTextNil(b bool)`

 SetQrCodeTextNil sets the value for QrCodeText to be an explicit nil

### UnsetQrCodeText
`func (o *Transaction) UnsetQrCodeText()`

UnsetQrCodeText ensures that no value is present for QrCodeText, not even an explicit nil
### GetQrCodeBase64

`func (o *Transaction) GetQrCodeBase64() string`

GetQrCodeBase64 returns the QrCodeBase64 field if non-nil, zero value otherwise.

### GetQrCodeBase64Ok

`func (o *Transaction) GetQrCodeBase64Ok() (*string, bool)`

GetQrCodeBase64Ok returns a tuple with the QrCodeBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeBase64

`func (o *Transaction) SetQrCodeBase64(v string)`

SetQrCodeBase64 sets QrCodeBase64 field to given value.

### HasQrCodeBase64

`func (o *Transaction) HasQrCodeBase64() bool`

HasQrCodeBase64 returns a boolean if a field has been set.

### SetQrCodeBase64Nil

`func (o *Transaction) SetQrCodeBase64Nil(b bool)`

 SetQrCodeBase64Nil sets the value for QrCodeBase64 to be an explicit nil

### UnsetQrCodeBase64
`func (o *Transaction) UnsetQrCodeBase64()`

UnsetQrCodeBase64 ensures that no value is present for QrCodeBase64, not even an explicit nil
### GetQrCodeUrl

`func (o *Transaction) GetQrCodeUrl() string`

GetQrCodeUrl returns the QrCodeUrl field if non-nil, zero value otherwise.

### GetQrCodeUrlOk

`func (o *Transaction) GetQrCodeUrlOk() (*string, bool)`

GetQrCodeUrlOk returns a tuple with the QrCodeUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeUrl

`func (o *Transaction) SetQrCodeUrl(v string)`

SetQrCodeUrl sets QrCodeUrl field to given value.

### HasQrCodeUrl

`func (o *Transaction) HasQrCodeUrl() bool`

HasQrCodeUrl returns a boolean if a field has been set.

### SetQrCodeUrlNil

`func (o *Transaction) SetQrCodeUrlNil(b bool)`

 SetQrCodeUrlNil sets the value for QrCodeUrl to be an explicit nil

### UnsetQrCodeUrl
`func (o *Transaction) UnsetQrCodeUrl()`

UnsetQrCodeUrl ensures that no value is present for QrCodeUrl, not even an explicit nil
### GetGeneratedName

`func (o *Transaction) GetGeneratedName() string`

GetGeneratedName returns the GeneratedName field if non-nil, zero value otherwise.

### GetGeneratedNameOk

`func (o *Transaction) GetGeneratedNameOk() (*string, bool)`

GetGeneratedNameOk returns a tuple with the GeneratedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedName

`func (o *Transaction) SetGeneratedName(v string)`

SetGeneratedName sets GeneratedName field to given value.

### HasGeneratedName

`func (o *Transaction) HasGeneratedName() bool`

HasGeneratedName returns a boolean if a field has been set.

### SetGeneratedNameNil

`func (o *Transaction) SetGeneratedNameNil(b bool)`

 SetGeneratedNameNil sets the value for GeneratedName to be an explicit nil

### UnsetGeneratedName
`func (o *Transaction) UnsetGeneratedName()`

UnsetGeneratedName ensures that no value is present for GeneratedName, not even an explicit nil
### GetGeneratedDocument

`func (o *Transaction) GetGeneratedDocument() string`

GetGeneratedDocument returns the GeneratedDocument field if non-nil, zero value otherwise.

### GetGeneratedDocumentOk

`func (o *Transaction) GetGeneratedDocumentOk() (*string, bool)`

GetGeneratedDocumentOk returns a tuple with the GeneratedDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedDocument

`func (o *Transaction) SetGeneratedDocument(v string)`

SetGeneratedDocument sets GeneratedDocument field to given value.

### HasGeneratedDocument

`func (o *Transaction) HasGeneratedDocument() bool`

HasGeneratedDocument returns a boolean if a field has been set.

### SetGeneratedDocumentNil

`func (o *Transaction) SetGeneratedDocumentNil(b bool)`

 SetGeneratedDocumentNil sets the value for GeneratedDocument to be an explicit nil

### UnsetGeneratedDocument
`func (o *Transaction) UnsetGeneratedDocument()`

UnsetGeneratedDocument ensures that no value is present for GeneratedDocument, not even an explicit nil
### GetGeneratedEmail

`func (o *Transaction) GetGeneratedEmail() string`

GetGeneratedEmail returns the GeneratedEmail field if non-nil, zero value otherwise.

### GetGeneratedEmailOk

`func (o *Transaction) GetGeneratedEmailOk() (*string, bool)`

GetGeneratedEmailOk returns a tuple with the GeneratedEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedEmail

`func (o *Transaction) SetGeneratedEmail(v string)`

SetGeneratedEmail sets GeneratedEmail field to given value.

### HasGeneratedEmail

`func (o *Transaction) HasGeneratedEmail() bool`

HasGeneratedEmail returns a boolean if a field has been set.

### SetGeneratedEmailNil

`func (o *Transaction) SetGeneratedEmailNil(b bool)`

 SetGeneratedEmailNil sets the value for GeneratedEmail to be an explicit nil

### UnsetGeneratedEmail
`func (o *Transaction) UnsetGeneratedEmail()`

UnsetGeneratedEmail ensures that no value is present for GeneratedEmail, not even an explicit nil
### GetPayerName

`func (o *Transaction) GetPayerName() string`

GetPayerName returns the PayerName field if non-nil, zero value otherwise.

### GetPayerNameOk

`func (o *Transaction) GetPayerNameOk() (*string, bool)`

GetPayerNameOk returns a tuple with the PayerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerName

`func (o *Transaction) SetPayerName(v string)`

SetPayerName sets PayerName field to given value.

### HasPayerName

`func (o *Transaction) HasPayerName() bool`

HasPayerName returns a boolean if a field has been set.

### SetPayerNameNil

`func (o *Transaction) SetPayerNameNil(b bool)`

 SetPayerNameNil sets the value for PayerName to be an explicit nil

### UnsetPayerName
`func (o *Transaction) UnsetPayerName()`

UnsetPayerName ensures that no value is present for PayerName, not even an explicit nil
### GetPayerDocument

`func (o *Transaction) GetPayerDocument() string`

GetPayerDocument returns the PayerDocument field if non-nil, zero value otherwise.

### GetPayerDocumentOk

`func (o *Transaction) GetPayerDocumentOk() (*string, bool)`

GetPayerDocumentOk returns a tuple with the PayerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerDocument

`func (o *Transaction) SetPayerDocument(v string)`

SetPayerDocument sets PayerDocument field to given value.

### HasPayerDocument

`func (o *Transaction) HasPayerDocument() bool`

HasPayerDocument returns a boolean if a field has been set.

### SetPayerDocumentNil

`func (o *Transaction) SetPayerDocumentNil(b bool)`

 SetPayerDocumentNil sets the value for PayerDocument to be an explicit nil

### UnsetPayerDocument
`func (o *Transaction) UnsetPayerDocument()`

UnsetPayerDocument ensures that no value is present for PayerDocument, not even an explicit nil
### GetPayerInstitutionIspb

`func (o *Transaction) GetPayerInstitutionIspb() string`

GetPayerInstitutionIspb returns the PayerInstitutionIspb field if non-nil, zero value otherwise.

### GetPayerInstitutionIspbOk

`func (o *Transaction) GetPayerInstitutionIspbOk() (*string, bool)`

GetPayerInstitutionIspbOk returns a tuple with the PayerInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionIspb

`func (o *Transaction) SetPayerInstitutionIspb(v string)`

SetPayerInstitutionIspb sets PayerInstitutionIspb field to given value.

### HasPayerInstitutionIspb

`func (o *Transaction) HasPayerInstitutionIspb() bool`

HasPayerInstitutionIspb returns a boolean if a field has been set.

### SetPayerInstitutionIspbNil

`func (o *Transaction) SetPayerInstitutionIspbNil(b bool)`

 SetPayerInstitutionIspbNil sets the value for PayerInstitutionIspb to be an explicit nil

### UnsetPayerInstitutionIspb
`func (o *Transaction) UnsetPayerInstitutionIspb()`

UnsetPayerInstitutionIspb ensures that no value is present for PayerInstitutionIspb, not even an explicit nil
### GetPayerInstitutionName

`func (o *Transaction) GetPayerInstitutionName() string`

GetPayerInstitutionName returns the PayerInstitutionName field if non-nil, zero value otherwise.

### GetPayerInstitutionNameOk

`func (o *Transaction) GetPayerInstitutionNameOk() (*string, bool)`

GetPayerInstitutionNameOk returns a tuple with the PayerInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionName

`func (o *Transaction) SetPayerInstitutionName(v string)`

SetPayerInstitutionName sets PayerInstitutionName field to given value.

### HasPayerInstitutionName

`func (o *Transaction) HasPayerInstitutionName() bool`

HasPayerInstitutionName returns a boolean if a field has been set.

### SetPayerInstitutionNameNil

`func (o *Transaction) SetPayerInstitutionNameNil(b bool)`

 SetPayerInstitutionNameNil sets the value for PayerInstitutionName to be an explicit nil

### UnsetPayerInstitutionName
`func (o *Transaction) UnsetPayerInstitutionName()`

UnsetPayerInstitutionName ensures that no value is present for PayerInstitutionName, not even an explicit nil
### GetPayerAccountNumber

`func (o *Transaction) GetPayerAccountNumber() string`

GetPayerAccountNumber returns the PayerAccountNumber field if non-nil, zero value otherwise.

### GetPayerAccountNumberOk

`func (o *Transaction) GetPayerAccountNumberOk() (*string, bool)`

GetPayerAccountNumberOk returns a tuple with the PayerAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerAccountNumber

`func (o *Transaction) SetPayerAccountNumber(v string)`

SetPayerAccountNumber sets PayerAccountNumber field to given value.

### HasPayerAccountNumber

`func (o *Transaction) HasPayerAccountNumber() bool`

HasPayerAccountNumber returns a boolean if a field has been set.

### SetPayerAccountNumberNil

`func (o *Transaction) SetPayerAccountNumberNil(b bool)`

 SetPayerAccountNumberNil sets the value for PayerAccountNumber to be an explicit nil

### UnsetPayerAccountNumber
`func (o *Transaction) UnsetPayerAccountNumber()`

UnsetPayerAccountNumber ensures that no value is present for PayerAccountNumber, not even an explicit nil
### GetServiceFeeCharged

`func (o *Transaction) GetServiceFeeCharged() float32`

GetServiceFeeCharged returns the ServiceFeeCharged field if non-nil, zero value otherwise.

### GetServiceFeeChargedOk

`func (o *Transaction) GetServiceFeeChargedOk() (*float32, bool)`

GetServiceFeeChargedOk returns a tuple with the ServiceFeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeCharged

`func (o *Transaction) SetServiceFeeCharged(v float32)`

SetServiceFeeCharged sets ServiceFeeCharged field to given value.

### HasServiceFeeCharged

`func (o *Transaction) HasServiceFeeCharged() bool`

HasServiceFeeCharged returns a boolean if a field has been set.

### SetServiceFeeChargedNil

`func (o *Transaction) SetServiceFeeChargedNil(b bool)`

 SetServiceFeeChargedNil sets the value for ServiceFeeCharged to be an explicit nil

### UnsetServiceFeeCharged
`func (o *Transaction) UnsetServiceFeeCharged()`

UnsetServiceFeeCharged ensures that no value is present for ServiceFeeCharged, not even an explicit nil
### GetWithdrawPixKey

`func (o *Transaction) GetWithdrawPixKey() string`

GetWithdrawPixKey returns the WithdrawPixKey field if non-nil, zero value otherwise.

### GetWithdrawPixKeyOk

`func (o *Transaction) GetWithdrawPixKeyOk() (*string, bool)`

GetWithdrawPixKeyOk returns a tuple with the WithdrawPixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixKey

`func (o *Transaction) SetWithdrawPixKey(v string)`

SetWithdrawPixKey sets WithdrawPixKey field to given value.

### HasWithdrawPixKey

`func (o *Transaction) HasWithdrawPixKey() bool`

HasWithdrawPixKey returns a boolean if a field has been set.

### SetWithdrawPixKeyNil

`func (o *Transaction) SetWithdrawPixKeyNil(b bool)`

 SetWithdrawPixKeyNil sets the value for WithdrawPixKey to be an explicit nil

### UnsetWithdrawPixKey
`func (o *Transaction) UnsetWithdrawPixKey()`

UnsetWithdrawPixKey ensures that no value is present for WithdrawPixKey, not even an explicit nil
### GetWithdrawPixType

`func (o *Transaction) GetWithdrawPixType() string`

GetWithdrawPixType returns the WithdrawPixType field if non-nil, zero value otherwise.

### GetWithdrawPixTypeOk

`func (o *Transaction) GetWithdrawPixTypeOk() (*string, bool)`

GetWithdrawPixTypeOk returns a tuple with the WithdrawPixType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixType

`func (o *Transaction) SetWithdrawPixType(v string)`

SetWithdrawPixType sets WithdrawPixType field to given value.

### HasWithdrawPixType

`func (o *Transaction) HasWithdrawPixType() bool`

HasWithdrawPixType returns a boolean if a field has been set.

### SetWithdrawPixTypeNil

`func (o *Transaction) SetWithdrawPixTypeNil(b bool)`

 SetWithdrawPixTypeNil sets the value for WithdrawPixType to be an explicit nil

### UnsetWithdrawPixType
`func (o *Transaction) UnsetWithdrawPixType()`

UnsetWithdrawPixType ensures that no value is present for WithdrawPixType, not even an explicit nil
### GetReceiverName

`func (o *Transaction) GetReceiverName() string`

GetReceiverName returns the ReceiverName field if non-nil, zero value otherwise.

### GetReceiverNameOk

`func (o *Transaction) GetReceiverNameOk() (*string, bool)`

GetReceiverNameOk returns a tuple with the ReceiverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverName

`func (o *Transaction) SetReceiverName(v string)`

SetReceiverName sets ReceiverName field to given value.

### HasReceiverName

`func (o *Transaction) HasReceiverName() bool`

HasReceiverName returns a boolean if a field has been set.

### SetReceiverNameNil

`func (o *Transaction) SetReceiverNameNil(b bool)`

 SetReceiverNameNil sets the value for ReceiverName to be an explicit nil

### UnsetReceiverName
`func (o *Transaction) UnsetReceiverName()`

UnsetReceiverName ensures that no value is present for ReceiverName, not even an explicit nil
### GetReceiverDocument

`func (o *Transaction) GetReceiverDocument() string`

GetReceiverDocument returns the ReceiverDocument field if non-nil, zero value otherwise.

### GetReceiverDocumentOk

`func (o *Transaction) GetReceiverDocumentOk() (*string, bool)`

GetReceiverDocumentOk returns a tuple with the ReceiverDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverDocument

`func (o *Transaction) SetReceiverDocument(v string)`

SetReceiverDocument sets ReceiverDocument field to given value.

### HasReceiverDocument

`func (o *Transaction) HasReceiverDocument() bool`

HasReceiverDocument returns a boolean if a field has been set.

### SetReceiverDocumentNil

`func (o *Transaction) SetReceiverDocumentNil(b bool)`

 SetReceiverDocumentNil sets the value for ReceiverDocument to be an explicit nil

### UnsetReceiverDocument
`func (o *Transaction) UnsetReceiverDocument()`

UnsetReceiverDocument ensures that no value is present for ReceiverDocument, not even an explicit nil
### GetReceiverInstitutionIspb

`func (o *Transaction) GetReceiverInstitutionIspb() string`

GetReceiverInstitutionIspb returns the ReceiverInstitutionIspb field if non-nil, zero value otherwise.

### GetReceiverInstitutionIspbOk

`func (o *Transaction) GetReceiverInstitutionIspbOk() (*string, bool)`

GetReceiverInstitutionIspbOk returns a tuple with the ReceiverInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionIspb

`func (o *Transaction) SetReceiverInstitutionIspb(v string)`

SetReceiverInstitutionIspb sets ReceiverInstitutionIspb field to given value.

### HasReceiverInstitutionIspb

`func (o *Transaction) HasReceiverInstitutionIspb() bool`

HasReceiverInstitutionIspb returns a boolean if a field has been set.

### SetReceiverInstitutionIspbNil

`func (o *Transaction) SetReceiverInstitutionIspbNil(b bool)`

 SetReceiverInstitutionIspbNil sets the value for ReceiverInstitutionIspb to be an explicit nil

### UnsetReceiverInstitutionIspb
`func (o *Transaction) UnsetReceiverInstitutionIspb()`

UnsetReceiverInstitutionIspb ensures that no value is present for ReceiverInstitutionIspb, not even an explicit nil
### GetReceiverInstitutionName

`func (o *Transaction) GetReceiverInstitutionName() string`

GetReceiverInstitutionName returns the ReceiverInstitutionName field if non-nil, zero value otherwise.

### GetReceiverInstitutionNameOk

`func (o *Transaction) GetReceiverInstitutionNameOk() (*string, bool)`

GetReceiverInstitutionNameOk returns a tuple with the ReceiverInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionName

`func (o *Transaction) SetReceiverInstitutionName(v string)`

SetReceiverInstitutionName sets ReceiverInstitutionName field to given value.

### HasReceiverInstitutionName

`func (o *Transaction) HasReceiverInstitutionName() bool`

HasReceiverInstitutionName returns a boolean if a field has been set.

### SetReceiverInstitutionNameNil

`func (o *Transaction) SetReceiverInstitutionNameNil(b bool)`

 SetReceiverInstitutionNameNil sets the value for ReceiverInstitutionName to be an explicit nil

### UnsetReceiverInstitutionName
`func (o *Transaction) UnsetReceiverInstitutionName()`

UnsetReceiverInstitutionName ensures that no value is present for ReceiverInstitutionName, not even an explicit nil
### GetReceiverAccountNumber

`func (o *Transaction) GetReceiverAccountNumber() string`

GetReceiverAccountNumber returns the ReceiverAccountNumber field if non-nil, zero value otherwise.

### GetReceiverAccountNumberOk

`func (o *Transaction) GetReceiverAccountNumberOk() (*string, bool)`

GetReceiverAccountNumberOk returns a tuple with the ReceiverAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverAccountNumber

`func (o *Transaction) SetReceiverAccountNumber(v string)`

SetReceiverAccountNumber sets ReceiverAccountNumber field to given value.

### HasReceiverAccountNumber

`func (o *Transaction) HasReceiverAccountNumber() bool`

HasReceiverAccountNumber returns a boolean if a field has been set.

### SetReceiverAccountNumberNil

`func (o *Transaction) SetReceiverAccountNumberNil(b bool)`

 SetReceiverAccountNumberNil sets the value for ReceiverAccountNumber to be an explicit nil

### UnsetReceiverAccountNumber
`func (o *Transaction) UnsetReceiverAccountNumber()`

UnsetReceiverAccountNumber ensures that no value is present for ReceiverAccountNumber, not even an explicit nil
### GetEndToEndId

`func (o *Transaction) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *Transaction) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *Transaction) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.

### HasEndToEndId

`func (o *Transaction) HasEndToEndId() bool`

HasEndToEndId returns a boolean if a field has been set.

### SetEndToEndIdNil

`func (o *Transaction) SetEndToEndIdNil(b bool)`

 SetEndToEndIdNil sets the value for EndToEndId to be an explicit nil

### UnsetEndToEndId
`func (o *Transaction) UnsetEndToEndId()`

UnsetEndToEndId ensures that no value is present for EndToEndId, not even an explicit nil
### GetCreatedAt

`func (o *Transaction) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Transaction) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Transaction) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Transaction) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Transaction) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Transaction) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Transaction) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Transaction) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetPaidAt

`func (o *Transaction) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *Transaction) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *Transaction) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *Transaction) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### SetPaidAtNil

`func (o *Transaction) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *Transaction) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetClientReference

`func (o *Transaction) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *Transaction) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *Transaction) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *Transaction) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### SetClientReferenceNil

`func (o *Transaction) SetClientReferenceNil(b bool)`

 SetClientReferenceNil sets the value for ClientReference to be an explicit nil

### UnsetClientReference
`func (o *Transaction) UnsetClientReference()`

UnsetClientReference ensures that no value is present for ClientReference, not even an explicit nil
### GetRefundEndToEndId

`func (o *Transaction) GetRefundEndToEndId() string`

GetRefundEndToEndId returns the RefundEndToEndId field if non-nil, zero value otherwise.

### GetRefundEndToEndIdOk

`func (o *Transaction) GetRefundEndToEndIdOk() (*string, bool)`

GetRefundEndToEndIdOk returns a tuple with the RefundEndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundEndToEndId

`func (o *Transaction) SetRefundEndToEndId(v string)`

SetRefundEndToEndId sets RefundEndToEndId field to given value.

### HasRefundEndToEndId

`func (o *Transaction) HasRefundEndToEndId() bool`

HasRefundEndToEndId returns a boolean if a field has been set.

### SetRefundEndToEndIdNil

`func (o *Transaction) SetRefundEndToEndIdNil(b bool)`

 SetRefundEndToEndIdNil sets the value for RefundEndToEndId to be an explicit nil

### UnsetRefundEndToEndId
`func (o *Transaction) UnsetRefundEndToEndId()`

UnsetRefundEndToEndId ensures that no value is present for RefundEndToEndId, not even an explicit nil
### GetRefundAmount

`func (o *Transaction) GetRefundAmount() float32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *Transaction) GetRefundAmountOk() (*float32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *Transaction) SetRefundAmount(v float32)`

SetRefundAmount sets RefundAmount field to given value.

### HasRefundAmount

`func (o *Transaction) HasRefundAmount() bool`

HasRefundAmount returns a boolean if a field has been set.

### SetRefundAmountNil

`func (o *Transaction) SetRefundAmountNil(b bool)`

 SetRefundAmountNil sets the value for RefundAmount to be an explicit nil

### UnsetRefundAmount
`func (o *Transaction) UnsetRefundAmount()`

UnsetRefundAmount ensures that no value is present for RefundAmount, not even an explicit nil
### GetRefundStatus

`func (o *Transaction) GetRefundStatus() string`

GetRefundStatus returns the RefundStatus field if non-nil, zero value otherwise.

### GetRefundStatusOk

`func (o *Transaction) GetRefundStatusOk() (*string, bool)`

GetRefundStatusOk returns a tuple with the RefundStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundStatus

`func (o *Transaction) SetRefundStatus(v string)`

SetRefundStatus sets RefundStatus field to given value.

### HasRefundStatus

`func (o *Transaction) HasRefundStatus() bool`

HasRefundStatus returns a boolean if a field has been set.

### SetRefundStatusNil

`func (o *Transaction) SetRefundStatusNil(b bool)`

 SetRefundStatusNil sets the value for RefundStatus to be an explicit nil

### UnsetRefundStatus
`func (o *Transaction) UnsetRefundStatus()`

UnsetRefundStatus ensures that no value is present for RefundStatus, not even an explicit nil
### GetRefundReason

`func (o *Transaction) GetRefundReason() string`

GetRefundReason returns the RefundReason field if non-nil, zero value otherwise.

### GetRefundReasonOk

`func (o *Transaction) GetRefundReasonOk() (*string, bool)`

GetRefundReasonOk returns a tuple with the RefundReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundReason

`func (o *Transaction) SetRefundReason(v string)`

SetRefundReason sets RefundReason field to given value.

### HasRefundReason

`func (o *Transaction) HasRefundReason() bool`

HasRefundReason returns a boolean if a field has been set.

### SetRefundReasonNil

`func (o *Transaction) SetRefundReasonNil(b bool)`

 SetRefundReasonNil sets the value for RefundReason to be an explicit nil

### UnsetRefundReason
`func (o *Transaction) UnsetRefundReason()`

UnsetRefundReason ensures that no value is present for RefundReason, not even an explicit nil
### GetRefundDescription

`func (o *Transaction) GetRefundDescription() string`

GetRefundDescription returns the RefundDescription field if non-nil, zero value otherwise.

### GetRefundDescriptionOk

`func (o *Transaction) GetRefundDescriptionOk() (*string, bool)`

GetRefundDescriptionOk returns a tuple with the RefundDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundDescription

`func (o *Transaction) SetRefundDescription(v string)`

SetRefundDescription sets RefundDescription field to given value.

### HasRefundDescription

`func (o *Transaction) HasRefundDescription() bool`

HasRefundDescription returns a boolean if a field has been set.

### SetRefundDescriptionNil

`func (o *Transaction) SetRefundDescriptionNil(b bool)`

 SetRefundDescriptionNil sets the value for RefundDescription to be an explicit nil

### UnsetRefundDescription
`func (o *Transaction) UnsetRefundDescription()`

UnsetRefundDescription ensures that no value is present for RefundDescription, not even an explicit nil
### GetRefundedAt

`func (o *Transaction) GetRefundedAt() string`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *Transaction) GetRefundedAtOk() (*string, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *Transaction) SetRefundedAt(v string)`

SetRefundedAt sets RefundedAt field to given value.

### HasRefundedAt

`func (o *Transaction) HasRefundedAt() bool`

HasRefundedAt returns a boolean if a field has been set.

### SetRefundedAtNil

`func (o *Transaction) SetRefundedAtNil(b bool)`

 SetRefundedAtNil sets the value for RefundedAt to be an explicit nil

### UnsetRefundedAt
`func (o *Transaction) UnsetRefundedAt()`

UnsetRefundedAt ensures that no value is present for RefundedAt, not even an explicit nil
### GetCancellationReason

`func (o *Transaction) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *Transaction) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *Transaction) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.

### HasCancellationReason

`func (o *Transaction) HasCancellationReason() bool`

HasCancellationReason returns a boolean if a field has been set.

### SetCancellationReasonNil

`func (o *Transaction) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *Transaction) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetVirtualAccount

`func (o *Transaction) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *Transaction) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *Transaction) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *Transaction) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.

### SetVirtualAccountNil

`func (o *Transaction) SetVirtualAccountNil(b bool)`

 SetVirtualAccountNil sets the value for VirtualAccount to be an explicit nil

### UnsetVirtualAccount
`func (o *Transaction) UnsetVirtualAccount()`

UnsetVirtualAccount ensures that no value is present for VirtualAccount, not even an explicit nil
### GetMethod

`func (o *Transaction) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *Transaction) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *Transaction) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *Transaction) HasMethod() bool`

HasMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


