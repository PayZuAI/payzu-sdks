# TransactionWithRefunds

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identifier of the transaction at PayZu. | [optional] 
**Status** | Pointer to **string** | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR | [optional] 
**Amount** | Pointer to **float32** | Amount of the transaction, before the fee. | [optional] 
**Type** | Pointer to **string** | Transaction type: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION or ADJUSTMENT. | [optional] 
**QrCodeText** | Pointer to **string** | Copy-and-paste Pix code. | [optional] 
**QrCodeBase64** | Pointer to **string** | PNG image of the QR Code in base64, without the data: prefix. | [optional] 
**QrCodeUrl** | Pointer to **string** | Authenticated route that returns the PNG of the QR Code. | [optional] 
**GeneratedName** | Pointer to **string** | Name used to build the charge. | [optional] 
**GeneratedDocument** | Pointer to **string** | CPF or CNPJ used as the debtor of the charge. | [optional] 
**GeneratedEmail** | Pointer to **string** | Email used to build the charge. | [optional] 
**PayerName** | Pointer to **string** | Name of the holder of the account that sent the Pix, as reported by the originating institution. | [optional] 
**PayerDocument** | Pointer to **string** | CPF or CNPJ of the payer of the Pix, reported by the originating institution. | [optional] 
**PayerInstitutionIspb** | Pointer to **string** | ISPB code of the institution the Pix was sent from. | [optional] 
**PayerInstitutionName** | Pointer to **string** | Name of the institution the Pix was sent from. | [optional] 
**PayerAccountNumber** | Pointer to **string** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. | [optional] 
**ServiceFeeCharged** | Pointer to **float32** | PayZu fee charged on the operation, in reais. It may carry more than two decimal places — do not round when reconciling. | [optional] 
**WithdrawPixKey** | Pointer to **string** | Destination Pix key of the withdrawal, already normalized. | [optional] 
**WithdrawPixType** | Pointer to **NullableString** | Type of the destination key of the withdrawal, with evp being the random key. | [optional] 
**ReceiverName** | Pointer to **string** | Name of the holder of the receiving account. | [optional] 
**ReceiverDocument** | Pointer to **string** | CPF or CNPJ of the receiver. | [optional] 
**ReceiverInstitutionIspb** | Pointer to **string** | ISPB code of the institution that receives the Pix. | [optional] 
**ReceiverInstitutionName** | Pointer to **string** | Name of the institution that receives the Pix. | [optional] 
**ReceiverAccountNumber** | Pointer to **string** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. | [optional] 
**EndToEndId** | Pointer to **string** | Identifier of the Pix in the Bacen arrangement, used to track the settlement and request a return. | [optional] 
**CreatedAt** | Pointer to **string** | Date and time the transaction was recorded. | [optional] 
**UpdatedAt** | Pointer to **string** | Date and time of the last change. | [optional] 
**PaidAt** | Pointer to **string** | Date and time the Pix was settled, reported by the institution. | [optional] 
**ClientReference** | Pointer to **string** | Your identifier of the transaction, returned in queries and callbacks. | [optional] 
**RefundEndToEndId** | Pointer to **string** | End-to-end ID of the refund transaction | [optional] 
**RefundAmount** | Pointer to **float32** | Amount refunded | [optional] 
**RefundStatus** | Pointer to **NullableString** | Refund status: PENDING, COMPLETED or CANCELED. | [optional] 
**RefundReason** | Pointer to **NullableString** | Reason for the refund | [optional] 
**RefundDescription** | Pointer to **string** | Description of the refund | [optional] 
**RefundedAt** | Pointer to **string** | Date and time when the refund was processed | [optional] 
**CancellationReason** | Pointer to **string** | Reason for cancellation (if cancelled) | [optional] 
**VirtualAccount** | Pointer to **string** | Virtual sub-account provided at creation. | [optional] 
**Method** | Pointer to **string** | Transaction method/rail. | [optional] 
**Refunds** | Pointer to [**[]Refund**](Refund.md) | Refunds of the transaction, newest first. | [optional] 

## Methods

### NewTransactionWithRefunds

`func NewTransactionWithRefunds() *TransactionWithRefunds`

NewTransactionWithRefunds instantiates a new TransactionWithRefunds object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionWithRefundsWithDefaults

`func NewTransactionWithRefundsWithDefaults() *TransactionWithRefunds`

NewTransactionWithRefundsWithDefaults instantiates a new TransactionWithRefunds object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionWithRefunds) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionWithRefunds) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionWithRefunds) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TransactionWithRefunds) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *TransactionWithRefunds) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionWithRefunds) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionWithRefunds) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TransactionWithRefunds) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAmount

`func (o *TransactionWithRefunds) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionWithRefunds) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionWithRefunds) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *TransactionWithRefunds) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetType

`func (o *TransactionWithRefunds) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionWithRefunds) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionWithRefunds) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TransactionWithRefunds) HasType() bool`

HasType returns a boolean if a field has been set.

### GetQrCodeText

`func (o *TransactionWithRefunds) GetQrCodeText() string`

GetQrCodeText returns the QrCodeText field if non-nil, zero value otherwise.

### GetQrCodeTextOk

`func (o *TransactionWithRefunds) GetQrCodeTextOk() (*string, bool)`

GetQrCodeTextOk returns a tuple with the QrCodeText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeText

`func (o *TransactionWithRefunds) SetQrCodeText(v string)`

SetQrCodeText sets QrCodeText field to given value.

### HasQrCodeText

`func (o *TransactionWithRefunds) HasQrCodeText() bool`

HasQrCodeText returns a boolean if a field has been set.

### GetQrCodeBase64

`func (o *TransactionWithRefunds) GetQrCodeBase64() string`

GetQrCodeBase64 returns the QrCodeBase64 field if non-nil, zero value otherwise.

### GetQrCodeBase64Ok

`func (o *TransactionWithRefunds) GetQrCodeBase64Ok() (*string, bool)`

GetQrCodeBase64Ok returns a tuple with the QrCodeBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeBase64

`func (o *TransactionWithRefunds) SetQrCodeBase64(v string)`

SetQrCodeBase64 sets QrCodeBase64 field to given value.

### HasQrCodeBase64

`func (o *TransactionWithRefunds) HasQrCodeBase64() bool`

HasQrCodeBase64 returns a boolean if a field has been set.

### GetQrCodeUrl

`func (o *TransactionWithRefunds) GetQrCodeUrl() string`

GetQrCodeUrl returns the QrCodeUrl field if non-nil, zero value otherwise.

### GetQrCodeUrlOk

`func (o *TransactionWithRefunds) GetQrCodeUrlOk() (*string, bool)`

GetQrCodeUrlOk returns a tuple with the QrCodeUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeUrl

`func (o *TransactionWithRefunds) SetQrCodeUrl(v string)`

SetQrCodeUrl sets QrCodeUrl field to given value.

### HasQrCodeUrl

`func (o *TransactionWithRefunds) HasQrCodeUrl() bool`

HasQrCodeUrl returns a boolean if a field has been set.

### GetGeneratedName

`func (o *TransactionWithRefunds) GetGeneratedName() string`

GetGeneratedName returns the GeneratedName field if non-nil, zero value otherwise.

### GetGeneratedNameOk

`func (o *TransactionWithRefunds) GetGeneratedNameOk() (*string, bool)`

GetGeneratedNameOk returns a tuple with the GeneratedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedName

`func (o *TransactionWithRefunds) SetGeneratedName(v string)`

SetGeneratedName sets GeneratedName field to given value.

### HasGeneratedName

`func (o *TransactionWithRefunds) HasGeneratedName() bool`

HasGeneratedName returns a boolean if a field has been set.

### GetGeneratedDocument

`func (o *TransactionWithRefunds) GetGeneratedDocument() string`

GetGeneratedDocument returns the GeneratedDocument field if non-nil, zero value otherwise.

### GetGeneratedDocumentOk

`func (o *TransactionWithRefunds) GetGeneratedDocumentOk() (*string, bool)`

GetGeneratedDocumentOk returns a tuple with the GeneratedDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedDocument

`func (o *TransactionWithRefunds) SetGeneratedDocument(v string)`

SetGeneratedDocument sets GeneratedDocument field to given value.

### HasGeneratedDocument

`func (o *TransactionWithRefunds) HasGeneratedDocument() bool`

HasGeneratedDocument returns a boolean if a field has been set.

### GetGeneratedEmail

`func (o *TransactionWithRefunds) GetGeneratedEmail() string`

GetGeneratedEmail returns the GeneratedEmail field if non-nil, zero value otherwise.

### GetGeneratedEmailOk

`func (o *TransactionWithRefunds) GetGeneratedEmailOk() (*string, bool)`

GetGeneratedEmailOk returns a tuple with the GeneratedEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedEmail

`func (o *TransactionWithRefunds) SetGeneratedEmail(v string)`

SetGeneratedEmail sets GeneratedEmail field to given value.

### HasGeneratedEmail

`func (o *TransactionWithRefunds) HasGeneratedEmail() bool`

HasGeneratedEmail returns a boolean if a field has been set.

### GetPayerName

`func (o *TransactionWithRefunds) GetPayerName() string`

GetPayerName returns the PayerName field if non-nil, zero value otherwise.

### GetPayerNameOk

`func (o *TransactionWithRefunds) GetPayerNameOk() (*string, bool)`

GetPayerNameOk returns a tuple with the PayerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerName

`func (o *TransactionWithRefunds) SetPayerName(v string)`

SetPayerName sets PayerName field to given value.

### HasPayerName

`func (o *TransactionWithRefunds) HasPayerName() bool`

HasPayerName returns a boolean if a field has been set.

### GetPayerDocument

`func (o *TransactionWithRefunds) GetPayerDocument() string`

GetPayerDocument returns the PayerDocument field if non-nil, zero value otherwise.

### GetPayerDocumentOk

`func (o *TransactionWithRefunds) GetPayerDocumentOk() (*string, bool)`

GetPayerDocumentOk returns a tuple with the PayerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerDocument

`func (o *TransactionWithRefunds) SetPayerDocument(v string)`

SetPayerDocument sets PayerDocument field to given value.

### HasPayerDocument

`func (o *TransactionWithRefunds) HasPayerDocument() bool`

HasPayerDocument returns a boolean if a field has been set.

### GetPayerInstitutionIspb

`func (o *TransactionWithRefunds) GetPayerInstitutionIspb() string`

GetPayerInstitutionIspb returns the PayerInstitutionIspb field if non-nil, zero value otherwise.

### GetPayerInstitutionIspbOk

`func (o *TransactionWithRefunds) GetPayerInstitutionIspbOk() (*string, bool)`

GetPayerInstitutionIspbOk returns a tuple with the PayerInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionIspb

`func (o *TransactionWithRefunds) SetPayerInstitutionIspb(v string)`

SetPayerInstitutionIspb sets PayerInstitutionIspb field to given value.

### HasPayerInstitutionIspb

`func (o *TransactionWithRefunds) HasPayerInstitutionIspb() bool`

HasPayerInstitutionIspb returns a boolean if a field has been set.

### GetPayerInstitutionName

`func (o *TransactionWithRefunds) GetPayerInstitutionName() string`

GetPayerInstitutionName returns the PayerInstitutionName field if non-nil, zero value otherwise.

### GetPayerInstitutionNameOk

`func (o *TransactionWithRefunds) GetPayerInstitutionNameOk() (*string, bool)`

GetPayerInstitutionNameOk returns a tuple with the PayerInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionName

`func (o *TransactionWithRefunds) SetPayerInstitutionName(v string)`

SetPayerInstitutionName sets PayerInstitutionName field to given value.

### HasPayerInstitutionName

`func (o *TransactionWithRefunds) HasPayerInstitutionName() bool`

HasPayerInstitutionName returns a boolean if a field has been set.

### GetPayerAccountNumber

`func (o *TransactionWithRefunds) GetPayerAccountNumber() string`

GetPayerAccountNumber returns the PayerAccountNumber field if non-nil, zero value otherwise.

### GetPayerAccountNumberOk

`func (o *TransactionWithRefunds) GetPayerAccountNumberOk() (*string, bool)`

GetPayerAccountNumberOk returns a tuple with the PayerAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerAccountNumber

`func (o *TransactionWithRefunds) SetPayerAccountNumber(v string)`

SetPayerAccountNumber sets PayerAccountNumber field to given value.

### HasPayerAccountNumber

`func (o *TransactionWithRefunds) HasPayerAccountNumber() bool`

HasPayerAccountNumber returns a boolean if a field has been set.

### GetServiceFeeCharged

`func (o *TransactionWithRefunds) GetServiceFeeCharged() float32`

GetServiceFeeCharged returns the ServiceFeeCharged field if non-nil, zero value otherwise.

### GetServiceFeeChargedOk

`func (o *TransactionWithRefunds) GetServiceFeeChargedOk() (*float32, bool)`

GetServiceFeeChargedOk returns a tuple with the ServiceFeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeCharged

`func (o *TransactionWithRefunds) SetServiceFeeCharged(v float32)`

SetServiceFeeCharged sets ServiceFeeCharged field to given value.

### HasServiceFeeCharged

`func (o *TransactionWithRefunds) HasServiceFeeCharged() bool`

HasServiceFeeCharged returns a boolean if a field has been set.

### GetWithdrawPixKey

`func (o *TransactionWithRefunds) GetWithdrawPixKey() string`

GetWithdrawPixKey returns the WithdrawPixKey field if non-nil, zero value otherwise.

### GetWithdrawPixKeyOk

`func (o *TransactionWithRefunds) GetWithdrawPixKeyOk() (*string, bool)`

GetWithdrawPixKeyOk returns a tuple with the WithdrawPixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixKey

`func (o *TransactionWithRefunds) SetWithdrawPixKey(v string)`

SetWithdrawPixKey sets WithdrawPixKey field to given value.

### HasWithdrawPixKey

`func (o *TransactionWithRefunds) HasWithdrawPixKey() bool`

HasWithdrawPixKey returns a boolean if a field has been set.

### GetWithdrawPixType

`func (o *TransactionWithRefunds) GetWithdrawPixType() string`

GetWithdrawPixType returns the WithdrawPixType field if non-nil, zero value otherwise.

### GetWithdrawPixTypeOk

`func (o *TransactionWithRefunds) GetWithdrawPixTypeOk() (*string, bool)`

GetWithdrawPixTypeOk returns a tuple with the WithdrawPixType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixType

`func (o *TransactionWithRefunds) SetWithdrawPixType(v string)`

SetWithdrawPixType sets WithdrawPixType field to given value.

### HasWithdrawPixType

`func (o *TransactionWithRefunds) HasWithdrawPixType() bool`

HasWithdrawPixType returns a boolean if a field has been set.

### SetWithdrawPixTypeNil

`func (o *TransactionWithRefunds) SetWithdrawPixTypeNil(b bool)`

 SetWithdrawPixTypeNil sets the value for WithdrawPixType to be an explicit nil

### UnsetWithdrawPixType
`func (o *TransactionWithRefunds) UnsetWithdrawPixType()`

UnsetWithdrawPixType ensures that no value is present for WithdrawPixType, not even an explicit nil
### GetReceiverName

`func (o *TransactionWithRefunds) GetReceiverName() string`

GetReceiverName returns the ReceiverName field if non-nil, zero value otherwise.

### GetReceiverNameOk

`func (o *TransactionWithRefunds) GetReceiverNameOk() (*string, bool)`

GetReceiverNameOk returns a tuple with the ReceiverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverName

`func (o *TransactionWithRefunds) SetReceiverName(v string)`

SetReceiverName sets ReceiverName field to given value.

### HasReceiverName

`func (o *TransactionWithRefunds) HasReceiverName() bool`

HasReceiverName returns a boolean if a field has been set.

### GetReceiverDocument

`func (o *TransactionWithRefunds) GetReceiverDocument() string`

GetReceiverDocument returns the ReceiverDocument field if non-nil, zero value otherwise.

### GetReceiverDocumentOk

`func (o *TransactionWithRefunds) GetReceiverDocumentOk() (*string, bool)`

GetReceiverDocumentOk returns a tuple with the ReceiverDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverDocument

`func (o *TransactionWithRefunds) SetReceiverDocument(v string)`

SetReceiverDocument sets ReceiverDocument field to given value.

### HasReceiverDocument

`func (o *TransactionWithRefunds) HasReceiverDocument() bool`

HasReceiverDocument returns a boolean if a field has been set.

### GetReceiverInstitutionIspb

`func (o *TransactionWithRefunds) GetReceiverInstitutionIspb() string`

GetReceiverInstitutionIspb returns the ReceiverInstitutionIspb field if non-nil, zero value otherwise.

### GetReceiverInstitutionIspbOk

`func (o *TransactionWithRefunds) GetReceiverInstitutionIspbOk() (*string, bool)`

GetReceiverInstitutionIspbOk returns a tuple with the ReceiverInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionIspb

`func (o *TransactionWithRefunds) SetReceiverInstitutionIspb(v string)`

SetReceiverInstitutionIspb sets ReceiverInstitutionIspb field to given value.

### HasReceiverInstitutionIspb

`func (o *TransactionWithRefunds) HasReceiverInstitutionIspb() bool`

HasReceiverInstitutionIspb returns a boolean if a field has been set.

### GetReceiverInstitutionName

`func (o *TransactionWithRefunds) GetReceiverInstitutionName() string`

GetReceiverInstitutionName returns the ReceiverInstitutionName field if non-nil, zero value otherwise.

### GetReceiverInstitutionNameOk

`func (o *TransactionWithRefunds) GetReceiverInstitutionNameOk() (*string, bool)`

GetReceiverInstitutionNameOk returns a tuple with the ReceiverInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionName

`func (o *TransactionWithRefunds) SetReceiverInstitutionName(v string)`

SetReceiverInstitutionName sets ReceiverInstitutionName field to given value.

### HasReceiverInstitutionName

`func (o *TransactionWithRefunds) HasReceiverInstitutionName() bool`

HasReceiverInstitutionName returns a boolean if a field has been set.

### GetReceiverAccountNumber

`func (o *TransactionWithRefunds) GetReceiverAccountNumber() string`

GetReceiverAccountNumber returns the ReceiverAccountNumber field if non-nil, zero value otherwise.

### GetReceiverAccountNumberOk

`func (o *TransactionWithRefunds) GetReceiverAccountNumberOk() (*string, bool)`

GetReceiverAccountNumberOk returns a tuple with the ReceiverAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverAccountNumber

`func (o *TransactionWithRefunds) SetReceiverAccountNumber(v string)`

SetReceiverAccountNumber sets ReceiverAccountNumber field to given value.

### HasReceiverAccountNumber

`func (o *TransactionWithRefunds) HasReceiverAccountNumber() bool`

HasReceiverAccountNumber returns a boolean if a field has been set.

### GetEndToEndId

`func (o *TransactionWithRefunds) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *TransactionWithRefunds) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *TransactionWithRefunds) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.

### HasEndToEndId

`func (o *TransactionWithRefunds) HasEndToEndId() bool`

HasEndToEndId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *TransactionWithRefunds) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionWithRefunds) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionWithRefunds) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *TransactionWithRefunds) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *TransactionWithRefunds) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransactionWithRefunds) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransactionWithRefunds) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *TransactionWithRefunds) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetPaidAt

`func (o *TransactionWithRefunds) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *TransactionWithRefunds) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *TransactionWithRefunds) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *TransactionWithRefunds) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### GetClientReference

`func (o *TransactionWithRefunds) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *TransactionWithRefunds) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *TransactionWithRefunds) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *TransactionWithRefunds) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### GetRefundEndToEndId

`func (o *TransactionWithRefunds) GetRefundEndToEndId() string`

GetRefundEndToEndId returns the RefundEndToEndId field if non-nil, zero value otherwise.

### GetRefundEndToEndIdOk

`func (o *TransactionWithRefunds) GetRefundEndToEndIdOk() (*string, bool)`

GetRefundEndToEndIdOk returns a tuple with the RefundEndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundEndToEndId

`func (o *TransactionWithRefunds) SetRefundEndToEndId(v string)`

SetRefundEndToEndId sets RefundEndToEndId field to given value.

### HasRefundEndToEndId

`func (o *TransactionWithRefunds) HasRefundEndToEndId() bool`

HasRefundEndToEndId returns a boolean if a field has been set.

### GetRefundAmount

`func (o *TransactionWithRefunds) GetRefundAmount() float32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *TransactionWithRefunds) GetRefundAmountOk() (*float32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *TransactionWithRefunds) SetRefundAmount(v float32)`

SetRefundAmount sets RefundAmount field to given value.

### HasRefundAmount

`func (o *TransactionWithRefunds) HasRefundAmount() bool`

HasRefundAmount returns a boolean if a field has been set.

### GetRefundStatus

`func (o *TransactionWithRefunds) GetRefundStatus() string`

GetRefundStatus returns the RefundStatus field if non-nil, zero value otherwise.

### GetRefundStatusOk

`func (o *TransactionWithRefunds) GetRefundStatusOk() (*string, bool)`

GetRefundStatusOk returns a tuple with the RefundStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundStatus

`func (o *TransactionWithRefunds) SetRefundStatus(v string)`

SetRefundStatus sets RefundStatus field to given value.

### HasRefundStatus

`func (o *TransactionWithRefunds) HasRefundStatus() bool`

HasRefundStatus returns a boolean if a field has been set.

### SetRefundStatusNil

`func (o *TransactionWithRefunds) SetRefundStatusNil(b bool)`

 SetRefundStatusNil sets the value for RefundStatus to be an explicit nil

### UnsetRefundStatus
`func (o *TransactionWithRefunds) UnsetRefundStatus()`

UnsetRefundStatus ensures that no value is present for RefundStatus, not even an explicit nil
### GetRefundReason

`func (o *TransactionWithRefunds) GetRefundReason() string`

GetRefundReason returns the RefundReason field if non-nil, zero value otherwise.

### GetRefundReasonOk

`func (o *TransactionWithRefunds) GetRefundReasonOk() (*string, bool)`

GetRefundReasonOk returns a tuple with the RefundReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundReason

`func (o *TransactionWithRefunds) SetRefundReason(v string)`

SetRefundReason sets RefundReason field to given value.

### HasRefundReason

`func (o *TransactionWithRefunds) HasRefundReason() bool`

HasRefundReason returns a boolean if a field has been set.

### SetRefundReasonNil

`func (o *TransactionWithRefunds) SetRefundReasonNil(b bool)`

 SetRefundReasonNil sets the value for RefundReason to be an explicit nil

### UnsetRefundReason
`func (o *TransactionWithRefunds) UnsetRefundReason()`

UnsetRefundReason ensures that no value is present for RefundReason, not even an explicit nil
### GetRefundDescription

`func (o *TransactionWithRefunds) GetRefundDescription() string`

GetRefundDescription returns the RefundDescription field if non-nil, zero value otherwise.

### GetRefundDescriptionOk

`func (o *TransactionWithRefunds) GetRefundDescriptionOk() (*string, bool)`

GetRefundDescriptionOk returns a tuple with the RefundDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundDescription

`func (o *TransactionWithRefunds) SetRefundDescription(v string)`

SetRefundDescription sets RefundDescription field to given value.

### HasRefundDescription

`func (o *TransactionWithRefunds) HasRefundDescription() bool`

HasRefundDescription returns a boolean if a field has been set.

### GetRefundedAt

`func (o *TransactionWithRefunds) GetRefundedAt() string`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *TransactionWithRefunds) GetRefundedAtOk() (*string, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *TransactionWithRefunds) SetRefundedAt(v string)`

SetRefundedAt sets RefundedAt field to given value.

### HasRefundedAt

`func (o *TransactionWithRefunds) HasRefundedAt() bool`

HasRefundedAt returns a boolean if a field has been set.

### GetCancellationReason

`func (o *TransactionWithRefunds) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *TransactionWithRefunds) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *TransactionWithRefunds) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.

### HasCancellationReason

`func (o *TransactionWithRefunds) HasCancellationReason() bool`

HasCancellationReason returns a boolean if a field has been set.

### GetVirtualAccount

`func (o *TransactionWithRefunds) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *TransactionWithRefunds) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *TransactionWithRefunds) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *TransactionWithRefunds) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.

### GetMethod

`func (o *TransactionWithRefunds) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *TransactionWithRefunds) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *TransactionWithRefunds) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *TransactionWithRefunds) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetRefunds

`func (o *TransactionWithRefunds) GetRefunds() []Refund`

GetRefunds returns the Refunds field if non-nil, zero value otherwise.

### GetRefundsOk

`func (o *TransactionWithRefunds) GetRefundsOk() (*[]Refund, bool)`

GetRefundsOk returns a tuple with the Refunds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunds

`func (o *TransactionWithRefunds) SetRefunds(v []Refund)`

SetRefunds sets Refunds field to given value.

### HasRefunds

`func (o *TransactionWithRefunds) HasRefunds() bool`

HasRefunds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


