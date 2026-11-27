# ReportJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Identificador (UUID) do relatório, gerado no momento da solicitação. | [optional] 
**status** | **str** | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. | [optional] 
**created_at** | **datetime** | Data e hora em que a geração do relatório foi solicitada. | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração no registro do relatório. | [optional] 
**expires_at** | **datetime** | Quando o arquivo expira do armazenamento (normalmente 7 dias após a criação) | [optional] 
**params** | **object** | Filtros usados para gerar o relatório. | [optional] 
**written_rows** | **int** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. | [optional] 

## Example

```python
from payzu_pix.models.report_job import ReportJob

# TODO update the JSON string below
json = "{}"
# create an instance of ReportJob from a JSON string
report_job_instance = ReportJob.from_json(json)
# print the JSON string representation of the object
print(ReportJob.to_json())

# convert the object into a dict
report_job_dict = report_job_instance.to_dict()
# create an instance of ReportJob from a dict
report_job_from_dict = ReportJob.from_dict(report_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


