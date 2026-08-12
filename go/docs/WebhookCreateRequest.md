# WebhookCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **string** | HTTPS URL that will receive the notifications. | 
**Events** | Pointer to [**[]WebhookEventType**](WebhookEventType.md) | Events to subscribe to. Omit or leave empty to receive all events. | [optional] [default to {}]
**GenerateSecret** | Pointer to **bool** | Generate an HMAC signing secret for this webhook. | [optional] [default to false]
**Active** | Pointer to **bool** | Whether the webhook starts active. | [optional] 

## Methods

### NewWebhookCreateRequest

`func NewWebhookCreateRequest(url string, ) *WebhookCreateRequest`

NewWebhookCreateRequest instantiates a new WebhookCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebhookCreateRequestWithDefaults

`func NewWebhookCreateRequestWithDefaults() *WebhookCreateRequest`

NewWebhookCreateRequestWithDefaults instantiates a new WebhookCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *WebhookCreateRequest) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *WebhookCreateRequest) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *WebhookCreateRequest) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetEvents

`func (o *WebhookCreateRequest) GetEvents() []WebhookEventType`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *WebhookCreateRequest) GetEventsOk() (*[]WebhookEventType, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *WebhookCreateRequest) SetEvents(v []WebhookEventType)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *WebhookCreateRequest) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetGenerateSecret

`func (o *WebhookCreateRequest) GetGenerateSecret() bool`

GetGenerateSecret returns the GenerateSecret field if non-nil, zero value otherwise.

### GetGenerateSecretOk

`func (o *WebhookCreateRequest) GetGenerateSecretOk() (*bool, bool)`

GetGenerateSecretOk returns a tuple with the GenerateSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateSecret

`func (o *WebhookCreateRequest) SetGenerateSecret(v bool)`

SetGenerateSecret sets GenerateSecret field to given value.

### HasGenerateSecret

`func (o *WebhookCreateRequest) HasGenerateSecret() bool`

HasGenerateSecret returns a boolean if a field has been set.

### GetActive

`func (o *WebhookCreateRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *WebhookCreateRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *WebhookCreateRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *WebhookCreateRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


