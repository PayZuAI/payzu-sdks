# DepositPending


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador do depósito pendente. | [optional] 
**status** | **str** | Situação do depósito: PENDING, COMPLETED ou REJECTED. | [optional] 
**amount** | **float** | Valor recebido. | [optional] 
**payer_document** | **str** | CNPJ de quem enviou o Pix. | [optional] 
**payer_name** | **str** | Nome de quem enviou o Pix. | [optional] 
**payer_account_number** | **str** | Número da conta do pagador dentro da plataforma. | [optional] 
**payer_institution_ispb** | **str** | Código ISPB da instituição de onde saiu o Pix. | [optional] 
**payer_institution_name** | **str** | Nome da instituição de onde o Pix saiu. | [optional] 
**receiver_document** | **str** | CPF ou CNPJ da conta que recebeu o Pix. | [optional] 
**receiver_name** | **str** | Nome da conta que recebeu o Pix. | [optional] 
**receiver_account_number** | **str** | Número da sua conta na PayZu que receberá o crédito caso o depósito seja aprovado. | [optional] 
**receiver_institution_ispb** | **str** | Código ISPB da instituição que recebeu o Pix. | [optional] 
**receiver_institution_name** | **str** | Nome da instituição em que o Pix foi liquidado do lado de quem recebeu. | [optional] 
**end_to_end_id** | **str** | Identificador ponta a ponta do Pix. | [optional] 
**paid_at** | **datetime** | Data e hora da liquidação do Pix. | [optional] 
**pix_key** | **str** |  | [optional] 
**description** | **str** | Texto livre que acompanharia o Pix. | [optional] 
**approved_at** | **datetime** | Data e hora da aprovação do depósito. | [optional] 
**rejected_at** | **datetime** | Data e hora da recusa do depósito. | [optional] 
**rejection_reason** | **str** | Motivo da recusa do depósito. | [optional] 
**transaction_id** | **str** | Transação de depósito criada na aprovação. | [optional] 
**created_at** | **datetime** | Momento em que o Pix recebido foi registrado, antes do crédito. | [optional] 
**updated_at** | **datetime** | Momento da última alteração do registro, que muda quando o depósito é aprovado ou recusado. | [optional] 

## Example

```python
from payzu_pix.models.deposit_pending import DepositPending

# TODO update the JSON string below
json = "{}"
# create an instance of DepositPending from a JSON string
deposit_pending_instance = DepositPending.from_json(json)
# print the JSON string representation of the object
print(DepositPending.to_json())

# convert the object into a dict
deposit_pending_dict = deposit_pending_instance.to_dict()
# create an instance of DepositPending from a dict
deposit_pending_from_dict = DepositPending.from_dict(deposit_pending_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


