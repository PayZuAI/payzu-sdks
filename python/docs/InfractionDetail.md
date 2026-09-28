# InfractionDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the infraction inside PayZu, used in the query routes and when sending the defense. | [optional] 
**protocol** | **str** | Infraction code at Bacen. | [optional] 
**status** | **str** | Current state of the infraction. | [optional] 
**type** | **str** | Type of the infraction: REFUND_REQUEST, FRAUD or REFUND_CANCELLED. | [optional] 
**reported_by** | **str** | Side that opened the infraction: DEBITED_PARTICIPANT or CREDITED_PARTICIPANT. | [optional] 
**report_details** | **str** | Reason given by whoever opened the infraction, in the text sent by the partner bank. | [optional] 
**analysis_result** | **str** | Analysis outcome: AGREED or DISAGREED. | [optional] 
**analysis_details** | **str** | Additional text about the analysis decision, when the partner bank sends that information. | [optional] 
**reported_at** | **datetime** | Moment the infraction was opened. | [optional] 
**expires_at** | **datetime** | Deadline to send the defense of this infraction. | [optional] 
**transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] 
**defense_history** | [**List[DefenseHistoryEntry]**](DefenseHistoryEntry.md) | Defenses already sent for this infraction, each with text, status and files. | [optional] 

## Example

```python
from payzu_pix.models.infraction_detail import InfractionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of InfractionDetail from a JSON string
infraction_detail_instance = InfractionDetail.from_json(json)
# print the JSON string representation of the object
print(InfractionDetail.to_json())

# convert the object into a dict
infraction_detail_dict = infraction_detail_instance.to_dict()
# create an instance of InfractionDetail from a dict
infraction_detail_from_dict = InfractionDetail.from_dict(infraction_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


