# TransactionWithRefunds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador da transação na PayZu. | [optional] 
**status** | **str** | Status atual da transação. | [optional] 
**amount** | **float** | Valor da transação, antes da taxa. | [optional] 
**type** | **str** | Tipo da transação: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION ou ADJUSTMENT. | [optional] 
**qr_code_text** | **str** | Código copia e cola do Pix. | [optional] 
**qr_code_base64** | **str** | Imagem PNG do QR Code em base64, sem o prefixo data:. | [optional] 
**qr_code_url** | **str** | Rota autenticada que devolve o PNG do QR Code. | [optional] 
**generated_name** | **str** | Nome usado para montar a cobrança. | [optional] 
**generated_document** | **str** | CPF ou CNPJ usado como devedor na cobrança. | [optional] 
**generated_email** | **str** | E-mail usado para montar a cobrança. | [optional] 
**payer_name** | **str** | Nome do titular da conta que enviou o Pix, como informado pela instituição de origem. | [optional] 
**payer_document** | **str** | CPF ou CNPJ de quem enviou o Pix, informado pela instituição de origem. | [optional] 
**payer_institution_ispb** | **str** | Código ISPB da instituição de onde saiu o Pix. | [optional] 
**payer_institution_name** | **str** | Nome da instituição de onde saiu o Pix. | [optional] 
**payer_account_number** | **str** | Conta PayZu do pagador. | [optional] 
**service_fee_charged** | **float** | Tarifa PayZu cobrada na operação, em reais. Pode ter mais de duas casas decimais: não arredonde ao conciliar. | [optional] 
**withdraw_pix_key** | **str** | Chave Pix de destino do saque, já normalizada. | [optional] 
**withdraw_pix_type** | **str** | Tipo da chave de destino do saque, sendo evp a chave aleatória. | [optional] 
**receiver_name** | **str** | Nome do titular da conta que recebe. | [optional] 
**receiver_document** | **str** | CPF ou CNPJ de quem recebe. | [optional] 
**receiver_institution_ispb** | **str** | Código ISPB da instituição que recebe o Pix. | [optional] 
**receiver_institution_name** | **str** | Nome da instituição que recebe o Pix. | [optional] 
**receiver_account_number** | **str** | Conta PayZu do recebedor. | [optional] 
**end_to_end_id** | **str** | Identificador do Pix no arranjo do Bacen, usado para rastrear a liquidação e pedir devolução. | [optional] 
**created_at** | **str** | Data e hora do registro da transação. | [optional] 
**updated_at** | **str** | Data e hora da última alteração. | [optional] 
**paid_at** | **str** | Data e hora da liquidação do Pix, informada pela instituição. | [optional] 
**client_reference** | **str** | Seu identificador da transação, devolvido em consultas e callbacks. | [optional] 
**refund_end_to_end_id** | **str** | ID end-to-end do Pix de devolução. | [optional] 
**refund_amount** | **float** | Valor devolvido. | [optional] 
**refund_status** | **str** | Status da devolução. | [optional] 
**refund_reason** | **str** | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). | [optional] 
**refund_description** | **str** | Descrição da devolução. | [optional] 
**refunded_at** | **str** | Data e hora em que a devolução foi processada. | [optional] 
**cancellation_reason** | **str** | Motivo do cancelamento (se cancelada) | [optional] 
**virtual_account** | **str** | Subconta virtual informada na criação. | [optional] 
**method** | **str** | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. | [optional] 
**refunds** | [**List[Refund]**](Refund.md) | Devoluções da transação, da mais recente à mais antiga. | [optional] 

## Example

```python
from payzu_pix.models.transaction_with_refunds import TransactionWithRefunds

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionWithRefunds from a JSON string
transaction_with_refunds_instance = TransactionWithRefunds.from_json(json)
# print the JSON string representation of the object
print(TransactionWithRefunds.to_json())

# convert the object into a dict
transaction_with_refunds_dict = transaction_with_refunds_instance.to_dict()
# create an instance of TransactionWithRefunds from a dict
transaction_with_refunds_from_dict = TransactionWithRefunds.from_dict(transaction_with_refunds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


