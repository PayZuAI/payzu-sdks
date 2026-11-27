# payzu_pix.InfractionsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_infractions**](InfractionsApi.md#get_infractions) | **GET** /user/infractions | Listar infrações
[**get_infractions_by_id**](InfractionsApi.md#get_infractions_by_id) | **GET** /user/infractions/{id} | Obter Infração
[**get_infractions_defense_by_id**](InfractionsApi.md#get_infractions_defense_by_id) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa
[**get_infractions_defenses**](InfractionsApi.md#get_infractions_defenses) | **GET** /user/infractions/{id}/defenses | Listar Defesas
[**post_infractions_defense**](InfractionsApi.md#post_infractions_defense) | **POST** /user/infractions/{id}/defenses | Criar Defesa


# **get_infractions**
> InfractionListResponse get_infractions(page=page, limit=limit, status=status, type=type, end_to_end_id=end_to_end_id, transaction_id=transaction_id, amount_min=amount_min, amount_max=amount_max, analysis_result=analysis_result, reported_by=reported_by, participant_document=participant_document, participant_name=participant_name, sort_by=sort_by, sort_direction=sort_direction, reported_at_from=reported_at_from, reported_at_to=reported_at_to, created_at_from=created_at_from, created_at_to=created_at_to, expires_at_from=expires_at_from, expires_at_to=expires_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, id=id, protocol=protocol)

Listar infrações

Lista todas as infrações do usuário autenticado com paginação e filtros.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.infraction_list_response import InfractionListResponse
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    page = 1 # int | Número da página. (optional) (default to 1)
    limit = 10 # int | Itens por página. (optional) (default to 10)
    status = 'OPEN' # str | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED` (optional)
    type = 'REFUND_REQUEST' # str | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED` (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | ID end-to-end do Pix. (optional)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação. (optional)
    amount_min = 10.9 # float | Valor mínimo. (optional)
    amount_max = 500 # float | Valor máximo. (optional)
    analysis_result = 'AGREED' # str | AnalysisResult separados por vírgula: AGREED, DISAGREED. (optional)
    reported_by = 'DEBITED_PARTICIPANT' # str | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT` (optional)
    participant_document = '12345678901' # str | CPF ou CNPJ do participante. (optional)
    participant_name = 'John Doe' # str | Nome do participante. (optional)
    sort_by = createdAt # str | Campo de ordenação. (optional) (default to createdAt)
    sort_direction = desc # str | Direção da ordenação. (optional) (default to desc)
    reported_at_from = '2026-08-01' # datetime | Filtro: reportedAt a partir de. (optional)
    reported_at_to = '2026-08-31' # datetime | Filtro: reportedAt até. (optional)
    created_at_from = '2026-08-01' # datetime | Filtro: createdAt a partir de. (optional)
    created_at_to = '2026-08-31' # datetime | Filtro: createdAt até. (optional)
    expires_at_from = '2026-08-01' # datetime | Filtro: expiresAt a partir de. (optional)
    expires_at_to = '2026-08-31' # datetime | Filtro: expiresAt até. (optional)
    updated_at_from = '2026-08-01' # datetime | Filtro: updatedAt a partir de. (optional)
    updated_at_to = '2026-08-31' # datetime | Filtro: updatedAt até. (optional)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | Filtro por ID da infração. (optional)
    protocol = '2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210' # str | Filtro por protocolo. (optional)

    try:
        # Listar infrações
        api_response = api_instance.get_infractions(page=page, limit=limit, status=status, type=type, end_to_end_id=end_to_end_id, transaction_id=transaction_id, amount_min=amount_min, amount_max=amount_max, analysis_result=analysis_result, reported_by=reported_by, participant_document=participant_document, participant_name=participant_name, sort_by=sort_by, sort_direction=sort_direction, reported_at_from=reported_at_from, reported_at_to=reported_at_to, created_at_from=created_at_from, created_at_to=created_at_to, expires_at_from=expires_at_from, expires_at_to=expires_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, id=id, protocol=protocol)
        print("The response of InfractionsApi->get_infractions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número da página. | [optional] [default to 1]
 **limit** | **int**| Itens por página. | [optional] [default to 10]
 **status** | **str**| Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | [optional] 
 **type** | **str**| Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | [optional] 
 **end_to_end_id** | **str**| ID end-to-end do Pix. | [optional] 
 **transaction_id** | **str**| ID da transação. | [optional] 
 **amount_min** | **float**| Valor mínimo. | [optional] 
 **amount_max** | **float**| Valor máximo. | [optional] 
 **analysis_result** | **str**| AnalysisResult separados por vírgula: AGREED, DISAGREED. | [optional] 
 **reported_by** | **str**| Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | [optional] 
 **participant_document** | **str**| CPF ou CNPJ do participante. | [optional] 
 **participant_name** | **str**| Nome do participante. | [optional] 
 **sort_by** | **str**| Campo de ordenação. | [optional] [default to createdAt]
 **sort_direction** | **str**| Direção da ordenação. | [optional] [default to desc]
 **reported_at_from** | **datetime**| Filtro: reportedAt a partir de. | [optional] 
 **reported_at_to** | **datetime**| Filtro: reportedAt até. | [optional] 
 **created_at_from** | **datetime**| Filtro: createdAt a partir de. | [optional] 
 **created_at_to** | **datetime**| Filtro: createdAt até. | [optional] 
 **expires_at_from** | **datetime**| Filtro: expiresAt a partir de. | [optional] 
 **expires_at_to** | **datetime**| Filtro: expiresAt até. | [optional] 
 **updated_at_from** | **datetime**| Filtro: updatedAt a partir de. | [optional] 
 **updated_at_to** | **datetime**| Filtro: updatedAt até. | [optional] 
 **id** | **str**| Filtro por ID da infração. | [optional] 
 **protocol** | **str**| Filtro por protocolo. | [optional] 

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lista de infrações com paginação |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_by_id**
> InfractionDetail get_infractions_by_id(id)

Obter Infração

Obtém uma infração específica por ID.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.infraction_detail import InfractionDetail
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | ID da infração

    try:
        # Obter Infração
        api_response = api_instance.get_infractions_by_id(id)
        print("The response of InfractionsApi->get_infractions_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da infração | 

### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detalhes da infração |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Infração não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_defense_by_id**
> Defense get_infractions_defense_by_id(infraction_id, defense_id)

Obter Defesa

Obtém uma defesa específica de uma infração.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    infraction_id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | ID da infração
    defense_id = 'cm3w7p5r90003q8f2j8e4a6dg' # str | ID da defesa

    try:
        # Obter Defesa
        api_response = api_instance.get_infractions_defense_by_id(infraction_id, defense_id)
        print("The response of InfractionsApi->get_infractions_defense_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_defense_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **infraction_id** | **str**| ID da infração | 
 **defense_id** | **str**| ID da defesa | 

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detalhes da defesa |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Defesa não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_defenses**
> List[DefenseListItem] get_infractions_defenses(id)

Listar Defesas

Lista todas as defesas de uma infração específica.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense_list_item import DefenseListItem
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | ID da infração

    try:
        # Listar Defesas
        api_response = api_instance.get_infractions_defenses(id)
        print("The response of InfractionsApi->get_infractions_defenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_defenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da infração | 

### Return type

[**List[DefenseListItem]**](DefenseListItem.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lista de defesas |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_infractions_defense**
> Defense post_infractions_defense(id, defense, files=files)

Criar Defesa

Cria uma defesa para uma infração específica.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
from payzu_pix.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pix.payzu.com.br/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = payzu_pix.Configuration(
    host = "https://api.pix.payzu.com.br/v1"
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | ID da infração
    defense = 'defense_example' # str | Texto da defesa (máx: 1000 caracteres)
    files = None # List[bytes] | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. (optional)

    try:
        # Criar Defesa
        api_response = api_instance.post_infractions_defense(id, defense, files=files)
        print("The response of InfractionsApi->post_infractions_defense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->post_infractions_defense: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da infração | 
 **defense** | **str**| Texto da defesa (máx: 1000 caracteres) | 
 **files** | **List[bytes]**| Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | [optional] 

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Defesa criada |  -  |
**400** | Requisição ou arquivo inválido: arquivos acima de 10 MB no total ou com extensão bloqueada |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Infração não encontrada |  -  |
**413** | Mais de 5 arquivos ou um arquivo maior que 10 MB |  -  |
**422** | Infração não aberta para defesa |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

