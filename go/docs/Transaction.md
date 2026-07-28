# Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR | [optional] 
**Amount** | Pointer to **float32** |  | [optional] 
**Type** | Pointer to **string** | DEPOSIT or WITHDRAW | [optional] 
**QrCodeText** | Pointer to **string** |  | [optional] 
**QrCodeBase64** | Pointer to **string** |  | [optional] 
**QrCodeUrl** | Pointer to **string** |  | [optional] 
**GeneratedName** | Pointer to **string** |  | [optional] 
**GeneratedDocument** | Pointer to **string** |  | [optional] 
**GeneratedEmail** | Pointer to **string** |  | [optional] 
**PayerName** | Pointer to **string** |  | [optional] 
**PayerDocument** | Pointer to **string** |  | [optional] 
**PayerInstitutionIspb** | Pointer to **string** |  | [optional] 
**PayerInstitutionName** | Pointer to **string** |  | [optional] 
**PayerAccountNumber** | Pointer to **string** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. | [optional] 
**ServiceFeeCharged** | Pointer to **float32** |  | [optional] 
**WithdrawPixKey** | Pointer to **string** |  | [optional] 
**WithdrawPixType** | Pointer to **string** |  | [optional] 
**ReceiverName** | Pointer to **string** |  | [optional] 
**ReceiverDocument** | Pointer to **string** |  | [optional] 
**ReceiverInstitutionIspb** | Pointer to **string** |  | [optional] 
**ReceiverInstitutionName** | Pointer to **string** |  | [optional] 
**ReceiverAccountNumber** | Pointer to **string** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. | [optional] 
**EndToEndId** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 
**PaidAt** | Pointer to **string** |  | [optional] 
**ClientReference** | Pointer to **string** |  | [optional] 
**RefundEndToEndId** | Pointer to **string** | End-to-end ID of the refund transaction | [optional] 
**RefundAmount** | Pointer to **float32** | Amount refunded | [optional] 
**RefundStatus** | Pointer to **string** | Status of the refund (PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR) | [optional] 
**RefundReason** | Pointer to **string** | Reason for the refund | [optional] 
**RefundDescription** | Pointer to **string** | Description of the refund | [optional] 
**RefundedAt** | Pointer to **string** | Date and time when the refund was processed | [optional] 
**CancellationReason** | Pointer to **string** | Reason for cancellation (if cancelled) | [optional] 
**VirtualAccount** | Pointer to **string** | Virtual sub-account provided at creation. | [optional] 
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


