# ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Marcador fixo de resposta de erro. |
**error** | **string** | Nome do status HTTP correspondente. |
**error_code** | **string** | Código de erro estável e legível por máquina, quando disponível. |
**message** | **string** | Mensagem de erro legível. |
**status_code** | **int** | Código de status HTTP. |
**request_id** | **string** | ID único de correlação da requisição (cuid). |
**details** | [**\PayZu\Pix\Model\ApiErrorDetailsInner[]**](ApiErrorDetailsInner.md) | Erros de validação por campo, quando aplicável. | [optional]
**retry_after_seconds** | **int** | Segundos a aguardar antes de tentar novamente. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
