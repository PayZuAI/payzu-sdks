# DepositPendingListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Página devolvida nesta resposta. | [optional]
**limit** | **int** | Quantidade máxima de registros por página usada nesta consulta. | [optional]
**has_next_page** | **bool** | Vem true quando ainda existe registro depois desta página. | [optional]
**data** | [**\PayZu\Pix\Model\DepositPending[]**](DepositPending.md) | Depósitos pendentes desta página, ordenados da criação mais recente para a mais antiga. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
