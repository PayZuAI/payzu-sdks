# PixKeyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **string** | The Pix key that was looked up. | [optional]
**document** | **string** | CPF or CNPJ of the owner (partially masked for privacy). | [optional]
**name** | **string** | Name of the Pix key owner. | [optional]
**branch** | **string** | Bank branch number (masked). | [optional]
**account_number** | **string** | Account number (masked). | [optional]
**person_type** | **string** | Type of person: PF, PJ, or empty when not informed. | [optional]
**account_type** | **string** | Account type returned by DICT, such as CACC, SVGS, TRAN or SLRY. | [optional]
**institution_ispb** | **string** | ISPB code of the financial institution. | [optional]
**institution_code** | **string** | COMPE code of the financial institution. | [optional]
**institution_name** | **string** | Name of the financial institution. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
