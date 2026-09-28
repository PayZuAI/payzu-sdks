# BankStatementListResponsePagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. | [optional]
**limit** | **int** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. | [optional]
**has_next_page** | **bool** | Indicates whether there is a next page, detected by fetching one item beyond the limit. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
