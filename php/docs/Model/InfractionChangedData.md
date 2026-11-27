# InfractionChangedData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador da infração na PayZu. Use em GET /user/infractions/{id} e na defesa. |
**protocol** | **string** | Código da infração no Bacen. |
**status** | **string** | Situação da infração. Só &#x60;OPEN&#x60; aceita defesa, e &#x60;CLOSED&#x60; traz o resultado em &#x60;analysisResult&#x60;. |
**type** | **string** | Tipo informado na abertura. |
**report_details** | **string** | Motivo informado por quem abriu a infração. |
**reported_by** | **string** | Quem abriu: &#x60;DEBITED_PARTICIPANT&#x60;, a instituição da conta debitada, ou &#x60;CREDITED_PARTICIPANT&#x60;, a da conta creditada. |
**analysis_result** | **string** | Resultado da análise: &#x60;AGREED&#x60;, a contestação procede e a devolução ao pagador segue, avisada em &#x60;TRANSACTION_REFUNDED&#x60;; &#x60;DISAGREED&#x60;, a contestação não procede. |
**analysis_details** | **string** | Texto da decisão, quando a instituição envia. |
**reported_at** | **\DateTime** | Abertura da infração. |
**expires_at** | **\DateTime** | Prazo final para enviar a defesa. |
**created_at** | **\DateTime** | Registro da infração na PayZu. |
**updated_at** | **\DateTime** | Última mudança da infração. Com &#x60;infraction.id&#x60;, serve para deduplicar e ordenar. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
