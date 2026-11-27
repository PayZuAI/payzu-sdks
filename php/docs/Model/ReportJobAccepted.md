# ReportJobAccepted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador (UUID) do relatório, gerado no momento da solicitação. | [optional]
**status** | **string** | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. | [optional]
**created_at** | **\DateTime** | Data e hora em que a geração do relatório foi solicitada. | [optional]
**updated_at** | **\DateTime** | Data e hora da última alteração no registro do relatório. | [optional]
**params** | **array<string,mixed>** | Filtros usados na criação do relatório. | [optional]
**written_rows** | **int** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. | [optional]
**expires_at** | **\DateTime** | Data em que o arquivo do relatório expira. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
