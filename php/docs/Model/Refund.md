# Refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador da devolução. | [optional]
**amount** | **float** | Valor devolvido em BRL. | [optional]
**reason** | **string** | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). | [optional]
**description** | **string** | Descrição da devolução. | [optional]
**status** | **string** | Status da devolução. | [optional]
**end_to_end_id** | **string** | End-to-end ID do Pix de devolução. | [optional]
**refunded_at** | **\DateTime** | Quando a devolução foi concluída. | [optional]
**created_at** | **\DateTime** | Quando a devolução foi pedida. | [optional]
**updated_at** | **\DateTime** | Última alteração da devolução. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
