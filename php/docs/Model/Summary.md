# Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_transactions** | **int** | Quantidade de transações no período. | [optional]
**deposit** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Resumo das entradas da conta no período, ou seja, das transações do tipo DEPOSIT. | [optional]
**withdraw** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Resumo das saídas da conta no período, ou seja, das transações do tipo WITHDRAW. | [optional]
**commission** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Resumo das comissões creditadas à conta no período (transações do tipo COMMISSION). | [optional]
**adjustment** | [**\PayZu\Pix\Model\SummaryBlock**](SummaryBlock.md) | Resumo dos ajustes no período (transações do tipo ADJUSTMENT). | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
