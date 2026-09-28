# PayZu\Pix\InfractionsApi

Manage Pix infractions (disputes, fraud reports) and submit defenses

All URIs are relative to https://api.payzu.processamento.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInfractions()**](InfractionsApi.md#getInfractions) | **GET** /user/infractions | List Infractions |
| [**getInfractionsById()**](InfractionsApi.md#getInfractionsById) | **GET** /user/infractions/{id} | Get Infraction |
| [**getInfractionsDefenseById()**](InfractionsApi.md#getInfractionsDefenseById) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**getInfractionsDefenses()**](InfractionsApi.md#getInfractionsDefenses) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**postInfractionsDefense()**](InfractionsApi.md#postInfractionsDefense) | **POST** /user/infractions/{id}/defenses | Create Defense |


## `getInfractions()`

```php
getInfractions($page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name, $sort_by, $sort_direction, $reported_at_from, $reported_at_to, $created_at_from, $created_at_to, $expires_at_from, $expires_at_to, $updated_at_from, $updated_at_to, $id, $protocol): \PayZu\Pix\Model\InfractionListResponse
```

List Infractions

List all infractions for the authenticated user with pagination and filters.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int | Page number.
$limit = 10; // int | Items per page.
$status = OPEN; // string | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS)
$type = REFUND_REQUEST; // string | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED)
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | End-to-end ID of the Pix.
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | Transaction ID.
$amount_min = 10.9; // float | Minimum amount.
$amount_max = 500; // float | Maximum amount.
$analysis_result = AGREED; // string | Comma-separated AnalysisResult: AGREED, DISAGREED.
$reported_by = DEBITED_PARTICIPANT; // string | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT)
$participant_document = 12345678901; // string | CPF or CNPJ of the participant.
$participant_name = John Doe; // string | Name of the participant.
$sort_by = 'createdAt'; // string | Sort field.
$sort_direction = 'desc'; // string | Sort direction.
$reported_at_from = 2026-08-01; // \DateTime | Filter: reportedAt from.
$reported_at_to = 2026-08-31; // \DateTime | Filter: reportedAt up to.
$created_at_from = 2026-08-01; // \DateTime | Filter: createdAt from.
$created_at_to = 2026-08-31; // \DateTime | Filter: createdAt up to.
$expires_at_from = 2026-08-01; // \DateTime | Filter: expiresAt from.
$expires_at_to = 2026-08-31; // \DateTime | Filter: expiresAt up to.
$updated_at_from = 2026-08-01; // \DateTime | Filter: updatedAt from.
$updated_at_to = 2026-08-31; // \DateTime | Filter: updatedAt up to.
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | Filter by infraction ID.
$protocol = 2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210; // string | Filter by protocol.

try {
    $result = $apiInstance->getInfractions($page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name, $sort_by, $sort_direction, $reported_at_from, $reported_at_to, $created_at_from, $created_at_to, $expires_at_from, $expires_at_to, $updated_at_from, $updated_at_to, $id, $protocol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Page number. | [optional] [default to 1] |
| **limit** | **int**| Items per page. | [optional] [default to 10] |
| **status** | **string**| Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] |
| **type** | **string**| Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] |
| **end_to_end_id** | **string**| End-to-end ID of the Pix. | [optional] |
| **transaction_id** | **string**| Transaction ID. | [optional] |
| **amount_min** | **float**| Minimum amount. | [optional] |
| **amount_max** | **float**| Maximum amount. | [optional] |
| **analysis_result** | **string**| Comma-separated AnalysisResult: AGREED, DISAGREED. | [optional] |
| **reported_by** | **string**| Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] |
| **participant_document** | **string**| CPF or CNPJ of the participant. | [optional] |
| **participant_name** | **string**| Name of the participant. | [optional] |
| **sort_by** | **string**| Sort field. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Sort direction. | [optional] [default to &#39;desc&#39;] |
| **reported_at_from** | **\DateTime**| Filter: reportedAt from. | [optional] |
| **reported_at_to** | **\DateTime**| Filter: reportedAt up to. | [optional] |
| **created_at_from** | **\DateTime**| Filter: createdAt from. | [optional] |
| **created_at_to** | **\DateTime**| Filter: createdAt up to. | [optional] |
| **expires_at_from** | **\DateTime**| Filter: expiresAt from. | [optional] |
| **expires_at_to** | **\DateTime**| Filter: expiresAt up to. | [optional] |
| **updated_at_from** | **\DateTime**| Filter: updatedAt from. | [optional] |
| **updated_at_to** | **\DateTime**| Filter: updatedAt up to. | [optional] |
| **id** | **string**| Filter by infraction ID. | [optional] |
| **protocol** | **string**| Filter by protocol. | [optional] |

### Return type

[**\PayZu\Pix\Model\InfractionListResponse**](../Model/InfractionListResponse.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInfractionsById()`

```php
getInfractionsById($id): \PayZu\Pix\Model\InfractionDetail
```

Get Infraction

Get a specific infraction by ID.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | Infraction ID

try {
    $result = $apiInstance->getInfractionsById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Infraction ID | |

### Return type

[**\PayZu\Pix\Model\InfractionDetail**](../Model/InfractionDetail.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInfractionsDefenseById()`

```php
getInfractionsDefenseById($infraction_id, $defense_id): \PayZu\Pix\Model\Defense
```

Get Defense

Get a specific defense for an infraction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$infraction_id = cm3w7n2p60002q8f2h7d3z5cf; // string | Infraction ID
$defense_id = cm3w7p5r90003q8f2j8e4a6dg; // string | Defense ID

try {
    $result = $apiInstance->getInfractionsDefenseById($infraction_id, $defense_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsDefenseById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **infraction_id** | **string**| Infraction ID | |
| **defense_id** | **string**| Defense ID | |

### Return type

[**\PayZu\Pix\Model\Defense**](../Model/Defense.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getInfractionsDefenses()`

```php
getInfractionsDefenses($id): \PayZu\Pix\Model\Defense[]
```

List Defenses

List all defenses for a specific infraction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | Infraction ID

try {
    $result = $apiInstance->getInfractionsDefenses($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->getInfractionsDefenses: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Infraction ID | |

### Return type

[**\PayZu\Pix\Model\Defense[]**](../Model/Defense.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `postInfractionsDefense()`

```php
postInfractionsDefense($id, $defense, $files): \PayZu\Pix\Model\Defense
```

Create Defense

Create a defense for a specific infraction.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer authorization: BearerAuth
$config = PayZu\Pix\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new PayZu\Pix\Api\InfractionsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | Infraction ID
$defense = 'defense_example'; // string | Defense text (max: 1000 characters)
$files = array('/path/to/file.txt'); // \SplFileObject[] | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected.

try {
    $result = $apiInstance->postInfractionsDefense($id, $defense, $files);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling InfractionsApi->postInfractionsDefense: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| Infraction ID | |
| **defense** | **string**| Defense text (max: 1000 characters) | |
| **files** | **\SplFileObject[]**| Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. | [optional] |

### Return type

[**\PayZu\Pix\Model\Defense**](../Model/Defense.md)

### Authorization

[BearerAuth](../../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
