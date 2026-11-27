# GetUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Identificador público da conta. | [optional] 
**branch** | **str** | Agência da conta. | [optional] 
**name** | **str** | Nome cadastrado da conta. | [optional] 
**balance_available** | **float** | Saldo livre para saques e transferências, em reais. | [optional] 
**balance_blocked** | **float** | Parte do saldo retida, em reais. | [optional] 
**status** | **str** | Situação da conta. | [optional] 
**cash_in_ticket_min** | **float** | Valor mínimo aceito em cada cobrança de entrada, em reais; abaixo do piso a criação é recusada. | [optional] 
**cash_in_ticket_max** | **float** | Valor máximo aceito em cada cobrança de entrada, em reais; acima do teto a criação é recusada. | [optional] 
**cash_out_ticket_min** | **float** | Valor mínimo por saque ou transferência interna, em reais; abaixo do piso o pedido é recusado. | [optional] 
**cash_out_ticket_max** | **float** | Valor máximo por saque ou transferência interna, em reais; acima do teto o pedido é recusado. | [optional] 
**service_fee** | [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional] 
**daily_withdraw_limit** | [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional] 

## Example

```python
from payzu_pix.models.get_user200_response import GetUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUser200Response from a JSON string
get_user200_response_instance = GetUser200Response.from_json(json)
# print the JSON string representation of the object
print(GetUser200Response.to_json())

# convert the object into a dict
get_user200_response_dict = get_user200_response_instance.to_dict()
# create an instance of GetUser200Response from a dict
get_user200_response_from_dict = GetUser200Response.from_dict(get_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


