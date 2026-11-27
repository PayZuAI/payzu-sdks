# TransactionCompletedEvent

A transação como está no momento do envio. Cada tentativa lê a transação de novo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da transação na PayZu. | 
**type** | **str** | &#x60;DEPOSIT&#x60;: cobrança, Pix recebido numa chave ou transferência recebida. &#x60;WITHDRAW&#x60;: saque ou transferência enviada. | 
**status** | **str** | &#x60;COMPLETED&#x60;: a transação foi liquidada. | 
**method** | **str** | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. | 
**client_reference** | **str** | O identificador que você enviou na criação. | 
**virtual_account** | **str** | A subconta virtual enviada na criação. | 
**qr_code_text** | **str** | Copia e cola da cobrança criada em POST /pix. Nas demais transações vem &#x60;null&#x60;. | 
**qr_code_url** | **str** | Vem &#x60;null&#x60; no aviso. A rota da imagem sai na criação da cobrança e em GET /pix. | 
**generated_name** | **str** | Nome informado para montar a cobrança. | 
**generated_document** | **str** | CPF ou CNPJ informado para montar a cobrança. | 
**generated_email** | **str** | E-mail informado para montar a cobrança. | 
**payer_name** | **str** | Nome do titular da conta de origem, como a instituição informou. | 
**payer_document** | **str** | CPF ou CNPJ do titular da conta de origem. | 
**payer_account_number** | **str** | Conta PayZu de origem, quando o dinheiro sai de uma conta PayZu. | 
**payer_institution_ispb** | **str** | ISPB da instituição de origem. | 
**payer_institution_name** | **str** | Nome da instituição de origem. | 
**receiver_name** | **str** | Nome do titular da conta de destino. | 
**receiver_document** | **str** | CPF ou CNPJ do titular da conta de destino. | 
**receiver_institution_ispb** | **str** | ISPB da instituição de destino. | 
**receiver_institution_name** | **str** | Nome da instituição de destino. | 
**withdraw_pix_key** | **str** | Chave Pix de destino do saque, já normalizada. | 
**withdraw_pix_type** | **str** | Tipo da chave de destino. &#x60;evp&#x60; é a chave aleatória. | 
**withdraw_qr_code_text** | **str** | Copia e cola pago no saque por QR Code. | 
**end_to_end_id** | **str** | Identificador fim a fim do Pix, usado na conciliação. | 
**cancellation_reason** | **str** | Motivo do cancelamento, em texto pronto para exibir, como &#x60;Chave Pix não encontrada.&#x60; | 
**paid_at** | **datetime** | Momento da liquidação, informado pela instituição. | 
**refund_end_to_end_id** | **str** | Identificador fim a fim do Pix de devolução. | 
**refund_amount** | **str** | Soma devolvida até agora, em reais, como texto decimal (&#x60;\&quot;30.5\&quot;&#x60;). Cada aviso traz o total acumulado: converta em número para comparar, como em GET /pix, onde o campo vem como número. | 
**refund_status** | **str** | Status da devolução: &#x60;PENDING&#x60;, &#x60;COMPLETED&#x60; ou &#x60;CANCELED&#x60;. | 
**refund_reason** | **str** | Motivo: &#x60;CUSTOMER_REQUEST&#x60;, pedida por você; &#x60;INFRACTION&#x60;, pelo MED; &#x60;DENY_COMPANY_DEPOSIT&#x60;, Pix pago por CNPJ numa conta que não aceita esse depósito; &#x60;ADMIN_REQUEST&#x60;, feita pela PayZu. | 
**refund_description** | **str** | Descrição da devolução. | 
**refunded_at** | **datetime** | Momento da conclusão da devolução. | 
**qr_code_base64** | **str** | Vem &#x60;null&#x60; no aviso. A imagem sai na criação da cobrança e em GET /pix. | 
**created_at** | **datetime** | Criação da transação. | 
**updated_at** | **datetime** | Última alteração da transação. Com &#x60;id&#x60;, serve para deduplicar e ordenar os avisos de transação. | 
**callback_url** | **str** | A URL de aviso enviada na criação da transação. | 
**amount** | **float** | Valor da transação, em reais. | 
**service_fee_charged** | **float** | Tarifa PayZu, em reais, que pode ter mais de duas casas decimais. Pode não vir, conforme a configuração da conta. | [optional] 
**receiver_account_number** | **str** | Conta PayZu de destino. Não vem no saque para chave pago como transferência entre contas PayZu. | [optional] 

## Example

```python
from payzu_pix.models.transaction_completed_event import TransactionCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionCompletedEvent from a JSON string
transaction_completed_event_instance = TransactionCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(TransactionCompletedEvent.to_json())

# convert the object into a dict
transaction_completed_event_dict = transaction_completed_event_instance.to_dict()
# create an instance of TransactionCompletedEvent from a dict
transaction_completed_event_from_dict = TransactionCompletedEvent.from_dict(transaction_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


