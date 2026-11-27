# ResendWebhookCallbacksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **\DateTime** | Início do período das entregas. No máximo 30 dias atrás. |
**created_at_to** | **\DateTime** | Fim do período das entregas, igual ou posterior a createdAtFrom. A janela não pode passar de 7 dias. |
**webhook_ids** | **string[]** | Webhooks a reenviar. Omitido: todos os webhooks ativos da conta. | [optional]
**transaction_ids** | **string[]** | Restringe a IDs de transação específicos. | [optional]
**transaction_types** | **string[]** | Filtra pelo tipo da transação. | [optional]
**transaction_status** | **string[]** | Filtra pelo status atual da transação. | [optional]
**transaction_end_to_end_ids** | **string[]** | Restringe a end-to-end IDs específicos. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
