# QRCodeReadResponse

Informações decodificadas de um QR Code Pix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code_type** | **str** | Tipo de QR Code. | [optional] 
**name** | **str** | Nome do recebedor do pagamento. | [optional] 
**document** | **str** | CPF ou CNPJ do recebedor. | [optional] 
**amount** | **float** | Valor a ser pago. | [optional] 
**original_amount** | **float** | Valor embutido no QR Code. | [optional] 
**txid** | **str** | Identificador da transação. | [optional] 
**additional_info** | **str** | Informações adicionais ou descrição. | [optional] 
**expires_in** | **float** | Segundos até o QR Code expirar (0 para QR Codes estáticos). | [optional] 
**created_at** | **str** | Data de criação do QR Code dinâmico, como veio no QR Code: o horário pode vir sem fuso. | [optional] 
**amount_editable** | **bool** | Indica se o pagador pode alterar o valor. | [optional] 
**due_date** | **str** | Data de vencimento da cobrança, quando o QR Code tiver. | [optional] 

## Example

```python
from payzu_pix.models.qr_code_read_response import QRCodeReadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QRCodeReadResponse from a JSON string
qr_code_read_response_instance = QRCodeReadResponse.from_json(json)
# print the JSON string representation of the object
print(QRCodeReadResponse.to_json())

# convert the object into a dict
qr_code_read_response_dict = qr_code_read_response_instance.to_dict()
# create an instance of QRCodeReadResponse from a dict
qr_code_read_response_from_dict = QRCodeReadResponse.from_dict(qr_code_read_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


