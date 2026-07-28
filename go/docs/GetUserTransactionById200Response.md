# GetUserTransactionById200Response

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
**Infraction** | Pointer to [**[]GetUserTransactionById200ResponseAllOfInfractionInner**](GetUserTransactionById200ResponseAllOfInfractionInner.md) | Complete infraction history for this transaction. | [optional] 
**CallbackLog** | Pointer to [**[]GetUserTransactionById200ResponseAllOfCallbackLogInner**](GetUserTransactionById200ResponseAllOfCallbackLogInner.md) | Webhook delivery attempts for this transaction (most recent first) | [optional] 

## Methods

### NewGetUserTransactionById200Response

`func NewGetUserTransactionById200Response() *GetUserTransactionById200Response`

NewGetUserTransactionById200Response instantiates a new GetUserTransactionById200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserTransactionById200ResponseWithDefaults

`func NewGetUserTransactionById200ResponseWithDefaults() *GetUserTransactionById200Response`

NewGetUserTransactionById200ResponseWithDefaults instantiates a new GetUserTransactionById200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetUserTransactionById200Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetUserTransactionById200Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetUserTransactionById200Response) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetUserTransactionById200Response) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *GetUserTransactionById200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetUserTransactionById200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetUserTransactionById200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetUserTransactionById200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAmount

`func (o *GetUserTransactionById200Response) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *GetUserTransactionById200Response) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *GetUserTransactionById200Response) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *GetUserTransactionById200Response) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetType

`func (o *GetUserTransactionById200Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GetUserTransactionById200Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GetUserTransactionById200Response) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *GetUserTransactionById200Response) HasType() bool`

HasType returns a boolean if a field has been set.

### GetQrCodeText

`func (o *GetUserTransactionById200Response) GetQrCodeText() string`

GetQrCodeText returns the QrCodeText field if non-nil, zero value otherwise.

### GetQrCodeTextOk

`func (o *GetUserTransactionById200Response) GetQrCodeTextOk() (*string, bool)`

GetQrCodeTextOk returns a tuple with the QrCodeText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeText

`func (o *GetUserTransactionById200Response) SetQrCodeText(v string)`

SetQrCodeText sets QrCodeText field to given value.

### HasQrCodeText

`func (o *GetUserTransactionById200Response) HasQrCodeText() bool`

HasQrCodeText returns a boolean if a field has been set.

### GetQrCodeBase64

`func (o *GetUserTransactionById200Response) GetQrCodeBase64() string`

GetQrCodeBase64 returns the QrCodeBase64 field if non-nil, zero value otherwise.

### GetQrCodeBase64Ok

`func (o *GetUserTransactionById200Response) GetQrCodeBase64Ok() (*string, bool)`

GetQrCodeBase64Ok returns a tuple with the QrCodeBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeBase64

`func (o *GetUserTransactionById200Response) SetQrCodeBase64(v string)`

SetQrCodeBase64 sets QrCodeBase64 field to given value.

### HasQrCodeBase64

`func (o *GetUserTransactionById200Response) HasQrCodeBase64() bool`

HasQrCodeBase64 returns a boolean if a field has been set.

### GetQrCodeUrl

`func (o *GetUserTransactionById200Response) GetQrCodeUrl() string`

GetQrCodeUrl returns the QrCodeUrl field if non-nil, zero value otherwise.

### GetQrCodeUrlOk

`func (o *GetUserTransactionById200Response) GetQrCodeUrlOk() (*string, bool)`

GetQrCodeUrlOk returns a tuple with the QrCodeUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeUrl

`func (o *GetUserTransactionById200Response) SetQrCodeUrl(v string)`

SetQrCodeUrl sets QrCodeUrl field to given value.

### HasQrCodeUrl

`func (o *GetUserTransactionById200Response) HasQrCodeUrl() bool`

HasQrCodeUrl returns a boolean if a field has been set.

### GetGeneratedName

`func (o *GetUserTransactionById200Response) GetGeneratedName() string`

GetGeneratedName returns the GeneratedName field if non-nil, zero value otherwise.

### GetGeneratedNameOk

`func (o *GetUserTransactionById200Response) GetGeneratedNameOk() (*string, bool)`

GetGeneratedNameOk returns a tuple with the GeneratedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedName

`func (o *GetUserTransactionById200Response) SetGeneratedName(v string)`

SetGeneratedName sets GeneratedName field to given value.

### HasGeneratedName

`func (o *GetUserTransactionById200Response) HasGeneratedName() bool`

HasGeneratedName returns a boolean if a field has been set.

### GetGeneratedDocument

`func (o *GetUserTransactionById200Response) GetGeneratedDocument() string`

GetGeneratedDocument returns the GeneratedDocument field if non-nil, zero value otherwise.

### GetGeneratedDocumentOk

`func (o *GetUserTransactionById200Response) GetGeneratedDocumentOk() (*string, bool)`

GetGeneratedDocumentOk returns a tuple with the GeneratedDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedDocument

`func (o *GetUserTransactionById200Response) SetGeneratedDocument(v string)`

SetGeneratedDocument sets GeneratedDocument field to given value.

### HasGeneratedDocument

`func (o *GetUserTransactionById200Response) HasGeneratedDocument() bool`

HasGeneratedDocument returns a boolean if a field has been set.

### GetGeneratedEmail

`func (o *GetUserTransactionById200Response) GetGeneratedEmail() string`

GetGeneratedEmail returns the GeneratedEmail field if non-nil, zero value otherwise.

### GetGeneratedEmailOk

`func (o *GetUserTransactionById200Response) GetGeneratedEmailOk() (*string, bool)`

GetGeneratedEmailOk returns a tuple with the GeneratedEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedEmail

`func (o *GetUserTransactionById200Response) SetGeneratedEmail(v string)`

SetGeneratedEmail sets GeneratedEmail field to given value.

### HasGeneratedEmail

`func (o *GetUserTransactionById200Response) HasGeneratedEmail() bool`

HasGeneratedEmail returns a boolean if a field has been set.

### GetPayerName

`func (o *GetUserTransactionById200Response) GetPayerName() string`

GetPayerName returns the PayerName field if non-nil, zero value otherwise.

### GetPayerNameOk

`func (o *GetUserTransactionById200Response) GetPayerNameOk() (*string, bool)`

GetPayerNameOk returns a tuple with the PayerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerName

`func (o *GetUserTransactionById200Response) SetPayerName(v string)`

SetPayerName sets PayerName field to given value.

### HasPayerName

`func (o *GetUserTransactionById200Response) HasPayerName() bool`

HasPayerName returns a boolean if a field has been set.

### GetPayerDocument

`func (o *GetUserTransactionById200Response) GetPayerDocument() string`

GetPayerDocument returns the PayerDocument field if non-nil, zero value otherwise.

### GetPayerDocumentOk

`func (o *GetUserTransactionById200Response) GetPayerDocumentOk() (*string, bool)`

GetPayerDocumentOk returns a tuple with the PayerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerDocument

`func (o *GetUserTransactionById200Response) SetPayerDocument(v string)`

SetPayerDocument sets PayerDocument field to given value.

### HasPayerDocument

`func (o *GetUserTransactionById200Response) HasPayerDocument() bool`

HasPayerDocument returns a boolean if a field has been set.

### GetPayerInstitutionIspb

`func (o *GetUserTransactionById200Response) GetPayerInstitutionIspb() string`

GetPayerInstitutionIspb returns the PayerInstitutionIspb field if non-nil, zero value otherwise.

### GetPayerInstitutionIspbOk

`func (o *GetUserTransactionById200Response) GetPayerInstitutionIspbOk() (*string, bool)`

GetPayerInstitutionIspbOk returns a tuple with the PayerInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionIspb

`func (o *GetUserTransactionById200Response) SetPayerInstitutionIspb(v string)`

SetPayerInstitutionIspb sets PayerInstitutionIspb field to given value.

### HasPayerInstitutionIspb

`func (o *GetUserTransactionById200Response) HasPayerInstitutionIspb() bool`

HasPayerInstitutionIspb returns a boolean if a field has been set.

### GetPayerInstitutionName

`func (o *GetUserTransactionById200Response) GetPayerInstitutionName() string`

GetPayerInstitutionName returns the PayerInstitutionName field if non-nil, zero value otherwise.

### GetPayerInstitutionNameOk

`func (o *GetUserTransactionById200Response) GetPayerInstitutionNameOk() (*string, bool)`

GetPayerInstitutionNameOk returns a tuple with the PayerInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionName

`func (o *GetUserTransactionById200Response) SetPayerInstitutionName(v string)`

SetPayerInstitutionName sets PayerInstitutionName field to given value.

### HasPayerInstitutionName

`func (o *GetUserTransactionById200Response) HasPayerInstitutionName() bool`

HasPayerInstitutionName returns a boolean if a field has been set.

### GetPayerAccountNumber

`func (o *GetUserTransactionById200Response) GetPayerAccountNumber() string`

GetPayerAccountNumber returns the PayerAccountNumber field if non-nil, zero value otherwise.

### GetPayerAccountNumberOk

`func (o *GetUserTransactionById200Response) GetPayerAccountNumberOk() (*string, bool)`

GetPayerAccountNumberOk returns a tuple with the PayerAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerAccountNumber

`func (o *GetUserTransactionById200Response) SetPayerAccountNumber(v string)`

SetPayerAccountNumber sets PayerAccountNumber field to given value.

### HasPayerAccountNumber

`func (o *GetUserTransactionById200Response) HasPayerAccountNumber() bool`

HasPayerAccountNumber returns a boolean if a field has been set.

### GetServiceFeeCharged

`func (o *GetUserTransactionById200Response) GetServiceFeeCharged() float32`

GetServiceFeeCharged returns the ServiceFeeCharged field if non-nil, zero value otherwise.

### GetServiceFeeChargedOk

`func (o *GetUserTransactionById200Response) GetServiceFeeChargedOk() (*float32, bool)`

GetServiceFeeChargedOk returns a tuple with the ServiceFeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeCharged

`func (o *GetUserTransactionById200Response) SetServiceFeeCharged(v float32)`

SetServiceFeeCharged sets ServiceFeeCharged field to given value.

### HasServiceFeeCharged

`func (o *GetUserTransactionById200Response) HasServiceFeeCharged() bool`

HasServiceFeeCharged returns a boolean if a field has been set.

### GetWithdrawPixKey

`func (o *GetUserTransactionById200Response) GetWithdrawPixKey() string`

GetWithdrawPixKey returns the WithdrawPixKey field if non-nil, zero value otherwise.

### GetWithdrawPixKeyOk

`func (o *GetUserTransactionById200Response) GetWithdrawPixKeyOk() (*string, bool)`

GetWithdrawPixKeyOk returns a tuple with the WithdrawPixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixKey

`func (o *GetUserTransactionById200Response) SetWithdrawPixKey(v string)`

SetWithdrawPixKey sets WithdrawPixKey field to given value.

### HasWithdrawPixKey

`func (o *GetUserTransactionById200Response) HasWithdrawPixKey() bool`

HasWithdrawPixKey returns a boolean if a field has been set.

### GetWithdrawPixType

`func (o *GetUserTransactionById200Response) GetWithdrawPixType() string`

GetWithdrawPixType returns the WithdrawPixType field if non-nil, zero value otherwise.

### GetWithdrawPixTypeOk

`func (o *GetUserTransactionById200Response) GetWithdrawPixTypeOk() (*string, bool)`

GetWithdrawPixTypeOk returns a tuple with the WithdrawPixType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixType

`func (o *GetUserTransactionById200Response) SetWithdrawPixType(v string)`

SetWithdrawPixType sets WithdrawPixType field to given value.

### HasWithdrawPixType

`func (o *GetUserTransactionById200Response) HasWithdrawPixType() bool`

HasWithdrawPixType returns a boolean if a field has been set.

### GetReceiverName

`func (o *GetUserTransactionById200Response) GetReceiverName() string`

GetReceiverName returns the ReceiverName field if non-nil, zero value otherwise.

### GetReceiverNameOk

`func (o *GetUserTransactionById200Response) GetReceiverNameOk() (*string, bool)`

GetReceiverNameOk returns a tuple with the ReceiverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverName

`func (o *GetUserTransactionById200Response) SetReceiverName(v string)`

SetReceiverName sets ReceiverName field to given value.

### HasReceiverName

`func (o *GetUserTransactionById200Response) HasReceiverName() bool`

HasReceiverName returns a boolean if a field has been set.

### GetReceiverDocument

`func (o *GetUserTransactionById200Response) GetReceiverDocument() string`

GetReceiverDocument returns the ReceiverDocument field if non-nil, zero value otherwise.

### GetReceiverDocumentOk

`func (o *GetUserTransactionById200Response) GetReceiverDocumentOk() (*string, bool)`

GetReceiverDocumentOk returns a tuple with the ReceiverDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverDocument

`func (o *GetUserTransactionById200Response) SetReceiverDocument(v string)`

SetReceiverDocument sets ReceiverDocument field to given value.

### HasReceiverDocument

`func (o *GetUserTransactionById200Response) HasReceiverDocument() bool`

HasReceiverDocument returns a boolean if a field has been set.

### GetReceiverInstitutionIspb

`func (o *GetUserTransactionById200Response) GetReceiverInstitutionIspb() string`

GetReceiverInstitutionIspb returns the ReceiverInstitutionIspb field if non-nil, zero value otherwise.

### GetReceiverInstitutionIspbOk

`func (o *GetUserTransactionById200Response) GetReceiverInstitutionIspbOk() (*string, bool)`

GetReceiverInstitutionIspbOk returns a tuple with the ReceiverInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionIspb

`func (o *GetUserTransactionById200Response) SetReceiverInstitutionIspb(v string)`

SetReceiverInstitutionIspb sets ReceiverInstitutionIspb field to given value.

### HasReceiverInstitutionIspb

`func (o *GetUserTransactionById200Response) HasReceiverInstitutionIspb() bool`

HasReceiverInstitutionIspb returns a boolean if a field has been set.

### GetReceiverInstitutionName

`func (o *GetUserTransactionById200Response) GetReceiverInstitutionName() string`

GetReceiverInstitutionName returns the ReceiverInstitutionName field if non-nil, zero value otherwise.

### GetReceiverInstitutionNameOk

`func (o *GetUserTransactionById200Response) GetReceiverInstitutionNameOk() (*string, bool)`

GetReceiverInstitutionNameOk returns a tuple with the ReceiverInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionName

`func (o *GetUserTransactionById200Response) SetReceiverInstitutionName(v string)`

SetReceiverInstitutionName sets ReceiverInstitutionName field to given value.

### HasReceiverInstitutionName

`func (o *GetUserTransactionById200Response) HasReceiverInstitutionName() bool`

HasReceiverInstitutionName returns a boolean if a field has been set.

### GetReceiverAccountNumber

`func (o *GetUserTransactionById200Response) GetReceiverAccountNumber() string`

GetReceiverAccountNumber returns the ReceiverAccountNumber field if non-nil, zero value otherwise.

### GetReceiverAccountNumberOk

`func (o *GetUserTransactionById200Response) GetReceiverAccountNumberOk() (*string, bool)`

GetReceiverAccountNumberOk returns a tuple with the ReceiverAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverAccountNumber

`func (o *GetUserTransactionById200Response) SetReceiverAccountNumber(v string)`

SetReceiverAccountNumber sets ReceiverAccountNumber field to given value.

### HasReceiverAccountNumber

`func (o *GetUserTransactionById200Response) HasReceiverAccountNumber() bool`

HasReceiverAccountNumber returns a boolean if a field has been set.

### GetEndToEndId

`func (o *GetUserTransactionById200Response) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *GetUserTransactionById200Response) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *GetUserTransactionById200Response) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.

### HasEndToEndId

`func (o *GetUserTransactionById200Response) HasEndToEndId() bool`

HasEndToEndId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *GetUserTransactionById200Response) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GetUserTransactionById200Response) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GetUserTransactionById200Response) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GetUserTransactionById200Response) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *GetUserTransactionById200Response) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetUserTransactionById200Response) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetUserTransactionById200Response) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *GetUserTransactionById200Response) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetPaidAt

`func (o *GetUserTransactionById200Response) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *GetUserTransactionById200Response) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *GetUserTransactionById200Response) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *GetUserTransactionById200Response) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### GetClientReference

`func (o *GetUserTransactionById200Response) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *GetUserTransactionById200Response) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *GetUserTransactionById200Response) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *GetUserTransactionById200Response) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### GetRefundEndToEndId

`func (o *GetUserTransactionById200Response) GetRefundEndToEndId() string`

GetRefundEndToEndId returns the RefundEndToEndId field if non-nil, zero value otherwise.

### GetRefundEndToEndIdOk

`func (o *GetUserTransactionById200Response) GetRefundEndToEndIdOk() (*string, bool)`

GetRefundEndToEndIdOk returns a tuple with the RefundEndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundEndToEndId

`func (o *GetUserTransactionById200Response) SetRefundEndToEndId(v string)`

SetRefundEndToEndId sets RefundEndToEndId field to given value.

### HasRefundEndToEndId

`func (o *GetUserTransactionById200Response) HasRefundEndToEndId() bool`

HasRefundEndToEndId returns a boolean if a field has been set.

### GetRefundAmount

`func (o *GetUserTransactionById200Response) GetRefundAmount() float32`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *GetUserTransactionById200Response) GetRefundAmountOk() (*float32, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *GetUserTransactionById200Response) SetRefundAmount(v float32)`

SetRefundAmount sets RefundAmount field to given value.

### HasRefundAmount

`func (o *GetUserTransactionById200Response) HasRefundAmount() bool`

HasRefundAmount returns a boolean if a field has been set.

### GetRefundStatus

`func (o *GetUserTransactionById200Response) GetRefundStatus() string`

GetRefundStatus returns the RefundStatus field if non-nil, zero value otherwise.

### GetRefundStatusOk

`func (o *GetUserTransactionById200Response) GetRefundStatusOk() (*string, bool)`

GetRefundStatusOk returns a tuple with the RefundStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundStatus

`func (o *GetUserTransactionById200Response) SetRefundStatus(v string)`

SetRefundStatus sets RefundStatus field to given value.

### HasRefundStatus

`func (o *GetUserTransactionById200Response) HasRefundStatus() bool`

HasRefundStatus returns a boolean if a field has been set.

### GetRefundReason

`func (o *GetUserTransactionById200Response) GetRefundReason() string`

GetRefundReason returns the RefundReason field if non-nil, zero value otherwise.

### GetRefundReasonOk

`func (o *GetUserTransactionById200Response) GetRefundReasonOk() (*string, bool)`

GetRefundReasonOk returns a tuple with the RefundReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundReason

`func (o *GetUserTransactionById200Response) SetRefundReason(v string)`

SetRefundReason sets RefundReason field to given value.

### HasRefundReason

`func (o *GetUserTransactionById200Response) HasRefundReason() bool`

HasRefundReason returns a boolean if a field has been set.

### GetRefundDescription

`func (o *GetUserTransactionById200Response) GetRefundDescription() string`

GetRefundDescription returns the RefundDescription field if non-nil, zero value otherwise.

### GetRefundDescriptionOk

`func (o *GetUserTransactionById200Response) GetRefundDescriptionOk() (*string, bool)`

GetRefundDescriptionOk returns a tuple with the RefundDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundDescription

`func (o *GetUserTransactionById200Response) SetRefundDescription(v string)`

SetRefundDescription sets RefundDescription field to given value.

### HasRefundDescription

`func (o *GetUserTransactionById200Response) HasRefundDescription() bool`

HasRefundDescription returns a boolean if a field has been set.

### GetRefundedAt

`func (o *GetUserTransactionById200Response) GetRefundedAt() string`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *GetUserTransactionById200Response) GetRefundedAtOk() (*string, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *GetUserTransactionById200Response) SetRefundedAt(v string)`

SetRefundedAt sets RefundedAt field to given value.

### HasRefundedAt

`func (o *GetUserTransactionById200Response) HasRefundedAt() bool`

HasRefundedAt returns a boolean if a field has been set.

### GetCancellationReason

`func (o *GetUserTransactionById200Response) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *GetUserTransactionById200Response) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *GetUserTransactionById200Response) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.

### HasCancellationReason

`func (o *GetUserTransactionById200Response) HasCancellationReason() bool`

HasCancellationReason returns a boolean if a field has been set.

### GetVirtualAccount

`func (o *GetUserTransactionById200Response) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *GetUserTransactionById200Response) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *GetUserTransactionById200Response) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *GetUserTransactionById200Response) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.

### GetMethod

`func (o *GetUserTransactionById200Response) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *GetUserTransactionById200Response) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *GetUserTransactionById200Response) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *GetUserTransactionById200Response) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetInfraction

`func (o *GetUserTransactionById200Response) GetInfraction() []GetUserTransactionById200ResponseAllOfInfractionInner`

GetInfraction returns the Infraction field if non-nil, zero value otherwise.

### GetInfractionOk

`func (o *GetUserTransactionById200Response) GetInfractionOk() (*[]GetUserTransactionById200ResponseAllOfInfractionInner, bool)`

GetInfractionOk returns a tuple with the Infraction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfraction

`func (o *GetUserTransactionById200Response) SetInfraction(v []GetUserTransactionById200ResponseAllOfInfractionInner)`

SetInfraction sets Infraction field to given value.

### HasInfraction

`func (o *GetUserTransactionById200Response) HasInfraction() bool`

HasInfraction returns a boolean if a field has been set.

### GetCallbackLog

`func (o *GetUserTransactionById200Response) GetCallbackLog() []GetUserTransactionById200ResponseAllOfCallbackLogInner`

GetCallbackLog returns the CallbackLog field if non-nil, zero value otherwise.

### GetCallbackLogOk

`func (o *GetUserTransactionById200Response) GetCallbackLogOk() (*[]GetUserTransactionById200ResponseAllOfCallbackLogInner, bool)`

GetCallbackLogOk returns a tuple with the CallbackLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackLog

`func (o *GetUserTransactionById200Response) SetCallbackLog(v []GetUserTransactionById200ResponseAllOfCallbackLogInner)`

SetCallbackLog sets CallbackLog field to given value.

### HasCallbackLog

`func (o *GetUserTransactionById200Response) HasCallbackLog() bool`

HasCallbackLog returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


