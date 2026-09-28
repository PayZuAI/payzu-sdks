# ReportJobDetail

Report job with the filters used and the total of rows written.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Report identifier (UUID), generated when the report is requested. | [optional] 
**status** | **str** | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. | [optional] 
**created_at** | **datetime** | Date and time the report generation was requested. | [optional] 
**updated_at** | **datetime** | Date and time of the last change to the report record. | [optional] 
**expires_at** | **datetime** | When the file expires from storage (usually 7 days after creation) | [optional] 
**params** | **Dict[str, object]** | Filters used when the report was created. | [optional] 
**written_rows** | **int** | Rows written to the file. Null until the report is COMPLETED. | [optional] 

## Example

```python
from payzu_pix.models.report_job_detail import ReportJobDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ReportJobDetail from a JSON string
report_job_detail_instance = ReportJobDetail.from_json(json)
# print the JSON string representation of the object
print(ReportJobDetail.to_json())

# convert the object into a dict
report_job_detail_dict = report_job_detail_instance.to_dict()
# create an instance of ReportJobDetail from a dict
report_job_detail_from_dict = ReportJobDetail.from_dict(report_job_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


