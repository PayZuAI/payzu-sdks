# InfractionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador da contestação dentro da PayZu, usado nas rotas de consulta e no envio da defesa. | [optional]
**protocol** | **string** | Código da contestação no Bacen. | [optional]
**status** | **string** | Situação atual da contestação. | [optional]
**type** | **string** | Tipo da contestação: REFUND_REQUEST, FRAUD ou REFUND_CANCELLED. | [optional]
**reported_by** | **string** | Lado que abriu a contestação: DEBITED_PARTICIPANT ou CREDITED_PARTICIPANT. | [optional]
**report_details** | **string** | Motivo informado por quem abriu a contestação, no texto enviado pelo banco parceiro. | [optional]
**analysis_result** | **string** | Desfecho da análise: AGREED ou DISAGREED. | [optional]
**analysis_details** | **string** | Texto complementar sobre a decisão da análise, quando o banco parceiro envia essa informação. | [optional]
**reported_at** | **\DateTime** | Momento em que a contestação foi aberta. | [optional]
**expires_at** | **\DateTime** | Prazo final para enviar a defesa desta contestação. | [optional]
**transaction** | [**\PayZu\Pix\Model\InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional]
**defense_history** | [**\PayZu\Pix\Model\DefenseHistoryEntry[]**](DefenseHistoryEntry.md) | Defesas já enviadas para esta contestação, com texto, status e anexos de cada uma. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
