# EnqueuedCallbackEnqueued

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total de callbacks enviados para enfileiramento. Não é limitado pelo tamanho de items. | [optional]
**truncated** | **bool** | true quando items lista apenas parte dos callbacks. O reenvio cobre todos mesmo assim. | [optional]
**items** | [**\PayZu\Pix\Model\EnqueuedCallbackItem[]**](EnqueuedCallbackItem.md) | Callbacks enfileirados, no máximo 500 entradas. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
