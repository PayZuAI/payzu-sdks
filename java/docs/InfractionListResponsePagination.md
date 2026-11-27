

# InfractionListResponsePagination

Página, limite, total de itens e de páginas.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**page** | **Integer** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. |  [optional] |
|**limit** | **Integer** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. |  [optional] |
|**totalItems** | **Integer** | Número de infrações que atendem aos filtros, contado até 100.000. |  [optional] |
|**totalPages** | **Integer** | Número de páginas para o limit informado, obtido de totalItems arredondado para cima. |  [optional] |



