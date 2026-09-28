# InfractionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of the infraction inside PayZu, used in the query routes and when sending the defense. | [optional]
**protocol** | **string** | Infraction code at Bacen. | [optional]
**status** | **string** | Current state of the infraction. | [optional]
**type** | **string** | Type of the infraction: REFUND_REQUEST, FRAUD or REFUND_CANCELLED. | [optional]
**reported_by** | **string** | Side that opened the infraction: DEBITED_PARTICIPANT or CREDITED_PARTICIPANT. | [optional]
**report_details** | **string** | Reason given by whoever opened the infraction, in the text sent by the partner bank. | [optional]
**analysis_result** | **string** | Analysis outcome: AGREED or DISAGREED. | [optional]
**analysis_details** | **string** | Additional text about the analysis decision, when the partner bank sends that information. | [optional]
**reported_at** | **\DateTime** | Moment the infraction was opened. | [optional]
**expires_at** | **\DateTime** | Deadline to send the defense of this infraction. | [optional]
**transaction** | [**\PayZu\Pix\Model\InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional]
**defense_history** | [**\PayZu\Pix\Model\DefenseHistoryEntry[]**](DefenseHistoryEntry.md) | Defenses already sent for this infraction, each with text, status and files. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
