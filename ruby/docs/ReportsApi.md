# PayZuPix::ReportsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**download_user_report**](ReportsApi.md#download_user_report) | **POST** /user/report/{id}/download | Baixar relatório |
| [**get_user_bank_statement**](ReportsApi.md#get_user_bank_statement) | **GET** /user/bank-statements/{id} | Consultar lançamento |
| [**get_user_bank_statements**](ReportsApi.md#get_user_bank_statements) | **GET** /user/bank-statements | Listar extrato |
| [**get_user_deposit_pending**](ReportsApi.md#get_user_deposit_pending) | **GET** /user/deposit-pending | Listar depósitos via chave Pix |
| [**get_user_deposit_pending_by_id**](ReportsApi.md#get_user_deposit_pending_by_id) | **GET** /user/deposit-pending/{id} | Consultar depósito via chave Pix |
| [**get_user_report**](ReportsApi.md#get_user_report) | **GET** /user/report/{id} | Consultar status do relatório |
| [**get_user_summary**](ReportsApi.md#get_user_summary) | **GET** /user/summary | Resumo de transações |
| [**get_user_transaction_by_id**](ReportsApi.md#get_user_transaction_by_id) | **GET** /user/transactions/{id} | Listar detalhes da transação |
| [**get_user_transactions**](ReportsApi.md#get_user_transactions) | **GET** /user/transactions | Listar transações |
| [**list_user_reports**](ReportsApi.md#list_user_reports) | **GET** /user/report | Listar jobs de relatório |
| [**post_user_report**](ReportsApi.md#post_user_report) | **POST** /user/report | Gerar relatório de transações |


## download_user_report

> <DownloadUserReport200Response> download_user_report(id)

Baixar relatório

Retorna uma URL assinada de curta duração para baixar o arquivo CSV.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
id = '01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78' # String | ID do relatório.

begin
  # Baixar relatório
  result = api_instance.download_user_report(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->download_user_report: #{e}"
end
```

#### Using the download_user_report_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DownloadUserReport200Response>, Integer, Hash)> download_user_report_with_http_info(id)

```ruby
begin
  # Baixar relatório
  data, status_code, headers = api_instance.download_user_report_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DownloadUserReport200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->download_user_report_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID do relatório. |  |

### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_bank_statement

> <BankStatement> get_user_bank_statement(id)

Consultar lançamento

Retorna um lançamento do extrato.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
id = 'cm3w7q8s10004q8f2k9f5b7eh' # String | Id do lançamento do extrato.

begin
  # Consultar lançamento
  result = api_instance.get_user_bank_statement(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_bank_statement: #{e}"
end
```

#### Using the get_user_bank_statement_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<BankStatement>, Integer, Hash)> get_user_bank_statement_with_http_info(id)

```ruby
begin
  # Consultar lançamento
  data, status_code, headers = api_instance.get_user_bank_statement_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BankStatement>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_bank_statement_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do lançamento do extrato. |  |

### Return type

[**BankStatement**](BankStatement.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_bank_statements

> <BankStatementListResponse> get_user_bank_statements(created_at_from, created_at_to, opts)

Listar extrato

Lista os lançamentos do extrato da conta. `createdAtFrom` e `createdAtTo` são obrigatórios.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
created_at_from = Time.parse('2026-08-01T00:00:00-03:00') # Time | Data inicial (obrigatória).
created_at_to = Time.parse('2026-08-31T23:59:59-03:00') # Time | Data final (obrigatória).
opts = {
  id: 'cm3w7q8s10004q8f2k9f5b7eh', # String | ID do lançamento.
  operation: 'INCREMENT', # String | Tipo de operação.  `INCREMENT` `DECREMENT`
  reason: 'PIX_DEPOSIT', # String | Razão do lançamento.
  transaction_id: 'PAYZU20260814T6NX1CV9MK000000', # String | ID da transação.
  amount_from: 10.9, # Float | Valor mínimo.
  amount_to: 500, # Float | Valor máximo.
  page: 56, # Integer | Número da página.
  limit: 56, # Integer | Itens por página.
  sort_by: 'createdAt', # String | Campo de ordenação.
  sort_direction: 'asc' # String | Direção da ordenação.
}

begin
  # Listar extrato
  result = api_instance.get_user_bank_statements(created_at_from, created_at_to, opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_bank_statements: #{e}"
end
```

#### Using the get_user_bank_statements_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<BankStatementListResponse>, Integer, Hash)> get_user_bank_statements_with_http_info(created_at_from, created_at_to, opts)

```ruby
begin
  # Listar extrato
  data, status_code, headers = api_instance.get_user_bank_statements_with_http_info(created_at_from, created_at_to, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <BankStatementListResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_bank_statements_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at_from** | **Time** | Data inicial (obrigatória). |  |
| **created_at_to** | **Time** | Data final (obrigatória). |  |
| **id** | **String** | ID do lançamento. | [optional] |
| **operation** | **String** | Tipo de operação.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] |
| **reason** | **String** | Razão do lançamento. | [optional] |
| **transaction_id** | **String** | ID da transação. | [optional] |
| **amount_from** | **Float** | Valor mínimo. | [optional] |
| **amount_to** | **Float** | Valor máximo. | [optional] |
| **page** | **Integer** | Número da página. | [optional][default to 1] |
| **limit** | **Integer** | Itens por página. | [optional][default to 10] |
| **sort_by** | **String** | Campo de ordenação. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Direção da ordenação. | [optional][default to &#39;desc&#39;] |

### Return type

[**BankStatementListResponse**](BankStatementListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_deposit_pending

> <DepositPendingListResponse> get_user_deposit_pending(opts)

Listar depósitos via chave Pix

Lista os depósitos via chave Pix: Pix que entraram na conta pela chave, sem passar por uma cobrança criada por `POST /pix`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
opts = {
  status: 'PENDING', # String | Status do depósito, vários separados por vírgula.  `PENDING` `APPROVED` `REJECTED` `EXPIRED` `COMPLETED`
  document: '12345678901', # String | CPF ou CNPJ, apenas dígitos.
  name: 'John Doe', # String | Nome do pagador ou recebedor.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | ID end-to-end do Pix.
  amount_min: 10.9, # Float | Valor mínimo.
  amount_max: 500, # Float | Valor máximo.
  created_at_from: Time.parse('2026-08-01'), # Time | Data de criação inicial.
  created_at_to: Time.parse('2026-08-31'), # Time | Data de criação final.
  page: 56, # Integer | Número da página. Valor inválido vira 1.
  limit: 56 # Integer | Itens por página. Valor inválido vira 20.
}

begin
  # Listar depósitos via chave Pix
  result = api_instance.get_user_deposit_pending(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_deposit_pending: #{e}"
end
```

#### Using the get_user_deposit_pending_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DepositPendingListResponse>, Integer, Hash)> get_user_deposit_pending_with_http_info(opts)

```ruby
begin
  # Listar depósitos via chave Pix
  data, status_code, headers = api_instance.get_user_deposit_pending_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DepositPendingListResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_deposit_pending_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | Status do depósito, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;APPROVED&#x60; &#x60;REJECTED&#x60; &#x60;EXPIRED&#x60; &#x60;COMPLETED&#x60; | [optional] |
| **document** | **String** | CPF ou CNPJ, apenas dígitos. | [optional] |
| **name** | **String** | Nome do pagador ou recebedor. | [optional] |
| **end_to_end_id** | **String** | ID end-to-end do Pix. | [optional] |
| **amount_min** | **Float** | Valor mínimo. | [optional] |
| **amount_max** | **Float** | Valor máximo. | [optional] |
| **created_at_from** | **Time** | Data de criação inicial. | [optional] |
| **created_at_to** | **Time** | Data de criação final. | [optional] |
| **page** | **Integer** | Número da página. Valor inválido vira 1. | [optional][default to 1] |
| **limit** | **Integer** | Itens por página. Valor inválido vira 20. | [optional][default to 20] |

### Return type

[**DepositPendingListResponse**](DepositPendingListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_deposit_pending_by_id

> <DepositPending> get_user_deposit_pending_by_id(id)

Consultar depósito via chave Pix

Retorna um depósito via chave Pix.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
id = 'cm3w7r1u50005q8f2m1g6c8fj' # String | Id do depósito pendente.

begin
  # Consultar depósito via chave Pix
  result = api_instance.get_user_deposit_pending_by_id(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_deposit_pending_by_id: #{e}"
end
```

#### Using the get_user_deposit_pending_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DepositPending>, Integer, Hash)> get_user_deposit_pending_by_id_with_http_info(id)

```ruby
begin
  # Consultar depósito via chave Pix
  data, status_code, headers = api_instance.get_user_deposit_pending_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DepositPending>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_deposit_pending_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do depósito pendente. |  |

### Return type

[**DepositPending**](DepositPending.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_report

> <ReportJobDetail> get_user_report(id)

Consultar status do relatório

Retorna o status e os metadados de um job de relatório específico pelo `id`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
id = '01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78' # String | ID do relatório.

begin
  # Consultar status do relatório
  result = api_instance.get_user_report(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_report: #{e}"
end
```

#### Using the get_user_report_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ReportJobDetail>, Integer, Hash)> get_user_report_with_http_info(id)

```ruby
begin
  # Consultar status do relatório
  data, status_code, headers = api_instance.get_user_report_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReportJobDetail>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_report_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID do relatório. |  |

### Return type

[**ReportJobDetail**](ReportJobDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_summary

> <Summary> get_user_summary(opts)

Resumo de transações

Totais agregados de depósitos, saques e comissão num período.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
opts = {
  date_from: Time.parse('2026-08-01T00:00:00-03:00'), # Time | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo).
  date_to: Time.parse('2026-08-31T23:59:59-03:00'), # Time | Data final. Padrão: agora.
  group_by: 'day', # String | Agrupamento das transações.
  grouped: true # Boolean | Quando true, retorna uma série agrupada por data.
}

begin
  # Resumo de transações
  result = api_instance.get_user_summary(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_summary: #{e}"
end
```

#### Using the get_user_summary_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Summary>, Integer, Hash)> get_user_summary_with_http_info(opts)

```ruby
begin
  # Resumo de transações
  data, status_code, headers = api_instance.get_user_summary_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Summary>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_summary_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_from** | **Time** | Data inicial. Padrão: início do dia anterior (America/Sao_Paulo). | [optional] |
| **date_to** | **Time** | Data final. Padrão: agora. | [optional] |
| **group_by** | **String** | Agrupamento das transações. | [optional][default to &#39;day&#39;] |
| **grouped** | **Boolean** | Quando true, retorna uma série agrupada por data. | [optional] |

### Return type

[**Summary**](Summary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_transaction_by_id

> <GetUserTransactionById200Response> get_user_transaction_by_id(id)

Listar detalhes da transação

Recupera uma única transação com seu log de callback e as infrações vinculadas.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
id = 'PAYZU20260814T6NX1CV9MK000000' # String | ID da transação.

begin
  # Listar detalhes da transação
  result = api_instance.get_user_transaction_by_id(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_transaction_by_id: #{e}"
end
```

#### Using the get_user_transaction_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUserTransactionById200Response>, Integer, Hash)> get_user_transaction_by_id_with_http_info(id)

```ruby
begin
  # Listar detalhes da transação
  data, status_code, headers = api_instance.get_user_transaction_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUserTransactionById200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_transaction_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID da transação. |  |

### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_transactions

> <GetUserTransactions200Response> get_user_transactions(opts)

Listar transações

Lista paginada das transações da conta com filtros.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
opts = {
  date_from: Time.parse('2026-08-01T00:00:00-03:00'), # Time | Data-hora inicial (ISO 8601).
  date_to: Time.parse('2026-08-31T23:59:59-03:00'), # Time | Data-hora final (ISO 8601).
  limit: 10, # Integer | Itens por página.
  page: 1, # Integer | Número da página.
  id: 'PAYZU20260814T6NX1CV9MK000000', # String | ID da transação.
  status: 'COMPLETED', # String | Status da transação, vários separados por vírgula.  `PENDING` `COMPLETED` `CANCELED` `WAITING_FOR_REFUND` `REFUNDED` `EXPIRED` `ERROR`
  type: 'DEPOSIT', # String | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
  method: 'PIX', # String | Trilho da transação, vários separados por vírgula.  `PIX` `INTERNAL_TRANSFER` `BANK_SLIP` `TED`
  amount: 15000, # Float | Filtro por valor. Mínimo 0.01.
  document: '12345678901', # String | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação.
  name: 'Alice', # String | Filtro por nome.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | ID end-to-end do Pix.
  sort_by: 'createdAt', # String | Campo pelo qual ordenar
  sort_direction: 'asc', # String | Direção da ordenação
  client_reference: 'order_12345', # String | Filtra por referência externa
  virtual_account: 'loja-centro-01', # String | Subconta usada na criação.
  has_qr_code: true # Boolean | Só transações com (true) ou sem (false) QR Code.
}

begin
  # Listar transações
  result = api_instance.get_user_transactions(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_transactions: #{e}"
end
```

#### Using the get_user_transactions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUserTransactions200Response>, Integer, Hash)> get_user_transactions_with_http_info(opts)

```ruby
begin
  # Listar transações
  data, status_code, headers = api_instance.get_user_transactions_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUserTransactions200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->get_user_transactions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_from** | **Time** | Data-hora inicial (ISO 8601). | [optional] |
| **date_to** | **Time** | Data-hora final (ISO 8601). | [optional] |
| **limit** | **Integer** | Itens por página. | [optional][default to 10] |
| **page** | **Integer** | Número da página. | [optional][default to 1] |
| **id** | **String** | ID da transação. | [optional] |
| **status** | **String** | Status da transação, vários separados por vírgula.  &#x60;PENDING&#x60; &#x60;COMPLETED&#x60; &#x60;CANCELED&#x60; &#x60;WAITING_FOR_REFUND&#x60; &#x60;REFUNDED&#x60; &#x60;EXPIRED&#x60; &#x60;ERROR&#x60; | [optional] |
| **type** | **String** | Tipo da transação. Aceita CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **String** | Trilho da transação, vários separados por vírgula.  &#x60;PIX&#x60; &#x60;INTERNAL_TRANSFER&#x60; &#x60;BANK_SLIP&#x60; &#x60;TED&#x60; | [optional] |
| **amount** | **Float** | Filtro por valor. Mínimo 0.01. | [optional] |
| **document** | **String** | CPF (11 dígitos) ou CNPJ (14 dígitos), apenas números sem formatação. | [optional] |
| **name** | **String** | Filtro por nome. | [optional] |
| **end_to_end_id** | **String** | ID end-to-end do Pix. | [optional] |
| **sort_by** | **String** | Campo pelo qual ordenar | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Direção da ordenação | [optional][default to &#39;desc&#39;] |
| **client_reference** | **String** | Filtra por referência externa | [optional] |
| **virtual_account** | **String** | Subconta usada na criação. | [optional] |
| **has_qr_code** | **Boolean** | Só transações com (true) ou sem (false) QR Code. | [optional] |

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_user_reports

> <ListUserReports200Response> list_user_reports(opts)

Listar jobs de relatório

Lista os jobs de relatório criados pelo usuário autenticado.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
opts = {
  page: 56, # Integer | Número da página.
  limit: 56, # Integer | Itens por página.
  status: 'COMPLETED,FAILED', # String | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED.
  created_at_from: Time.parse('2026-08-01'), # Time | Filtro: criado a partir de.
  created_at_to: Time.parse('2026-08-31'), # Time | Filtro: criado até.
  updated_at_from: Time.parse('2026-08-01'), # Time | Filtro: atualizado a partir de.
  updated_at_to: Time.parse('2026-08-31'), # Time | Filtro: atualizado até.
  sort_by: 'createdAt', # String | Campo de ordenação.
  sort_direction: 'asc' # String | Direção da ordenação.
}

begin
  # Listar jobs de relatório
  result = api_instance.list_user_reports(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->list_user_reports: #{e}"
end
```

#### Using the list_user_reports_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListUserReports200Response>, Integer, Hash)> list_user_reports_with_http_info(opts)

```ruby
begin
  # Listar jobs de relatório
  data, status_code, headers = api_instance.list_user_reports_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListUserReports200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->list_user_reports_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Número da página. | [optional][default to 1] |
| **limit** | **Integer** | Itens por página. | [optional][default to 10] |
| **status** | **String** | Status do relatório. Aceita CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **created_at_from** | **Time** | Filtro: criado a partir de. | [optional] |
| **created_at_to** | **Time** | Filtro: criado até. | [optional] |
| **updated_at_from** | **Time** | Filtro: atualizado a partir de. | [optional] |
| **updated_at_to** | **Time** | Filtro: atualizado até. | [optional] |
| **sort_by** | **String** | Campo de ordenação. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Direção da ordenação. | [optional][default to &#39;desc&#39;] |

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_user_report

> <ReportJobAccepted> post_user_report(post_user_report_request)

Gerar relatório de transações

Enfileira um job assíncrono que gera um relatório CSV das transações para o período e filtros informados.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::ReportsApi.new
post_user_report_request = PayZuPix::PostUserReportRequest.new({date_from: Time.parse('2026-07-01T00:00:00Z'), date_to: Time.parse('2026-07-31T23:59:59Z')}) # PostUserReportRequest | 

begin
  # Gerar relatório de transações
  result = api_instance.post_user_report(post_user_report_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->post_user_report: #{e}"
end
```

#### Using the post_user_report_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ReportJobAccepted>, Integer, Hash)> post_user_report_with_http_info(post_user_report_request)

```ruby
begin
  # Gerar relatório de transações
  data, status_code, headers = api_instance.post_user_report_with_http_info(post_user_report_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReportJobAccepted>
rescue PayZuPix::ApiError => e
  puts "Error when calling ReportsApi->post_user_report_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post_user_report_request** | [**PostUserReportRequest**](PostUserReportRequest.md) |  |  |

### Return type

[**ReportJobAccepted**](ReportJobAccepted.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

