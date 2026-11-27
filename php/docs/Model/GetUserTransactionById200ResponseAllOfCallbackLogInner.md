# GetUserTransactionById200ResponseAllOfCallbackLogInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador do registro de envio; há um registro por tentativa de callback da transação. | [optional]
**url** | **string** | Endereço que recebeu o callback: a callbackUrl da transação ou a URL do webhook cadastrado. | [optional]
**status** | **int** | Código de status HTTP retornado pelo receptor | [optional]
**response_time** | **float** | Tempo de ida e volta em ms | [optional]
**created_at** | **\DateTime** | Data e hora em que a tentativa de envio do callback foi registrada. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
