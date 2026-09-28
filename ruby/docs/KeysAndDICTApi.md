# PayZuPix::KeysAndDICTApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_pix_key**](KeysAndDICTApi.md#get_pix_key) | **GET** /pix/key | Pix key lookup (DICT) |
| [**get_user_dict**](KeysAndDICTApi.md#get_user_dict) | **GET** /user/dict | Resolve DICT key |
| [**post_pix_qrcode_read**](KeysAndDICTApi.md#post_pix_qrcode_read) | **POST** /pix/qrcode/read | Read QR Code |


## get_pix_key

> <PixKeyInfo> get_pix_key(pix_key)

Pix key lookup (DICT)

Query the DICT (Diretório de Identificadores de Contas Transacionais) to retrieve information about a Pix key before sending a payment. Returns the key owner's details and associated financial institution.  Token permission: `DEPOSIT` or `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::KeysAndDICTApi.new
pix_key = 'example@payzu.com.br' # String | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP).

begin
  # Pix key lookup (DICT)
  result = api_instance.get_pix_key(pix_key)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling KeysAndDICTApi->get_pix_key: #{e}"
end
```

#### Using the get_pix_key_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PixKeyInfo>, Integer, Hash)> get_pix_key_with_http_info(pix_key)

```ruby
begin
  # Pix key lookup (DICT)
  data, status_code, headers = api_instance.get_pix_key_with_http_info(pix_key)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PixKeyInfo>
rescue PayZuPix::ApiError => e
  puts "Error when calling KeysAndDICTApi->get_pix_key_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pix_key** | **String** | The Pix key to lookup (CPF, CNPJ, email, phone, or EVP). |  |

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_user_dict

> <DictConsultResponse> get_user_dict(key)

Resolve DICT key

Resolves a Pix key (DICT) to the holder details before paying. Requires WITHDRAW scope.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::KeysAndDICTApi.new
key = 'john.doe@example.com' # String | Pix key to look up (CPF, CNPJ, email, phone or EVP).

begin
  # Resolve DICT key
  result = api_instance.get_user_dict(key)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling KeysAndDICTApi->get_user_dict: #{e}"
end
```

#### Using the get_user_dict_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<DictConsultResponse>, Integer, Hash)> get_user_dict_with_http_info(key)

```ruby
begin
  # Resolve DICT key
  data, status_code, headers = api_instance.get_user_dict_with_http_info(key)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <DictConsultResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling KeysAndDICTApi->get_user_dict_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **key** | **String** | Pix key to look up (CPF, CNPJ, email, phone or EVP). |  |

### Return type

[**DictConsultResponse**](DictConsultResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_pix_qrcode_read

> <QRCodeReadResponse> post_pix_qrcode_read(post_pix_qrcode_read_request)

Read QR Code

Decode and extract information from a Pix QR Code (EMV format) before making a payment. Returns the parsed data including receiver details, amount (if present), and other QR Code metadata. PayZu processes both dynamic and static QR Codes.  Token permission: `DEPOSIT` or `WITHDRAW`.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::KeysAndDICTApi.new
post_pix_qrcode_read_request = PayZuPix::PostPixQrcodeReadRequest.new({emv: '00020101021226770014br.gov.bcb.pix2555api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5916PAYZU 6007SAOPAULO6217051320260118278956304EC55'}) # PostPixQrcodeReadRequest | 

begin
  # Read QR Code
  result = api_instance.post_pix_qrcode_read(post_pix_qrcode_read_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling KeysAndDICTApi->post_pix_qrcode_read: #{e}"
end
```

#### Using the post_pix_qrcode_read_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<QRCodeReadResponse>, Integer, Hash)> post_pix_qrcode_read_with_http_info(post_pix_qrcode_read_request)

```ruby
begin
  # Read QR Code
  data, status_code, headers = api_instance.post_pix_qrcode_read_with_http_info(post_pix_qrcode_read_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <QRCodeReadResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling KeysAndDICTApi->post_pix_qrcode_read_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **post_pix_qrcode_read_request** | [**PostPixQrcodeReadRequest**](PostPixQrcodeReadRequest.md) |  |  |

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

