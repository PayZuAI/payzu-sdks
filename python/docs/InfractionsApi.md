# payzu_pix.InfractionsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_infractions**](InfractionsApi.md#get_infractions) | **GET** /user/infractions | List Infractions
[**get_infractions_by_id**](InfractionsApi.md#get_infractions_by_id) | **GET** /user/infractions/{id} | Get Infraction
[**get_infractions_defense_by_id**](InfractionsApi.md#get_infractions_defense_by_id) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense
[**get_infractions_defenses**](InfractionsApi.md#get_infractions_defenses) | **GET** /user/infractions/{id}/defenses | List Defenses
[**post_infractions_defense**](InfractionsApi.md#post_infractions_defense) | **POST** /user/infractions/{id}/defenses | Create Defense


# **get_infractions**
> InfractionListResponse get_infractions(page=page, limit=limit, status=status, type=type, end_to_end_id=end_to_end_id, transaction_id=transaction_id, amount_min=amount_min, amount_max=amount_max, analysis_result=analysis_result, reported_by=reported_by, participant_document=participant_document, participant_name=participant_name, sort_by=sort_by, sort_direction=sort_direction, reported_at_from=reported_at_from, reported_at_to=reported_at_to, created_at_from=created_at_from, created_at_to=created_at_to, expires_at_from=expires_at_from, expires_at_to=expires_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, id=id, protocol=protocol)

List Infractions

List all infractions for the authenticated user with pagination and filters.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.infraction_list_response import InfractionListResponse
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 10 # int | Items per page. (optional) (default to 10)
    status = 'OPEN' # str | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) (optional)
    type = 'REFUND_REQUEST' # str | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | End-to-end ID of the Pix. (optional)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID. (optional)
    amount_min = 10.9 # float | Minimum amount. (optional)
    amount_max = 500 # float | Maximum amount. (optional)
    analysis_result = 'AGREED' # str | Comma-separated AnalysisResult: AGREED, DISAGREED. (optional)
    reported_by = 'DEBITED_PARTICIPANT' # str | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) (optional)
    participant_document = '12345678901' # str | CPF or CNPJ of the participant. (optional)
    participant_name = 'John Doe' # str | Name of the participant. (optional)
    sort_by = createdAt # str | Sort field. (optional) (default to createdAt)
    sort_direction = desc # str | Sort direction. (optional) (default to desc)
    reported_at_from = '2026-08-01' # datetime | Filter: reportedAt from. (optional)
    reported_at_to = '2026-08-31' # datetime | Filter: reportedAt up to. (optional)
    created_at_from = '2026-08-01' # datetime | Filter: createdAt from. (optional)
    created_at_to = '2026-08-31' # datetime | Filter: createdAt up to. (optional)
    expires_at_from = '2026-08-01' # datetime | Filter: expiresAt from. (optional)
    expires_at_to = '2026-08-31' # datetime | Filter: expiresAt up to. (optional)
    updated_at_from = '2026-08-01' # datetime | Filter: updatedAt from. (optional)
    updated_at_to = '2026-08-31' # datetime | Filter: updatedAt up to. (optional)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | Filter by infraction ID. (optional)
    protocol = '2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210' # str | Filter by protocol. (optional)

    try:
        # List Infractions
        api_response = api_instance.get_infractions(page=page, limit=limit, status=status, type=type, end_to_end_id=end_to_end_id, transaction_id=transaction_id, amount_min=amount_min, amount_max=amount_max, analysis_result=analysis_result, reported_by=reported_by, participant_document=participant_document, participant_name=participant_name, sort_by=sort_by, sort_direction=sort_direction, reported_at_from=reported_at_from, reported_at_to=reported_at_to, created_at_from=created_at_from, created_at_to=created_at_to, expires_at_from=expires_at_from, expires_at_to=expires_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, id=id, protocol=protocol)
        print("The response of InfractionsApi->get_infractions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Items per page. | [optional] [default to 10]
 **status** | **str**| Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] 
 **type** | **str**| Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] 
 **end_to_end_id** | **str**| End-to-end ID of the Pix. | [optional] 
 **transaction_id** | **str**| Transaction ID. | [optional] 
 **amount_min** | **float**| Minimum amount. | [optional] 
 **amount_max** | **float**| Maximum amount. | [optional] 
 **analysis_result** | **str**| Comma-separated AnalysisResult: AGREED, DISAGREED. | [optional] 
 **reported_by** | **str**| Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] 
 **participant_document** | **str**| CPF or CNPJ of the participant. | [optional] 
 **participant_name** | **str**| Name of the participant. | [optional] 
 **sort_by** | **str**| Sort field. | [optional] [default to createdAt]
 **sort_direction** | **str**| Sort direction. | [optional] [default to desc]
 **reported_at_from** | **datetime**| Filter: reportedAt from. | [optional] 
 **reported_at_to** | **datetime**| Filter: reportedAt up to. | [optional] 
 **created_at_from** | **datetime**| Filter: createdAt from. | [optional] 
 **created_at_to** | **datetime**| Filter: createdAt up to. | [optional] 
 **expires_at_from** | **datetime**| Filter: expiresAt from. | [optional] 
 **expires_at_to** | **datetime**| Filter: expiresAt up to. | [optional] 
 **updated_at_from** | **datetime**| Filter: updatedAt from. | [optional] 
 **updated_at_to** | **datetime**| Filter: updatedAt up to. | [optional] 
 **id** | **str**| Filter by infraction ID. | [optional] 
 **protocol** | **str**| Filter by protocol. | [optional] 

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
**200** | List of infractions with pagination |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_by_id**
> InfractionDetail get_infractions_by_id(id)

Get Infraction

Get a specific infraction by ID.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.infraction_detail import InfractionDetail
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | Infraction ID

    try:
        # Get Infraction
        api_response = api_instance.get_infractions_by_id(id)
        print("The response of InfractionsApi->get_infractions_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Infraction ID | 

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
**200** | Infraction details |  -  |
**401** | Authentication failure |  -  |
**404** | Infraction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_defense_by_id**
> Defense get_infractions_defense_by_id(infraction_id, defense_id)

Get Defense

Get a specific defense for an infraction.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    infraction_id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | Infraction ID
    defense_id = 'cm3w7p5r90003q8f2j8e4a6dg' # str | Defense ID

    try:
        # Get Defense
        api_response = api_instance.get_infractions_defense_by_id(infraction_id, defense_id)
        print("The response of InfractionsApi->get_infractions_defense_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_defense_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **infraction_id** | **str**| Infraction ID | 
 **defense_id** | **str**| Defense ID | 

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
**200** | Defense details |  -  |
**401** | Authentication failure |  -  |
**404** | Defense not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_infractions_defenses**
> List[Defense] get_infractions_defenses(id)

List Defenses

List all defenses for a specific infraction.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | Infraction ID

    try:
        # List Defenses
        api_response = api_instance.get_infractions_defenses(id)
        print("The response of InfractionsApi->get_infractions_defenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->get_infractions_defenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Infraction ID | 

### Return type

[**List[Defense]**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of defenses |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_infractions_defense**
> Defense post_infractions_defense(id, defense, files=files)

Create Defense

Create a defense for a specific infraction.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.defense import Defense
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
    api_instance = payzu_pix.InfractionsApi(api_client)
    id = 'cm3w7n2p60002q8f2h7d3z5cf' # str | Infraction ID
    defense = 'defense_example' # str | Defense text (max: 1000 characters)
    files = None # List[bytes] | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. (optional)

    try:
        # Create Defense
        api_response = api_instance.post_infractions_defense(id, defense, files=files)
        print("The response of InfractionsApi->post_infractions_defense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfractionsApi->post_infractions_defense: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Infraction ID | 
 **defense** | **str**| Defense text (max: 1000 characters) | 
 **files** | **List[bytes]**| Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. | [optional] 

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
**201** | Defense created |  -  |
**400** | Invalid request or file: files above 10 MB in total or with a blocked extension |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Infraction not found |  -  |
**413** | More than 5 files or a single file larger than 10 MB |  -  |
**422** | Infraction not open for defense |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

