# BankStatementListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**BankStatementListResponsePagination**](BankStatementListResponsePagination.md) |  | [optional] 
**BankStatements** | Pointer to [**[]BankStatement**](BankStatement.md) |  | [optional] 

## Methods

### NewBankStatementListResponse

`func NewBankStatementListResponse() *BankStatementListResponse`

NewBankStatementListResponse instantiates a new BankStatementListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankStatementListResponseWithDefaults

`func NewBankStatementListResponseWithDefaults() *BankStatementListResponse`

NewBankStatementListResponseWithDefaults instantiates a new BankStatementListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *BankStatementListResponse) GetPagination() BankStatementListResponsePagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *BankStatementListResponse) GetPaginationOk() (*BankStatementListResponsePagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *BankStatementListResponse) SetPagination(v BankStatementListResponsePagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *BankStatementListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetBankStatements

`func (o *BankStatementListResponse) GetBankStatements() []BankStatement`

GetBankStatements returns the BankStatements field if non-nil, zero value otherwise.

### GetBankStatementsOk

`func (o *BankStatementListResponse) GetBankStatementsOk() (*[]BankStatement, bool)`

GetBankStatementsOk returns a tuple with the BankStatements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankStatements

`func (o *BankStatementListResponse) SetBankStatements(v []BankStatement)`

SetBankStatements sets BankStatements field to given value.

### HasBankStatements

`func (o *BankStatementListResponse) HasBankStatements() bool`

HasBankStatements returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


