# PayZuPix::InfractionsApi

All URIs are relative to *https://api.payzu.processamento.com/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_infractions**](InfractionsApi.md#get_infractions) | **GET** /user/infractions | List Infractions |
| [**get_infractions_by_id**](InfractionsApi.md#get_infractions_by_id) | **GET** /user/infractions/{id} | Get Infraction |
| [**get_infractions_defense_by_id**](InfractionsApi.md#get_infractions_defense_by_id) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Get Defense |
| [**get_infractions_defenses**](InfractionsApi.md#get_infractions_defenses) | **GET** /user/infractions/{id}/defenses | List Defenses |
| [**post_infractions_defense**](InfractionsApi.md#post_infractions_defense) | **POST** /user/infractions/{id}/defenses | Create Defense |


## get_infractions

> <InfractionListResponse> get_infractions(opts)

List Infractions

List all infractions for the authenticated user with pagination and filters.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InfractionsApi.new
opts = {
  page: 56, # Integer | Page number.
  limit: 56, # Integer | Items per page.
  status: 'OPEN', # String | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS)
  type: 'REFUND_REQUEST', # String | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED)
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | End-to-end ID of the Pix.
  transaction_id: 'PAYZU20260814T6NX1CV9MK000000', # String | Transaction ID.
  amount_min: 10.9, # Float | Minimum amount.
  amount_max: 500, # Float | Maximum amount.
  analysis_result: 'AGREED', # String | Comma-separated AnalysisResult: AGREED, DISAGREED.
  reported_by: 'DEBITED_PARTICIPANT', # String | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT)
  participant_document: '12345678901', # String | CPF or CNPJ of the participant.
  participant_name: 'John Doe', # String | Name of the participant.
  sort_by: 'createdAt', # String | Sort field.
  sort_direction: 'asc', # String | Sort direction.
  reported_at_from: Time.parse('2026-08-01'), # Time | Filter: reportedAt from.
  reported_at_to: Time.parse('2026-08-31'), # Time | Filter: reportedAt up to.
  created_at_from: Time.parse('2026-08-01'), # Time | Filter: createdAt from.
  created_at_to: Time.parse('2026-08-31'), # Time | Filter: createdAt up to.
  expires_at_from: Time.parse('2026-08-01'), # Time | Filter: expiresAt from.
  expires_at_to: Time.parse('2026-08-31'), # Time | Filter: expiresAt up to.
  updated_at_from: Time.parse('2026-08-01'), # Time | Filter: updatedAt from.
  updated_at_to: Time.parse('2026-08-31'), # Time | Filter: updatedAt up to.
  id: 'cm3w7n2p60002q8f2h7d3z5cf', # String | Filter by infraction ID.
  protocol: '2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210' # String | Filter by protocol.
}

begin
  # List Infractions
  result = api_instance.get_infractions(opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions: #{e}"
end
```

#### Using the get_infractions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InfractionListResponse>, Integer, Hash)> get_infractions_with_http_info(opts)

```ruby
begin
  # List Infractions
  data, status_code, headers = api_instance.get_infractions_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InfractionListResponse>
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **limit** | **Integer** | Items per page. | [optional][default to 10] |
| **status** | **String** | Comma-separated InfractionStatus (WAITING_PSP,CLOSED,OPEN,CANCELLED,ACKNOWLEDGED,DEFENDED,ANSWERED,WAITING_ADJUSTMENTS) | [optional] |
| **type** | **String** | Comma-separated InfractionType (REFUND_REQUEST,FRAUD,REFUND_CANCELLED) | [optional] |
| **end_to_end_id** | **String** | End-to-end ID of the Pix. | [optional] |
| **transaction_id** | **String** | Transaction ID. | [optional] |
| **amount_min** | **Float** | Minimum amount. | [optional] |
| **amount_max** | **Float** | Maximum amount. | [optional] |
| **analysis_result** | **String** | Comma-separated AnalysisResult: AGREED, DISAGREED. | [optional] |
| **reported_by** | **String** | Comma-separated ReportedType (DEBITED_PARTICIPANT,CREDITED_PARTICIPANT) | [optional] |
| **participant_document** | **String** | CPF or CNPJ of the participant. | [optional] |
| **participant_name** | **String** | Name of the participant. | [optional] |
| **sort_by** | **String** | Sort field. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Sort direction. | [optional][default to &#39;desc&#39;] |
| **reported_at_from** | **Time** | Filter: reportedAt from. | [optional] |
| **reported_at_to** | **Time** | Filter: reportedAt up to. | [optional] |
| **created_at_from** | **Time** | Filter: createdAt from. | [optional] |
| **created_at_to** | **Time** | Filter: createdAt up to. | [optional] |
| **expires_at_from** | **Time** | Filter: expiresAt from. | [optional] |
| **expires_at_to** | **Time** | Filter: expiresAt up to. | [optional] |
| **updated_at_from** | **Time** | Filter: updatedAt from. | [optional] |
| **updated_at_to** | **Time** | Filter: updatedAt up to. | [optional] |
| **id** | **String** | Filter by infraction ID. | [optional] |
| **protocol** | **String** | Filter by protocol. | [optional] |

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_infractions_by_id

> <InfractionDetail> get_infractions_by_id(id)

Get Infraction

Get a specific infraction by ID.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InfractionsApi.new
id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | Infraction ID

begin
  # Get Infraction
  result = api_instance.get_infractions_by_id(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_by_id: #{e}"
end
```

#### Using the get_infractions_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<InfractionDetail>, Integer, Hash)> get_infractions_by_id_with_http_info(id)

```ruby
begin
  # Get Infraction
  data, status_code, headers = api_instance.get_infractions_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <InfractionDetail>
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Infraction ID |  |

### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_infractions_defense_by_id

> <Defense> get_infractions_defense_by_id(infraction_id, defense_id)

Get Defense

Get a specific defense for an infraction.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InfractionsApi.new
infraction_id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | Infraction ID
defense_id = 'cm3w7p5r90003q8f2j8e4a6dg' # String | Defense ID

begin
  # Get Defense
  result = api_instance.get_infractions_defense_by_id(infraction_id, defense_id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_defense_by_id: #{e}"
end
```

#### Using the get_infractions_defense_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Defense>, Integer, Hash)> get_infractions_defense_by_id_with_http_info(infraction_id, defense_id)

```ruby
begin
  # Get Defense
  data, status_code, headers = api_instance.get_infractions_defense_by_id_with_http_info(infraction_id, defense_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Defense>
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_defense_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **infraction_id** | **String** | Infraction ID |  |
| **defense_id** | **String** | Defense ID |  |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_infractions_defenses

> <Array<Defense>> get_infractions_defenses(id)

List Defenses

List all defenses for a specific infraction.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InfractionsApi.new
id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | Infraction ID

begin
  # List Defenses
  result = api_instance.get_infractions_defenses(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_defenses: #{e}"
end
```

#### Using the get_infractions_defenses_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Defense>>, Integer, Hash)> get_infractions_defenses_with_http_info(id)

```ruby
begin
  # List Defenses
  data, status_code, headers = api_instance.get_infractions_defenses_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Defense>>
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_defenses_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Infraction ID |  |

### Return type

[**Array&lt;Defense&gt;**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_infractions_defense

> <Defense> post_infractions_defense(id, defense, opts)

Create Defense

Create a defense for a specific infraction.

### Examples

```ruby
require 'time'
require 'payzu-pix'
# setup authorization
PayZuPix.configure do |config|
  # Configure Bearer authorization: BearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = PayZuPix::InfractionsApi.new
id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | Infraction ID
defense = 'defense_example' # String | Defense text (max: 1000 characters)
opts = {
  files: [File.new('/path/to/some/file')] # Array<File> | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected.
}

begin
  # Create Defense
  result = api_instance.post_infractions_defense(id, defense, opts)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->post_infractions_defense: #{e}"
end
```

#### Using the post_infractions_defense_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Defense>, Integer, Hash)> post_infractions_defense_with_http_info(id, defense, opts)

```ruby
begin
  # Create Defense
  data, status_code, headers = api_instance.post_infractions_defense_with_http_info(id, defense, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Defense>
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->post_infractions_defense_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Infraction ID |  |
| **defense** | **String** | Defense text (max: 1000 characters) |  |
| **files** | **Array&lt;File&gt;** | Evidence files: up to 5 files, 10 MB each and 10 MB in total. Files .exe, .msi, .bat, .sh and .cmd are rejected. | [optional] |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

