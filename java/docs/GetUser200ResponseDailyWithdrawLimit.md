

# GetUser200ResponseDailyWithdrawLimit

Controle do teto diário de saída.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**limit** | **BigDecimal** | Teto diário de saída, em reais, somando saques e transferências internas. |  [optional] |
|**used** | **BigDecimal** | Total consumido do teto no dia, em reais, por saques e transferências internas. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Data e hora da última alteração do limite diário. |  [optional] |
|**lastReset** | **OffsetDateTime** | Momento da última zeragem do consumo diário. |  [optional] |



