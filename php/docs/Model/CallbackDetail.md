# CallbackDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID único do callback | [optional]
**url** | **string** | URL do webhook que recebeu o callback | [optional]
**status** | **float** | Código de status HTTP da resposta | [optional]
**transaction_id** | **string** | ID da transação relacionada | [optional]
**created_at** | **\DateTime** | Data e hora em que o log do callback foi criado | [optional]
**body** | **object** | Corpo enviado (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. | [optional]
**response_body** | **string** | Corpo da resposta recebido (string) | [optional]
**response_headers** | **object** | Cabeçalhos da resposta (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. | [optional]
**response_time** | **float** | Tempo de ida e volta do webhook em milissegundos | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
