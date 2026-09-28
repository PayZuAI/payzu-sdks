# DepositPendingListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Page returned in this response. | [optional]
**limit** | **int** | Maximum number of records per page used in this query. | [optional]
**has_next_page** | **bool** | Comes back true when there is still a record after this page. | [optional]
**data** | [**\PayZu\Pix\Model\DepositPending[]**](DepositPending.md) | Pending deposits of this page, ordered from the most recent creation to the oldest. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
