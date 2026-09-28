# ReportJobAccepted

Report job just queued.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Report identifier (UUID), generated when the report is requested. | [optional] 
**status** | **str** | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. | [optional] 
**created_at** | **datetime** | Date and time the report generation was requested. | [optional] 
**updated_at** | **datetime** | Date and time of the last change to the report record. | [optional] 
**params** | **Dict[str, object]** | Filters used when the report was created. | [optional] 
**written_rows** | **int** | Rows written to the file. Null until the report is COMPLETED. | [optional] 
**storage_expires_at** | **datetime** | Date the report file expires. | [optional] 

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


