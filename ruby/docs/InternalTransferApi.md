# PayZuPix::InternalTransferApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_internal_transfer**](InternalTransferApi.md#get_internal_transfer) | **GET** /internal-transfer | Get internal transfer |
| [**post_internal_transfer**](InternalTransferApi.md#post_internal_transfer) | **POST** /internal-transfer | Create internal transfer |


## get_internal_transfer

> <Transaction> get_internal_transfer(opts)

Get internal transfer

Returns the details of an internal transfer. Provide at least one of `id` or `clientReference` (`virtualAccount` is also accepted). If more than one is provided, all are applied as filters (AND).  Token permission: `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InternalTransferApi.new
opts = {
  id: 'PAYZU20260814T6NX1CV9MK000000', # String | Transaction ID
  client_reference: 'order_12345', # String | External reference
  virtual_account: 'loja-centro-01' # String | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key.
}

begin
  # Get internal transfer
  result = api_instance.get_internal_transfer(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InternalTransferApi->get_internal_transfer: #{e}"
end
```

#### Using the get_internal_transfer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> get_internal_transfer_with_http_info(opts)

```ruby
begin
  # Get internal transfer
  data, status_code, headers = api_instance.get_internal_transfer_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling InternalTransferApi->get_internal_transfer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Transaction ID | [optional] |
| **client_reference** | **String** | External reference | [optional] |
| **virtual_account** | **String** | Virtual sub-account (up to 50 characters) used at creation. Accepted as an alternative lookup key. | [optional] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_internal_transfer

> <Transaction> post_internal_transfer(post_internal_transfer_request)

Create internal transfer

Send funds to another PayZu account using its 6-digit accountNumber. Settles instantly within PayZu.  Token permission: `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InternalTransferApi.new
post_internal_transfer_request = PayZuPix::PostInternalTransferRequest.new({payer_account_number: '000000', receiver_account_number: '987654', amount: 100.5}) # PostInternalTransferRequest | 

begin
  # Create internal transfer
  result = api_instance.post_internal_transfer(post_internal_transfer_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InternalTransferApi->post_internal_transfer: #{e}"
end
```

#### Using the post_internal_transfer_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Transaction>, Integer, Hash)> post_internal_transfer_with_http_info(post_internal_transfer_request)

```ruby
begin
  # Create internal transfer
  data, status_code, headers = api_instance.post_internal_transfer_with_http_info(post_internal_transfer_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Transaction>
rescue PayZuPix::ApiError => e
  puts "Error when calling InternalTransferApi->post_internal_transfer_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post_internal_transfer_request** | [**PostInternalTransferRequest**](PostInternalTransferRequest.md) |  |  |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

