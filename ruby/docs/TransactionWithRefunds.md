# PayZuPix::TransactionWithRefunds

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da transação na PayZu. | [optional] |
| **status** | **String** | Status atual da transação. | [optional] |
| **amount** | **Float** | Valor da transação, antes da taxa. | [optional] |
| **type** | **String** | Tipo da transação: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION ou ADJUSTMENT. | [optional] |
| **qr_code_text** | **String** | Código copia e cola do Pix. | [optional] |
| **qr_code_base64** | **String** | Imagem PNG do QR Code em base64, sem o prefixo data:. | [optional] |
| **qr_code_url** | **String** | Rota autenticada que devolve o PNG do QR Code. | [optional] |
| **generated_name** | **String** | Nome usado para montar a cobrança. | [optional] |
| **generated_document** | **String** | CPF ou CNPJ usado como devedor na cobrança. | [optional] |
| **generated_email** | **String** | E-mail usado para montar a cobrança. | [optional] |
| **payer_name** | **String** | Nome do titular da conta que enviou o Pix, como informado pela instituição de origem. | [optional] |
| **payer_document** | **String** | CPF ou CNPJ de quem enviou o Pix, informado pela instituição de origem. | [optional] |
| **payer_institution_ispb** | **String** | Código ISPB da instituição de onde saiu o Pix. | [optional] |
| **payer_institution_name** | **String** | Nome da instituição de onde saiu o Pix. | [optional] |
| **payer_account_number** | **String** | Conta PayZu do pagador. | [optional] |
| **service_fee_charged** | **Float** | Tarifa PayZu cobrada na operação, em reais. Pode ter mais de duas casas decimais: não arredonde ao conciliar. | [optional] |
| **withdraw_pix_key** | **String** | Chave Pix de destino do saque, já normalizada. | [optional] |
| **withdraw_pix_type** | **String** | Tipo da chave de destino do saque, sendo evp a chave aleatória. | [optional] |
| **receiver_name** | **String** | Nome do titular da conta que recebe. | [optional] |
| **receiver_document** | **String** | CPF ou CNPJ de quem recebe. | [optional] |
| **receiver_institution_ispb** | **String** | Código ISPB da instituição que recebe o Pix. | [optional] |
| **receiver_institution_name** | **String** | Nome da instituição que recebe o Pix. | [optional] |
| **receiver_account_number** | **String** | Conta PayZu do recebedor. | [optional] |
| **end_to_end_id** | **String** | Identificador do Pix no arranjo do Bacen, usado para rastrear a liquidação e pedir devolução. | [optional] |
| **created_at** | **String** | Data e hora do registro da transação. | [optional] |
| **updated_at** | **String** | Data e hora da última alteração. | [optional] |
| **paid_at** | **String** | Data e hora da liquidação do Pix, informada pela instituição. | [optional] |
| **client_reference** | **String** | Seu identificador da transação, devolvido em consultas e callbacks. | [optional] |
| **refund_end_to_end_id** | **String** | ID end-to-end do Pix de devolução. | [optional] |
| **refund_amount** | **Float** | Valor devolvido. | [optional] |
| **refund_status** | **String** | Status da devolução. | [optional] |
| **refund_reason** | **String** | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). | [optional] |
| **refund_description** | **String** | Descrição da devolução. | [optional] |
| **refunded_at** | **String** | Data e hora em que a devolução foi processada. | [optional] |
| **cancellation_reason** | **String** | Motivo do cancelamento (se cancelada) | [optional] |
| **virtual_account** | **String** | Subconta virtual informada na criação. | [optional] |
| **method** | **String** | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. | [optional] |
| **refunds** | [**Array&lt;Refund&gt;**](Refund.md) | Devoluções da transação, da mais recente à mais antiga. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::TransactionWithRefunds.new(
  id: null,
  status: null,
  amount: null,
  type: null,
  qr_code_text: null,
  qr_code_base64: null,
  qr_code_url: null,
  generated_name: null,
  generated_document: null,
  generated_email: null,
  payer_name: null,
  payer_document: null,
  payer_institution_ispb: null,
  payer_institution_name: null,
  payer_account_number: null,
  service_fee_charged: null,
  withdraw_pix_key: null,
  withdraw_pix_type: null,
  receiver_name: null,
  receiver_document: null,
  receiver_institution_ispb: null,
  receiver_institution_name: null,
  receiver_account_number: null,
  end_to_end_id: null,
  created_at: null,
  updated_at: null,
  paid_at: null,
  client_reference: null,
  refund_end_to_end_id: null,
  refund_amount: null,
  refund_status: null,
  refund_reason: null,
  refund_description: null,
  refunded_at: null,
  cancellation_reason: null,
  virtual_account: null,
  method: null,
  refunds: null
)
```

