# PayZuPix::TransactionWaitingForRefundEvent

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da transação na PayZu. |  |
| **type** | **String** | &#x60;DEPOSIT&#x60;: cobrança, Pix recebido numa chave ou transferência recebida. &#x60;WITHDRAW&#x60;: saque ou transferência enviada. |  |
| **status** | **String** | &#x60;WAITING_FOR_REFUND&#x60;: a devolução está em processamento. |  |
| **method** | **String** | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. |  |
| **client_reference** | **String** | O identificador que você enviou na criação. |  |
| **virtual_account** | **String** | A subconta virtual enviada na criação. |  |
| **qr_code_text** | **String** | Copia e cola da cobrança criada em POST /pix. Nas demais transações vem &#x60;null&#x60;. |  |
| **qr_code_url** | **String** | Vem &#x60;null&#x60; no aviso. A rota da imagem sai na criação da cobrança e em GET /pix. |  |
| **generated_name** | **String** | Nome informado para montar a cobrança. |  |
| **generated_document** | **String** | CPF ou CNPJ informado para montar a cobrança. |  |
| **generated_email** | **String** | E-mail informado para montar a cobrança. |  |
| **payer_name** | **String** | Nome do titular da conta de origem, como a instituição informou. |  |
| **payer_document** | **String** | CPF ou CNPJ do titular da conta de origem. |  |
| **payer_account_number** | **String** | Conta PayZu de origem, quando o dinheiro sai de uma conta PayZu. |  |
| **payer_institution_ispb** | **String** | ISPB da instituição de origem. |  |
| **payer_institution_name** | **String** | Nome da instituição de origem. |  |
| **receiver_name** | **String** | Nome do titular da conta de destino. |  |
| **receiver_document** | **String** | CPF ou CNPJ do titular da conta de destino. |  |
| **receiver_institution_ispb** | **String** | ISPB da instituição de destino. |  |
| **receiver_institution_name** | **String** | Nome da instituição de destino. |  |
| **withdraw_pix_key** | **String** | Chave Pix de destino do saque, já normalizada. |  |
| **withdraw_pix_type** | **String** | Tipo da chave de destino. &#x60;evp&#x60; é a chave aleatória. |  |
| **withdraw_qr_code_text** | **String** | Copia e cola pago no saque por QR Code. |  |
| **end_to_end_id** | **String** | Identificador fim a fim do Pix, usado na conciliação. |  |
| **cancellation_reason** | **String** | Motivo do cancelamento, em texto pronto para exibir, como &#x60;Chave Pix não encontrada.&#x60; |  |
| **paid_at** | **Time** | Momento da liquidação, informado pela instituição. |  |
| **refund_end_to_end_id** | **String** | Identificador fim a fim do Pix de devolução. |  |
| **refund_amount** | **String** | Soma devolvida até agora, em reais, como texto decimal (&#x60;\&quot;30.5\&quot;&#x60;). Cada aviso traz o total acumulado: converta em número para comparar, como em GET /pix, onde o campo vem como número. |  |
| **refund_status** | **String** | Status da devolução: &#x60;PENDING&#x60;, &#x60;COMPLETED&#x60; ou &#x60;CANCELED&#x60;. |  |
| **refund_reason** | **String** | Motivo: &#x60;CUSTOMER_REQUEST&#x60;, pedida por você; &#x60;INFRACTION&#x60;, pelo MED; &#x60;DENY_COMPANY_DEPOSIT&#x60;, Pix pago por CNPJ numa conta que não aceita esse depósito; &#x60;ADMIN_REQUEST&#x60;, feita pela PayZu. |  |
| **refund_description** | **String** | Descrição da devolução. |  |
| **refunded_at** | **Time** | Momento da conclusão da devolução. |  |
| **qr_code_base64** | **String** | Vem &#x60;null&#x60; no aviso. A imagem sai na criação da cobrança e em GET /pix. |  |
| **created_at** | **Time** | Criação da transação. |  |
| **updated_at** | **Time** | Última alteração da transação. Com &#x60;id&#x60;, serve para deduplicar e ordenar os avisos de transação. |  |
| **callback_url** | **String** | A URL de aviso enviada na criação da transação. |  |
| **amount** | **Float** | Valor da transação, em reais. |  |
| **service_fee_charged** | **Float** | Tarifa PayZu, em reais, que pode ter mais de duas casas decimais. Pode não vir, conforme a configuração da conta. | [optional] |
| **receiver_account_number** | **String** | Conta PayZu de destino. Não vem no saque para chave pago como transferência entre contas PayZu. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::TransactionWaitingForRefundEvent.new(
  id: null,
  type: null,
  status: null,
  method: null,
  client_reference: null,
  virtual_account: null,
  qr_code_text: null,
  qr_code_url: null,
  generated_name: null,
  generated_document: null,
  generated_email: null,
  payer_name: null,
  payer_document: null,
  payer_account_number: null,
  payer_institution_ispb: null,
  payer_institution_name: null,
  receiver_name: null,
  receiver_document: null,
  receiver_institution_ispb: null,
  receiver_institution_name: null,
  withdraw_pix_key: null,
  withdraw_pix_type: null,
  withdraw_qr_code_text: null,
  end_to_end_id: null,
  cancellation_reason: null,
  paid_at: null,
  refund_end_to_end_id: null,
  refund_amount: null,
  refund_status: null,
  refund_reason: null,
  refund_description: null,
  refunded_at: null,
  qr_code_base64: null,
  created_at: null,
  updated_at: null,
  callback_url: null,
  amount: null,
  service_fee_charged: null,
  receiver_account_number: null
)
```

