# payzu_pix.ReportsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_user_report**](ReportsApi.md#download_user_report) | **POST** /user/report/{id}/download | Download report
[**get_user_bank_statement**](ReportsApi.md#get_user_bank_statement) | **GET** /user/bank-statements/{id} | Get bank statement
[**get_user_bank_statements**](ReportsApi.md#get_user_bank_statements) | **GET** /user/bank-statements | List bank statements
[**get_user_deposit_pending**](ReportsApi.md#get_user_deposit_pending) | **GET** /user/deposit-pending | List pending deposits
[**get_user_deposit_pending_by_id**](ReportsApi.md#get_user_deposit_pending_by_id) | **GET** /user/deposit-pending/{id} | Get pending deposit
[**get_user_report**](ReportsApi.md#get_user_report) | **GET** /user/report/{id} | Get report job status
[**get_user_summary**](ReportsApi.md#get_user_summary) | **GET** /user/summary | Transaction summary
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
    id = UUID('01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78') # UUID | Report ID.

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
 **id** | **UUID**| Report ID. | 

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
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**404** | Report not found |  -  |
**410** | Report file expired |  -  |
**422** | Report not ready (still processing) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_bank_statement**
> BankStatement get_user_bank_statement(id)

Get bank statement

Returns a single statement entry.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.bank_statement import BankStatement
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
    id = 'cm3w7q8s10004q8f2k9f5b7eh' # str | Statement entry id.

    try:
        # Get bank statement
        api_response = api_instance.get_user_bank_statement(id)
        print("The response of ReportsApi->get_user_bank_statement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_bank_statement: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Statement entry id. | 

### Return type

[**BankStatement**](BankStatement.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Statement entry. |  -  |
**401** | Authentication failure |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_bank_statements**
> BankStatementListResponse get_user_bank_statements(created_at_from, created_at_to, id=id, operation=operation, reason=reason, transaction_id=transaction_id, amount_from=amount_from, amount_to=amount_to, page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction)

List bank statements

Lists the account statement entries. `createdAtFrom` and `createdAtTo` are required.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.bank_statement_list_response import BankStatementListResponse
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
    created_at_from = '2026-08-01T00:00:00-03:00' # datetime | Start date (required).
    created_at_to = '2026-08-31T23:59:59-03:00' # datetime | End date (required).
    id = 'cm3w7q8s10004q8f2k9f5b7eh' # str | Entry ID. (optional)
    operation = 'operation_example' # str | Operation type.  `INCREMENT` `DECREMENT` (optional)
    reason = 'Estorno' # str | Reason for the entry. (optional)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID. (optional)
    amount_from = 10.9 # float | Minimum amount. (optional)
    amount_to = 500 # float | Maximum amount. (optional)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 10 # int | Items per page. (optional) (default to 10)
    sort_by = createdAt # str | Sort field. (optional) (default to createdAt)
    sort_direction = desc # str | Sort direction. (optional) (default to desc)

    try:
        # List bank statements
        api_response = api_instance.get_user_bank_statements(created_at_from, created_at_to, id=id, operation=operation, reason=reason, transaction_id=transaction_id, amount_from=amount_from, amount_to=amount_to, page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction)
        print("The response of ReportsApi->get_user_bank_statements:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_bank_statements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **created_at_from** | **datetime**| Start date (required). | 
 **created_at_to** | **datetime**| End date (required). | 
 **id** | **str**| Entry ID. | [optional] 
 **operation** | **str**| Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] 
 **reason** | **str**| Reason for the entry. | [optional] 
 **transaction_id** | **str**| Transaction ID. | [optional] 
 **amount_from** | **float**| Minimum amount. | [optional] 
 **amount_to** | **float**| Maximum amount. | [optional] 
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Items per page. | [optional] [default to 10]
 **sort_by** | **str**| Sort field. | [optional] [default to createdAt]
 **sort_direction** | **str**| Sort direction. | [optional] [default to desc]

### Return type

[**BankStatementListResponse**](BankStatementListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Statement page. |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_deposit_pending**
> DepositPendingListResponse get_user_deposit_pending(status=status, document=document, name=name, end_to_end_id=end_to_end_id, amount_min=amount_min, amount_max=amount_max, created_at_from=created_at_from, created_at_to=created_at_to, page=page, limit=limit)

List pending deposits

Lists deposits that are pending / not yet reconciled.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.deposit_pending_list_response import DepositPendingListResponse
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
    status = 'PENDING' # str | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. (optional)
    document = '12345678901' # str | CPF or CNPJ, digits only. (optional)
    name = 'John Doe' # str | Name of the payer or receiver. (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | End-to-end ID of the Pix. (optional)
    amount_min = 10.9 # float | Minimum amount. (optional)
    amount_max = 500 # float | Maximum amount. (optional)
    created_at_from = '2026-08-01' # datetime | Start of the creation date range. (optional)
    created_at_to = '2026-08-31' # datetime | End of the creation date range. (optional)
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 20 # int | Items per page. (optional) (default to 20)

    try:
        # List pending deposits
        api_response = api_instance.get_user_deposit_pending(status=status, document=document, name=name, end_to_end_id=end_to_end_id, amount_min=amount_min, amount_max=amount_max, created_at_from=created_at_from, created_at_to=created_at_to, page=page, limit=limit)
        print("The response of ReportsApi->get_user_deposit_pending:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_deposit_pending: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | [optional] 
 **document** | **str**| CPF or CNPJ, digits only. | [optional] 
 **name** | **str**| Name of the payer or receiver. | [optional] 
 **end_to_end_id** | **str**| End-to-end ID of the Pix. | [optional] 
 **amount_min** | **float**| Minimum amount. | [optional] 
 **amount_max** | **float**| Maximum amount. | [optional] 
 **created_at_from** | **datetime**| Start of the creation date range. | [optional] 
 **created_at_to** | **datetime**| End of the creation date range. | [optional] 
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Items per page. | [optional] [default to 20]

### Return type

[**DepositPendingListResponse**](DepositPendingListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pending deposit page. |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_deposit_pending_by_id**
> DepositPending get_user_deposit_pending_by_id(id)

Get pending deposit

Returns a single pending deposit.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.deposit_pending import DepositPending
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
    id = 'cm3w7r1u50005q8f2m1g6c8fj' # str | Pending deposit id.

    try:
        # Get pending deposit
        api_response = api_instance.get_user_deposit_pending_by_id(id)
        print("The response of ReportsApi->get_user_deposit_pending_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_deposit_pending_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Pending deposit id. | 

### Return type

[**DepositPending**](DepositPending.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pending deposit. |  -  |
**401** | Authentication failure |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_report**
> ReportJobDetail get_user_report(id)

Get report job status

Returns the status and metadata of a specific report job by `id`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.report_job_detail import ReportJobDetail
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
    id = UUID('01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78') # UUID | Report ID.

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
 **id** | **UUID**| Report ID. | 

### Return type

[**ReportJobDetail**](ReportJobDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report job |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**404** | Report not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_summary**
> Summary get_user_summary(date_from=date_from, date_to=date_to, group_by=group_by, grouped=grouped)

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.summary import Summary
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
    date_from = '2026-08-01T00:00:00-03:00' # datetime | Start date. Default: start of the previous day (America/Sao_Paulo). (optional)
    date_to = '2026-08-31T23:59:59-03:00' # datetime | End date. Default: now. (optional)
    group_by = day # str | Grouping applied to the transactions. (optional) (default to day)
    grouped = true # bool | When true, returns a series grouped by date. (optional)

    try:
        # Transaction summary
        api_response = api_instance.get_user_summary(date_from=date_from, date_to=date_to, group_by=group_by, grouped=grouped)
        print("The response of ReportsApi->get_user_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_from** | **datetime**| Start date. Default: start of the previous day (America/Sao_Paulo). | [optional] 
 **date_to** | **datetime**| End date. Default: now. | [optional] 
 **group_by** | **str**| Grouping applied to the transactions. | [optional] [default to day]
 **grouped** | **bool**| When true, returns a series grouped by date. | [optional] 

### Return type

[**Summary**](Summary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary. |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |

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
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID.

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
 **id** | **str**| Transaction ID. | 

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
**401** | Authentication failure |  -  |
**404** | Transaction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_transactions**
> GetUserTransactions200Response get_user_transactions(date_from=date_from, date_to=date_to, limit=limit, page=page, id=id, status=status, type=type, method=method, amount=amount, document=document, name=name, end_to_end_id=end_to_end_id, sort_by=sort_by, sort_direction=sort_direction, client_reference=client_reference, virtual_account=virtual_account, has_qr_code=has_qr_code)

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
    date_from = '2026-08-01T00:00:00-03:00' # datetime | Start date-time (ISO 8601). (optional)
    date_to = '2026-08-31T23:59:59-03:00' # datetime | End date-time (ISO 8601). (optional)
    limit = 10 # int | Items per page (max 1000). (optional) (default to 10)
    page = 1 # int | Page number (default 1). (optional) (default to 1)
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | Transaction ID. (optional)
    status = 'COMPLETED' # str | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. (optional)
    type = 'DEPOSIT' # str | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. (optional)
    method = 'PIX' # str | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. (optional)
    amount = 15000 # float | Amount filter. Minimum 0.01. (optional)
    document = '12345678901' # str | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. (optional)
    name = 'Alice' # str | Name filter. (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | Pix end-to-end ID. (optional)
    sort_by = createdAt # str | Field to sort by (optional) (default to createdAt)
    sort_direction = desc # str | Sort direction (optional) (default to desc)
    client_reference = 'order_12345' # str | Filter by external reference (optional)
    virtual_account = 'loja-centro-01' # str | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. (optional)
    has_qr_code = True # bool | Only transactions with (true) or without (false) QR Code. (optional)

    try:
        # List Transactions
        api_response = api_instance.get_user_transactions(date_from=date_from, date_to=date_to, limit=limit, page=page, id=id, status=status, type=type, method=method, amount=amount, document=document, name=name, end_to_end_id=end_to_end_id, sort_by=sort_by, sort_direction=sort_direction, client_reference=client_reference, virtual_account=virtual_account, has_qr_code=has_qr_code)
        print("The response of ReportsApi->get_user_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_from** | **datetime**| Start date-time (ISO 8601). | [optional] 
 **date_to** | **datetime**| End date-time (ISO 8601). | [optional] 
 **limit** | **int**| Items per page (max 1000). | [optional] [default to 10]
 **page** | **int**| Page number (default 1). | [optional] [default to 1]
 **id** | **str**| Transaction ID. | [optional] 
 **status** | **str**| Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] 
 **type** | **str**| Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] 
 **method** | **str**| Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | [optional] 
 **amount** | **float**| Amount filter. Minimum 0.01. | [optional] 
 **document** | **str**| CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] 
 **name** | **str**| Name filter. | [optional] 
 **end_to_end_id** | **str**| Pix end-to-end ID. | [optional] 
 **sort_by** | **str**| Field to sort by | [optional] [default to createdAt]
 **sort_direction** | **str**| Sort direction | [optional] [default to desc]
 **client_reference** | **str**| Filter by external reference | [optional] 
 **virtual_account** | **str**| Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] 
 **has_qr_code** | **bool**| Only transactions with (true) or without (false) QR Code. | [optional] 

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
    page = 1 # int | Page number. (optional) (default to 1)
    limit = 10 # int | Items per page. (optional) (default to 10)
    status = 'COMPLETED,FAILED' # str | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. (optional)
    created_at_from = '2026-08-01' # datetime | Filter: created from. (optional)
    created_at_to = '2026-08-31' # datetime | Filter: created up to. (optional)
    updated_at_from = '2026-08-01' # datetime | Filter: updated from. (optional)
    updated_at_to = '2026-08-31' # datetime | Filter: updated up to. (optional)
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
 **page** | **int**| Page number. | [optional] [default to 1]
 **limit** | **int**| Items per page. | [optional] [default to 10]
 **status** | **str**| Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] 
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_report**
> ReportJobAccepted post_user_report(post_user_report_request)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_user_report_request import PostUserReportRequest
from payzu_pix.models.report_job_accepted import ReportJobAccepted
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

[**ReportJobAccepted**](ReportJobAccepted.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Report job aceito (job enfileirado) |  -  |
**400** | Invalid request |  -  |
**401** | Authentication failure |  -  |
**403** | Operation not allowed |  -  |
**422** | No transactions match the filter / concurrency limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

