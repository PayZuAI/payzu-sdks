# payzu_pix.ReportsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_user_report**](ReportsApi.md#download_user_report) | **POST** /user/report/{id}/download | Baixar relatório
[**get_user_bank_statement**](ReportsApi.md#get_user_bank_statement) | **GET** /user/bank-statements/{id} | Consultar lançamento
[**get_user_bank_statements**](ReportsApi.md#get_user_bank_statements) | **GET** /user/bank-statements | Listar extrato
[**get_user_deposit_pending**](ReportsApi.md#get_user_deposit_pending) | **GET** /user/deposit-pending | Listar depósitos via chave Pix
[**get_user_deposit_pending_by_id**](ReportsApi.md#get_user_deposit_pending_by_id) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix
[**get_user_report**](ReportsApi.md#get_user_report) | **GET** /user/report/{id} | Consultar status do relatório
[**get_user_summary**](ReportsApi.md#get_user_summary) | **GET** /user/summary | Resumo de transações
[**get_user_transaction_by_id**](ReportsApi.md#get_user_transaction_by_id) | **GET** /user/transactions/{id} | Listar detalhes da transação
[**get_user_transactions**](ReportsApi.md#get_user_transactions) | **GET** /user/transactions | Listar transações
[**list_user_reports**](ReportsApi.md#list_user_reports) | **GET** /user/report | Listar jobs de relatório
[**post_user_report**](ReportsApi.md#post_user_report) | **POST** /user/report | Gerar relatório de transações


# **download_user_report**
> DownloadUserReport200Response download_user_report(id)

Baixar relatório

Retorna uma URL assinada de curta duração para baixar o arquivo CSV.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.download_user_report200_response import DownloadUserReport200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = UUID('01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78') # UUID | ID do relatório.

    try:
        # Baixar relatório
        api_response = api_instance.download_user_report(id)
        print("The response of ReportsApi->download_user_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->download_user_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| ID do relatório. | 

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
**200** | URL de download assinada |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Relatório não encontrado |  -  |
**410** | Arquivo do relatório expirado |  -  |
**422** | Relatório ainda processando |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_bank_statement**
> BankStatement get_user_bank_statement(id)

Consultar lançamento

Retorna um lançamento do extrato.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.bank_statement import BankStatement
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = 'cm3w7q8s10004q8f2k9f5b7eh' # str | Id do lançamento do extrato.

    try:
        # Consultar lançamento
        api_response = api_instance.get_user_bank_statement(id)
        print("The response of ReportsApi->get_user_bank_statement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_bank_statement: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do lançamento do extrato. | 

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
**200** | Lançamento. |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_bank_statements**
> BankStatementListResponse get_user_bank_statements(created_at_from, created_at_to, id=id, operation=operation, reason=reason, transaction_id=transaction_id, amount_from=amount_from, amount_to=amount_to, page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction)

Listar extrato

Lista os lançamentos do extrato da conta. `createdAtFrom` e `createdAtTo` são obrigatórios.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.bank_statement_list_response import BankStatementListResponse
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
    api_instance = payzu_pix.ReportsApi(api_client)
    created_at_from = '2026-08-01T00:00:00-03:00' # datetime | Data inicial (obrigatória).
    created_at_to = '2026-08-31T23:59:59-03:00' # datetime | Data final (obrigatória).
    id = 'cm3w7q8s10004q8f2k9f5b7eh' # str | ID do lançamento. (optional)
    operation = 'operation_example' # str | Tipo de operação.  `INCREMENT` `DECREMENT` (optional)
    reason = 'PIX_DEPOSIT' # str | Razão do lançamento. (optional)
    transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação. (optional)
    amount_from = 10.9 # float | Valor mínimo. (optional)
    amount_to = 500 # float | Valor máximo. (optional)
    page = 1 # int | Número da página. (optional) (default to 1)
    limit = 10 # int | Itens por página. (optional) (default to 10)
    sort_by = createdAt # str | Campo de ordenação. (optional) (default to createdAt)
    sort_direction = desc # str | Direção da ordenação. (optional) (default to desc)

    try:
        # Listar extrato
        api_response = api_instance.get_user_bank_statements(created_at_from, created_at_to, id=id, operation=operation, reason=reason, transaction_id=transaction_id, amount_from=amount_from, amount_to=amount_to, page=page, limit=limit, sort_by=sort_by, sort_direction=sort_direction)
        print("The response of ReportsApi->get_user_bank_statements:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_bank_statements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **created_at_from** | **datetime**| Data inicial (obrigatória). | 
 **created_at_to** | **datetime**| Data final (obrigatória). | 
 **id** | **str**| ID do lançamento. | [optional] 
 **operation** | **str**| Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] 
 **reason** | **str**| Razão do lançamento. | [optional] 
 **transaction_id** | **str**| ID da transação. | [optional] 
 **amount_from** | **float**| Valor mínimo. | [optional] 
 **amount_to** | **float**| Valor máximo. | [optional] 
 **page** | **int**| Número da página. | [optional] [default to 1]
 **limit** | **int**| Itens por página. | [optional] [default to 10]
 **sort_by** | **str**| Campo de ordenação. | [optional] [default to createdAt]
 **sort_direction** | **str**| Direção da ordenação. | [optional] [default to desc]

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
**200** | Página do extrato. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_deposit_pending**
> DepositPendingListResponse get_user_deposit_pending(status=status, document=document, name=name, end_to_end_id=end_to_end_id, amount_min=amount_min, amount_max=amount_max, created_at_from=created_at_from, created_at_to=created_at_to, page=page, limit=limit)

Listar depósitos via chave Pix

Lista os depósitos via chave Pix: Pix que entraram na conta pela chave, sem passar por uma cobrança criada por `POST /pix`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.deposit_pending_list_response import DepositPendingListResponse
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
    api_instance = payzu_pix.ReportsApi(api_client)
    status = 'PENDING' # str | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED` (optional)
    document = '12345678901' # str | CPF ou CNPJ, apenas dígitos. (optional)
    name = 'John Doe' # str | Nome do pagador ou recebedor. (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | ID end-to-end do Pix. (optional)
    amount_min = 10.9 # float | Valor mínimo. (optional)
    amount_max = 500 # float | Valor máximo. (optional)
    created_at_from = '2026-08-01' # datetime | Data de criação inicial. (optional)
    created_at_to = '2026-08-31' # datetime | Data de criação final. (optional)
    page = 1 # int | Número da página. Valor inválido vira 1. (optional) (default to 1)
    limit = 20 # int | Itens por página. Valor inválido vira 20. (optional) (default to 20)

    try:
        # Listar depósitos via chave Pix
        api_response = api_instance.get_user_deposit_pending(status=status, document=document, name=name, end_to_end_id=end_to_end_id, amount_min=amount_min, amount_max=amount_max, created_at_from=created_at_from, created_at_to=created_at_to, page=page, limit=limit)
        print("The response of ReportsApi->get_user_deposit_pending:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_deposit_pending: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | [optional] 
 **document** | **str**| CPF ou CNPJ, apenas dígitos. | [optional] 
 **name** | **str**| Nome do pagador ou recebedor. | [optional] 
 **end_to_end_id** | **str**| ID end-to-end do Pix. | [optional] 
 **amount_min** | **float**| Valor mínimo. | [optional] 
 **amount_max** | **float**| Valor máximo. | [optional] 
 **created_at_from** | **datetime**| Data de criação inicial. | [optional] 
 **created_at_to** | **datetime**| Data de criação final. | [optional] 
 **page** | **int**| Número da página. Valor inválido vira 1. | [optional] [default to 1]
 **limit** | **int**| Itens por página. Valor inválido vira 20. | [optional] [default to 20]

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
**200** | Página de pendentes. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_deposit_pending_by_id**
> DepositPending get_user_deposit_pending_by_id(id)

Consultar depósito via chave Pix

Retorna um depósito via chave Pix.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.deposit_pending import DepositPending
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = 'cm3w7r1u50005q8f2m1g6c8fj' # str | Id do depósito pendente.

    try:
        # Consultar depósito via chave Pix
        api_response = api_instance.get_user_deposit_pending_by_id(id)
        print("The response of ReportsApi->get_user_deposit_pending_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_deposit_pending_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Id do depósito pendente. | 

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
**200** | Depósito pendente. |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Recurso não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_report**
> ReportJobDetail get_user_report(id)

Consultar status do relatório

Retorna o status e os metadados de um job de relatório específico pelo `id`.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.report_job_detail import ReportJobDetail
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = UUID('01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78') # UUID | ID do relatório.

    try:
        # Consultar status do relatório
        api_response = api_instance.get_user_report(id)
        print("The response of ReportsApi->get_user_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **UUID**| ID do relatório. | 

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
**200** | Job de relatório |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Relatório não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_summary**
> Summary get_user_summary(date_from=date_from, date_to=date_to, group_by=group_by, grouped=grouped)

Resumo de transações

Totais agregados de depósitos, saques e comissão num período.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.summary import Summary
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
    api_instance = payzu_pix.ReportsApi(api_client)
    date_from = '2026-08-01T00:00:00-03:00' # datetime | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). (optional)
    date_to = '2026-08-31T23:59:59-03:00' # datetime | Data final. Padrão: agora. (optional)
    group_by = day # str | Agrupamento das transações. (optional) (default to day)
    grouped = true # bool | Quando true, retorna uma série agrupada por data. (optional)

    try:
        # Resumo de transações
        api_response = api_instance.get_user_summary(date_from=date_from, date_to=date_to, group_by=group_by, grouped=grouped)
        print("The response of ReportsApi->get_user_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_from** | **datetime**| Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | [optional] 
 **date_to** | **datetime**| Data final. Padrão: agora. | [optional] 
 **group_by** | **str**| Agrupamento das transações. | [optional] [default to day]
 **grouped** | **bool**| Quando true, retorna uma série agrupada por data. | [optional] 

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
**200** | Resumo. |  -  |
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_transaction_by_id**
> GetUserTransactionById200Response get_user_transaction_by_id(id)

Listar detalhes da transação

Recupera uma única transação com seu log de callback e as infrações vinculadas.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_transaction_by_id200_response import GetUserTransactionById200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação.

    try:
        # Listar detalhes da transação
        api_response = api_instance.get_user_transaction_by_id(id)
        print("The response of ReportsApi->get_user_transaction_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_transaction_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da transação. | 

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
**200** | Detalhes da transação |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**404** | Transação não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_transactions**
> GetUserTransactions200Response get_user_transactions(date_from=date_from, date_to=date_to, limit=limit, page=page, id=id, status=status, type=type, method=method, amount=amount, document=document, name=name, end_to_end_id=end_to_end_id, sort_by=sort_by, sort_direction=sort_direction, client_reference=client_reference, virtual_account=virtual_account, has_qr_code=has_qr_code)

Listar transações

Lista paginada das transações da conta com filtros.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.get_user_transactions200_response import GetUserTransactions200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    date_from = '2026-08-01T00:00:00-03:00' # datetime | Data-hora inicial (ISO 8601). (optional)
    date_to = '2026-08-31T23:59:59-03:00' # datetime | Data-hora final (ISO 8601). (optional)
    limit = 10 # int | Itens por página. (optional) (default to 10)
    page = 1 # int | Número da página. (optional) (default to 1)
    id = 'PAYZU20260814T6NX1CV9MK000000' # str | ID da transação. (optional)
    status = 'COMPLETED' # str | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR` (optional)
    type = 'DEPOSIT' # str | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. (optional)
    method = 'PIX' # str | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED` (optional)
    amount = 15000 # float | Filtro por valor. Mínimo 0.01. (optional)
    document = '12345678901' # str | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. (optional)
    name = 'Alice' # str | Filtro por nome. (optional)
    end_to_end_id = 'E00000000202508172159kZ8dQ2mNb1x' # str | ID end-to-end do Pix. (optional)
    sort_by = createdAt # str | Campo pelo qual ordenar (optional) (default to createdAt)
    sort_direction = desc # str | Direção da ordenação (optional) (default to desc)
    client_reference = 'order_12345' # str | Filtra por referência externa (optional)
    virtual_account = 'loja-centro-01' # str | Subconta usada na criação. (optional)
    has_qr_code = True # bool | Só transações com (true) ou sem (false) QR Code. (optional)

    try:
        # Listar transações
        api_response = api_instance.get_user_transactions(date_from=date_from, date_to=date_to, limit=limit, page=page, id=id, status=status, type=type, method=method, amount=amount, document=document, name=name, end_to_end_id=end_to_end_id, sort_by=sort_by, sort_direction=sort_direction, client_reference=client_reference, virtual_account=virtual_account, has_qr_code=has_qr_code)
        print("The response of ReportsApi->get_user_transactions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->get_user_transactions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date_from** | **datetime**| Data-hora inicial (ISO 8601). | [optional] 
 **date_to** | **datetime**| Data-hora final (ISO 8601). | [optional] 
 **limit** | **int**| Itens por página. | [optional] [default to 10]
 **page** | **int**| Número da página. | [optional] [default to 1]
 **id** | **str**| ID da transação. | [optional] 
 **status** | **str**| Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | [optional] 
 **type** | **str**| Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] 
 **method** | **str**| Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | [optional] 
 **amount** | **float**| Filtro por valor. Mínimo 0.01. | [optional] 
 **document** | **str**| CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [optional] 
 **name** | **str**| Filtro por nome. | [optional] 
 **end_to_end_id** | **str**| ID end-to-end do Pix. | [optional] 
 **sort_by** | **str**| Campo pelo qual ordenar | [optional] [default to createdAt]
 **sort_direction** | **str**| Direção da ordenação | [optional] [default to desc]
 **client_reference** | **str**| Filtra por referência externa | [optional] 
 **virtual_account** | **str**| Subconta usada na criação. | [optional] 
 **has_qr_code** | **bool**| Só transações com (true) ou sem (false) QR Code. | [optional] 

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
**200** | Página de transações |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_user_reports**
> ListUserReports200Response list_user_reports(page=page, limit=limit, status=status, created_at_from=created_at_from, created_at_to=created_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, sort_by=sort_by, sort_direction=sort_direction)

Listar jobs de relatório

Lista os jobs de relatório criados pelo usuário autenticado.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.list_user_reports200_response import ListUserReports200Response
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
    api_instance = payzu_pix.ReportsApi(api_client)
    page = 1 # int | Número da página. (optional) (default to 1)
    limit = 10 # int | Itens por página. (optional) (default to 10)
    status = 'COMPLETED,FAILED' # str | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. (optional)
    created_at_from = '2026-08-01' # datetime | Filtro: criado a partir de. (optional)
    created_at_to = '2026-08-31' # datetime | Filtro: criado até. (optional)
    updated_at_from = '2026-08-01' # datetime | Filtro: atualizado a partir de. (optional)
    updated_at_to = '2026-08-31' # datetime | Filtro: atualizado até. (optional)
    sort_by = createdAt # str | Campo de ordenação. (optional) (default to createdAt)
    sort_direction = desc # str | Direção da ordenação. (optional) (default to desc)

    try:
        # Listar jobs de relatório
        api_response = api_instance.list_user_reports(page=page, limit=limit, status=status, created_at_from=created_at_from, created_at_to=created_at_to, updated_at_from=updated_at_from, updated_at_to=updated_at_to, sort_by=sort_by, sort_direction=sort_direction)
        print("The response of ReportsApi->list_user_reports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->list_user_reports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número da página. | [optional] [default to 1]
 **limit** | **int**| Itens por página. | [optional] [default to 10]
 **status** | **str**| Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] 
 **created_at_from** | **datetime**| Filtro: criado a partir de. | [optional] 
 **created_at_to** | **datetime**| Filtro: criado até. | [optional] 
 **updated_at_from** | **datetime**| Filtro: atualizado a partir de. | [optional] 
 **updated_at_to** | **datetime**| Filtro: atualizado até. | [optional] 
 **sort_by** | **str**| Campo de ordenação. | [optional] [default to createdAt]
 **sort_direction** | **str**| Direção da ordenação. | [optional] [default to desc]

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
**200** | Página de jobs de relatório |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Operação não permitida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_report**
> ReportJobAccepted post_user_report(post_user_report_request)

Gerar relatório de transações

Enfileira um job assíncrono que gera um relatório CSV das transações para o período e filtros informados.

### Example

* Bearer Authentication (BearerAuth):

```python
import payzu_pix
from payzu_pix.models.post_user_report_request import PostUserReportRequest
from payzu_pix.models.report_job_accepted import ReportJobAccepted
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
    api_instance = payzu_pix.ReportsApi(api_client)
    post_user_report_request = payzu_pix.PostUserReportRequest() # PostUserReportRequest | 

    try:
        # Gerar relatório de transações
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
**400** | Requisição inválida |  -  |
**401** | Falha de autenticação |  -  |
**403** | Operação não permitida |  -  |
**422** | Nenhuma transação no filtro |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

