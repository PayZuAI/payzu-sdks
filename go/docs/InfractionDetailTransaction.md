# InfractionDetailTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to **float32** | Amount of the disputed transaction, in reais with decimal places. | [optional] 
**PayerName** | Pointer to **NullableString** | Name of the Pix payer, as reported by the provider. | [optional] 
**PayerDocument** | Pointer to **NullableString** | CPF or CNPJ of the Pix payer, as reported by the provider. | [optional] 
**ReceiverName** | Pointer to **NullableString** | Name of the Pix receiver, as reported by the provider. | [optional] 
**ReceiverDocument** | Pointer to **NullableString** | CPF or CNPJ of the Pix receiver, as reported by the provider. | [optional] 
**EndToEndId** | Pointer to **NullableString** | End-to-end identifier of the Pix, reported by the provider at settlement. | [optional] 

## Methods

### NewInfractionDetailTransaction

`func NewInfractionDetailTransaction() *InfractionDetailTransaction`

NewInfractionDetailTransaction instantiates a new InfractionDetailTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfractionDetailTransactionWithDefaults

`func NewInfractionDetailTransactionWithDefaults() *InfractionDetailTransaction`

NewInfractionDetailTransactionWithDefaults instantiates a new InfractionDetailTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InfractionDetailTransaction) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InfractionDetailTransaction) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InfractionDetailTransaction) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *InfractionDetailTransaction) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAmount

`func (o *InfractionDetailTransaction) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InfractionDetailTransaction) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InfractionDetailTransaction) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *InfractionDetailTransaction) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPayerName

`func (o *InfractionDetailTransaction) GetPayerName() string`

GetPayerName returns the PayerName field if non-nil, zero value otherwise.

### GetPayerNameOk

`func (o *InfractionDetailTransaction) GetPayerNameOk() (*string, bool)`

GetPayerNameOk returns a tuple with the PayerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerName

`func (o *InfractionDetailTransaction) SetPayerName(v string)`

SetPayerName sets PayerName field to given value.

### HasPayerName

`func (o *InfractionDetailTransaction) HasPayerName() bool`

HasPayerName returns a boolean if a field has been set.

### SetPayerNameNil

`func (o *InfractionDetailTransaction) SetPayerNameNil(b bool)`

 SetPayerNameNil sets the value for PayerName to be an explicit nil

### UnsetPayerName
`func (o *InfractionDetailTransaction) UnsetPayerName()`

UnsetPayerName ensures that no value is present for PayerName, not even an explicit nil
### GetPayerDocument

`func (o *InfractionDetailTransaction) GetPayerDocument() string`

GetPayerDocument returns the PayerDocument field if non-nil, zero value otherwise.

### GetPayerDocumentOk

`func (o *InfractionDetailTransaction) GetPayerDocumentOk() (*string, bool)`

GetPayerDocumentOk returns a tuple with the PayerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerDocument

`func (o *InfractionDetailTransaction) SetPayerDocument(v string)`

SetPayerDocument sets PayerDocument field to given value.

### HasPayerDocument

`func (o *InfractionDetailTransaction) HasPayerDocument() bool`

HasPayerDocument returns a boolean if a field has been set.

### SetPayerDocumentNil

`func (o *InfractionDetailTransaction) SetPayerDocumentNil(b bool)`

 SetPayerDocumentNil sets the value for PayerDocument to be an explicit nil

### UnsetPayerDocument
`func (o *InfractionDetailTransaction) UnsetPayerDocument()`

UnsetPayerDocument ensures that no value is present for PayerDocument, not even an explicit nil
### GetReceiverName

`func (o *InfractionDetailTransaction) GetReceiverName() string`

GetReceiverName returns the ReceiverName field if non-nil, zero value otherwise.

### GetReceiverNameOk

`func (o *InfractionDetailTransaction) GetReceiverNameOk() (*string, bool)`

GetReceiverNameOk returns a tuple with the ReceiverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverName

`func (o *InfractionDetailTransaction) SetReceiverName(v string)`

SetReceiverName sets ReceiverName field to given value.

### HasReceiverName

`func (o *InfractionDetailTransaction) HasReceiverName() bool`

HasReceiverName returns a boolean if a field has been set.

### SetReceiverNameNil

`func (o *InfractionDetailTransaction) SetReceiverNameNil(b bool)`

 SetReceiverNameNil sets the value for ReceiverName to be an explicit nil

### UnsetReceiverName
`func (o *InfractionDetailTransaction) UnsetReceiverName()`

UnsetReceiverName ensures that no value is present for ReceiverName, not even an explicit nil
### GetReceiverDocument

`func (o *InfractionDetailTransaction) GetReceiverDocument() string`

GetReceiverDocument returns the ReceiverDocument field if non-nil, zero value otherwise.

### GetReceiverDocumentOk

`func (o *InfractionDetailTransaction) GetReceiverDocumentOk() (*string, bool)`

GetReceiverDocumentOk returns a tuple with the ReceiverDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverDocument

`func (o *InfractionDetailTransaction) SetReceiverDocument(v string)`

SetReceiverDocument sets ReceiverDocument field to given value.

### HasReceiverDocument

`func (o *InfractionDetailTransaction) HasReceiverDocument() bool`

HasReceiverDocument returns a boolean if a field has been set.

### SetReceiverDocumentNil

`func (o *InfractionDetailTransaction) SetReceiverDocumentNil(b bool)`

 SetReceiverDocumentNil sets the value for ReceiverDocument to be an explicit nil

### UnsetReceiverDocument
`func (o *InfractionDetailTransaction) UnsetReceiverDocument()`

UnsetReceiverDocument ensures that no value is present for ReceiverDocument, not even an explicit nil
### GetEndToEndId

`func (o *InfractionDetailTransaction) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *InfractionDetailTransaction) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *InfractionDetailTransaction) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.

### HasEndToEndId

`func (o *InfractionDetailTransaction) HasEndToEndId() bool`

HasEndToEndId returns a boolean if a field has been set.

### SetEndToEndIdNil

`func (o *InfractionDetailTransaction) SetEndToEndIdNil(b bool)`

 SetEndToEndIdNil sets the value for EndToEndId to be an explicit nil

### UnsetEndToEndId
`func (o *InfractionDetailTransaction) UnsetEndToEndId()`

UnsetEndToEndId ensures that no value is present for EndToEndId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


