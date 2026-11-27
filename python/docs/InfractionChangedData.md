# InfractionChangedData

A infração como está no momento do envio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da infração na PayZu. Use em GET /user/infractions/{id} e na defesa. | 
**protocol** | **str** | Código da infração no Bacen. | 
**status** | **str** | Situação da infração. Só &#x60;OPEN&#x60; aceita defesa, e &#x60;CLOSED&#x60; traz o resultado em &#x60;analysisResult&#x60;. | 
**type** | **str** | Tipo informado na abertura. | 
**report_details** | **str** | Motivo informado por quem abriu a infração. | 
**reported_by** | **str** | Quem abriu: &#x60;DEBITED_PARTICIPANT&#x60;, a instituição da conta debitada, ou &#x60;CREDITED_PARTICIPANT&#x60;, a da conta creditada. | 
**analysis_result** | **str** | Resultado da análise: &#x60;AGREED&#x60;, a contestação procede e a devolução ao pagador segue, avisada em &#x60;TRANSACTION_REFUNDED&#x60;; &#x60;DISAGREED&#x60;, a contestação não procede. | 
**analysis_details** | **str** | Texto da decisão, quando a instituição envia. | 
**reported_at** | **datetime** | Abertura da infração. | 
**expires_at** | **datetime** | Prazo final para enviar a defesa. | 
**created_at** | **datetime** | Registro da infração na PayZu. | 
**updated_at** | **datetime** | Última mudança da infração. Com &#x60;infraction.id&#x60;, serve para deduplicar e ordenar. | 

## Example

```python
from payzu_pix.models.infraction_changed_data import InfractionChangedData

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionChangedData from a JSON string
infraction_changed_data_instance = InfractionChangedData.from_json(json)
# print the JSON string representation of the object
print(InfractionChangedData.to_json())

# convert the object into a dict
infraction_changed_data_dict = infraction_changed_data_instance.to_dict()
# create an instance of InfractionChangedData from a dict
infraction_changed_data_from_dict = InfractionChangedData.from_dict(infraction_changed_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


