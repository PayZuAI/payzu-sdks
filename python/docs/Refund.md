# Refund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da devolução. | [optional] 
**amount** | **float** | Valor devolvido em BRL. | [optional] 
**reason** | **str** | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). | [optional] 
**description** | **str** | Descrição da devolução. | [optional] 
**status** | **str** | Status da devolução. | [optional] 
**end_to_end_id** | **str** | End-to-end ID do Pix de devolução. | [optional] 
**refunded_at** | **datetime** | Quando a devolução foi concluída. | [optional] 
**created_at** | **datetime** | Quando a devolução foi pedida. | [optional] 
**updated_at** | **datetime** | Última alteração da devolução. | [optional] 

## Example

```python
from payzu_pix.models.refund import Refund

# TODO update the JSON string below
json = "{}"
# create an instance of Refund from a JSON string
refund_instance = Refund.from_json(json)
# print the JSON string representation of the object
print(Refund.to_json())

# convert the object into a dict
refund_dict = refund_instance.to_dict()
# create an instance of Refund from a dict
refund_from_dict = Refund.from_dict(refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


