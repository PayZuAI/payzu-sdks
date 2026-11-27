# CallbackDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID único do callback | [optional] 
**url** | **str** | URL do webhook que recebeu o callback | [optional] 
**status** | **float** | Código de status HTTP da resposta | [optional] 
**transaction_id** | **str** | ID da transação relacionada | [optional] 
**created_at** | **datetime** | Data e hora em que o log do callback foi criado | [optional] 
**body** | **object** | Corpo enviado (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. | [optional] 
**response_body** | **str** | Corpo da resposta recebido (string) | [optional] 
**response_headers** | **object** | Cabeçalhos da resposta (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. | [optional] 
**response_time** | **float** | Tempo de ida e volta do webhook em milissegundos | [optional] 

## Example

```python
from payzu_pix.models.callback_detail import CallbackDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackDetail from a JSON string
callback_detail_instance = CallbackDetail.from_json(json)
# print the JSON string representation of the object
print(CallbackDetail.to_json())

# convert the object into a dict
callback_detail_dict = callback_detail_instance.to_dict()
# create an instance of CallbackDetail from a dict
callback_detail_from_dict = CallbackDetail.from_dict(callback_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


