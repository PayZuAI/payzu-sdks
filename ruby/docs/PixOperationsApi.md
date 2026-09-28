# PayZuPix::PixOperationsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_pix**](PixOperationsApi.md#get_pix) | **GET** /pix | Retrieve Charge |
| [**get_pix_qrcode**](PixOperationsApi.md#get_pix_qrcode) | **GET** /pix/qr-code/{transactionId} | Render Pix QR code (PNG) |
| [**get_proof**](PixOperationsApi.md#get_proof) | **GET** /proof/{id} | Get Transaction Receipt |
| [**post_pix**](PixOperationsApi.md#post_pix) | **POST** /pix | Create Charge (Pix deposit) |


## get_pix

> <Transaction> get_pix(opts)

Retrieve Charge

Get the latest status and details of a transaction of the account. Provide at least one of `id`, `clientReference`, or `endToEndId` (`virtualAccount` is also accepted). When more than one parameter is provided, they are combined as filters (AND).  Token permission: `DEPOSIT`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::PixOperationsApi.new
opts = {
  id: 'PAYZU20260811R4TZ8WD1NC000000', # String | Transaction ID.
  client_reference: 'order_12345', # String | External reference provided when creating the charge.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | Pix end-to-end ID.
  virtual_account: 'loja-centro-01' # String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
}

begin
  # Retrieve Charge
  result = api_instance.get_pix(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->get_pix: #{e}"
end
```

#### Using the get_pix_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> get_pix_with_http_info(opts)

```ruby
begin
  # Retrieve Charge
  data, status_code, headers = api_instance.get_pix_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->get_pix_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Transaction ID. | [optional] |
| **client_reference** | **String** | External reference provided when creating the charge. | [optional] |
| **end_to_end_id** | **String** | Pix end-to-end ID. | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_pix_qrcode

> File get_pix_qrcode(transaction_id)

Render Pix QR code (PNG)

Render the Pix QR Code of a deposit as a binary PNG image  Token permission: `DEPOSIT`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::PixOperationsApi.new
transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # String | Transaction ID.

begin
  # Render Pix QR code (PNG)
  result = api_instance.get_pix_qrcode(transaction_id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->get_pix_qrcode: #{e}"
end
```

#### Using the get_pix_qrcode_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_pix_qrcode_with_http_info(transaction_id)

```ruby
begin
  # Render Pix QR code (PNG)
  data, status_code, headers = api_instance.get_pix_qrcode_with_http_info(transaction_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->get_pix_qrcode_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **transaction_id** | **String** | Transaction ID. |  |

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


## get_proof

> <ProofResponse> get_proof(id, opts)

Get Transaction Receipt

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

api_instance = PayZuPix::PixOperationsApi.new
id = 'PAYZU20260814T6NX1CV9MK000000' # String | Transaction ID.
opts = {
  type: 'pdf' # String | Return format.
}

begin
  # Get Transaction Receipt
  result = api_instance.get_proof(id, opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->get_proof: #{e}"
end
```

#### Using the get_proof_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ProofResponse>, Integer, Hash)> get_proof_with_http_info(id, opts)

```ruby
begin
  # Get Transaction Receipt
  data, status_code, headers = api_instance.get_proof_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ProofResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->get_proof_with_http_info: #{e}"
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


## post_pix

> <Transaction> post_pix(post_pix_request)

Create Charge (Pix deposit)

Create a new Pix **deposit** (charge). Returns QR Code and transaction details.  Token permission: `DEPOSIT`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::PixOperationsApi.new
post_pix_request = PayZuPix::PostPixRequest.new({amount: 10.9}) # PostPixRequest | 

begin
  # Create Charge (Pix deposit)
  result = api_instance.post_pix(post_pix_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->post_pix: #{e}"
end
```

#### Using the post_pix_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> post_pix_with_http_info(post_pix_request)

```ruby
begin
  # Create Charge (Pix deposit)
  data, status_code, headers = api_instance.post_pix_with_http_info(post_pix_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling PixOperationsApi->post_pix_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post_pix_request** | [**PostPixRequest**](PostPixRequest.md) |  |  |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

