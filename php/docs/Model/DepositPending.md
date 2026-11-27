# DepositPending

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador do depósito pendente. | [optional]
**status** | **string** | Situação do depósito: PENDING, COMPLETED ou REJECTED. | [optional]
**amount** | **float** | Valor recebido. | [optional]
**payer_document** | **string** | CNPJ de quem enviou o Pix. | [optional]
**payer_name** | **string** | Nome de quem enviou o Pix. | [optional]
**payer_account_number** | **string** | Número da conta do pagador dentro da plataforma. | [optional]
**payer_institution_ispb** | **string** | Código ISPB da instituição de onde saiu o Pix. | [optional]
**payer_institution_name** | **string** | Nome da instituição de onde o Pix saiu. | [optional]
**receiver_document** | **string** | CPF ou CNPJ da conta que recebeu o Pix. | [optional]
**receiver_name** | **string** | Nome da conta que recebeu o Pix. | [optional]
**receiver_account_number** | **string** | Número da sua conta na PayZu que receberá o crédito caso o depósito seja aprovado. | [optional]
**receiver_institution_ispb** | **string** | Código ISPB da instituição que recebeu o Pix. | [optional]
**receiver_institution_name** | **string** | Nome da instituição em que o Pix foi liquidado do lado de quem recebeu. | [optional]
**end_to_end_id** | **string** | Identificador ponta a ponta do Pix. | [optional]
**paid_at** | **\DateTime** | Data e hora da liquidação do Pix. | [optional]
**pix_key** | **string** |  | [optional]
**description** | **string** | Texto livre que acompanharia o Pix. | [optional]
**approved_at** | **\DateTime** | Data e hora da aprovação do depósito. | [optional]
**rejected_at** | **\DateTime** | Data e hora da recusa do depósito. | [optional]
**rejection_reason** | **string** | Motivo da recusa do depósito. | [optional]
**transaction_id** | **string** | Transação de depósito criada na aprovação. | [optional]
**created_at** | **\DateTime** | Momento em que o Pix recebido foi registrado, antes do crédito. | [optional]
**updated_at** | **\DateTime** | Momento da última alteração do registro, que muda quando o depósito é aprovado ou recusado. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
