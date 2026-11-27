# GetUserTransactions200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Quantidade de transações que atendem aos filtros da consulta. | [optional]
**pages** | **int** | Número de páginas para o limit informado, calculado a partir de total arredondado para cima. | [optional]
**transactions** | [**\PayZu\Pix\Model\Transaction[]**](Transaction.md) | Itens da página pedida, ordenados por sortBy e sortDirection. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
