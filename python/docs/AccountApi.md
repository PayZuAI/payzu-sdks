# payzu_pix.AccountApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user**](AccountApi.md#get_user) | **GET** /user | Account Info
[**get_user_balance**](AccountApi.md#get_user_balance) | **GET** /user/balance | Account Balance


# **get_user**
> GetUser200Response get_user()

Account Info

Account profile, permissions, limits and fee rules.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user200_response import GetUser200Response
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
    api_instance = payzu_pix.AccountApi(api_client)

    try:
        # Account Info
        api_response = api_instance.get_user()
        print("The response of AccountApi->get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUser200Response**](GetUser200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account data |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_balance**
> GetUserBalance200Response get_user_balance()

Account Balance

Available and blocked balances.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_balance200_response import GetUserBalance200Response
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
    api_instance = payzu_pix.AccountApi(api_client)

    try:
        # Account Balance
        api_response = api_instance.get_user_balance()
        print("The response of AccountApi->get_user_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_user_balance: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserBalance200Response**](GetUserBalance200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Balances |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

