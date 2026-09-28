# PayZuPix::AccountApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_user**](AccountApi.md#get_user) | **GET** /user | Account Info |
| [**get_user_balance**](AccountApi.md#get_user_balance) | **GET** /user/balance | Account Balance |


## get_user

> <GetUser200Response> get_user

Account Info

Account profile, permissions, limits and fee rules.

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
  # Account Info
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
  # Account Info
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

Account Balance

Available and blocked balances.

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
  # Account Balance
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
  # Account Balance
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

