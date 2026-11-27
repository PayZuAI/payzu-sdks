# PayZuPix::AllowlistApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_user_whitelist_cnpj**](AllowlistApi.md#get_user_whitelist_cnpj) | **GET** /user/whitelist/cnpj | Listar CNPJs autorizados |
| [**get_user_whitelist_pix_key**](AllowlistApi.md#get_user_whitelist_pix_key) | **GET** /user/whitelist/pix-key | Listar chaves Pix autorizadas |


## get_user_whitelist_cnpj

> <GetUserWhitelistCnpj200Response> get_user_whitelist_cnpj(opts)

Listar CNPJs autorizados

Lista os CNPJs autorizados na lista de permissão da conta.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::AllowlistApi.new
opts = {
  from: Time.parse('2026-08-01T00:00:00Z'), # Time | 
  to: Time.parse('2026-08-08T23:59:59Z'), # Time | 
  active: true, # Boolean | 
  cursor: 'cmf0w1t3l0001qk08cnpj0001', # String | 
  limit: 20 # Integer | 
}

begin
  # Listar CNPJs autorizados
  result = api_instance.get_user_whitelist_cnpj(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling AllowlistApi->get_user_whitelist_cnpj: #{e}"
end
```

#### Using the get_user_whitelist_cnpj_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUserWhitelistCnpj200Response>, Integer, Hash)> get_user_whitelist_cnpj_with_http_info(opts)

```ruby
begin
  # Listar CNPJs autorizados
  data, status_code, headers = api_instance.get_user_whitelist_cnpj_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUserWhitelistCnpj200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling AllowlistApi->get_user_whitelist_cnpj_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **from** | **Time** |  | [optional] |
| **to** | **Time** |  | [optional] |
| **active** | **Boolean** |  | [optional] |
| **cursor** | **String** |  | [optional] |
| **limit** | **Integer** |  | [optional][default to 20] |

### Return type

[**GetUserWhitelistCnpj200Response**](GetUserWhitelistCnpj200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_whitelist_pix_key

> <GetUserWhitelistPixKey200Response> get_user_whitelist_pix_key(opts)

Listar chaves Pix autorizadas

Lista as chaves Pix autorizadas na lista de permissão da conta.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::AllowlistApi.new
opts = {
  from: Time.parse('2026-08-01T00:00:00Z'), # Time | 
  to: Time.parse('2026-08-08T23:59:59Z'), # Time | 
  active: true, # Boolean | 
  cursor: 'cmf0w1t3l0001qk08pixk0001', # String | 
  limit: 20 # Integer | 
}

begin
  # Listar chaves Pix autorizadas
  result = api_instance.get_user_whitelist_pix_key(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling AllowlistApi->get_user_whitelist_pix_key: #{e}"
end
```

#### Using the get_user_whitelist_pix_key_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUserWhitelistPixKey200Response>, Integer, Hash)> get_user_whitelist_pix_key_with_http_info(opts)

```ruby
begin
  # Listar chaves Pix autorizadas
  data, status_code, headers = api_instance.get_user_whitelist_pix_key_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUserWhitelistPixKey200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling AllowlistApi->get_user_whitelist_pix_key_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **from** | **Time** |  | [optional] |
| **to** | **Time** |  | [optional] |
| **active** | **Boolean** |  | [optional] |
| **cursor** | **String** |  | [optional] |
| **limit** | **Integer** |  | [optional][default to 20] |

### Return type

[**GetUserWhitelistPixKey200Response**](GetUserWhitelistPixKey200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

