# payzu_pix.RefundsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_refund**](RefundsApi.md#post_refund) | **POST** /refund/{transactionId} | Refund a Pix


# **post_refund**
> Transaction post_refund(transaction_id, refund_request=refund_request)

Refund a Pix

Refund a received Pix charge. Provide `amount` for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with `refundStatus: PENDING`; completion is confirmed later by webhook.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.refund_request import RefundRequest
from payzu_pix.models.transaction import Transaction
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.payzu.processamento.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.payzu.processamento.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = payzu_pix.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with payzu_pix.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = payzu_pix.RefundsApi(api_client)
    transaction_id = 'transaction_id_example' # str | ID of the transaction to refund.
    refund_request = payzu_pix.RefundRequest() # RefundRequest |  (optional)

    try:
        # Refund a Pix
        api_response = api_instance.post_refund(transaction_id, refund_request=refund_request)
        print("The response of RefundsApi->post_refund:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RefundsApi->post_refund: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| ID of the transaction to refund. | 
 **refund_request** | [**RefundRequest**](RefundRequest.md)|  | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refund accepted and enqueued (asynchronous). |  -  |
**422** | Refund not allowed for this transaction or amount. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

