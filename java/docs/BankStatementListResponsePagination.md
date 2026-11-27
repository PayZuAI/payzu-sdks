

# BankStatementListResponsePagination

Página e limite usados, e se há próxima página.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**page** | **Integer** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. |  [optional] |
|**limit** | **Integer** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. |  [optional] |
|**hasNextPage** | **Boolean** | Indica se existe página seguinte, detectada buscando um item além do limit. |  [optional] |



