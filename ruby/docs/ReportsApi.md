# PayZuPix::ReportsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**download_user_report**](ReportsApi.md#download_user_report) | **POST** /user/report/{id}/download | Download report |
| [**get_user_bank_statement**](ReportsApi.md#get_user_bank_statement) | **GET** /user/bank-statements/{id} | Get bank statement |
| [**get_user_bank_statements**](ReportsApi.md#get_user_bank_statements) | **GET** /user/bank-statements | List bank statements |
| [**get_user_deposit_pending**](ReportsApi.md#get_user_deposit_pending) | **GET** /user/deposit-pending | List pending deposits |
| [**get_user_deposit_pending_by_id**](ReportsApi.md#get_user_deposit_pending_by_id) | **GET** /user/deposit-pending/{id} | Get pending deposit |
| [**get_user_report**](ReportsApi.md#get_user_report) | **GET** /user/report/{id} | Get report job status |
| [**get_user_summary**](ReportsApi.md#get_user_summary) | **GET** /user/summary | Transaction summary |
| [**get_user_transaction_by_id**](ReportsApi.md#get_user_transaction_by_id) | **GET** /user/transactions/{id} | List transaction details |
| [**get_user_transactions**](ReportsApi.md#get_user_transactions) | **GET** /user/transactions | List Transactions |
| [**list_user_reports**](ReportsApi.md#list_user_reports) | **GET** /user/report | List report jobs |
| [**post_user_report**](ReportsApi.md#post_user_report) | **POST** /user/report | Generate transactions report |


## download_user_report

> <DownloadUserReport200Response> download_user_report(id)

Download report

Returns a short-lived signed URL to download the CSV file.

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
id = '01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78' # String | Report ID.

begin
  # Download report
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
  # Download report
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
| **id** | **String** | Report ID. |  |

### Return type

[**DownloadUserReport200Response**](DownloadUserReport200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_bank_statement

> <BankStatement> get_user_bank_statement(id)

Get bank statement

Returns a single statement entry.

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
id = 'cm3w7q8s10004q8f2k9f5b7eh' # String | Statement entry id.

begin
  # Get bank statement
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
  # Get bank statement
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
| **id** | **String** | Statement entry id. |  |

### Return type

[**BankStatement**](BankStatement.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_bank_statements

> <BankStatementListResponse> get_user_bank_statements(created_at_from, created_at_to, opts)

List bank statements

Lists the account statement entries. `createdAtFrom` and `createdAtTo` are required.

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
created_at_from = Time.parse('2026-08-01T00:00:00-03:00') # Time | Start date (required).
created_at_to = Time.parse('2026-08-31T23:59:59-03:00') # Time | End date (required).
opts = {
  id: 'cm3w7q8s10004q8f2k9f5b7eh', # String | Entry ID.
  operation: 'INCREMENT', # String | Operation type.  `INCREMENT` `DECREMENT`
  reason: 'Estorno', # String | Reason for the entry.
  transaction_id: 'PAYZU20260814T6NX1CV9MK000000', # String | Transaction ID.
  amount_from: 10.9, # Float | Minimum amount.
  amount_to: 500, # Float | Maximum amount.
  page: 56, # Integer | Page number.
  limit: 56, # Integer | Items per page.
  sort_by: 'createdAt', # String | Sort field.
  sort_direction: 'asc' # String | Sort direction.
}

begin
  # List bank statements
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
  # List bank statements
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
| **created_at_from** | **Time** | Start date (required). |  |
| **created_at_to** | **Time** | End date (required). |  |
| **id** | **String** | Entry ID. | [optional] |
| **operation** | **String** | Operation type.  &#x60;INCREMENT&#x60; &#x60;DECREMENT&#x60; | [optional] |
| **reason** | **String** | Reason for the entry. | [optional] |
| **transaction_id** | **String** | Transaction ID. | [optional] |
| **amount_from** | **Float** | Minimum amount. | [optional] |
| **amount_to** | **Float** | Maximum amount. | [optional] |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **limit** | **Integer** | Items per page. | [optional][default to 10] |
| **sort_by** | **String** | Sort field. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Sort direction. | [optional][default to &#39;desc&#39;] |

### Return type

[**BankStatementListResponse**](BankStatementListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_deposit_pending

> <DepositPendingListResponse> get_user_deposit_pending(opts)

List pending deposits

Lists deposits that are pending / not yet reconciled.

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
  status: 'PENDING', # String | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED.
  document: '12345678901', # String | CPF or CNPJ, digits only.
  name: 'John Doe', # String | Name of the payer or receiver.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | End-to-end ID of the Pix.
  amount_min: 10.9, # Float | Minimum amount.
  amount_max: 500, # Float | Maximum amount.
  created_at_from: Time.parse('2026-08-01'), # Time | Start of the creation date range.
  created_at_to: Time.parse('2026-08-31'), # Time | End of the creation date range.
  page: 56, # Integer | Page number.
  limit: 56 # Integer | Items per page.
}

begin
  # List pending deposits
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
  # List pending deposits
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
| **status** | **String** | Comma-separated statuses: PENDING, APPROVED, REJECTED, EXPIRED, COMPLETED. | [optional] |
| **document** | **String** | CPF or CNPJ, digits only. | [optional] |
| **name** | **String** | Name of the payer or receiver. | [optional] |
| **end_to_end_id** | **String** | End-to-end ID of the Pix. | [optional] |
| **amount_min** | **Float** | Minimum amount. | [optional] |
| **amount_max** | **Float** | Maximum amount. | [optional] |
| **created_at_from** | **Time** | Start of the creation date range. | [optional] |
| **created_at_to** | **Time** | End of the creation date range. | [optional] |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **limit** | **Integer** | Items per page. | [optional][default to 20] |

### Return type

[**DepositPendingListResponse**](DepositPendingListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_deposit_pending_by_id

> <DepositPending> get_user_deposit_pending_by_id(id)

Get pending deposit

Returns a single pending deposit.

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
id = 'cm3w7r1u50005q8f2m1g6c8fj' # String | Pending deposit id.

begin
  # Get pending deposit
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
  # Get pending deposit
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
| **id** | **String** | Pending deposit id. |  |

### Return type

[**DepositPending**](DepositPending.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_report

> <ReportJobDetail> get_user_report(id)

Get report job status

Returns the status and metadata of a specific report job by `id`.

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
id = '01997c3a-8f21-7c4d-9e05-3b6a1d2f4c78' # String | Report ID.

begin
  # Get report job status
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
  # Get report job status
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
| **id** | **String** | Report ID. |  |

### Return type

[**ReportJobDetail**](ReportJobDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_summary

> <Summary> get_user_summary(opts)

Transaction summary

Aggregated totals for deposits, withdrawals and commission over a period.

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
  date_from: Time.parse('2026-08-01T00:00:00-03:00'), # Time | Start date. Default: start of the previous day (America/Sao_Paulo).
  date_to: Time.parse('2026-08-31T23:59:59-03:00'), # Time | End date. Default: now.
  group_by: 'day', # String | Grouping applied to the transactions.
  grouped: true # Boolean | When true, returns a series grouped by date.
}

begin
  # Transaction summary
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
  # Transaction summary
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
| **date_from** | **Time** | Start date. Default: start of the previous day (America/Sao_Paulo). | [optional] |
| **date_to** | **Time** | End date. Default: now. | [optional] |
| **group_by** | **String** | Grouping applied to the transactions. | [optional][default to &#39;day&#39;] |
| **grouped** | **Boolean** | When true, returns a series grouped by date. | [optional] |

### Return type

[**Summary**](Summary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_transaction_by_id

> <GetUserTransactionById200Response> get_user_transaction_by_id(id)

List transaction details

Retrieve a single transaction with its callback log and linked infractions.

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
id = 'PAYZU20260814T6NX1CV9MK000000' # String | Transaction ID.

begin
  # List transaction details
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
  # List transaction details
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
| **id** | **String** | Transaction ID. |  |

### Return type

[**GetUserTransactionById200Response**](GetUserTransactionById200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_transactions

> <GetUserTransactions200Response> get_user_transactions(opts)

List Transactions

Paginated list of account transactions with filters.

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
  date_from: Time.parse('2026-08-01T00:00:00-03:00'), # Time | Start date-time (ISO 8601).
  date_to: Time.parse('2026-08-31T23:59:59-03:00'), # Time | End date-time (ISO 8601).
  limit: 10, # Integer | Items per page (max 1000).
  page: 1, # Integer | Page number (default 1).
  id: 'PAYZU20260814T6NX1CV9MK000000', # String | Transaction ID.
  status: 'COMPLETED', # String | Transaction status. Accepts CSV: PENDING,COMPLETED,etc.
  type: 'DEPOSIT', # String | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT.
  method: 'PIX', # String | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER.
  amount: 15000, # Float | Amount filter. Minimum 0.01.
  document: '12345678901', # String | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation.
  name: 'Alice', # String | Name filter.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | Pix end-to-end ID.
  sort_by: 'createdAt', # String | Field to sort by
  sort_direction: 'asc', # String | Sort direction
  client_reference: 'order_12345', # String | Filter by external reference
  virtual_account: 'loja-centro-01', # String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
  has_qr_code: true # Boolean | Only transactions with (true) or without (false) QR Code.
}

begin
  # List Transactions
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
  # List Transactions
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
| **date_from** | **Time** | Start date-time (ISO 8601). | [optional] |
| **date_to** | **Time** | End date-time (ISO 8601). | [optional] |
| **limit** | **Integer** | Items per page (max 1000). | [optional][default to 10] |
| **page** | **Integer** | Page number (default 1). | [optional][default to 1] |
| **id** | **String** | Transaction ID. | [optional] |
| **status** | **String** | Transaction status. Accepts CSV: PENDING,COMPLETED,etc. | [optional] |
| **type** | **String** | Transaction type. Accepts CSV: DEPOSIT,WITHDRAW,COMMISSION,LIQUIDATION,ADJUSTMENT. | [optional] |
| **method** | **String** | Transaction method/rail. Accepts CSV: PIX,INTERNAL_TRANSFER. | [optional] |
| **amount** | **Float** | Amount filter. Minimum 0.01. | [optional] |
| **document** | **String** | CPF (11 digits) or CNPJ (14 digits), digits only, no punctuation. | [optional] |
| **name** | **String** | Name filter. | [optional] |
| **end_to_end_id** | **String** | Pix end-to-end ID. | [optional] |
| **sort_by** | **String** | Field to sort by | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Sort direction | [optional][default to &#39;desc&#39;] |
| **client_reference** | **String** | Filter by external reference | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |
| **has_qr_code** | **Boolean** | Only transactions with (true) or without (false) QR Code. | [optional] |

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## list_user_reports

> <ListUserReports200Response> list_user_reports(opts)

List report jobs

List report jobs created by the authenticated user.

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
  page: 56, # Integer | Page number.
  limit: 56, # Integer | Items per page.
  status: 'COMPLETED,FAILED', # String | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED.
  created_at_from: Time.parse('2026-08-01'), # Time | Filter: created from.
  created_at_to: Time.parse('2026-08-31'), # Time | Filter: created up to.
  updated_at_from: Time.parse('2026-08-01'), # Time | Filter: updated from.
  updated_at_to: Time.parse('2026-08-31'), # Time | Filter: updated up to.
  sort_by: 'createdAt', # String | Sort field.
  sort_direction: 'asc' # String | Sort direction.
}

begin
  # List report jobs
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
  # List report jobs
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
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **limit** | **Integer** | Items per page. | [optional][default to 10] |
| **status** | **String** | Report status. Accepts CSV: PENDING,RUNNING,COMPLETED,FAILED. | [optional] |
| **created_at_from** | **Time** | Filter: created from. | [optional] |
| **created_at_to** | **Time** | Filter: created up to. | [optional] |
| **updated_at_from** | **Time** | Filter: updated from. | [optional] |
| **updated_at_to** | **Time** | Filter: updated up to. | [optional] |
| **sort_by** | **String** | Sort field. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Sort direction. | [optional][default to &#39;desc&#39;] |

### Return type

[**ListUserReports200Response**](ListUserReports200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_user_report

> <ReportJobAccepted> post_user_report(post_user_report_request)

Generate transactions report

Queue an asynchronous job that generates a CSV report of transactions for the given period and filters.

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
  # Generate transactions report
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
  # Generate transactions report
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

