

# BankStatementListResponsePagination

Page and limit used, and whether there is a next page.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**page** | **Integer** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. |  [optional] |
|**limit** | **Integer** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. |  [optional] |
|**hasNextPage** | **Boolean** | Indicates whether there is a next page, detected by fetching one item beyond the limit. |  [optional] |



