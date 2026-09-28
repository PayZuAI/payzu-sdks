# PayZuPix::InfractionDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identifier of the infraction inside PayZu, used in the query routes and when sending the defense. | [optional] |
| **protocol** | **String** | Infraction code at Bacen. | [optional] |
| **status** | **String** | Current state of the infraction. | [optional] |
| **type** | **String** | Type of the infraction: REFUND_REQUEST, FRAUD or REFUND_CANCELLED. | [optional] |
| **reported_by** | **String** | Side that opened the infraction: DEBITED_PARTICIPANT or CREDITED_PARTICIPANT. | [optional] |
| **report_details** | **String** | Reason given by whoever opened the infraction, in the text sent by the partner bank. | [optional] |
| **analysis_result** | **String** | Analysis outcome: AGREED or DISAGREED. | [optional] |
| **analysis_details** | **String** | Additional text about the analysis decision, when the partner bank sends that information. | [optional] |
| **reported_at** | **Time** | Moment the infraction was opened. | [optional] |
| **expires_at** | **Time** | Deadline to send the defense of this infraction. | [optional] |
| **transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] |
| **defense_history** | [**Array&lt;DefenseHistoryEntry&gt;**](DefenseHistoryEntry.md) | Defenses already sent for this infraction, each with text, status and files. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionDetail.new(
  id: null,
  protocol: null,
  status: null,
  type: null,
  reported_by: null,
  report_details: null,
  analysis_result: null,
  analysis_details: null,
  reported_at: null,
  expires_at: null,
  transaction: null,
  defense_history: null
)
```

