# DefenseHistoryEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador da defesa. | [optional]
**defense** | **string** | Texto da defesa | [optional]
**status** | **string** | Status da defesa | [optional]
**created_at** | **\DateTime** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. | [optional]
**updated_at** | **\DateTime** | Momento da última alteração da defesa. | [optional]
**files** | [**\PayZu\Pix\Model\DefenseHistoryEntryFilesInner[]**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
