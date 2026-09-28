# PixKeyInfo

Information about a Pix key from DICT lookup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | The Pix key that was looked up. | [optional] 
**document** | **str** | CPF or CNPJ of the owner (partially masked for privacy). | [optional] 
**name** | **str** | Name of the Pix key owner. | [optional] 
**branch** | **str** | Bank branch number (masked). | [optional] 
**account_number** | **str** | Account number (masked). | [optional] 
**person_type** | **str** | Type of person: PF, PJ, or empty when not informed. | [optional] 
**account_type** | **str** | Account type returned by DICT, such as CACC, SVGS, TRAN or SLRY. | [optional] 
**institution_ispb** | **str** | ISPB code of the financial institution. | [optional] 
**institution_code** | **str** | COMPE code of the financial institution. | [optional] 
**institution_name** | **str** | Name of the financial institution. | [optional] 

## Example

```python
from payzu_pix.models.pix_key_info import PixKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PixKeyInfo from a JSON string
pix_key_info_instance = PixKeyInfo.from_json(json)
# print the JSON string representation of the object
print(PixKeyInfo.to_json())

# convert the object into a dict
pix_key_info_dict = pix_key_info_instance.to_dict()
# create an instance of PixKeyInfo from a dict
pix_key_info_from_dict = PixKeyInfo.from_dict(pix_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


