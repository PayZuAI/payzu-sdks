

# DictConsultResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**pixKey** | **String** | Chave Pix normalizada. |  [optional] |
|**name** | **String** | Nome do titular da chave conforme devolvido pela instituição consultada. |  [optional] |
|**document** | **String** | CPF/CNPJ mascarado do titular da chave. |  [optional] |
|**personType** | [**PersonTypeEnum**](#PersonTypeEnum) | Tipo de pessoa: PF, PJ ou vazio quando não informado. |  [optional] |
|**accountType** | **String** |  |  [optional] |
|**institutionIspb** | **String** | Código ISPB da instituição da conta. |  [optional] |
|**institutionName** | **String** | Nome da instituição onde a conta do titular está registrada, do jeito que a consulta devolve. |  [optional] |



## Enum: PersonTypeEnum

| Name | Value |
|---- | -----|
| PF | &quot;PF&quot; |
| PJ | &quot;PJ&quot; |
| EMPTY | &quot;&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



