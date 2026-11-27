# PayZuPix::AccountApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_user**](AccountApi.md#get_user) | **GET** /user | Informações da conta |
| [**get_user_balance**](AccountApi.md#get_user_balance) | **GET** /user/balance | Saldo da conta |
| [**get_user_pix_keys**](AccountApi.md#get_user_pix_keys) | **GET** /user/pix-keys | Chave Pix de recebimento da conta |


## get_user

> <GetUser200Response> get_user

Informações da conta

Perfil da conta, limites e regras de tarifas.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::AccountApi.new

begin
  # Informações da conta
  result = api_instance.get_user
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling AccountApi->get_user: #{e}"
end
```

#### Using the get_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUser200Response>, Integer, Hash)> get_user_with_http_info

```ruby
begin
  # Informações da conta
  data, status_code, headers = api_instance.get_user_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUser200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling AccountApi->get_user_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUser200Response**](GetUser200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_balance

> <GetUserBalance200Response> get_user_balance

Saldo da conta

Saldos disponíveis e bloqueados.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::AccountApi.new

begin
  # Saldo da conta
  result = api_instance.get_user_balance
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling AccountApi->get_user_balance: #{e}"
end
```

#### Using the get_user_balance_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUserBalance200Response>, Integer, Hash)> get_user_balance_with_http_info

```ruby
begin
  # Saldo da conta
  data, status_code, headers = api_instance.get_user_balance_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUserBalance200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling AccountApi->get_user_balance_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserBalance200Response**](GetUserBalance200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_pix_keys

> <GetUserPixKeys200Response> get_user_pix_keys

Chave Pix de recebimento da conta

Devolve a chave Pix de recebimento da conta, com o titular e a instituição da conta dessa chave.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::AccountApi.new

begin
  # Chave Pix de recebimento da conta
  result = api_instance.get_user_pix_keys
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling AccountApi->get_user_pix_keys: #{e}"
end
```

#### Using the get_user_pix_keys_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetUserPixKeys200Response>, Integer, Hash)> get_user_pix_keys_with_http_info

```ruby
begin
  # Chave Pix de recebimento da conta
  data, status_code, headers = api_instance.get_user_pix_keys_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetUserPixKeys200Response>
rescue PayZuPix::ApiError => e
  puts "Error when calling AccountApi->get_user_pix_keys_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserPixKeys200Response**](GetUserPixKeys200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

