# PayZuPix::RefundsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**post_refund**](RefundsApi.md#post_refund) | **POST** /refund/{transactionId} | Refund a Pix |


## post_refund

> <TransactionWithRefunds> post_refund(transaction_id, refund_request)

Refund a Pix

Refund a received Pix charge. Provide `amount` for a partial refund, or omit it to refund the full amount. Processing is **asynchronous**: the response returns the transaction with `refundStatus: PENDING`; completion is confirmed later by webhook.  Send `{}` to refund the full amount.  Token permission: `WITHDRAW`.

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
transaction_id = 'PAYZU20260814T6NX1CV9MK000000' # String | ID of the transaction to refund.
refund_request = PayZuPix::RefundRequest.new # RefundRequest | 

begin
  # Refund a Pix
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
  # Refund a Pix
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
| **transaction_id** | **String** | ID of the transaction to refund. |  |
| **refund_request** | [**RefundRequest**](RefundRequest.md) |  |  |

### Return type

[**TransactionWithRefunds**](TransactionWithRefunds.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

