

# GetUserTransactionById200ResponseAllOfCallbackLogInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of the delivery record; there is one record per callback attempt of the transaction. |  [optional] |
|**url** | **String** | Address that received the callback: the callbackUrl of the transaction or the URL of the registered webhook. |  [optional] |
|**status** | **Integer** | HTTP status code returned by the receiver |  [optional] |
|**responseTime** | **BigDecimal** | Round-trip time in ms |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time the callback delivery attempt was recorded. |  [optional] |



