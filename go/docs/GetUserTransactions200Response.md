# GetUserTransactions200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int32** | Number of transactions that match the query filters. | [optional] 
**Pages** | Pointer to **int32** | Number of pages for the limit provided, computed from total rounded up. | [optional] 
**Transactions** | Pointer to [**[]Transaction**](Transaction.md) | Items of the requested page, ordered by sortBy and sortDirection. | [optional] 

## Methods

### NewGetUserTransactions200Response

`func NewGetUserTransactions200Response() *GetUserTransactions200Response`

NewGetUserTransactions200Response instantiates a new GetUserTransactions200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserTransactions200ResponseWithDefaults

`func NewGetUserTransactions200ResponseWithDefaults() *GetUserTransactions200Response`

NewGetUserTransactions200ResponseWithDefaults instantiates a new GetUserTransactions200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *GetUserTransactions200Response) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *GetUserTransactions200Response) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *GetUserTransactions200Response) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *GetUserTransactions200Response) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetPages

`func (o *GetUserTransactions200Response) GetPages() int32`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *GetUserTransactions200Response) GetPagesOk() (*int32, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *GetUserTransactions200Response) SetPages(v int32)`

SetPages sets Pages field to given value.

### HasPages

`func (o *GetUserTransactions200Response) HasPages() bool`

HasPages returns a boolean if a field has been set.

### GetTransactions

`func (o *GetUserTransactions200Response) GetTransactions() []Transaction`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *GetUserTransactions200Response) GetTransactionsOk() (*[]Transaction, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *GetUserTransactions200Response) SetTransactions(v []Transaction)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *GetUserTransactions200Response) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


