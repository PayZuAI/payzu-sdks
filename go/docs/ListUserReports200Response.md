# ListUserReports200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int32** | Quantidade de solicitações de relatório do usuário que atendem aos filtros. | [optional] 
**Pages** | Pointer to **int32** | Número de páginas para o limit informado, calculado a partir de total arredondado para cima. | [optional] 
**Reports** | Pointer to [**[]ReportJob**](ReportJob.md) | Solicitações de relatório da página pedida, com id, status e datas. | [optional] 

## Methods

### NewListUserReports200Response

`func NewListUserReports200Response() *ListUserReports200Response`

NewListUserReports200Response instantiates a new ListUserReports200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListUserReports200ResponseWithDefaults

`func NewListUserReports200ResponseWithDefaults() *ListUserReports200Response`

NewListUserReports200ResponseWithDefaults instantiates a new ListUserReports200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *ListUserReports200Response) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListUserReports200Response) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListUserReports200Response) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ListUserReports200Response) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetPages

`func (o *ListUserReports200Response) GetPages() int32`

GetPages returns the Pages field if non-nil, zero value otherwise.

### GetPagesOk

`func (o *ListUserReports200Response) GetPagesOk() (*int32, bool)`

GetPagesOk returns a tuple with the Pages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPages

`func (o *ListUserReports200Response) SetPages(v int32)`

SetPages sets Pages field to given value.

### HasPages

`func (o *ListUserReports200Response) HasPages() bool`

HasPages returns a boolean if a field has been set.

### GetReports

`func (o *ListUserReports200Response) GetReports() []ReportJob`

GetReports returns the Reports field if non-nil, zero value otherwise.

### GetReportsOk

`func (o *ListUserReports200Response) GetReportsOk() (*[]ReportJob, bool)`

GetReportsOk returns a tuple with the Reports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReports

`func (o *ListUserReports200Response) SetReports(v []ReportJob)`

SetReports sets Reports field to given value.

### HasReports

`func (o *ListUserReports200Response) HasReports() bool`

HasReports returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


