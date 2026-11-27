# InfractionDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da contestação dentro da PayZu, usado nas rotas de consulta e no envio da defesa. | [optional] 
**protocol** | **str** | Código da contestação no Bacen. | [optional] 
**status** | **str** | Situação atual da contestação. | [optional] 
**type** | **str** | Tipo da contestação: REFUND_REQUEST, FRAUD ou REFUND_CANCELLED. | [optional] 
**reported_by** | **str** | Lado que abriu a contestação: DEBITED_PARTICIPANT ou CREDITED_PARTICIPANT. | [optional] 
**report_details** | **str** | Motivo informado por quem abriu a contestação, no texto enviado pelo banco parceiro. | [optional] 
**analysis_result** | **str** | Desfecho da análise: AGREED ou DISAGREED. | [optional] 
**analysis_details** | **str** | Texto complementar sobre a decisão da análise, quando o banco parceiro envia essa informação. | [optional] 
**reported_at** | **datetime** | Momento em que a contestação foi aberta. | [optional] 
**expires_at** | **datetime** | Prazo final para enviar a defesa desta contestação. | [optional] 
**transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] 
**defense_history** | [**List[DefenseHistoryEntry]**](DefenseHistoryEntry.md) | Defesas já enviadas para esta contestação, com texto, status e anexos de cada uma. | [optional] 

## Example

```python
from payzu_pix.models.infraction_detail import InfractionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionDetail from a JSON string
infraction_detail_instance = InfractionDetail.from_json(json)
# print the JSON string representation of the object
print(InfractionDetail.to_json())

# convert the object into a dict
infraction_detail_dict = infraction_detail_instance.to_dict()
# create an instance of InfractionDetail from a dict
infraction_detail_from_dict = InfractionDetail.from_dict(infraction_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


