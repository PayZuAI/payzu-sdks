

# PixKeyInfo

Informações sobre uma chave Pix a partir da consulta ao DICT.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**pixKey** | **String** | A chave Pix que foi consultada. |  [optional] |
|**document** | **String** | CPF ou CNPJ do titular (parcialmente mascarado por privacidade). |  [optional] |
|**name** | **String** | Nome do titular da chave Pix. |  [optional] |
|**branch** | **String** | Número da agência bancária (mascarado). |  [optional] |
|**accountNumber** | **String** | Número da conta (mascarado). |  [optional] |
|**personType** | [**PersonTypeEnum**](#PersonTypeEnum) | Tipo de pessoa: PF, PJ ou vazio quando não informado. |  [optional] |
|**accountType** | **String** | Tipo de conta devolvido pelo DICT, como CACC, SVGS, TRAN ou SLRY. |  [optional] |
|**institutionIspb** | **String** | Código ISPB da instituição financeira. |  [optional] |
|**institutionCode** | **String** | Código COMPE da instituição financeira. |  [optional] |
|**institutionName** | **String** | Nome da instituição financeira. |  [optional] |



## Enum: PersonTypeEnum

| Name | Value |
|---- | -----|
| PF | &quot;PF&quot; |
| PJ | &quot;PJ&quot; |
| EMPTY | &quot;&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



