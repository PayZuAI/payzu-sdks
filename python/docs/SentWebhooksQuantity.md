# SentWebhooksQuantity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** |  | [optional] 

## Example

```python
from payzu_pix.models.sent_webhooks_quantity import SentWebhooksQuantity

# TODO update the JSON string below
json = "{}"
# create an instance of SentWebhooksQuantity from a JSON string
sent_webhooks_quantity_instance = SentWebhooksQuantity.from_json(json)
# print the JSON string representation of the object
print(SentWebhooksQuantity.to_json())

# convert the object into a dict
sent_webhooks_quantity_dict = sent_webhooks_quantity_instance.to_dict()
# create an instance of SentWebhooksQuantity from a dict
sent_webhooks_quantity_from_dict = SentWebhooksQuantity.from_dict(sent_webhooks_quantity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


