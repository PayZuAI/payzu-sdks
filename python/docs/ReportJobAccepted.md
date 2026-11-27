# ReportJobAccepted

Job de relatório recém-enfileirado.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Identificador (UUID) do relatório, gerado no momento da solicitação. | [optional] 
**status** | **str** | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. | [optional] 
**created_at** | **datetime** | Data e hora em que a geração do relatório foi solicitada. | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração no registro do relatório. | [optional] 
**params** | **Dict[str, object]** | Filtros usados na criação do relatório. | [optional] 
**written_rows** | **int** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. | [optional] 
**expires_at** | **datetime** | Data em que o arquivo do relatório expira. | [optional] 

## Example

```python
from payzu_pix.models.report_job_accepted import ReportJobAccepted

# TODO update the JSON string below
json = "{}"
# create an instance of ReportJobAccepted from a JSON string
report_job_accepted_instance = ReportJobAccepted.from_json(json)
# print the JSON string representation of the object
print(ReportJobAccepted.to_json())

# convert the object into a dict
report_job_accepted_dict = report_job_accepted_instance.to_dict()
# create an instance of ReportJobAccepted from a dict
report_job_accepted_from_dict = ReportJobAccepted.from_dict(report_job_accepted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


