# PayZuPix::DepositPending

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador do depósito pendente. | [optional] |
| **status** | **String** | Situação do depósito: PENDING, COMPLETED ou REJECTED. | [optional] |
| **amount** | **Float** | Valor recebido. | [optional] |
| **payer_document** | **String** | CNPJ de quem enviou o Pix. | [optional] |
| **payer_name** | **String** | Nome de quem enviou o Pix. | [optional] |
| **payer_account_number** | **String** | Número da conta do pagador dentro da plataforma. | [optional] |
| **payer_institution_ispb** | **String** | Código ISPB da instituição de onde saiu o Pix. | [optional] |
| **payer_institution_name** | **String** | Nome da instituição de onde o Pix saiu. | [optional] |
| **receiver_document** | **String** | CPF ou CNPJ da conta que recebeu o Pix. | [optional] |
| **receiver_name** | **String** | Nome da conta que recebeu o Pix. | [optional] |
| **receiver_account_number** | **String** | Número da sua conta na PayZu que receberá o crédito caso o depósito seja aprovado. | [optional] |
| **receiver_institution_ispb** | **String** | Código ISPB da instituição que recebeu o Pix. | [optional] |
| **receiver_institution_name** | **String** | Nome da instituição em que o Pix foi liquidado do lado de quem recebeu. | [optional] |
| **end_to_end_id** | **String** | Identificador ponta a ponta do Pix. | [optional] |
| **paid_at** | **Time** | Data e hora da liquidação do Pix. | [optional] |
| **pix_key** | **String** |  | [optional] |
| **description** | **String** | Texto livre que acompanharia o Pix. | [optional] |
| **approved_at** | **Time** | Data e hora da aprovação do depósito. | [optional] |
| **rejected_at** | **Time** | Data e hora da recusa do depósito. | [optional] |
| **rejection_reason** | **String** | Motivo da recusa do depósito. | [optional] |
| **transaction_id** | **String** | Transação de depósito criada na aprovação. | [optional] |
| **created_at** | **Time** | Momento em que o Pix recebido foi registrado, antes do crédito. | [optional] |
| **updated_at** | **Time** | Momento da última alteração do registro, que muda quando o depósito é aprovado ou recusado. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DepositPending.new(
  id: null,
  status: null,
  amount: null,
  payer_document: null,
  payer_name: null,
  payer_account_number: null,
  payer_institution_ispb: null,
  payer_institution_name: null,
  receiver_document: null,
  receiver_name: null,
  receiver_account_number: null,
  receiver_institution_ispb: null,
  receiver_institution_name: null,
  end_to_end_id: null,
  paid_at: null,
  pix_key: null,
  description: null,
  approved_at: null,
  rejected_at: null,
  rejection_reason: null,
  transaction_id: null,
  created_at: null,
  updated_at: null
)
```

