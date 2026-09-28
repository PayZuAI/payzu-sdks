# Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_transactions** | **int** | Number of transactions in the period. | [optional]
**deposit** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Summary of the account inflows in the period, that is, of the transactions of type DEPOSIT. | [optional]
**withdraw** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Summary of the account outflows in the period, that is, of the transactions of type WITHDRAW. | [optional]
**commission** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Summary of the commissions credited to the account in the period (transactions of type COMMISSION). | [optional]
**adjustment** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Summary of the adjustments in the period (transactions of type ADJUSTMENT). | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
