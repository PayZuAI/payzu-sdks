# InfractionListResponsePagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. | [optional]
**limit** | **int** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. | [optional]
**total_items** | **int** | Number of infractions that match the filters, counted up to 100,000. | [optional]
**total_pages** | **int** | Number of pages for the limit provided, taken from totalItems rounded up. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
