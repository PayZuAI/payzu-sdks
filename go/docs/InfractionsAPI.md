# \InfractionsAPI

All URIs are relative to *https://api.pix.payzu.com.br/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetInfractions**](InfractionsAPI.md#GetInfractions) | **Get** /user/infractions | Listar infrações
[**GetInfractionsById**](InfractionsAPI.md#GetInfractionsById) | **Get** /user/infractions/{id} | Obter Infração
[**GetInfractionsDefenseById**](InfractionsAPI.md#GetInfractionsDefenseById) | **Get** /user/infractions/{infractionId}/defenses/{defenseId} | Obter Defesa
[**GetInfractionsDefenses**](InfractionsAPI.md#GetInfractionsDefenses) | **Get** /user/infractions/{id}/defenses | Listar Defesas
[**PostInfractionsDefense**](InfractionsAPI.md#PostInfractionsDefense) | **Post** /user/infractions/{id}/defenses | Criar Defesa



## GetInfractions

> InfractionListResponse GetInfractions(ctx).Page(page).Limit(limit).Status(status).Type_(type_).EndToEndId(endToEndId).TransactionId(transactionId).AmountMin(amountMin).AmountMax(amountMax).AnalysisResult(analysisResult).ReportedBy(reportedBy).ParticipantDocument(participantDocument).ParticipantName(participantName).SortBy(sortBy).SortDirection(sortDirection).ReportedAtFrom(reportedAtFrom).ReportedAtTo(reportedAtTo).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).ExpiresAtFrom(expiresAtFrom).ExpiresAtTo(expiresAtTo).UpdatedAtFrom(updatedAtFrom).UpdatedAtTo(updatedAtTo).Id(id).Protocol(protocol).Execute()

Listar infrações



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
    "time"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	page := int32(56) // int32 | Número da página. (optional) (default to 1)
	limit := int32(56) // int32 | Itens por página. (optional) (default to 10)
	status := "OPEN" // string | Status da infração, vários separados por vírgula.  `OPEN` `ACKNOWLEDGED` `DEFENDED` `ANSWERED` `WAITING_PSP` `WAITING_ADJUSTMENTS` `CLOSED` `CANCELLED` (optional)
	type_ := "REFUND_REQUEST" // string | Tipo da infração, vários separados por vírgula.  `REFUND_REQUEST` `FRAUD` `REFUND_CANCELLED` (optional)
	endToEndId := "E00000000202508172159kZ8dQ2mNb1x" // string | ID end-to-end do Pix. (optional)
	transactionId := "PAYZU20260814T6NX1CV9MK000000" // string | ID da transação. (optional)
	amountMin := float32(10.9) // float32 | Valor mínimo. (optional)
	amountMax := float32(500) // float32 | Valor máximo. (optional)
	analysisResult := "AGREED" // string | AnalysisResult separados por vírgula: AGREED, DISAGREED. (optional)
	reportedBy := "DEBITED_PARTICIPANT" // string | Quem abriu a infração, vários separados por vírgula.  `DEBITED_PARTICIPANT` `CREDITED_PARTICIPANT` (optional)
	participantDocument := "12345678901" // string | CPF ou CNPJ do participante. (optional)
	participantName := "John Doe" // string | Nome do participante. (optional)
	sortBy := "sortBy_example" // string | Campo de ordenação. (optional) (default to "createdAt")
	sortDirection := "sortDirection_example" // string | Direção da ordenação. (optional) (default to "desc")
	reportedAtFrom := time.Now() // time.Time | Filtro: reportedAt a partir de. (optional)
	reportedAtTo := time.Now() // time.Time | Filtro: reportedAt até. (optional)
	createdAtFrom := time.Now() // time.Time | Filtro: createdAt a partir de. (optional)
	createdAtTo := time.Now() // time.Time | Filtro: createdAt até. (optional)
	expiresAtFrom := time.Now() // time.Time | Filtro: expiresAt a partir de. (optional)
	expiresAtTo := time.Now() // time.Time | Filtro: expiresAt até. (optional)
	updatedAtFrom := time.Now() // time.Time | Filtro: updatedAt a partir de. (optional)
	updatedAtTo := time.Now() // time.Time | Filtro: updatedAt até. (optional)
	id := "cm3w7n2p60002q8f2h7d3z5cf" // string | Filtro por ID da infração. (optional)
	protocol := "2f8b1c4a-9d33-4e57-b0aa-7c6d5e4f3210" // string | Filtro por protocolo. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractions(context.Background()).Page(page).Limit(limit).Status(status).Type_(type_).EndToEndId(endToEndId).TransactionId(transactionId).AmountMin(amountMin).AmountMax(amountMax).AnalysisResult(analysisResult).ReportedBy(reportedBy).ParticipantDocument(participantDocument).ParticipantName(participantName).SortBy(sortBy).SortDirection(sortDirection).ReportedAtFrom(reportedAtFrom).ReportedAtTo(reportedAtTo).CreatedAtFrom(createdAtFrom).CreatedAtTo(createdAtTo).ExpiresAtFrom(expiresAtFrom).ExpiresAtTo(expiresAtTo).UpdatedAtFrom(updatedAtFrom).UpdatedAtTo(updatedAtTo).Id(id).Protocol(protocol).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractions`: InfractionListResponse
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | Número da página. | [default to 1]
 **limit** | **int32** | Itens por página. | [default to 10]
 **status** | **string** | Status da infração, vários separados por vírgula.  &#x60;OPEN&#x60; &#x60;ACKNOWLEDGED&#x60; &#x60;DEFENDED&#x60; &#x60;ANSWERED&#x60; &#x60;WAITING_PSP&#x60; &#x60;WAITING_ADJUSTMENTS&#x60; &#x60;CLOSED&#x60; &#x60;CANCELLED&#x60; | 
 **type_** | **string** | Tipo da infração, vários separados por vírgula.  &#x60;REFUND_REQUEST&#x60; &#x60;FRAUD&#x60; &#x60;REFUND_CANCELLED&#x60; | 
 **endToEndId** | **string** | ID end-to-end do Pix. | 
 **transactionId** | **string** | ID da transação. | 
 **amountMin** | **float32** | Valor mínimo. | 
 **amountMax** | **float32** | Valor máximo. | 
 **analysisResult** | **string** | AnalysisResult separados por vírgula: AGREED, DISAGREED. | 
 **reportedBy** | **string** | Quem abriu a infração, vários separados por vírgula.  &#x60;DEBITED_PARTICIPANT&#x60; &#x60;CREDITED_PARTICIPANT&#x60; | 
 **participantDocument** | **string** | CPF ou CNPJ do participante. | 
 **participantName** | **string** | Nome do participante. | 
 **sortBy** | **string** | Campo de ordenação. | [default to &quot;createdAt&quot;]
 **sortDirection** | **string** | Direção da ordenação. | [default to &quot;desc&quot;]
 **reportedAtFrom** | **time.Time** | Filtro: reportedAt a partir de. | 
 **reportedAtTo** | **time.Time** | Filtro: reportedAt até. | 
 **createdAtFrom** | **time.Time** | Filtro: createdAt a partir de. | 
 **createdAtTo** | **time.Time** | Filtro: createdAt até. | 
 **expiresAtFrom** | **time.Time** | Filtro: expiresAt a partir de. | 
 **expiresAtTo** | **time.Time** | Filtro: expiresAt até. | 
 **updatedAtFrom** | **time.Time** | Filtro: updatedAt a partir de. | 
 **updatedAtTo** | **time.Time** | Filtro: updatedAt até. | 
 **id** | **string** | Filtro por ID da infração. | 
 **protocol** | **string** | Filtro por protocolo. | 

### Return type

[**InfractionListResponse**](InfractionListResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInfractionsById

> InfractionDetail GetInfractionsById(ctx, id).Execute()

Obter Infração



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	id := "cm3w7n2p60002q8f2h7d3z5cf" // string | ID da infração

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractionsById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractionsById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractionsById`: InfractionDetail
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractionsById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID da infração | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**InfractionDetail**](InfractionDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInfractionsDefenseById

> Defense GetInfractionsDefenseById(ctx, infractionId, defenseId).Execute()

Obter Defesa



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	infractionId := "cm3w7n2p60002q8f2h7d3z5cf" // string | ID da infração
	defenseId := "cm3w7p5r90003q8f2j8e4a6dg" // string | ID da defesa

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractionsDefenseById(context.Background(), infractionId, defenseId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractionsDefenseById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractionsDefenseById`: Defense
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractionsDefenseById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**infractionId** | **string** | ID da infração | 
**defenseId** | **string** | ID da defesa | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsDefenseByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInfractionsDefenses

> []DefenseListItem GetInfractionsDefenses(ctx, id).Execute()

Listar Defesas



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	id := "cm3w7n2p60002q8f2h7d3z5cf" // string | ID da infração

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.GetInfractionsDefenses(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.GetInfractionsDefenses``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetInfractionsDefenses`: []DefenseListItem
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.GetInfractionsDefenses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID da infração | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInfractionsDefensesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]DefenseListItem**](DefenseListItem.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostInfractionsDefense

> Defense PostInfractionsDefense(ctx, id).Defense(defense).Files(files).Execute()

Criar Defesa



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/PayZuAI/payzu-sdks/go/v4"
)

func main() {
	id := "cm3w7n2p60002q8f2h7d3z5cf" // string | ID da infração
	defense := "defense_example" // string | Texto da defesa (máx: 1000 caracteres)
	files := []*os.File{"TODO"} // []*os.File | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.InfractionsAPI.PostInfractionsDefense(context.Background(), id).Defense(defense).Files(files).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `InfractionsAPI.PostInfractionsDefense``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PostInfractionsDefense`: Defense
	fmt.Fprintf(os.Stdout, "Response from `InfractionsAPI.PostInfractionsDefense`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID da infração | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostInfractionsDefenseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **defense** | **string** | Texto da defesa (máx: 1000 caracteres) | 
 **files** | **[]*os.File** | Arquivos de evidência: até 5 arquivos, 10 MB cada e 10 MB no total. Arquivos .exe, .msi, .bat, .sh e .cmd são recusados. | 

### Return type

[**Defense**](Defense.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

