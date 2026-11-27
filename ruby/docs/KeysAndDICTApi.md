# PayZuPix::KeysAndDICTApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_pix_key**](KeysAndDICTApi.md#get_pix_key) | **GET** /pix/key | Consulta de chave Pix no DICT |
| [**post_pix_qrcode_read**](KeysAndDICTApi.md#post_pix_qrcode_read) | **POST** /pix/qrcode/read | Ler QR Code |


## get_pix_key

> <PixKeyInfo> get_pix_key(pix_key)

Consulta de chave Pix no DICT

Consulta o DICT (Diretório de Identificadores de Contas Transacionais) para obter informações sobre uma chave Pix antes de enviar um pagamento. Retorna os dados do titular da chave e a instituição financeira associada.

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
pix_key = 'example@payzu.com.br' # String | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).

begin
  # Consulta de chave Pix no DICT
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
  # Consulta de chave Pix no DICT
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
| **pix_key** | **String** | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). |  |

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_pix_qrcode_read

> <QRCodeReadResponse> post_pix_qrcode_read(post_pix_qrcode_read_request)

Ler QR Code

Decodifica e extrai informações de um QR Code Pix (formato EMV) antes de efetuar um pagamento. Retorna os dados interpretados, incluindo detalhes do recebedor, valor (se presente) e outros metadados do QR Code. PayZu processa QR Code dinâmico e estático.

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
post_pix_qrcode_read_request = PayZuPix::PostPixQrcodeReadRequest.new({emv: '00020101021226780014br.gov.bcb.pix2556api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5905PAYZU6008SAOPAULO6217051320260118278956304FEFF'}) # PostPixQrcodeReadRequest | 

begin
  # Ler QR Code
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
  # Ler QR Code
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

