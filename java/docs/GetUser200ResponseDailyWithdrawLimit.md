

# GetUser200ResponseDailyWithdrawLimit

Control of the daily outbound cap.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**limit** | **BigDecimal** | Daily outbound cap, in reais, summing withdrawals and internal transfers. |  [optional] |
|**used** | **BigDecimal** | Total of the cap consumed in the day, in reais, by withdrawals and internal transfers. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the daily limit. |  [optional] |
|**lastReset** | **OffsetDateTime** | Moment of the last reset of the daily usage. |  [optional] |



