

# DepositPendingListResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**page** | **Integer** | Page returned in this response. |  [optional] |
|**limit** | **Integer** | Maximum number of records per page used in this query. |  [optional] |
|**hasNextPage** | **Boolean** | Comes back true when there is still a record after this page. |  [optional] |
|**data** | [**List&lt;DepositPending&gt;**](DepositPending.md) | Pending deposits of this page, ordered from the most recent creation to the oldest. |  [optional] |



