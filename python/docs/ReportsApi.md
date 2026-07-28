# payzu_pix.ReportsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_user_report**](ReportsApi.md#download_user_report) | **POST** /user/report/{id}/download | Download report
[**get_user_report**](ReportsApi.md#get_user_report) | **GET** /user/report/{id} | Get report job status
[**get_user_transaction_by_id**](ReportsApi.md#get_user_transaction_by_id) | **GET** /user/transactions/{id} | List transaction details
[**get_user_transactions**](ReportsApi.md#get_user_transactions) | **GET** /user/transactions | List Transactions
[**list_user_reports**](ReportsApi.md#list_user_reports) | **GET** /user/report | List report jobs
[**post_user_report**](ReportsApi.md#post_user_report) | **POST** /user/report | Generate transactions report


# **download_user_report**
> DownloadUserReport200Response download_user_report(id)

Download report

Returns a short-lived signed URL to download the CSV file.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.download_user_report200_response import DownloadUserReport200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Download report
        api_response = api_instance.download_user_report(id)
        print("The response of ReportsApi->download_user_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->download_user_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**|  | 

### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Signed download URL |  -  |
**404** | Report not found |  -  |
**410** | Report file expired |  -  |
**422** | Report not ready (still processing) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_report**
> ReportJob get_user_report(id)

Get report job status

Returns the status and metadata of a specific report job by `id`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.report_job import ReportJob
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Get report job status
        api_response = api_instance.get_user_report(id)
        print("The response of ReportsApi->get_user_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**|  | 

### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report job |  -  |
**404** | Report not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_transaction_by_id**
> GetUserTransactionById200Response get_user_transaction_by_id(id)

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_transaction_by_id200_response import GetUserTransactionById200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = 'id_example' # str | 

    try:
        # List transaction details
        api_response = api_instance.get_user_transaction_by_id(id)
        print("The response of ReportsApi->get_user_transaction_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_transaction_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction details |  -  |
**404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_transactions**
> GetUserTransactions200Response get_user_transactions(date_from=date_from, date_to=date_to, limit=limit, page=page, id=id, status=status, type=type, method=method, amount=amount, document=document, name=name, end_to_end_id=end_to_end_id, sort_by=sort_by, sort_direction=sort_direction, client_reference=client_reference, virtual_account=virtual_account)

List Transactions

Paginated list of account transactions with filters.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_transactions200_response import GetUserTransactions200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    date_from = '2025-08-01' # str | Start date (YYYY-MM-DD). (optional)
    date_to = '2025-08-17' # str | End date (YYYY-MM-DD). (optional)
    limit = 10 # float | Items per page (max 1000). (optional) (default to 10)
    page = 1 # float | Page number (default 1). (optional) (default to 1)
    id = 'PAYZU2025081418333632CYKN8M' # str | Transaction ID. (optional)
    status = 'COMPLETED' # str | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. (optional)
    type = 'DEPOSIT' # str | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION. (optional)
    method = 'PIX' # str | Transaction method/rail. Accepts CSV: PIX,BANK_SLIP,INTERNAL_TRANSFER. (optional)
    amount = 15000 # float | Amount filter. Minimum 0.01. (optional)
    document = '12345678901' # str | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. (optional)
    name = 'Alice' # str | Name filter. (optional)
    end_to_end_id = 'E00360305202508141833bcf1f37b487' # str | Pix end-to-end ID. (optional)
    sort_by = createdAt # str | Field to sort by (optional) (default to createdAt)
    sort_direction = desc # str | Sort direction (optional) (default to desc)
    client_reference = 'client_reference_example' # str | Filter by external reference (optional)
    virtual_account = 'virtual_account_example' # str | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)

    try:
        # List Transactions
        api_response = api_instance.get_user_transactions(date_from=date_from, date_to=date_to, limit=limit, page=page, id=id, status=status, type=type, method=method, amount=amount, document=document, name=name, end_to_end_id=end_to_end_id, sort_by=sort_by, sort_direction=sort_direction, client_reference=client_reference, virtual_account=virtual_account)
        print("The response of ReportsApi->get_user_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_from** | **str**| Start date (YYYY-MM-DD). | [optional] 
 **date_to** | **str**| End date (YYYY-MM-DD). | [optional] 
 **limit** | **float**| Items per page (max 1000). | [optional] [default to 10]
 **page** | **float**| Page number (default 1). | [optional] [default to 1]
 **id** | **str**| Transaction ID. | [optional] 
 **status** | **str**| Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] 
 **type** | **str**| Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION. | [optional] 
 **method** | **str**| Transaction method/rail. Accepts CSV: PIX,BANK_SLIP,INTERNAL_TRANSFER. | [optional] 
 **amount** | **float**| Amount filter. Minimum 0.01. | [optional] 
 **document** | **str**| CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] 
 **name** | **str**| Name filter. | [optional] 
 **end_to_end_id** | **str**| Pix end-to-end ID. | [optional] 
 **sort_by** | **str**| Field to sort by | [optional] [default to createdAt]
 **sort_direction** | **str**| Sort direction | [optional] [default to desc]
 **client_reference** | **str**| Filter by external reference | [optional] 
 **virtual_account** | **str**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] 

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction page |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_reports**
> ListUserReports200Response list_user_reports(page=page, limit=limit, status=status, created_at_from=created_at_from, created_at_to=created_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, sort_by=sort_by, sort_direction=sort_direction)

List report jobs

List report jobs created by the authenticated user.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.list_user_reports200_response import ListUserReports200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    limit = 10 # int |  (optional) (default to 10)
    status = 'status_example' # str |  (optional)
    created_at_from = '2013-10-20T19:20:30+01:00' # datetime | Filter: created from. (optional)
    created_at_to = '2013-10-20T19:20:30+01:00' # datetime | Filter: created up to. (optional)
    updated_at_from = '2013-10-20T19:20:30+01:00' # datetime | Filter: updated from. (optional)
    updated_at_to = '2013-10-20T19:20:30+01:00' # datetime | Filter: updated up to. (optional)
    sort_by = createdAt # str | Sort field. (optional) (default to createdAt)
    sort_direction = desc # str | Sort direction. (optional) (default to desc)

    try:
        # List report jobs
        api_response = api_instance.list_user_reports(page=page, limit=limit, status=status, created_at_from=created_at_from, created_at_to=created_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, sort_by=sort_by, sort_direction=sort_direction)
        print("The response of ReportsApi->list_user_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->list_user_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **limit** | **int**|  | [optional] [default to 10]
 **status** | **str**|  | [optional] 
 **created_at_from** | **datetime**| Filter: created from. | [optional] 
 **created_at_to** | **datetime**| Filter: created up to. | [optional] 
 **updated_at_from** | **datetime**| Filter: updated from. | [optional] 
 **updated_at_to** | **datetime**| Filter: updated up to. | [optional] 
 **sort_by** | **str**| Sort field. | [optional] [default to createdAt]
 **sort_direction** | **str**| Sort direction. | [optional] [default to desc]

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of report jobs |  -  |
**400** | Bad Request, payload or query string failed validation |  -  |
**401** | Unauthorized, missing or invalid Bearer token, or token lacks the required permission for this endpoint |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_report**
> ReportJob post_user_report(post_user_report_request)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_user_report_request import PostUserReportRequest
from payzu_pix.models.report_job import ReportJob
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
    api_instance = payzu_pix.ReportsApi(api_client)
    post_user_report_request = payzu_pix.PostUserReportRequest() # PostUserReportRequest | 

    try:
        # Generate transactions report
        api_response = api_instance.post_user_report(post_user_report_request)
        print("The response of ReportsApi->post_user_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->post_user_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_user_report_request** | [**PostUserReportRequest**](PostUserReportRequest.md)|  | 

### Return type

[**ReportJob**](ReportJob.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Report job aceito (job enfileirado) |  -  |
**422** | No transactions match the filter / concurrency limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

