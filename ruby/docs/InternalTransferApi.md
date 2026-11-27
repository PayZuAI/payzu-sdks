# PayZuPix::InternalTransferApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_internal_transfer**](InternalTransferApi.md#get_internal_transfer) | **GET** /internal-transfer | Obter transferência interna |
| [**post_internal_transfer**](InternalTransferApi.md#post_internal_transfer) | **POST** /internal-transfer | Criar transferência interna |


## get_internal_transfer

> <Transaction> get_internal_transfer(opts)

Obter transferência interna

Retorna os dados de uma transferência interna. Informe pelo menos um destes parâmetros: `id` ou `clientReference` (também aceita `virtualAccount`). Se informar mais de um, todos são aplicados como filtro (AND).

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
  id: 'PAYZU20260814T6NX1CV9MK000000', # String | ID da transação
  client_reference: 'order_12345', # String | Referência externa
  virtual_account: 'loja-centro-01' # String | Subconta usada na criação.
}

begin
  # Obter transferência interna
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
  # Obter transferência interna
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
| **id** | **String** | ID da transação | [optional] |
| **client_reference** | **String** | Referência externa | [optional] |
| **virtual_account** | **String** | Subconta usada na criação. | [optional] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_internal_transfer

> <Transaction> post_internal_transfer(post_internal_transfer_request)

Criar transferência interna

Envia fundos para outra conta PayZu usando seu accountNumber de 6 dígitos. Liquida instantaneamente dentro da PayZu.

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
  # Criar transferência interna
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
  # Criar transferência interna
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

