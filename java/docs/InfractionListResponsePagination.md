

# InfractionListResponsePagination

Page, limit, total of items and of pages.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**page** | **Integer** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. |  [optional] |
|**limit** | **Integer** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. |  [optional] |
|**totalItems** | **Integer** | Number of infractions that match the filters, counted up to 100,000. |  [optional] |
|**totalPages** | **Integer** | Number of pages for the limit provided, taken from totalItems rounded up. |  [optional] |



