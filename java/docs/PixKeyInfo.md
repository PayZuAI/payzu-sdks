

# PixKeyInfo

Information about a Pix key from DICT lookup.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**pixKey** | **String** | The Pix key that was looked up. |  [optional] |
|**document** | **String** | CPF or CNPJ of the owner (partially masked for privacy). |  [optional] |
|**name** | **String** | Name of the Pix key owner. |  [optional] |
|**branch** | **String** | Bank branch number (masked). |  [optional] |
|**accountNumber** | **String** | Account number (masked). |  [optional] |
|**personType** | [**PersonTypeEnum**](#PersonTypeEnum) | Type of person: PF, PJ, or empty when not informed. |  [optional] |
|**accountType** | **String** | Account type returned by DICT, such as CACC, SVGS, TRAN or SLRY. |  [optional] |
|**institutionIspb** | **String** | ISPB code of the financial institution. |  [optional] |
|**institutionCode** | **String** | COMPE code of the financial institution. |  [optional] |
|**institutionName** | **String** | Name of the financial institution. |  [optional] |



## Enum: PersonTypeEnum

| Name | Value |
|---- | -----|
| PF | &quot;PF&quot; |
| PJ | &quot;PJ&quot; |
| EMPTY | &quot;&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



