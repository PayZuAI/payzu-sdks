# TransactionExpiredEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador da transação na PayZu. |
**type** | **string** | &#x60;DEPOSIT&#x60;: cobrança, Pix recebido numa chave ou transferência recebida. &#x60;WITHDRAW&#x60;: saque ou transferência enviada. |
**status** | **string** | &#x60;EXPIRED&#x60;: a cobrança venceu sem pagamento. |
**method** | **string** | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. |
**client_reference** | **string** | O identificador que você enviou na criação. |
**virtual_account** | **string** | A subconta virtual enviada na criação. |
**qr_code_text** | **string** | Copia e cola da cobrança criada em POST /pix. Nas demais transações vem &#x60;null&#x60;. |
**qr_code_url** | **string** | Vem &#x60;null&#x60; no aviso. A rota da imagem sai na criação da cobrança e em GET /pix. |
**generated_name** | **string** | Nome informado para montar a cobrança. |
**generated_document** | **string** | CPF ou CNPJ informado para montar a cobrança. |
**generated_email** | **string** | E-mail informado para montar a cobrança. |
**payer_name** | **string** | Nome do titular da conta de origem, como a instituição informou. |
**payer_document** | **string** | CPF ou CNPJ do titular da conta de origem. |
**payer_account_number** | **string** | Conta PayZu de origem, quando o dinheiro sai de uma conta PayZu. |
**payer_institution_ispb** | **string** | ISPB da instituição de origem. |
**payer_institution_name** | **string** | Nome da instituição de origem. |
**receiver_name** | **string** | Nome do titular da conta de destino. |
**receiver_document** | **string** | CPF ou CNPJ do titular da conta de destino. |
**receiver_institution_ispb** | **string** | ISPB da instituição de destino. |
**receiver_institution_name** | **string** | Nome da instituição de destino. |
**withdraw_pix_key** | **string** | Chave Pix de destino do saque, já normalizada. |
**withdraw_pix_type** | **string** | Tipo da chave de destino. &#x60;evp&#x60; é a chave aleatória. |
**withdraw_qr_code_text** | **string** | Copia e cola pago no saque por QR Code. |
**end_to_end_id** | **string** | Identificador fim a fim do Pix, usado na conciliação. |
**cancellation_reason** | **string** | Motivo do cancelamento, em texto pronto para exibir, como &#x60;Chave Pix não encontrada.&#x60; |
**paid_at** | **\DateTime** | Momento da liquidação, informado pela instituição. |
**refund_end_to_end_id** | **string** | Identificador fim a fim do Pix de devolução. |
**refund_amount** | **string** | Soma devolvida até agora, em reais, como texto decimal (&#x60;\&quot;30.5\&quot;&#x60;). Cada aviso traz o total acumulado: converta em número para comparar, como em GET /pix, onde o campo vem como número. |
**refund_status** | **string** | Status da devolução: &#x60;PENDING&#x60;, &#x60;COMPLETED&#x60; ou &#x60;CANCELED&#x60;. |
**refund_reason** | **string** | Motivo: &#x60;CUSTOMER_REQUEST&#x60;, pedida por você; &#x60;INFRACTION&#x60;, pelo MED; &#x60;DENY_COMPANY_DEPOSIT&#x60;, Pix pago por CNPJ numa conta que não aceita esse depósito; &#x60;ADMIN_REQUEST&#x60;, feita pela PayZu. |
**refund_description** | **string** | Descrição da devolução. |
**refunded_at** | **\DateTime** | Momento da conclusão da devolução. |
**qr_code_base64** | **string** | Vem &#x60;null&#x60; no aviso. A imagem sai na criação da cobrança e em GET /pix. |
**created_at** | **\DateTime** | Criação da transação. |
**updated_at** | **\DateTime** | Última alteração da transação. Com &#x60;id&#x60;, serve para deduplicar e ordenar os avisos de transação. |
**callback_url** | **string** | A URL de aviso enviada na criação da transação. |
**amount** | **float** | Valor da transação, em reais. |
**service_fee_charged** | **float** | Tarifa PayZu, em reais, que pode ter mais de duas casas decimais. Pode não vir, conforme a configuração da conta. | [optional]
**receiver_account_number** | **string** | Conta PayZu de destino. Não vem no saque para chave pago como transferência entre contas PayZu. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
