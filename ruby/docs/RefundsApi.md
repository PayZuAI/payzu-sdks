# PayZuPix::RefundsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**post_refund**](RefundsApi.md#post_refund) | **POST** /refund/{transactionId} | Solicitar a devolução de um Pix recebido |


## post_refund

> <TransactionWithRefunds> post_refund(transaction_id, refund_request)

Solicitar a devolução de um Pix recebido

Devolve um Pix recebido. Informe `amount` para uma devolução parcial, ou omita para devolver o valor total. O processamento é **assíncrono**: a resposta volta com `refundStatus: PENDING`; a conclusão é confirmada depois pelo callback.  Envie `{}` para devolver o valor total. O corpo só aceita `amount`, `description` e `clientReference`; outro campo é recusado com 400.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::RefundsApi.new
transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # String | ID da transação a devolver.
refund_request = PayZuPix::RefundRequest.new # RefundRequest | 

begin
  # Solicitar a devolução de um Pix recebido
  result = api_instance.post_refund(transaction_id, refund_request)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling RefundsApi->post_refund: #{e}"
end
```

#### Using the post_refund_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<TransactionWithRefunds>, Integer, Hash)> post_refund_with_http_info(transaction_id, refund_request)

```ruby
begin
  # Solicitar a devolução de um Pix recebido
  data, status_code, headers = api_instance.post_refund_with_http_info(transaction_id, refund_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <TransactionWithRefunds>
rescue PayZuPix::ApiError => e
  puts "Error when calling RefundsApi->post_refund_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **transaction_id** | **String** | ID da transação a devolver. |  |
| **refund_request** | [**RefundRequest**](RefundRequest.md) |  |  |

### Return type

[**TransactionWithRefunds**](TransactionWithRefunds.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

