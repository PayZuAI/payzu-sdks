# PayZu\Pix\InfractionsApi

Gerencie infrações Pix (disputas, denúncias de fraude) e envie defesas

All URIs are relative to https://api.pix.payzu.com.br/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getInfractions()**](InfractionsApi.md#getInfractions) | **GET** /user/infractions | Listar infrações |
| [**getInfractionsById()**](InfractionsApi.md#getInfractionsById) | **GET** /user/infractions/{id} | Obter Infração |
| [**getInfractionsDefenseById()**](InfractionsApi.md#getInfractionsDefenseById) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa |
| [**getInfractionsDefenses()**](InfractionsApi.md#getInfractionsDefenses) | **GET** /user/infractions/{id}/defenses | Listar Defesas |
| [**postInfractionsDefense()**](InfractionsApi.md#postInfractionsDefense) | **POST** /user/infractions/{id}/defenses | Criar Defesa |


## `getInfractions()`

```php
getInfractions($page, $limit, $status, $type, $end_to_end_id, $transaction_id, $amount_min, $amount_max, $analysis_result, $reported_by, $participant_document, $participant_name, $sort_by, $sort_direction, $reported_at_from, $reported_at_to, $created_at_from, $created_at_to, $expires_at_from, $expires_at_to, $updated_at_from, $updated_at_to, $id, $protocol): \PayZu\Pix\Model\InfractionListResponse
```

Listar infrações

Lista todas as infrações do usuário autenticado com paginação e filtros.

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
$page = 1; // int | Número da página.
$limit = 10; // int | Itens por página.
$status = OPEN; // string | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED`
$type = REFUND_REQUEST; // string | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED`
$end_to_end_id = E00000000202508172159kZ8dQ2mNb1x; // string | ID end-to-end do Pix.
$transaction_id = PAYZU20260814T6NX1CV9MK000000; // string | ID da transação.
$amount_min = 10.9; // float | Valor mínimo.
$amount_max = 500; // float | Valor máximo.
$analysis_result = AGREED; // string | AnalysisResult separados por vírgula: AGREED, DISAGREED.
$reported_by = DEBITED_PARTICIPANT; // string | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT`
$participant_document = 12345678901; // string | CPF ou CNPJ do participante.
$participant_name = John Doe; // string | Nome do participante.
$sort_by = 'createdAt'; // string | Campo de ordenação.
$sort_direction = 'desc'; // string | Direção da ordenação.
$reported_at_from = 2026-08-01; // \DateTime | Filtro: reportedAt a partir de.
$reported_at_to = 2026-08-31; // \DateTime | Filtro: reportedAt até.
$created_at_from = 2026-08-01; // \DateTime | Filtro: createdAt a partir de.
$created_at_to = 2026-08-31; // \DateTime | Filtro: createdAt até.
$expires_at_from = 2026-08-01; // \DateTime | Filtro: expiresAt a partir de.
$expires_at_to = 2026-08-31; // \DateTime | Filtro: expiresAt até.
$updated_at_from = 2026-08-01; // \DateTime | Filtro: updatedAt a partir de.
$updated_at_to = 2026-08-31; // \DateTime | Filtro: updatedAt até.
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | Filtro por ID da infração.
$protocol = 2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210; // string | Filtro por protocolo.

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
| **page** | **int**| Número da página. | [optional] [default to 1] |
| **limit** | **int**| Itens por página. | [optional] [default to 10] |
| **status** | **string**| Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | [optional] |
| **type** | **string**| Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | [optional] |
| **end_to_end_id** | **string**| ID end-to-end do Pix. | [optional] |
| **transaction_id** | **string**| ID da transação. | [optional] |
| **amount_min** | **float**| Valor mínimo. | [optional] |
| **amount_max** | **float**| Valor máximo. | [optional] |
| **analysis_result** | **string**| AnalysisResult separados por vírgula: AGREED, DISAGREED. | [optional] |
| **reported_by** | **string**| Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | [optional] |
| **participant_document** | **string**| CPF ou CNPJ do participante. | [optional] |
| **participant_name** | **string**| Nome do participante. | [optional] |
| **sort_by** | **string**| Campo de ordenação. | [optional] [default to &#39;createdAt&#39;] |
| **sort_direction** | **string**| Direção da ordenação. | [optional] [default to &#39;desc&#39;] |
| **reported_at_from** | **\DateTime**| Filtro: reportedAt a partir de. | [optional] |
| **reported_at_to** | **\DateTime**| Filtro: reportedAt até. | [optional] |
| **created_at_from** | **\DateTime**| Filtro: createdAt a partir de. | [optional] |
| **created_at_to** | **\DateTime**| Filtro: createdAt até. | [optional] |
| **expires_at_from** | **\DateTime**| Filtro: expiresAt a partir de. | [optional] |
| **expires_at_to** | **\DateTime**| Filtro: expiresAt até. | [optional] |
| **updated_at_from** | **\DateTime**| Filtro: updatedAt a partir de. | [optional] |
| **updated_at_to** | **\DateTime**| Filtro: updatedAt até. | [optional] |
| **id** | **string**| Filtro por ID da infração. | [optional] |
| **protocol** | **string**| Filtro por protocolo. | [optional] |

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

Obter Infração

Obtém uma infração específica por ID.

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
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | ID da infração

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
| **id** | **string**| ID da infração | |

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

Obter Defesa

Obtém uma defesa específica de uma infração.

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
$infraction_id = cm3w7n2p60002q8f2h7d3z5cf; // string | ID da infração
$defense_id = cm3w7p5r90003q8f2j8e4a6dg; // string | ID da defesa

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
| **infraction_id** | **string**| ID da infração | |
| **defense_id** | **string**| ID da defesa | |

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
getInfractionsDefenses($id): \PayZu\Pix\Model\DefenseListItem[]
```

Listar Defesas

Lista todas as defesas de uma infração específica.

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
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | ID da infração

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
| **id** | **string**| ID da infração | |

### Return type

[**\PayZu\Pix\Model\DefenseListItem[]**](../Model/DefenseListItem.md)

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

Criar Defesa

Cria uma defesa para uma infração específica.

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
$id = cm3w7n2p60002q8f2h7d3z5cf; // string | ID da infração
$defense = 'defense_example'; // string | Texto da defesa (máx: 1000 caracteres)
$files = array('/path/to/file.txt'); // \SplFileObject[] | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados.

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
| **id** | **string**| ID da infração | |
| **defense** | **string**| Texto da defesa (máx: 1000 caracteres) | |
| **files** | **\SplFileObject[]**| Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | [optional] |

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
