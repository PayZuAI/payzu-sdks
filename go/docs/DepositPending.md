# DepositPending

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identifier of the pending deposit. | [optional] 
**Status** | Pointer to **string** | Deposit status: PENDING, COMPLETED or REJECTED. | [optional] 
**Amount** | Pointer to **float32** | Amount received. | [optional] 
**PayerDocument** | Pointer to **string** | CNPJ of the payer of the Pix. | [optional] 
**PayerName** | Pointer to **NullableString** | Name of the payer of the Pix. | [optional] 
**PayerAccountNumber** | Pointer to **NullableString** | Account number of the payer inside the platform. | [optional] 
**PayerInstitutionIspb** | Pointer to **NullableString** | ISPB code of the institution the Pix was sent from. | [optional] 
**PayerInstitutionName** | Pointer to **NullableString** | Name of the institution the Pix was sent from. | [optional] 
**ReceiverDocument** | Pointer to **NullableString** | CPF or CNPJ of the account that received the Pix. | [optional] 
**ReceiverName** | Pointer to **NullableString** | Name of the account that received the Pix. | [optional] 
**ReceiverAccountNumber** | Pointer to **NullableString** | Number of your PayZu account that receives the credit if the deposit is approved. | [optional] 
**ReceiverInstitutionIspb** | Pointer to **NullableString** | ISPB code of the institution that received the Pix. | [optional] 
**ReceiverInstitutionName** | Pointer to **NullableString** | Name of the institution where the Pix was settled on the receiving side. | [optional] 
**EndToEndId** | Pointer to **string** | End-to-end identifier of the Pix. | [optional] 
**PaidAt** | Pointer to **NullableTime** | Date and time the Pix was settled. | [optional] 
**PixKey** | Pointer to **NullableString** |  | [optional] 
**Description** | Pointer to **NullableString** | Free text that would accompany the Pix. | [optional] 
**ApprovedAt** | Pointer to **NullableTime** | Date and time the deposit was approved. | [optional] 
**RejectedAt** | Pointer to **NullableTime** | Date and time the deposit was rejected. | [optional] 
**RejectionReason** | Pointer to **NullableString** | Reason the deposit was rejected. | [optional] 
**TransactionId** | Pointer to **NullableString** | Deposit transaction created on approval. | [optional] 
**CreatedAt** | Pointer to **time.Time** | Moment the received Pix was recorded, before the credit. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Moment of the last change to the record, which changes when the deposit is approved or rejected. | [optional] 

## Methods

### NewDepositPending

`func NewDepositPending() *DepositPending`

NewDepositPending instantiates a new DepositPending object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositPendingWithDefaults

`func NewDepositPendingWithDefaults() *DepositPending`

NewDepositPendingWithDefaults instantiates a new DepositPending object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DepositPending) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DepositPending) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DepositPending) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DepositPending) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *DepositPending) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DepositPending) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DepositPending) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DepositPending) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAmount

`func (o *DepositPending) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *DepositPending) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *DepositPending) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *DepositPending) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPayerDocument

`func (o *DepositPending) GetPayerDocument() string`

GetPayerDocument returns the PayerDocument field if non-nil, zero value otherwise.

### GetPayerDocumentOk

`func (o *DepositPending) GetPayerDocumentOk() (*string, bool)`

GetPayerDocumentOk returns a tuple with the PayerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerDocument

`func (o *DepositPending) SetPayerDocument(v string)`

SetPayerDocument sets PayerDocument field to given value.

### HasPayerDocument

`func (o *DepositPending) HasPayerDocument() bool`

HasPayerDocument returns a boolean if a field has been set.

### GetPayerName

`func (o *DepositPending) GetPayerName() string`

GetPayerName returns the PayerName field if non-nil, zero value otherwise.

### GetPayerNameOk

`func (o *DepositPending) GetPayerNameOk() (*string, bool)`

GetPayerNameOk returns a tuple with the PayerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerName

`func (o *DepositPending) SetPayerName(v string)`

SetPayerName sets PayerName field to given value.

### HasPayerName

`func (o *DepositPending) HasPayerName() bool`

HasPayerName returns a boolean if a field has been set.

### SetPayerNameNil

`func (o *DepositPending) SetPayerNameNil(b bool)`

 SetPayerNameNil sets the value for PayerName to be an explicit nil

### UnsetPayerName
`func (o *DepositPending) UnsetPayerName()`

UnsetPayerName ensures that no value is present for PayerName, not even an explicit nil
### GetPayerAccountNumber

`func (o *DepositPending) GetPayerAccountNumber() string`

GetPayerAccountNumber returns the PayerAccountNumber field if non-nil, zero value otherwise.

### GetPayerAccountNumberOk

`func (o *DepositPending) GetPayerAccountNumberOk() (*string, bool)`

GetPayerAccountNumberOk returns a tuple with the PayerAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerAccountNumber

`func (o *DepositPending) SetPayerAccountNumber(v string)`

SetPayerAccountNumber sets PayerAccountNumber field to given value.

### HasPayerAccountNumber

`func (o *DepositPending) HasPayerAccountNumber() bool`

HasPayerAccountNumber returns a boolean if a field has been set.

### SetPayerAccountNumberNil

`func (o *DepositPending) SetPayerAccountNumberNil(b bool)`

 SetPayerAccountNumberNil sets the value for PayerAccountNumber to be an explicit nil

### UnsetPayerAccountNumber
`func (o *DepositPending) UnsetPayerAccountNumber()`

UnsetPayerAccountNumber ensures that no value is present for PayerAccountNumber, not even an explicit nil
### GetPayerInstitutionIspb

`func (o *DepositPending) GetPayerInstitutionIspb() string`

GetPayerInstitutionIspb returns the PayerInstitutionIspb field if non-nil, zero value otherwise.

### GetPayerInstitutionIspbOk

`func (o *DepositPending) GetPayerInstitutionIspbOk() (*string, bool)`

GetPayerInstitutionIspbOk returns a tuple with the PayerInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionIspb

`func (o *DepositPending) SetPayerInstitutionIspb(v string)`

SetPayerInstitutionIspb sets PayerInstitutionIspb field to given value.

### HasPayerInstitutionIspb

`func (o *DepositPending) HasPayerInstitutionIspb() bool`

HasPayerInstitutionIspb returns a boolean if a field has been set.

### SetPayerInstitutionIspbNil

`func (o *DepositPending) SetPayerInstitutionIspbNil(b bool)`

 SetPayerInstitutionIspbNil sets the value for PayerInstitutionIspb to be an explicit nil

### UnsetPayerInstitutionIspb
`func (o *DepositPending) UnsetPayerInstitutionIspb()`

UnsetPayerInstitutionIspb ensures that no value is present for PayerInstitutionIspb, not even an explicit nil
### GetPayerInstitutionName

`func (o *DepositPending) GetPayerInstitutionName() string`

GetPayerInstitutionName returns the PayerInstitutionName field if non-nil, zero value otherwise.

### GetPayerInstitutionNameOk

`func (o *DepositPending) GetPayerInstitutionNameOk() (*string, bool)`

GetPayerInstitutionNameOk returns a tuple with the PayerInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionName

`func (o *DepositPending) SetPayerInstitutionName(v string)`

SetPayerInstitutionName sets PayerInstitutionName field to given value.

### HasPayerInstitutionName

`func (o *DepositPending) HasPayerInstitutionName() bool`

HasPayerInstitutionName returns a boolean if a field has been set.

### SetPayerInstitutionNameNil

`func (o *DepositPending) SetPayerInstitutionNameNil(b bool)`

 SetPayerInstitutionNameNil sets the value for PayerInstitutionName to be an explicit nil

### UnsetPayerInstitutionName
`func (o *DepositPending) UnsetPayerInstitutionName()`

UnsetPayerInstitutionName ensures that no value is present for PayerInstitutionName, not even an explicit nil
### GetReceiverDocument

`func (o *DepositPending) GetReceiverDocument() string`

GetReceiverDocument returns the ReceiverDocument field if non-nil, zero value otherwise.

### GetReceiverDocumentOk

`func (o *DepositPending) GetReceiverDocumentOk() (*string, bool)`

GetReceiverDocumentOk returns a tuple with the ReceiverDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverDocument

`func (o *DepositPending) SetReceiverDocument(v string)`

SetReceiverDocument sets ReceiverDocument field to given value.

### HasReceiverDocument

`func (o *DepositPending) HasReceiverDocument() bool`

HasReceiverDocument returns a boolean if a field has been set.

### SetReceiverDocumentNil

`func (o *DepositPending) SetReceiverDocumentNil(b bool)`

 SetReceiverDocumentNil sets the value for ReceiverDocument to be an explicit nil

### UnsetReceiverDocument
`func (o *DepositPending) UnsetReceiverDocument()`

UnsetReceiverDocument ensures that no value is present for ReceiverDocument, not even an explicit nil
### GetReceiverName

`func (o *DepositPending) GetReceiverName() string`

GetReceiverName returns the ReceiverName field if non-nil, zero value otherwise.

### GetReceiverNameOk

`func (o *DepositPending) GetReceiverNameOk() (*string, bool)`

GetReceiverNameOk returns a tuple with the ReceiverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverName

`func (o *DepositPending) SetReceiverName(v string)`

SetReceiverName sets ReceiverName field to given value.

### HasReceiverName

`func (o *DepositPending) HasReceiverName() bool`

HasReceiverName returns a boolean if a field has been set.

### SetReceiverNameNil

`func (o *DepositPending) SetReceiverNameNil(b bool)`

 SetReceiverNameNil sets the value for ReceiverName to be an explicit nil

### UnsetReceiverName
`func (o *DepositPending) UnsetReceiverName()`

UnsetReceiverName ensures that no value is present for ReceiverName, not even an explicit nil
### GetReceiverAccountNumber

`func (o *DepositPending) GetReceiverAccountNumber() string`

GetReceiverAccountNumber returns the ReceiverAccountNumber field if non-nil, zero value otherwise.

### GetReceiverAccountNumberOk

`func (o *DepositPending) GetReceiverAccountNumberOk() (*string, bool)`

GetReceiverAccountNumberOk returns a tuple with the ReceiverAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverAccountNumber

`func (o *DepositPending) SetReceiverAccountNumber(v string)`

SetReceiverAccountNumber sets ReceiverAccountNumber field to given value.

### HasReceiverAccountNumber

`func (o *DepositPending) HasReceiverAccountNumber() bool`

HasReceiverAccountNumber returns a boolean if a field has been set.

### SetReceiverAccountNumberNil

`func (o *DepositPending) SetReceiverAccountNumberNil(b bool)`

 SetReceiverAccountNumberNil sets the value for ReceiverAccountNumber to be an explicit nil

### UnsetReceiverAccountNumber
`func (o *DepositPending) UnsetReceiverAccountNumber()`

UnsetReceiverAccountNumber ensures that no value is present for ReceiverAccountNumber, not even an explicit nil
### GetReceiverInstitutionIspb

`func (o *DepositPending) GetReceiverInstitutionIspb() string`

GetReceiverInstitutionIspb returns the ReceiverInstitutionIspb field if non-nil, zero value otherwise.

### GetReceiverInstitutionIspbOk

`func (o *DepositPending) GetReceiverInstitutionIspbOk() (*string, bool)`

GetReceiverInstitutionIspbOk returns a tuple with the ReceiverInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionIspb

`func (o *DepositPending) SetReceiverInstitutionIspb(v string)`

SetReceiverInstitutionIspb sets ReceiverInstitutionIspb field to given value.

### HasReceiverInstitutionIspb

`func (o *DepositPending) HasReceiverInstitutionIspb() bool`

HasReceiverInstitutionIspb returns a boolean if a field has been set.

### SetReceiverInstitutionIspbNil

`func (o *DepositPending) SetReceiverInstitutionIspbNil(b bool)`

 SetReceiverInstitutionIspbNil sets the value for ReceiverInstitutionIspb to be an explicit nil

### UnsetReceiverInstitutionIspb
`func (o *DepositPending) UnsetReceiverInstitutionIspb()`

UnsetReceiverInstitutionIspb ensures that no value is present for ReceiverInstitutionIspb, not even an explicit nil
### GetReceiverInstitutionName

`func (o *DepositPending) GetReceiverInstitutionName() string`

GetReceiverInstitutionName returns the ReceiverInstitutionName field if non-nil, zero value otherwise.

### GetReceiverInstitutionNameOk

`func (o *DepositPending) GetReceiverInstitutionNameOk() (*string, bool)`

GetReceiverInstitutionNameOk returns a tuple with the ReceiverInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionName

`func (o *DepositPending) SetReceiverInstitutionName(v string)`

SetReceiverInstitutionName sets ReceiverInstitutionName field to given value.

### HasReceiverInstitutionName

`func (o *DepositPending) HasReceiverInstitutionName() bool`

HasReceiverInstitutionName returns a boolean if a field has been set.

### SetReceiverInstitutionNameNil

`func (o *DepositPending) SetReceiverInstitutionNameNil(b bool)`

 SetReceiverInstitutionNameNil sets the value for ReceiverInstitutionName to be an explicit nil

### UnsetReceiverInstitutionName
`func (o *DepositPending) UnsetReceiverInstitutionName()`

UnsetReceiverInstitutionName ensures that no value is present for ReceiverInstitutionName, not even an explicit nil
### GetEndToEndId

`func (o *DepositPending) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *DepositPending) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *DepositPending) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.

### HasEndToEndId

`func (o *DepositPending) HasEndToEndId() bool`

HasEndToEndId returns a boolean if a field has been set.

### GetPaidAt

`func (o *DepositPending) GetPaidAt() time.Time`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *DepositPending) GetPaidAtOk() (*time.Time, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *DepositPending) SetPaidAt(v time.Time)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *DepositPending) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### SetPaidAtNil

`func (o *DepositPending) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *DepositPending) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetPixKey

`func (o *DepositPending) GetPixKey() string`

GetPixKey returns the PixKey field if non-nil, zero value otherwise.

### GetPixKeyOk

`func (o *DepositPending) GetPixKeyOk() (*string, bool)`

GetPixKeyOk returns a tuple with the PixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPixKey

`func (o *DepositPending) SetPixKey(v string)`

SetPixKey sets PixKey field to given value.

### HasPixKey

`func (o *DepositPending) HasPixKey() bool`

HasPixKey returns a boolean if a field has been set.

### SetPixKeyNil

`func (o *DepositPending) SetPixKeyNil(b bool)`

 SetPixKeyNil sets the value for PixKey to be an explicit nil

### UnsetPixKey
`func (o *DepositPending) UnsetPixKey()`

UnsetPixKey ensures that no value is present for PixKey, not even an explicit nil
### GetDescription

`func (o *DepositPending) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DepositPending) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DepositPending) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DepositPending) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *DepositPending) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *DepositPending) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetApprovedAt

`func (o *DepositPending) GetApprovedAt() time.Time`

GetApprovedAt returns the ApprovedAt field if non-nil, zero value otherwise.

### GetApprovedAtOk

`func (o *DepositPending) GetApprovedAtOk() (*time.Time, bool)`

GetApprovedAtOk returns a tuple with the ApprovedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovedAt

`func (o *DepositPending) SetApprovedAt(v time.Time)`

SetApprovedAt sets ApprovedAt field to given value.

### HasApprovedAt

`func (o *DepositPending) HasApprovedAt() bool`

HasApprovedAt returns a boolean if a field has been set.

### SetApprovedAtNil

`func (o *DepositPending) SetApprovedAtNil(b bool)`

 SetApprovedAtNil sets the value for ApprovedAt to be an explicit nil

### UnsetApprovedAt
`func (o *DepositPending) UnsetApprovedAt()`

UnsetApprovedAt ensures that no value is present for ApprovedAt, not even an explicit nil
### GetRejectedAt

`func (o *DepositPending) GetRejectedAt() time.Time`

GetRejectedAt returns the RejectedAt field if non-nil, zero value otherwise.

### GetRejectedAtOk

`func (o *DepositPending) GetRejectedAtOk() (*time.Time, bool)`

GetRejectedAtOk returns a tuple with the RejectedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejectedAt

`func (o *DepositPending) SetRejectedAt(v time.Time)`

SetRejectedAt sets RejectedAt field to given value.

### HasRejectedAt

`func (o *DepositPending) HasRejectedAt() bool`

HasRejectedAt returns a boolean if a field has been set.

### SetRejectedAtNil

`func (o *DepositPending) SetRejectedAtNil(b bool)`

 SetRejectedAtNil sets the value for RejectedAt to be an explicit nil

### UnsetRejectedAt
`func (o *DepositPending) UnsetRejectedAt()`

UnsetRejectedAt ensures that no value is present for RejectedAt, not even an explicit nil
### GetRejectionReason

`func (o *DepositPending) GetRejectionReason() string`

GetRejectionReason returns the RejectionReason field if non-nil, zero value otherwise.

### GetRejectionReasonOk

`func (o *DepositPending) GetRejectionReasonOk() (*string, bool)`

GetRejectionReasonOk returns a tuple with the RejectionReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejectionReason

`func (o *DepositPending) SetRejectionReason(v string)`

SetRejectionReason sets RejectionReason field to given value.

### HasRejectionReason

`func (o *DepositPending) HasRejectionReason() bool`

HasRejectionReason returns a boolean if a field has been set.

### SetRejectionReasonNil

`func (o *DepositPending) SetRejectionReasonNil(b bool)`

 SetRejectionReasonNil sets the value for RejectionReason to be an explicit nil

### UnsetRejectionReason
`func (o *DepositPending) UnsetRejectionReason()`

UnsetRejectionReason ensures that no value is present for RejectionReason, not even an explicit nil
### GetTransactionId

`func (o *DepositPending) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *DepositPending) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *DepositPending) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *DepositPending) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### SetTransactionIdNil

`func (o *DepositPending) SetTransactionIdNil(b bool)`

 SetTransactionIdNil sets the value for TransactionId to be an explicit nil

### UnsetTransactionId
`func (o *DepositPending) UnsetTransactionId()`

UnsetTransactionId ensures that no value is present for TransactionId, not even an explicit nil
### GetCreatedAt

`func (o *DepositPending) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DepositPending) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DepositPending) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DepositPending) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *DepositPending) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DepositPending) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DepositPending) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *DepositPending) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


