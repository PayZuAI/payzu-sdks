# RefundRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL to refund. Omit to refund the full transaction amount. Partial refunds are allowed up to the original amount. | [optional] 
**description** | **str** | Free-text description for the refund. | [optional] 
**client_reference** | **str** | Idempotency key. Reusing it with the same amount replays the existing refund; reusing it with a different amount is rejected. | [optional] 

## Example

```python
from payzu_pix.models.refund_request import RefundRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefundRequest from a JSON string
refund_request_instance = RefundRequest.from_json(json)
# print the JSON string representation of the object
print(RefundRequest.to_json())

# convert the object into a dict
refund_request_dict = refund_request_instance.to_dict()
# create an instance of RefundRequest from a dict
refund_request_from_dict = RefundRequest.from_dict(refund_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


