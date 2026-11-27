# PayZuPix::InfractionsApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_infractions**](InfractionsApi.md#get_infractions) | **GET** /user/infractions | Listar infrações |
| [**get_infractions_by_id**](InfractionsApi.md#get_infractions_by_id) | **GET** /user/infractions/{id} | Obter Infração |
| [**get_infractions_defense_by_id**](InfractionsApi.md#get_infractions_defense_by_id) | **GET** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa |
| [**get_infractions_defenses**](InfractionsApi.md#get_infractions_defenses) | **GET** /user/infractions/{id}/defenses | Listar Defesas |
| [**post_infractions_defense**](InfractionsApi.md#post_infractions_defense) | **POST** /user/infractions/{id}/defenses | Criar Defesa |


## get_infractions

> <InfractionListResponse> get_infractions(opts)

Listar infrações

Lista todas as infrações do usuário autenticado com paginação e filtros.

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
  page: 56, # Integer | Número da página.
  limit: 56, # Integer | Itens por página.
  status: 'OPEN', # String | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED`
  type: 'REFUND_REQUEST', # String | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED`
  end_to_end_id: 'E00000000202508172159kZ8dQ2mNb1x', # String | ID end-to-end do Pix.
  transaction_id: 'PAYZU20260814T6NX1CV9MK000000', # String | ID da transação.
  amount_min: 10.9, # Float | Valor mínimo.
  amount_max: 500, # Float | Valor máximo.
  analysis_result: 'AGREED', # String | AnalysisResult separados por vírgula: AGREED, DISAGREED.
  reported_by: 'DEBITED_PARTICIPANT', # String | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT`
  participant_document: '12345678901', # String | CPF ou CNPJ do participante.
  participant_name: 'John Doe', # String | Nome do participante.
  sort_by: 'createdAt', # String | Campo de ordenação.
  sort_direction: 'asc', # String | Direção da ordenação.
  reported_at_from: Time.parse('2026-08-01'), # Time | Filtro: reportedAt a partir de.
  reported_at_to: Time.parse('2026-08-31'), # Time | Filtro: reportedAt até.
  created_at_from: Time.parse('2026-08-01'), # Time | Filtro: createdAt a partir de.
  created_at_to: Time.parse('2026-08-31'), # Time | Filtro: createdAt até.
  expires_at_from: Time.parse('2026-08-01'), # Time | Filtro: expiresAt a partir de.
  expires_at_to: Time.parse('2026-08-31'), # Time | Filtro: expiresAt até.
  updated_at_from: Time.parse('2026-08-01'), # Time | Filtro: updatedAt a partir de.
  updated_at_to: Time.parse('2026-08-31'), # Time | Filtro: updatedAt até.
  id: 'cm3w7n2p60002q8f2h7d3z5cf', # String | Filtro por ID da infração.
  protocol: '2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210' # String | Filtro por protocolo.
}

begin
  # Listar infrações
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
  # Listar infrações
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
| **page** | **Integer** | Número da página. | [optional][default to 1] |
| **limit** | **Integer** | Itens por página. | [optional][default to 10] |
| **status** | **String** | Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | [optional] |
| **type** | **String** | Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | [optional] |
| **end_to_end_id** | **String** | ID end-to-end do Pix. | [optional] |
| **transaction_id** | **String** | ID da transação. | [optional] |
| **amount_min** | **Float** | Valor mínimo. | [optional] |
| **amount_max** | **Float** | Valor máximo. | [optional] |
| **analysis_result** | **String** | AnalysisResult separados por vírgula: AGREED, DISAGREED. | [optional] |
| **reported_by** | **String** | Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | [optional] |
| **participant_document** | **String** | CPF ou CNPJ do participante. | [optional] |
| **participant_name** | **String** | Nome do participante. | [optional] |
| **sort_by** | **String** | Campo de ordenação. | [optional][default to &#39;createdAt&#39;] |
| **sort_direction** | **String** | Direção da ordenação. | [optional][default to &#39;desc&#39;] |
| **reported_at_from** | **Time** | Filtro: reportedAt a partir de. | [optional] |
| **reported_at_to** | **Time** | Filtro: reportedAt até. | [optional] |
| **created_at_from** | **Time** | Filtro: createdAt a partir de. | [optional] |
| **created_at_to** | **Time** | Filtro: createdAt até. | [optional] |
| **expires_at_from** | **Time** | Filtro: expiresAt a partir de. | [optional] |
| **expires_at_to** | **Time** | Filtro: expiresAt até. | [optional] |
| **updated_at_from** | **Time** | Filtro: updatedAt a partir de. | [optional] |
| **updated_at_to** | **Time** | Filtro: updatedAt até. | [optional] |
| **id** | **String** | Filtro por ID da infração. | [optional] |
| **protocol** | **String** | Filtro por protocolo. | [optional] |

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_infractions_by_id

> <InfractionDetail> get_infractions_by_id(id)

Obter Infração

Obtém uma infração específica por ID.

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
id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | ID da infração

begin
  # Obter Infração
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
  # Obter Infração
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
| **id** | **String** | ID da infração |  |

### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_infractions_defense_by_id

> <Defense> get_infractions_defense_by_id(infraction_id, defense_id)

Obter Defesa

Obtém uma defesa específica de uma infração.

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
infraction_id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | ID da infração
defense_id = 'cm3w7p5r90003q8f2j8e4a6dg' # String | ID da defesa

begin
  # Obter Defesa
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
  # Obter Defesa
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
| **infraction_id** | **String** | ID da infração |  |
| **defense_id** | **String** | ID da defesa |  |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_infractions_defenses

> <Array<DefenseListItem>> get_infractions_defenses(id)

Listar Defesas

Lista todas as defesas de uma infração específica.

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
id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | ID da infração

begin
  # Listar Defesas
  result = api_instance.get_infractions_defenses(id)
  p result
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_defenses: #{e}"
end
```

#### Using the get_infractions_defenses_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<DefenseListItem>>, Integer, Hash)> get_infractions_defenses_with_http_info(id)

```ruby
begin
  # Listar Defesas
  data, status_code, headers = api_instance.get_infractions_defenses_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<DefenseListItem>>
rescue PayZuPix::ApiError => e
  puts "Error when calling InfractionsApi->get_infractions_defenses_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID da infração |  |

### Return type

[**Array&lt;DefenseListItem&gt;**](DefenseListItem.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## post_infractions_defense

> <Defense> post_infractions_defense(id, defense, opts)

Criar Defesa

Cria uma defesa para uma infração específica.

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
id = 'cm3w7n2p60002q8f2h7d3z5cf' # String | ID da infração
defense = 'defense_example' # String | Texto da defesa (máx: 1000 caracteres)
opts = {
  files: [File.new('/path/to/some/file')] # Array<File> | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados.
}

begin
  # Criar Defesa
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
  # Criar Defesa
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
| **id** | **String** | ID da infração |  |
| **defense** | **String** | Texto da defesa (máx: 1000 caracteres) |  |
| **files** | **Array&lt;File&gt;** | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | [optional] |

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

