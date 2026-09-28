# CallbacksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserCallbackSecret**](CallbacksApi.md#createUserCallbackSecret) | **POST** /user/callbacks/secret | Create callback secret |
| [**createUserCallbackSecretWithHttpInfo**](CallbacksApi.md#createUserCallbackSecretWithHttpInfo) | **POST** /user/callbacks/secret | Create callback secret |
| [**getUserCallbackById**](CallbacksApi.md#getUserCallbackById) | **GET** /user/callbacks/{id} | Get Callback |
| [**getUserCallbackByIdWithHttpInfo**](CallbacksApi.md#getUserCallbackByIdWithHttpInfo) | **GET** /user/callbacks/{id} | Get Callback |
| [**getUserCallbacks**](CallbacksApi.md#getUserCallbacks) | **GET** /user/callbacks | List Callbacks |
| [**getUserCallbacksWithHttpInfo**](CallbacksApi.md#getUserCallbacksWithHttpInfo) | **GET** /user/callbacks | List Callbacks |
| [**resendUserCallbackSingle**](CallbacksApi.md#resendUserCallbackSingle) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single) |
| [**resendUserCallbackSingleWithHttpInfo**](CallbacksApi.md#resendUserCallbackSingleWithHttpInfo) | **POST** /user/callbacks/resend/{transactionId} | Re-send callback (single) |
| [**resendUserCallbacks**](CallbacksApi.md#resendUserCallbacks) | **POST** /user/callbacks/resend | Re-send callbacks (bulk) |
| [**resendUserCallbacksWithHttpInfo**](CallbacksApi.md#resendUserCallbacksWithHttpInfo) | **POST** /user/callbacks/resend | Re-send callbacks (bulk) |
| [**resendUserCallbacksWebhook**](CallbacksApi.md#resendUserCallbacksWebhook) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook |
| [**resendUserCallbacksWebhookWithHttpInfo**](CallbacksApi.md#resendUserCallbacksWebhookWithHttpInfo) | **POST** /user/callbacks/resend/webhook/{webhookId} | Resend callbacks by webhook |
| [**resendUserCallbacksWebhooks**](CallbacksApi.md#resendUserCallbacksWebhooks) | **POST** /user/callbacks/resend/webhook | Resend webhook callbacks by filters |
| [**resendUserCallbacksWebhooksWithHttpInfo**](CallbacksApi.md#resendUserCallbacksWebhooksWithHttpInfo) | **POST** /user/callbacks/resend/webhook | Resend webhook callbacks by filters |
| [**rotateUserCallbackSecret**](CallbacksApi.md#rotateUserCallbackSecret) | **PATCH** /user/callbacks/secret/rotate | Rotate callback secret |
| [**rotateUserCallbackSecretWithHttpInfo**](CallbacksApi.md#rotateUserCallbackSecretWithHttpInfo) | **PATCH** /user/callbacks/secret/rotate | Rotate callback secret |



## createUserCallbackSecret

> CallbackSecretResponse createUserCallbackSecret()

Create callback secret

Creates the account callback secret, used to sign deliveries sent to the transaction callbackUrl. The secret is returned once and cannot be read again.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            CallbackSecretResponse result = apiInstance.createUserCallbackSecret();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#createUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CallbackSecretResponse**](CallbackSecretResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Create callback secret |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operation not allowed |  -  |
| **409** | Account already has a callback secret. Use the rotate route. |  -  |

## createUserCallbackSecretWithHttpInfo

> ApiResponse<CallbackSecretResponse> createUserCallbackSecretWithHttpInfo()

Create callback secret

Creates the account callback secret, used to sign deliveries sent to the transaction callbackUrl. The secret is returned once and cannot be read again.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            ApiResponse<CallbackSecretResponse> response = apiInstance.createUserCallbackSecretWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#createUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**CallbackSecretResponse**](CallbackSecretResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Create callback secret |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operation not allowed |  -  |
| **409** | Account already has a callback secret. Use the rotate route. |  -  |


## getUserCallbackById

> CallbackDetail getUserCallbackById(id)

Get Callback

Returns the details of a specific callback log.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | Unique callback ID
        try {
            CallbackDetail result = apiInstance.getUserCallbackById(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbackById");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique callback ID | |

### Return type

[**CallbackDetail**](CallbackDetail.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Callback not found or does not belong to the user |  -  |

## getUserCallbackByIdWithHttpInfo

> ApiResponse<CallbackDetail> getUserCallbackByIdWithHttpInfo(id)

Get Callback

Returns the details of a specific callback log.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | Unique callback ID
        try {
            ApiResponse<CallbackDetail> response = apiInstance.getUserCallbackByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbackById");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique callback ID | |

### Return type

ApiResponse<[**CallbackDetail**](CallbackDetail.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback details |  -  |
| **401** | Authentication failure |  -  |
| **404** | Callback not found or does not belong to the user |  -  |


## getUserCallbacks

> CallbackListResponse getUserCallbacks(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType)

List Callbacks

Returns a paginated list of webhook callback logs for the user&#39;s transactions.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | Filter by callback ID
        String url = "https://webhook.cool/"; // String | Filter by callback URL
        Integer status = 200; // Integer | HTTP status code
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        Boolean hasError = true; // Boolean | Filter callbacks that errored
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start of the creation date range.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End of the creation date range.
        String webhookId = "webhookId_example"; // String | Webhook id.
        WebhookEventType eventType = WebhookEventType.fromValue("TRANSACTION_PENDING"); // WebhookEventType | Webhook event type.
        try {
            CallbackListResponse result = apiInstance.getUserCallbacks(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbacks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 10] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, status] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |
| **id** | **String**| Filter by callback ID | [optional] |
| **url** | **String**| Filter by callback URL | [optional] |
| **status** | **Integer**| HTTP status code | [optional] |
| **transactionId** | **String**| Transaction ID. | [optional] |
| **hasError** | **Boolean**| Filter callbacks that errored | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Start of the creation date range. | [optional] |
| **createdAtTo** | **OffsetDateTime**| End of the creation date range. | [optional] |
| **webhookId** | **String**| Webhook id. | [optional] |
| **eventType** | [**WebhookEventType**](.md)| Webhook event type. | [optional] [enum: TRANSACTION_PENDING, TRANSACTION_COMPLETED, TRANSACTION_CANCELED, TRANSACTION_WAITING_FOR_REFUND, TRANSACTION_REFUNDED, TRANSACTION_EXPIRED, TRANSACTION_ERROR, TRANSACTION_SUSPECTED_FRAUD, TRANSACTION_SUSPECTED_FRAUD_REVERSAL, INFRACTION_CHANGED] |

### Return type

[**CallbackListResponse**](CallbackListResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of callback logs with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

## getUserCallbacksWithHttpInfo

> ApiResponse<CallbackListResponse> getUserCallbacksWithHttpInfo(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType)

List Callbacks

Returns a paginated list of webhook callback logs for the user&#39;s transactions.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        Integer page = 1; // Integer | Page number.
        Integer limit = 10; // Integer | Items per page.
        String sortBy = "createdAt"; // String | Sort field.
        String sortDirection = "asc"; // String | Sort direction.
        String id = "cm3w7l9v20001q8f2u6c1y4be"; // String | Filter by callback ID
        String url = "https://webhook.cool/"; // String | Filter by callback URL
        Integer status = 200; // Integer | HTTP status code
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        Boolean hasError = true; // Boolean | Filter callbacks that errored
        OffsetDateTime createdAtFrom = OffsetDateTime.parse("2026-08-01"); // OffsetDateTime | Start of the creation date range.
        OffsetDateTime createdAtTo = OffsetDateTime.parse("2026-08-31"); // OffsetDateTime | End of the creation date range.
        String webhookId = "webhookId_example"; // String | Webhook id.
        WebhookEventType eventType = WebhookEventType.fromValue("TRANSACTION_PENDING"); // WebhookEventType | Webhook event type.
        try {
            ApiResponse<CallbackListResponse> response = apiInstance.getUserCallbacksWithHttpInfo(page, limit, sortBy, sortDirection, id, url, status, transactionId, hasError, createdAtFrom, createdAtTo, webhookId, eventType);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#getUserCallbacks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| Page number. | [optional] [default to 1] |
| **limit** | **Integer**| Items per page. | [optional] [default to 10] |
| **sortBy** | **String**| Sort field. | [optional] [default to createdAt] [enum: createdAt, status] |
| **sortDirection** | **String**| Sort direction. | [optional] [default to desc] [enum: asc, desc] |
| **id** | **String**| Filter by callback ID | [optional] |
| **url** | **String**| Filter by callback URL | [optional] |
| **status** | **Integer**| HTTP status code | [optional] |
| **transactionId** | **String**| Transaction ID. | [optional] |
| **hasError** | **Boolean**| Filter callbacks that errored | [optional] |
| **createdAtFrom** | **OffsetDateTime**| Start of the creation date range. | [optional] |
| **createdAtTo** | **OffsetDateTime**| End of the creation date range. | [optional] |
| **webhookId** | **String**| Webhook id. | [optional] |
| **eventType** | [**WebhookEventType**](.md)| Webhook event type. | [optional] [enum: TRANSACTION_PENDING, TRANSACTION_COMPLETED, TRANSACTION_CANCELED, TRANSACTION_WAITING_FOR_REFUND, TRANSACTION_REFUNDED, TRANSACTION_EXPIRED, TRANSACTION_ERROR, TRANSACTION_SUSPECTED_FRAUD, TRANSACTION_SUSPECTED_FRAUD_REVERSAL, INFRACTION_CHANGED] |

### Return type

ApiResponse<[**CallbackListResponse**](CallbackListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of callback logs with pagination |  -  |
| **400** | Bad Request, payload or query string failed validation |  -  |
| **401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |


## resendUserCallbackSingle

> ResendUserCallbackSingle200Response resendUserCallbackSingle(transactionId)

Re-send callback (single)

Resend the callback of a single transaction.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        try {
            ResendUserCallbackSingle200Response result = apiInstance.resendUserCallbackSingle(transactionId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbackSingle");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **transactionId** | **String**| Transaction ID. | |

### Return type

[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend dispatched |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transaction not found or has no callbackUrl configured |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

## resendUserCallbackSingleWithHttpInfo

> ApiResponse<ResendUserCallbackSingle200Response> resendUserCallbackSingleWithHttpInfo(transactionId)

Re-send callback (single)

Resend the callback of a single transaction.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String transactionId = "PAYZU20260814T6NX1CV9MK000000"; // String | Transaction ID.
        try {
            ApiResponse<ResendUserCallbackSingle200Response> response = apiInstance.resendUserCallbackSingleWithHttpInfo(transactionId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbackSingle");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **transactionId** | **String**| Transaction ID. | |

### Return type

ApiResponse<[**ResendUserCallbackSingle200Response**](ResendUserCallbackSingle200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend dispatched |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Transaction not found or has no callbackUrl configured |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |


## resendUserCallbacks

> ResendUserCallbacks200Response resendUserCallbacks(resendUserCallbacksRequest)

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendUserCallbacksRequest resendUserCallbacksRequest = new ResendUserCallbacksRequest(); // ResendUserCallbacksRequest | 
        try {
            ResendUserCallbacks200Response result = apiInstance.resendUserCallbacks(resendUserCallbacksRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **resendUserCallbacksRequest** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md)|  | |

### Return type

[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend dispatched |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | No matching transactions |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

## resendUserCallbacksWithHttpInfo

> ApiResponse<ResendUserCallbacks200Response> resendUserCallbacksWithHttpInfo(resendUserCallbacksRequest)

Re-send callbacks (bulk)

Resend callbacks in bulk for transactions matching the given filters.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendUserCallbacksRequest resendUserCallbacksRequest = new ResendUserCallbacksRequest(); // ResendUserCallbacksRequest | 
        try {
            ApiResponse<ResendUserCallbacks200Response> response = apiInstance.resendUserCallbacksWithHttpInfo(resendUserCallbacksRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **resendUserCallbacksRequest** | [**ResendUserCallbacksRequest**](ResendUserCallbacksRequest.md)|  | |

### Return type

ApiResponse<[**ResendUserCallbacks200Response**](ResendUserCallbacks200Response.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resend dispatched |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | No matching transactions |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |


## resendUserCallbacksWebhook

> EnqueuedCallback resendUserCallbacksWebhook(webhookId)

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            EnqueuedCallback result = apiInstance.resendUserCallbacksWebhook(webhookId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | **String**| Webhook id. | |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks accepted for resend. Acceptance is not delivery: the queueing runs after the response. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Webhook not found, inactive or owned by another account (PZW300), or no failed callback matched the filters (PZW310). |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

## resendUserCallbacksWebhookWithHttpInfo

> ApiResponse<EnqueuedCallback> resendUserCallbacksWebhookWithHttpInfo(webhookId)

Resend callbacks by webhook

Queues a bulk resend of the failed callbacks of a given webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            ApiResponse<EnqueuedCallback> response = apiInstance.resendUserCallbacksWebhookWithHttpInfo(webhookId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | **String**| Webhook id. | |

### Return type

ApiResponse<[**EnqueuedCallback**](EnqueuedCallback.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks accepted for resend. Acceptance is not delivery: the queueing runs after the response. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Webhook not found, inactive or owned by another account (PZW300), or no failed callback matched the filters (PZW310). |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |


## resendUserCallbacksWebhooks

> EnqueuedCallback resendUserCallbacksWebhooks(resendWebhookCallbacksRequest)

Resend webhook callbacks by filters

Queues the resend of failed webhook deliveries in a period. For each webhook, transaction and event, only the last delivery attempt in the period counts, and it is resent only when it failed. The filters apply to the transactions of those deliveries.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendWebhookCallbacksRequest resendWebhookCallbacksRequest = new ResendWebhookCallbacksRequest(); // ResendWebhookCallbacksRequest | 
        try {
            EnqueuedCallback result = apiInstance.resendUserCallbacksWebhooks(resendWebhookCallbacksRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhooks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **resendWebhookCallbacksRequest** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md)|  | |

### Return type

[**EnqueuedCallback**](EnqueuedCallback.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks accepted for resend. Acceptance is not delivery: the queueing runs after the response. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | No active webhook matched the criteria (PZW301), or no failed callback matched the filters (PZW311). |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |

## resendUserCallbacksWebhooksWithHttpInfo

> ApiResponse<EnqueuedCallback> resendUserCallbacksWebhooksWithHttpInfo(resendWebhookCallbacksRequest)

Resend webhook callbacks by filters

Queues the resend of failed webhook deliveries in a period. For each webhook, transaction and event, only the last delivery attempt in the period counts, and it is resent only when it failed. The filters apply to the transactions of those deliveries.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        ResendWebhookCallbacksRequest resendWebhookCallbacksRequest = new ResendWebhookCallbacksRequest(); // ResendWebhookCallbacksRequest | 
        try {
            ApiResponse<EnqueuedCallback> response = apiInstance.resendUserCallbacksWebhooksWithHttpInfo(resendWebhookCallbacksRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#resendUserCallbacksWebhooks");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **resendWebhookCallbacksRequest** | [**ResendWebhookCallbacksRequest**](ResendWebhookCallbacksRequest.md)|  | |

### Return type

ApiResponse<[**EnqueuedCallback**](EnqueuedCallback.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callbacks accepted for resend. Acceptance is not delivery: the queueing runs after the response. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | No active webhook matched the criteria (PZW301), or no failed callback matched the filters (PZW311). |  -  |
| **422** | Resend limit reached: 5 requests per minute per account, shared by all /user/callbacks/resend routes |  -  |


## rotateUserCallbackSecret

> RotateCallbackSecretResponse rotateUserCallbackSecret()

Rotate callback secret

Replaces the account callback secret. Deliveries start being signed with the new secret right away.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            RotateCallbackSecretResponse result = apiInstance.rotateUserCallbackSecret();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#rotateUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rotate callback secret |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Account has no callback secret to rotate. |  -  |

## rotateUserCallbackSecretWithHttpInfo

> ApiResponse<RotateCallbackSecretResponse> rotateUserCallbackSecretWithHttpInfo()

Rotate callback secret

Replaces the account callback secret. Deliveries start being signed with the new secret right away.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.CallbacksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        CallbacksApi apiInstance = new CallbacksApi(defaultClient);
        try {
            ApiResponse<RotateCallbackSecretResponse> response = apiInstance.rotateUserCallbackSecretWithHttpInfo();
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling CallbacksApi#rotateUserCallbackSecret");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

ApiResponse<[**RotateCallbackSecretResponse**](RotateCallbackSecretResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rotate callback secret |  -  |
| **401** | Unauthorized |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Account has no callback secret to rotate. |  -  |

