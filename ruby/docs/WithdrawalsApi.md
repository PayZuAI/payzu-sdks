# PayZuPix::WithdrawalsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_withdraw**](WithdrawalsApi.md#get_withdraw) | **GET** /withdraw | Consultar Saque |
| [**get_withdraw_proof**](WithdrawalsApi.md#get_withdraw_proof) | **GET** /withdraw/proof/{id} | Obter comprovante de saque |
| [**post_withdraw**](WithdrawalsApi.md#post_withdraw) | **POST** /withdraw | Criar saque (chave Pix) |
| [**post_withdraw_qrcode**](WithdrawalsApi.md#post_withdraw_qrcode) | **POST** /withdraw/qrcode | Criar Saque usando QR Code |


## get_withdraw

> <Transaction> get_withdraw(opts)

Consultar Saque

Retorna o status e os detalhes atuais de uma transação da conta. Informe pelo menos um destes parâmetros: `id`, `clientReference` ou `endToEndId`. Se informar mais de um, todos são aplicados como filtro (AND), o que pode não retornar registro caso não apontem para a mesma transação.

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
  id: 'PAYZU20260817B3PL8SG5WQ000000', # String | ID da transação.
  client_reference: 'order_12345', # String | Referência externa informada na criação do saque.
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | ID end-to-end do Pix.
  virtual_account: 'loja-centro-01' # String | Subconta usada na criação.
}

begin
  # Consultar Saque
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
  # Consultar Saque
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
| **id** | **String** | ID da transação. | [optional] |
| **client_reference** | **String** | Referência externa informada na criação do saque. | [optional] |
| **end_to_end_id** | **String** | ID end-to-end do Pix. | [optional] |
| **virtual_account** | **String** | Subconta usada na criação. | [optional] |

### Return type

[**Transaction**](Transaction.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_withdraw_proof

> <ProofResponse> get_withdraw_proof(id, opts)

Obter comprovante de saque

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

api_instance = PayZuPix::WithdrawalsApi.new
id = 'PAYZU20260817B3PL8SG5WQ000000' # String | ID da transação.
opts = {
  type: 'pdf' # String | Formato de retorno.
}

begin
  # Obter comprovante de saque
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
  # Obter comprovante de saque
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
| **id** | **String** | ID da transação. |  |
| **type** | **String** | Formato de retorno. | [optional][default to &#39;pdf&#39;] |

### Return type

[**ProofResponse**](ProofResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/pdf


## post_withdraw

> <Transaction> post_withdraw(post_withdraw_request)

Criar saque (chave Pix)

Envie um **cash out** Pix para a chave Pix especificada.

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
  # Criar saque (chave Pix)
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
  # Criar saque (chave Pix)
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

Criar Saque usando QR Code

Realiza o pagamento (cash out) usando um **QR Code Pix** (estático/dinâmico). Se `amount` não for informado, o valor embutido no QR Code será utilizado. PayZu processa QR Code dinâmico e estático.

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
post_withdraw_qrcode_request = PayZuPix::PostWithdrawQrcodeRequest.new({qr_code: '00020101021226780014br.gov.bcb.pix2556api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5905PAYZU6008SAOPAULO6217051320260118278956304FEFF'}) # PostWithdrawQrcodeRequest | 

begin
  # Criar Saque usando QR Code
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
  # Criar Saque usando QR Code
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

