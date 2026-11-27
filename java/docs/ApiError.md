

# ApiError


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | [**StatusEnum**](#StatusEnum) | Marcador fixo de resposta de erro. |  |
|**error** | **String** | Nome do status HTTP correspondente. |  |
|**errorCode** | **String** | Código de erro estável e legível por máquina, quando disponível. |  |
|**message** | **String** | Mensagem de erro legível. |  |
|**statusCode** | **Integer** | Código de status HTTP. |  |
|**requestId** | **String** | ID único de correlação da requisição (cuid). |  |
|**details** | [**List&lt;ApiErrorDetailsInner&gt;**](ApiErrorDetailsInner.md) | Erros de validação por campo, quando aplicável. |  [optional] |
|**retryAfterSeconds** | **Integer** | Segundos a aguardar antes de tentar novamente. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ERROR | &quot;ERROR&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



