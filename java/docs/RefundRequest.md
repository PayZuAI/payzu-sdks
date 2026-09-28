

# RefundRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** | Amount in BRL to refund. Omit to refund the full transaction amount. Partial refunds are allowed up to the original amount. |  [optional] |
|**description** | **String** | Free-text description for the refund. |  [optional] |
|**clientReference** | **String** | Idempotency key. Reusing it with the same amount replays the existing refund; reusing it with a different amount is rejected. |  [optional] |



