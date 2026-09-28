# WebhooksApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteUserWebhook**](WebhooksApi.md#deleteUserWebhook) | **DELETE** /user/webhooks/{id} | Delete webhook |
| [**deleteUserWebhookWithHttpInfo**](WebhooksApi.md#deleteUserWebhookWithHttpInfo) | **DELETE** /user/webhooks/{id} | Delete webhook |
| [**getUserWebhook**](WebhooksApi.md#getUserWebhook) | **GET** /user/webhooks/{id} | Get webhook |
| [**getUserWebhookWithHttpInfo**](WebhooksApi.md#getUserWebhookWithHttpInfo) | **GET** /user/webhooks/{id} | Get webhook |
| [**getUserWebhookSentDetail**](WebhooksApi.md#getUserWebhookSentDetail) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail |
| [**getUserWebhookSentDetailWithHttpInfo**](WebhooksApi.md#getUserWebhookSentDetailWithHttpInfo) | **GET** /user/webhooks/{id}/sent/{callbackId} | Get sent callback detail |
| [**getUserWebhooks**](WebhooksApi.md#getUserWebhooks) | **GET** /user/webhooks | List webhooks |
| [**getUserWebhooksWithHttpInfo**](WebhooksApi.md#getUserWebhooksWithHttpInfo) | **GET** /user/webhooks | List webhooks |
| [**getUserWebhooksSentQuantity**](WebhooksApi.md#getUserWebhooksSentQuantity) | **GET** /user/webhooks/sent/quantity | Count sent callbacks |
| [**getUserWebhooksSentQuantityWithHttpInfo**](WebhooksApi.md#getUserWebhooksSentQuantityWithHttpInfo) | **GET** /user/webhooks/sent/quantity | Count sent callbacks |
| [**patchUserWebhook**](WebhooksApi.md#patchUserWebhook) | **PATCH** /user/webhooks/{id} | Update webhook |
| [**patchUserWebhookWithHttpInfo**](WebhooksApi.md#patchUserWebhookWithHttpInfo) | **PATCH** /user/webhooks/{id} | Update webhook |
| [**postUserWebhook**](WebhooksApi.md#postUserWebhook) | **POST** /user/webhooks | Create webhook |
| [**postUserWebhookWithHttpInfo**](WebhooksApi.md#postUserWebhookWithHttpInfo) | **POST** /user/webhooks | Create webhook |
| [**postUserWebhookRotateSecret**](WebhooksApi.md#postUserWebhookRotateSecret) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret |
| [**postUserWebhookRotateSecretWithHttpInfo**](WebhooksApi.md#postUserWebhookRotateSecretWithHttpInfo) | **POST** /user/webhooks/{id}/rotate-secret | Rotate webhook secret |



## deleteUserWebhook

> void deleteUserWebhook(id)

Delete webhook

Removes a webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            apiInstance.deleteUserWebhook(id);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#deleteUserWebhook");
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
| **id** | **String**| Webhook id. | |

### Return type


null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook deleted. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |

## deleteUserWebhookWithHttpInfo

> ApiResponse<Void> deleteUserWebhookWithHttpInfo(id)

Delete webhook

Removes a webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            ApiResponse<Void> response = apiInstance.deleteUserWebhookWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#deleteUserWebhook");
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
| **id** | **String**| Webhook id. | |

### Return type


ApiResponse<Void>

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook deleted. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |


## getUserWebhook

> Webhook getUserWebhook(id)

Get webhook

Returns a single webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            Webhook result = apiInstance.getUserWebhook(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhook");
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
| **id** | **String**| Webhook id. | |

### Return type

[**Webhook**](Webhook.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

## getUserWebhookWithHttpInfo

> ApiResponse<Webhook> getUserWebhookWithHttpInfo(id)

Get webhook

Returns a single webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            ApiResponse<Webhook> response = apiInstance.getUserWebhookWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhook");
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
| **id** | **String**| Webhook id. | |

### Return type

ApiResponse<[**Webhook**](Webhook.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |


## getUserWebhookSentDetail

> SentWebhookDetailResponse getUserWebhookSentDetail(id, callbackId)

Get sent callback detail

Returns the delivery detail of a single sent callback.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        String callbackId = "cm3w7l9v20001q8f2u6c1y4be"; // String | Callback log id.
        try {
            SentWebhookDetailResponse result = apiInstance.getUserWebhookSentDetail(id, callbackId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhookSentDetail");
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
| **id** | **String**| Webhook id. | |
| **callbackId** | **String**| Callback log id. | |

### Return type

[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback delivery detail. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

## getUserWebhookSentDetailWithHttpInfo

> ApiResponse<SentWebhookDetailResponse> getUserWebhookSentDetailWithHttpInfo(id, callbackId)

Get sent callback detail

Returns the delivery detail of a single sent callback.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        String callbackId = "cm3w7l9v20001q8f2u6c1y4be"; // String | Callback log id.
        try {
            ApiResponse<SentWebhookDetailResponse> response = apiInstance.getUserWebhookSentDetailWithHttpInfo(id, callbackId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhookSentDetail");
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
| **id** | **String**| Webhook id. | |
| **callbackId** | **String**| Callback log id. | |

### Return type

ApiResponse<[**SentWebhookDetailResponse**](SentWebhookDetailResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Callback delivery detail. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |


## getUserWebhooks

> WebhookListResponse getUserWebhooks(active)

List webhooks

Lists the webhooks registered for the account.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        Boolean active = true; // Boolean | Filter by active status.
        try {
            WebhookListResponse result = apiInstance.getUserWebhooks(active);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooks");
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
| **active** | **Boolean**| Filter by active status. | [optional] |

### Return type

[**WebhookListResponse**](WebhookListResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook list. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |

## getUserWebhooksWithHttpInfo

> ApiResponse<WebhookListResponse> getUserWebhooksWithHttpInfo(active)

List webhooks

Lists the webhooks registered for the account.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        Boolean active = true; // Boolean | Filter by active status.
        try {
            ApiResponse<WebhookListResponse> response = apiInstance.getUserWebhooksWithHttpInfo(active);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooks");
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
| **active** | **Boolean**| Filter by active status. | [optional] |

### Return type

ApiResponse<[**WebhookListResponse**](WebhookListResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook list. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |


## getUserWebhooksSentQuantity

> SentWebhooksQuantity getUserWebhooksSentQuantity(webhookId)

Count sent callbacks

Returns how many webhook deliveries were made, optionally filtered by webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Filter the count by webhook id.
        try {
            SentWebhooksQuantity result = apiInstance.getUserWebhooksSentQuantity(webhookId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooksSentQuantity");
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
| **webhookId** | **String**| Filter the count by webhook id. | [optional] |

### Return type

[**SentWebhooksQuantity**](SentWebhooksQuantity.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quantity. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |

## getUserWebhooksSentQuantityWithHttpInfo

> ApiResponse<SentWebhooksQuantity> getUserWebhooksSentQuantityWithHttpInfo(webhookId)

Count sent callbacks

Returns how many webhook deliveries were made, optionally filtered by webhook.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String webhookId = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Filter the count by webhook id.
        try {
            ApiResponse<SentWebhooksQuantity> response = apiInstance.getUserWebhooksSentQuantityWithHttpInfo(webhookId);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#getUserWebhooksSentQuantity");
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
| **webhookId** | **String**| Filter the count by webhook id. | [optional] |

### Return type

ApiResponse<[**SentWebhooksQuantity**](SentWebhooksQuantity.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quantity. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **404** | Resource not found |  -  |


## patchUserWebhook

> Webhook patchUserWebhook(id, webhookUpdateRequest)

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        WebhookUpdateRequest webhookUpdateRequest = new WebhookUpdateRequest(); // WebhookUpdateRequest | 
        try {
            Webhook result = apiInstance.patchUserWebhook(id, webhookUpdateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#patchUserWebhook");
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
| **id** | **String**| Webhook id. | |
| **webhookUpdateRequest** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)|  | |

### Return type

[**Webhook**](Webhook.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook updated. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |

## patchUserWebhookWithHttpInfo

> ApiResponse<Webhook> patchUserWebhookWithHttpInfo(id, webhookUpdateRequest)

Update webhook

Updates the url, active flag or events of a webhook. Provide at least one field.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        WebhookUpdateRequest webhookUpdateRequest = new WebhookUpdateRequest(); // WebhookUpdateRequest | 
        try {
            ApiResponse<Webhook> response = apiInstance.patchUserWebhookWithHttpInfo(id, webhookUpdateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#patchUserWebhook");
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
| **id** | **String**| Webhook id. | |
| **webhookUpdateRequest** | [**WebhookUpdateRequest**](WebhookUpdateRequest.md)|  | |

### Return type

ApiResponse<[**Webhook**](Webhook.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook updated. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |
| **409** | Conflict with the current state of the resource |  -  |


## postUserWebhook

> WebhookWithSecret postUserWebhook(webhookCreateRequest)

Create webhook

Registers a webhook endpoint. If &#x60;generateSecret&#x60; is true, the response includes the HMAC &#x60;secret&#x60; (shown only here).

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        WebhookCreateRequest webhookCreateRequest = new WebhookCreateRequest(); // WebhookCreateRequest | 
        try {
            WebhookWithSecret result = apiInstance.postUserWebhook(webhookCreateRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhook");
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
| **webhookCreateRequest** | [**WebhookCreateRequest**](WebhookCreateRequest.md)|  | |

### Return type

[**WebhookWithSecret**](WebhookWithSecret.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook created. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **409** | Conflict with the current state of the resource |  -  |

## postUserWebhookWithHttpInfo

> ApiResponse<WebhookWithSecret> postUserWebhookWithHttpInfo(webhookCreateRequest)

Create webhook

Registers a webhook endpoint. If &#x60;generateSecret&#x60; is true, the response includes the HMAC &#x60;secret&#x60; (shown only here).

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        WebhookCreateRequest webhookCreateRequest = new WebhookCreateRequest(); // WebhookCreateRequest | 
        try {
            ApiResponse<WebhookWithSecret> response = apiInstance.postUserWebhookWithHttpInfo(webhookCreateRequest);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhook");
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
| **webhookCreateRequest** | [**WebhookCreateRequest**](WebhookCreateRequest.md)|  | |

### Return type

ApiResponse<[**WebhookWithSecret**](WebhookWithSecret.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook created. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **409** | Conflict with the current state of the resource |  -  |


## postUserWebhookRotateSecret

> RotateSecretResponse postUserWebhookRotateSecret(id)

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new &#x60;secret&#x60; is shown only in this response.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            RotateSecretResponse result = apiInstance.postUserWebhookRotateSecret(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhookRotateSecret");
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
| **id** | **String**| Webhook id. | |

### Return type

[**RotateSecretResponse**](RotateSecretResponse.md)


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New secret. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |

## postUserWebhookRotateSecretWithHttpInfo

> ApiResponse<RotateSecretResponse> postUserWebhookRotateSecretWithHttpInfo(id)

Rotate webhook secret

Generates a new HMAC signing secret and invalidates the previous one. The new &#x60;secret&#x60; is shown only in this response.

### Example

```java
// Import classes:
import br.com.payzu.pix.ApiClient;
import br.com.payzu.pix.ApiException;
import br.com.payzu.pix.ApiResponse;
import br.com.payzu.pix.Configuration;
import br.com.payzu.pix.auth.*;
import br.com.payzu.pix.models.*;
import br.com.payzu.pix.api.WebhooksApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.payzu.processamento.com/v1");
        
        // Configure HTTP bearer authorization: BearerAuth
        HttpBearerAuth BearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setBearerToken("BEARER TOKEN");

        WebhooksApi apiInstance = new WebhooksApi(defaultClient);
        String id = "cm3w7k1t40000q8f2r5b9x3ad"; // String | Webhook id.
        try {
            ApiResponse<RotateSecretResponse> response = apiInstance.postUserWebhookRotateSecretWithHttpInfo(id);
            System.out.println("Status code: " + response.getStatusCode());
            System.out.println("Response headers: " + response.getHeaders());
            System.out.println("Response body: " + response.getData());
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhooksApi#postUserWebhookRotateSecret");
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
| **id** | **String**| Webhook id. | |

### Return type

ApiResponse<[**RotateSecretResponse**](RotateSecretResponse.md)>


### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | New secret. |  -  |
| **400** | Invalid request |  -  |
| **401** | Authentication failure |  -  |
| **403** | Operation not allowed |  -  |
| **404** | Resource not found |  -  |

