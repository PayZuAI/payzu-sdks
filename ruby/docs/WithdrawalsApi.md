# PayZuPix::WithdrawalsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_withdraw**](WithdrawalsApi.md#get_withdraw) | **GET** /withdraw | Retrieve Withdrawal |
| [**get_withdraw_proof**](WithdrawalsApi.md#get_withdraw_proof) | **GET** /withdraw/proof/{id} | Get Withdrawal Receipt |
| [**post_withdraw**](WithdrawalsApi.md#post_withdraw) | **POST** /withdraw | Create Withdrawal (Pix key) |
| [**post_withdraw_qrcode**](WithdrawalsApi.md#post_withdraw_qrcode) | **POST** /withdraw/qrcode | Create Withdrawal using QR Code |


## get_withdraw

> <Transaction> get_withdraw(opts)

Retrieve Withdrawal

Get the latest status and details of a transaction of the account. Provide at least one of `id`, `clientReference`, or `endToEndId`. If more than one is provided, all are applied as filters (AND), which may return no record if they do not point to the same transaction.  Token permission: `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WithdrawalsApi.new
opts = {
  id: 'PAYZU20260817B3PL8SG5WQ000000', # String | Transaction ID.
  client_reference: 'order_12345', # String | External reference provided when creating the withdrawal.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | Pix end-to-end ID.
  virtual_account: 'loja-centro-01' # String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
}

begin
  # Retrieve Withdrawal
  result = api_instance.get_withdraw(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->get_withdraw: #{e}"
end
```

#### Using the get_withdraw_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> get_withdraw_with_http_info(opts)

```ruby
begin
  # Retrieve Withdrawal
  data, status_code, headers = api_instance.get_withdraw_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->get_withdraw_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Transaction ID. | [optional] |
| **client_reference** | **String** | External reference provided when creating the withdrawal. | [optional] |
| **end_to_end_id** | **String** | Pix end-to-end ID. | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_withdraw_proof

> <ProofResponse> get_withdraw_proof(id, opts)

Get Withdrawal Receipt

Returns the transaction receipt. By default (`type=pdf`) the response is the PDF file; with `type=base64` it is JSON with the `base64` field, the PDF as a data URI.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WithdrawalsApi.new
id = 'PAYZU20260817B3PL8SG5WQ000000' # String | Transaction ID.
opts = {
  type: 'pdf' # String | Return format.
}

begin
  # Get Withdrawal Receipt
  result = api_instance.get_withdraw_proof(id, opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->get_withdraw_proof: #{e}"
end
```

#### Using the get_withdraw_proof_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ProofResponse>, Integer, Hash)> get_withdraw_proof_with_http_info(id, opts)

```ruby
begin
  # Get Withdrawal Receipt
  data, status_code, headers = api_instance.get_withdraw_proof_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ProofResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->get_withdraw_proof_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Transaction ID. |  |
| **type** | **String** | Return format. | [optional][default to &#39;pdf&#39;] |

### Return type

[**ProofResponse**](ProofResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf


## post_withdraw

> <Transaction> post_withdraw(post_withdraw_request)

Create Withdrawal (Pix key)

Send a Pix **cash out** to the specified Pix key.  Token permission: `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WithdrawalsApi.new
post_withdraw_request = PayZuPix::PostWithdrawRequest.new({amount: 2, pix_key: 'teste@teste.com', pix_type: 'cpf'}) # PostWithdrawRequest | 

begin
  # Create Withdrawal (Pix key)
  result = api_instance.post_withdraw(post_withdraw_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->post_withdraw: #{e}"
end
```

#### Using the post_withdraw_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> post_withdraw_with_http_info(post_withdraw_request)

```ruby
begin
  # Create Withdrawal (Pix key)
  data, status_code, headers = api_instance.post_withdraw_with_http_info(post_withdraw_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->post_withdraw_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post_withdraw_request** | [**PostWithdrawRequest**](PostWithdrawRequest.md) |  |  |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## post_withdraw_qrcode

> <Transaction> post_withdraw_qrcode(post_withdraw_qrcode_request)

Create Withdrawal using QR Code

Cash out using a **Pix QR Code** (static/dynamic). If `amount` is not provided, the QR Code's embedded value will be used. PayZu processes both dynamic and static QR Codes.  Token permission: `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::WithdrawalsApi.new
post_withdraw_qrcode_request = PayZuPix::PostWithdrawQrcodeRequest.new({qr_code: '00020101021226770014br.gov.bcb.pix2555api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5916PAYZU 6007SAOPAULO6217051320260118278956304EC55'}) # PostWithdrawQrcodeRequest | 

begin
  # Create Withdrawal using QR Code
  result = api_instance.post_withdraw_qrcode(post_withdraw_qrcode_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->post_withdraw_qrcode: #{e}"
end
```

#### Using the post_withdraw_qrcode_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> post_withdraw_qrcode_with_http_info(post_withdraw_qrcode_request)

```ruby
begin
  # Create Withdrawal using QR Code
  data, status_code, headers = api_instance.post_withdraw_qrcode_with_http_info(post_withdraw_qrcode_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling WithdrawalsApi->post_withdraw_qrcode_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post_withdraw_qrcode_request** | [**PostWithdrawQrcodeRequest**](PostWithdrawQrcodeRequest.md) |  |  |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

