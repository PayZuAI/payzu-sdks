# InfractionListResponsePagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. | [optional]
**limit** | **int** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. | [optional]
**total_items** | **int** | Número de infrações que atendem aos filtros, contado até 100.000. | [optional]
**total_pages** | **int** | Número de páginas para o limit informado, obtido de totalItems arredondado para cima. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
