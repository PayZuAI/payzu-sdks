# Defense

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Defense identifier. | [optional]
**defense** | **string** | Defense text | [optional]
**status** | **string** | Defense status | [optional]
**infraction_id** | **string** | Identifies the infraction the defense belongs to. | [optional]
**created_at** | **\DateTime** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional]
**updated_at** | **\DateTime** | Moment of the last change to the defense. | [optional]
**files** | [**\PayZu\Pix\Model\DefenseFilesInner[]**](DefenseFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
