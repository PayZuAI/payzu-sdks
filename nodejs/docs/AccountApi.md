# AccountApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUser**](AccountApi.md#getuser) | **GET** /user | Informações da conta |
| [**getUserBalance**](AccountApi.md#getuserbalance) | **GET** /user/balance | Saldo da conta |
| [**getUserPixKeys**](AccountApi.md#getuserpixkeys) | **GET** /user/pix-keys | Chave Pix de recebimento da conta |



## getUser

> GetUser200Response getUser()

Informações da conta

Perfil da conta, limites e regras de tarifas.

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
| **200** | Dados da conta |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserBalance

> GetUserBalance200Response getUserBalance()

Saldo da conta

Saldos disponíveis e bloqueados.

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
| **200** | Saldos |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserPixKeys

> GetUserPixKeys200Response getUserPixKeys()

Chave Pix de recebimento da conta

Devolve a chave Pix de recebimento da conta, com o titular e a instituição da conta dessa chave.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'payzu-pix';
import type { GetUserPixKeysRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getUserPixKeys();
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

[**GetUserPixKeys200Response**](GetUserPixKeys200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chave encontrada |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Chave não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

