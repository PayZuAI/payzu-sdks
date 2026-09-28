# AccountApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUser**](AccountApi.md#getuser) | **GET** /user | Account Info |
| [**getUserBalance**](AccountApi.md#getuserbalance) | **GET** /user/balance | Account Balance |



## getUser

> GetUser200Response getUser()

Account Info

Account profile, permissions, limits and fee rules.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'payzu-pix';
import type { GetUserRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getUser();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUser200Response**](GetUser200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account data |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserBalance

> GetUserBalance200Response getUserBalance()

Account Balance

Available and blocked balances.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'payzu-pix';
import type { GetUserBalanceRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getUserBalance();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserBalance200Response**](GetUserBalance200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Balances |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

