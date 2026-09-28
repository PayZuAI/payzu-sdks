# ReportJobDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Report identifier (UUID), generated when the report is requested. | [optional]
**status** | **string** | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. | [optional]
**created_at** | **\DateTime** | Date and time the report generation was requested. | [optional]
**updated_at** | **\DateTime** | Date and time of the last change to the report record. | [optional]
**expires_at** | **\DateTime** | When the file expires from storage (usually 7 days after creation) | [optional]
**params** | **array<string,mixed>** | Filters used when the report was created. | [optional]
**written_rows** | **int** | Rows written to the file. Null until the report is COMPLETED. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
