# InfractionListResponsePagination

Página, limite, total de itens e de páginas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. | [optional] 
**limit** | **int** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. | [optional] 
**total_items** | **int** | Número de infrações que atendem aos filtros, contado até 100.000. | [optional] 
**total_pages** | **int** | Número de páginas para o limit informado, obtido de totalItems arredondado para cima. | [optional] 

## Example

```python
from payzu_pix.models.infraction_list_response_pagination import InfractionListResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionListResponsePagination from a JSON string
infraction_list_response_pagination_instance = InfractionListResponsePagination.from_json(json)
# print the JSON string representation of the object
print(InfractionListResponsePagination.to_json())

# convert the object into a dict
infraction_list_response_pagination_dict = infraction_list_response_pagination_instance.to_dict()
# create an instance of InfractionListResponsePagination from a dict
infraction_list_response_pagination_from_dict = InfractionListResponsePagination.from_dict(infraction_list_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


