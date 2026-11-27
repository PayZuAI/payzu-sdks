# ResendUserCallbacksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **\DateTime** | Início do período. No máximo 30 dias atrás. |
**created_at_to** | **\DateTime** | Fim do período, igual ou posterior a createdAtFrom. A janela entre início e fim não pode passar de 7 dias. |
**transaction_ids** | **string[]** | Restringe a IDs de transação específicos | [optional]
**transaction_types** | **string[]** | Filtra por tipo de transação | [optional]
**transaction_status** | **string[]** | Filtra por status da transação | [optional]
**transaction_end_to_end_ids** | **string[]** | Restringe a IDs end-to-end Pix específicos | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
