

# DictConsultResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**pixKey** | **String** | Normalized Pix key. |  [optional] |
|**name** | **String** | Name of the key holder as returned by the institution queried. |  [optional] |
|**document** | **String** | Masked CPF/CNPJ of the key holder. |  [optional] |
|**personType** | [**PersonTypeEnum**](#PersonTypeEnum) | Type of person: PF, PJ, or empty when not informed. |  [optional] |
|**accountType** | **String** |  |  [optional] |
|**institutionIspb** | **String** | ISPB code of the account institution. |  [optional] |
|**institutionName** | **String** | Name of the institution where the holder account is registered, as the lookup returns it. |  [optional] |



## Enum: PersonTypeEnum

| Name | Value |
|---- | -----|
| PF | &quot;PF&quot; |
| PJ | &quot;PJ&quot; |
| EMPTY | &quot;&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



