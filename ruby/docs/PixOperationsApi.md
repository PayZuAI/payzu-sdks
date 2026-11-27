# PayZuPix::PixOperationsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_pix**](PixOperationsApi.md#get_pix) | **GET** /pix | Recuperar Cobrança |
| [**get_pix_qrcode**](PixOperationsApi.md#get_pix_qrcode) | **GET** /pix/qr-code/{transactionId} | Renderiza o QR Code Pix (PNG) |
| [**get_proof**](PixOperationsApi.md#get_proof) | **GET** /proof/{id} | Obter comprovante da transação |
| [**post_pix**](PixOperationsApi.md#post_pix) | **POST** /pix | Criar Cobrança (depósito Pix) |


## get_pix

> <Transaction> get_pix(opts)

Recuperar Cobrança

Obtém o status e os detalhes mais recentes de uma transação da conta. Informe pelo menos um dentre `id`, `clientReference` ou `endToEndId` (`virtualAccount` também é aceito). Ao informar mais de um parâmetro, todos são combinados como filtros (AND).

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
  id: 'PAYZU20260811R4TZ8WD1NC000000', # String | ID da transação.
  client_reference: 'order_12345', # String | Referência externa fornecida na criação da cobrança.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | ID end-to-end do Pix.
  virtual_account: 'loja-centro-01' # String | Subconta usada na criação.
}

begin
  # Recuperar Cobrança
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
  # Recuperar Cobrança
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
| **id** | **String** | ID da transação. | [optional] |
| **client_reference** | **String** | Referência externa fornecida na criação da cobrança. | [optional] |
| **end_to_end_id** | **String** | ID end-to-end do Pix. | [optional] |
| **virtual_account** | **String** | Subconta usada na criação. | [optional] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_pix_qrcode

> File get_pix_qrcode(transaction_id)

Renderiza o QR Code Pix (PNG)

Renderiza o QR Code Pix de um depósito como uma imagem PNG binária

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
transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # String | ID da transação.

begin
  # Renderiza o QR Code Pix (PNG)
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
  # Renderiza o QR Code Pix (PNG)
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
| **transaction_id** | **String** | ID da transação. |  |

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/json


## get_proof

> <ProofResponse> get_proof(id, opts)

Obter comprovante da transação

Retorna o comprovante da transação. Por padrão (`type=pdf`) a resposta é o arquivo PDF; com `type=base64` é um JSON com o campo `base64`, o PDF como data URI.

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
id = 'PAYZU20260814T6NX1CV9MK000000' # String | ID da transação.
opts = {
  type: 'pdf' # String | Formato de retorno.
}

begin
  # Obter comprovante da transação
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
  # Obter comprovante da transação
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
| **id** | **String** | ID da transação. |  |
| **type** | **String** | Formato de retorno. | [optional][default to &#39;pdf&#39;] |

### Return type

[**ProofResponse**](ProofResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf


## post_pix

> <Transaction> post_pix(post_pix_request)

Criar Cobrança (depósito Pix)

Crie um novo **depósito** Pix (cobrança). Retorna o QR Code e os detalhes da transação.

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
  # Criar Cobrança (depósito Pix)
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
  # Criar Cobrança (depósito Pix)
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

