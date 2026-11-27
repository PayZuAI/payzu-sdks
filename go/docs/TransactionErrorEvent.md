# TransactionErrorEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identificador da transação na PayZu. | 
**Type** | **string** | &#x60;DEPOSIT&#x60;: cobrança, Pix recebido numa chave ou transferência recebida. &#x60;WITHDRAW&#x60;: saque ou transferência enviada. | 
**Status** | **string** | &#x60;ERROR&#x60;: a transação terminou com erro. | 
**Method** | **string** | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. | 
**ClientReference** | **NullableString** | O identificador que você enviou na criação. | 
**VirtualAccount** | **NullableString** | A subconta virtual enviada na criação. | 
**QrCodeText** | **NullableString** | Copia e cola da cobrança criada em POST /pix. Nas demais transações vem &#x60;null&#x60;. | 
**QrCodeUrl** | **NullableString** | Vem &#x60;null&#x60; no aviso. A rota da imagem sai na criação da cobrança e em GET /pix. | 
**GeneratedName** | **NullableString** | Nome informado para montar a cobrança. | 
**GeneratedDocument** | **NullableString** | CPF ou CNPJ informado para montar a cobrança. | 
**GeneratedEmail** | **NullableString** | E-mail informado para montar a cobrança. | 
**PayerName** | **NullableString** | Nome do titular da conta de origem, como a instituição informou. | 
**PayerDocument** | **NullableString** | CPF ou CNPJ do titular da conta de origem. | 
**PayerAccountNumber** | **NullableString** | Conta PayZu de origem, quando o dinheiro sai de uma conta PayZu. | 
**PayerInstitutionIspb** | **NullableString** | ISPB da instituição de origem. | 
**PayerInstitutionName** | **NullableString** | Nome da instituição de origem. | 
**ReceiverName** | **NullableString** | Nome do titular da conta de destino. | 
**ReceiverDocument** | **NullableString** | CPF ou CNPJ do titular da conta de destino. | 
**ReceiverInstitutionIspb** | **NullableString** | ISPB da instituição de destino. | 
**ReceiverInstitutionName** | **NullableString** | Nome da instituição de destino. | 
**WithdrawPixKey** | **NullableString** | Chave Pix de destino do saque, já normalizada. | 
**WithdrawPixType** | **NullableString** | Tipo da chave de destino. &#x60;evp&#x60; é a chave aleatória. | 
**WithdrawQrCodeText** | **NullableString** | Copia e cola pago no saque por QR Code. | 
**EndToEndId** | **NullableString** | Identificador fim a fim do Pix, usado na conciliação. | 
**CancellationReason** | **NullableString** | Motivo do cancelamento, em texto pronto para exibir, como &#x60;Chave Pix não encontrada.&#x60; | 
**PaidAt** | **NullableTime** | Momento da liquidação, informado pela instituição. | 
**RefundEndToEndId** | **NullableString** | Identificador fim a fim do Pix de devolução. | 
**RefundAmount** | **NullableString** | Soma devolvida até agora, em reais, como texto decimal (&#x60;\&quot;30.5\&quot;&#x60;). Cada aviso traz o total acumulado: converta em número para comparar, como em GET /pix, onde o campo vem como número. | 
**RefundStatus** | **NullableString** | Status da devolução: &#x60;PENDING&#x60;, &#x60;COMPLETED&#x60; ou &#x60;CANCELED&#x60;. | 
**RefundReason** | **NullableString** | Motivo: &#x60;CUSTOMER_REQUEST&#x60;, pedida por você; &#x60;INFRACTION&#x60;, pelo MED; &#x60;DENY_COMPANY_DEPOSIT&#x60;, Pix pago por CNPJ numa conta que não aceita esse depósito; &#x60;ADMIN_REQUEST&#x60;, feita pela PayZu. | 
**RefundDescription** | **NullableString** | Descrição da devolução. | 
**RefundedAt** | **NullableTime** | Momento da conclusão da devolução. | 
**QrCodeBase64** | **NullableString** | Vem &#x60;null&#x60; no aviso. A imagem sai na criação da cobrança e em GET /pix. | 
**CreatedAt** | **time.Time** | Criação da transação. | 
**UpdatedAt** | **time.Time** | Última alteração da transação. Com &#x60;id&#x60;, serve para deduplicar e ordenar os avisos de transação. | 
**CallbackUrl** | **NullableString** | A URL de aviso enviada na criação da transação. | 
**Amount** | **float32** | Valor da transação, em reais. | 
**ServiceFeeCharged** | Pointer to **float32** | Tarifa PayZu, em reais, que pode ter mais de duas casas decimais. Pode não vir, conforme a configuração da conta. | [optional] 
**ReceiverAccountNumber** | Pointer to **NullableString** | Conta PayZu de destino. Não vem no saque para chave pago como transferência entre contas PayZu. | [optional] 

## Methods

### NewTransactionErrorEvent

`func NewTransactionErrorEvent(id string, type_ string, status string, method string, clientReference NullableString, virtualAccount NullableString, qrCodeText NullableString, qrCodeUrl NullableString, generatedName NullableString, generatedDocument NullableString, generatedEmail NullableString, payerName NullableString, payerDocument NullableString, payerAccountNumber NullableString, payerInstitutionIspb NullableString, payerInstitutionName NullableString, receiverName NullableString, receiverDocument NullableString, receiverInstitutionIspb NullableString, receiverInstitutionName NullableString, withdrawPixKey NullableString, withdrawPixType NullableString, withdrawQrCodeText NullableString, endToEndId NullableString, cancellationReason NullableString, paidAt NullableTime, refundEndToEndId NullableString, refundAmount NullableString, refundStatus NullableString, refundReason NullableString, refundDescription NullableString, refundedAt NullableTime, qrCodeBase64 NullableString, createdAt time.Time, updatedAt time.Time, callbackUrl NullableString, amount float32, ) *TransactionErrorEvent`

NewTransactionErrorEvent instantiates a new TransactionErrorEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionErrorEventWithDefaults

`func NewTransactionErrorEventWithDefaults() *TransactionErrorEvent`

NewTransactionErrorEventWithDefaults instantiates a new TransactionErrorEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *TransactionErrorEvent) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransactionErrorEvent) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransactionErrorEvent) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *TransactionErrorEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransactionErrorEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransactionErrorEvent) SetType(v string)`

SetType sets Type field to given value.


### GetStatus

`func (o *TransactionErrorEvent) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TransactionErrorEvent) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TransactionErrorEvent) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetMethod

`func (o *TransactionErrorEvent) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *TransactionErrorEvent) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *TransactionErrorEvent) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetClientReference

`func (o *TransactionErrorEvent) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *TransactionErrorEvent) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *TransactionErrorEvent) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.


### SetClientReferenceNil

`func (o *TransactionErrorEvent) SetClientReferenceNil(b bool)`

 SetClientReferenceNil sets the value for ClientReference to be an explicit nil

### UnsetClientReference
`func (o *TransactionErrorEvent) UnsetClientReference()`

UnsetClientReference ensures that no value is present for ClientReference, not even an explicit nil
### GetVirtualAccount

`func (o *TransactionErrorEvent) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *TransactionErrorEvent) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *TransactionErrorEvent) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.


### SetVirtualAccountNil

`func (o *TransactionErrorEvent) SetVirtualAccountNil(b bool)`

 SetVirtualAccountNil sets the value for VirtualAccount to be an explicit nil

### UnsetVirtualAccount
`func (o *TransactionErrorEvent) UnsetVirtualAccount()`

UnsetVirtualAccount ensures that no value is present for VirtualAccount, not even an explicit nil
### GetQrCodeText

`func (o *TransactionErrorEvent) GetQrCodeText() string`

GetQrCodeText returns the QrCodeText field if non-nil, zero value otherwise.

### GetQrCodeTextOk

`func (o *TransactionErrorEvent) GetQrCodeTextOk() (*string, bool)`

GetQrCodeTextOk returns a tuple with the QrCodeText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeText

`func (o *TransactionErrorEvent) SetQrCodeText(v string)`

SetQrCodeText sets QrCodeText field to given value.


### SetQrCodeTextNil

`func (o *TransactionErrorEvent) SetQrCodeTextNil(b bool)`

 SetQrCodeTextNil sets the value for QrCodeText to be an explicit nil

### UnsetQrCodeText
`func (o *TransactionErrorEvent) UnsetQrCodeText()`

UnsetQrCodeText ensures that no value is present for QrCodeText, not even an explicit nil
### GetQrCodeUrl

`func (o *TransactionErrorEvent) GetQrCodeUrl() string`

GetQrCodeUrl returns the QrCodeUrl field if non-nil, zero value otherwise.

### GetQrCodeUrlOk

`func (o *TransactionErrorEvent) GetQrCodeUrlOk() (*string, bool)`

GetQrCodeUrlOk returns a tuple with the QrCodeUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeUrl

`func (o *TransactionErrorEvent) SetQrCodeUrl(v string)`

SetQrCodeUrl sets QrCodeUrl field to given value.


### SetQrCodeUrlNil

`func (o *TransactionErrorEvent) SetQrCodeUrlNil(b bool)`

 SetQrCodeUrlNil sets the value for QrCodeUrl to be an explicit nil

### UnsetQrCodeUrl
`func (o *TransactionErrorEvent) UnsetQrCodeUrl()`

UnsetQrCodeUrl ensures that no value is present for QrCodeUrl, not even an explicit nil
### GetGeneratedName

`func (o *TransactionErrorEvent) GetGeneratedName() string`

GetGeneratedName returns the GeneratedName field if non-nil, zero value otherwise.

### GetGeneratedNameOk

`func (o *TransactionErrorEvent) GetGeneratedNameOk() (*string, bool)`

GetGeneratedNameOk returns a tuple with the GeneratedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedName

`func (o *TransactionErrorEvent) SetGeneratedName(v string)`

SetGeneratedName sets GeneratedName field to given value.


### SetGeneratedNameNil

`func (o *TransactionErrorEvent) SetGeneratedNameNil(b bool)`

 SetGeneratedNameNil sets the value for GeneratedName to be an explicit nil

### UnsetGeneratedName
`func (o *TransactionErrorEvent) UnsetGeneratedName()`

UnsetGeneratedName ensures that no value is present for GeneratedName, not even an explicit nil
### GetGeneratedDocument

`func (o *TransactionErrorEvent) GetGeneratedDocument() string`

GetGeneratedDocument returns the GeneratedDocument field if non-nil, zero value otherwise.

### GetGeneratedDocumentOk

`func (o *TransactionErrorEvent) GetGeneratedDocumentOk() (*string, bool)`

GetGeneratedDocumentOk returns a tuple with the GeneratedDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedDocument

`func (o *TransactionErrorEvent) SetGeneratedDocument(v string)`

SetGeneratedDocument sets GeneratedDocument field to given value.


### SetGeneratedDocumentNil

`func (o *TransactionErrorEvent) SetGeneratedDocumentNil(b bool)`

 SetGeneratedDocumentNil sets the value for GeneratedDocument to be an explicit nil

### UnsetGeneratedDocument
`func (o *TransactionErrorEvent) UnsetGeneratedDocument()`

UnsetGeneratedDocument ensures that no value is present for GeneratedDocument, not even an explicit nil
### GetGeneratedEmail

`func (o *TransactionErrorEvent) GetGeneratedEmail() string`

GetGeneratedEmail returns the GeneratedEmail field if non-nil, zero value otherwise.

### GetGeneratedEmailOk

`func (o *TransactionErrorEvent) GetGeneratedEmailOk() (*string, bool)`

GetGeneratedEmailOk returns a tuple with the GeneratedEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedEmail

`func (o *TransactionErrorEvent) SetGeneratedEmail(v string)`

SetGeneratedEmail sets GeneratedEmail field to given value.


### SetGeneratedEmailNil

`func (o *TransactionErrorEvent) SetGeneratedEmailNil(b bool)`

 SetGeneratedEmailNil sets the value for GeneratedEmail to be an explicit nil

### UnsetGeneratedEmail
`func (o *TransactionErrorEvent) UnsetGeneratedEmail()`

UnsetGeneratedEmail ensures that no value is present for GeneratedEmail, not even an explicit nil
### GetPayerName

`func (o *TransactionErrorEvent) GetPayerName() string`

GetPayerName returns the PayerName field if non-nil, zero value otherwise.

### GetPayerNameOk

`func (o *TransactionErrorEvent) GetPayerNameOk() (*string, bool)`

GetPayerNameOk returns a tuple with the PayerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerName

`func (o *TransactionErrorEvent) SetPayerName(v string)`

SetPayerName sets PayerName field to given value.


### SetPayerNameNil

`func (o *TransactionErrorEvent) SetPayerNameNil(b bool)`

 SetPayerNameNil sets the value for PayerName to be an explicit nil

### UnsetPayerName
`func (o *TransactionErrorEvent) UnsetPayerName()`

UnsetPayerName ensures that no value is present for PayerName, not even an explicit nil
### GetPayerDocument

`func (o *TransactionErrorEvent) GetPayerDocument() string`

GetPayerDocument returns the PayerDocument field if non-nil, zero value otherwise.

### GetPayerDocumentOk

`func (o *TransactionErrorEvent) GetPayerDocumentOk() (*string, bool)`

GetPayerDocumentOk returns a tuple with the PayerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerDocument

`func (o *TransactionErrorEvent) SetPayerDocument(v string)`

SetPayerDocument sets PayerDocument field to given value.


### SetPayerDocumentNil

`func (o *TransactionErrorEvent) SetPayerDocumentNil(b bool)`

 SetPayerDocumentNil sets the value for PayerDocument to be an explicit nil

### UnsetPayerDocument
`func (o *TransactionErrorEvent) UnsetPayerDocument()`

UnsetPayerDocument ensures that no value is present for PayerDocument, not even an explicit nil
### GetPayerAccountNumber

`func (o *TransactionErrorEvent) GetPayerAccountNumber() string`

GetPayerAccountNumber returns the PayerAccountNumber field if non-nil, zero value otherwise.

### GetPayerAccountNumberOk

`func (o *TransactionErrorEvent) GetPayerAccountNumberOk() (*string, bool)`

GetPayerAccountNumberOk returns a tuple with the PayerAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerAccountNumber

`func (o *TransactionErrorEvent) SetPayerAccountNumber(v string)`

SetPayerAccountNumber sets PayerAccountNumber field to given value.


### SetPayerAccountNumberNil

`func (o *TransactionErrorEvent) SetPayerAccountNumberNil(b bool)`

 SetPayerAccountNumberNil sets the value for PayerAccountNumber to be an explicit nil

### UnsetPayerAccountNumber
`func (o *TransactionErrorEvent) UnsetPayerAccountNumber()`

UnsetPayerAccountNumber ensures that no value is present for PayerAccountNumber, not even an explicit nil
### GetPayerInstitutionIspb

`func (o *TransactionErrorEvent) GetPayerInstitutionIspb() string`

GetPayerInstitutionIspb returns the PayerInstitutionIspb field if non-nil, zero value otherwise.

### GetPayerInstitutionIspbOk

`func (o *TransactionErrorEvent) GetPayerInstitutionIspbOk() (*string, bool)`

GetPayerInstitutionIspbOk returns a tuple with the PayerInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionIspb

`func (o *TransactionErrorEvent) SetPayerInstitutionIspb(v string)`

SetPayerInstitutionIspb sets PayerInstitutionIspb field to given value.


### SetPayerInstitutionIspbNil

`func (o *TransactionErrorEvent) SetPayerInstitutionIspbNil(b bool)`

 SetPayerInstitutionIspbNil sets the value for PayerInstitutionIspb to be an explicit nil

### UnsetPayerInstitutionIspb
`func (o *TransactionErrorEvent) UnsetPayerInstitutionIspb()`

UnsetPayerInstitutionIspb ensures that no value is present for PayerInstitutionIspb, not even an explicit nil
### GetPayerInstitutionName

`func (o *TransactionErrorEvent) GetPayerInstitutionName() string`

GetPayerInstitutionName returns the PayerInstitutionName field if non-nil, zero value otherwise.

### GetPayerInstitutionNameOk

`func (o *TransactionErrorEvent) GetPayerInstitutionNameOk() (*string, bool)`

GetPayerInstitutionNameOk returns a tuple with the PayerInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerInstitutionName

`func (o *TransactionErrorEvent) SetPayerInstitutionName(v string)`

SetPayerInstitutionName sets PayerInstitutionName field to given value.


### SetPayerInstitutionNameNil

`func (o *TransactionErrorEvent) SetPayerInstitutionNameNil(b bool)`

 SetPayerInstitutionNameNil sets the value for PayerInstitutionName to be an explicit nil

### UnsetPayerInstitutionName
`func (o *TransactionErrorEvent) UnsetPayerInstitutionName()`

UnsetPayerInstitutionName ensures that no value is present for PayerInstitutionName, not even an explicit nil
### GetReceiverName

`func (o *TransactionErrorEvent) GetReceiverName() string`

GetReceiverName returns the ReceiverName field if non-nil, zero value otherwise.

### GetReceiverNameOk

`func (o *TransactionErrorEvent) GetReceiverNameOk() (*string, bool)`

GetReceiverNameOk returns a tuple with the ReceiverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverName

`func (o *TransactionErrorEvent) SetReceiverName(v string)`

SetReceiverName sets ReceiverName field to given value.


### SetReceiverNameNil

`func (o *TransactionErrorEvent) SetReceiverNameNil(b bool)`

 SetReceiverNameNil sets the value for ReceiverName to be an explicit nil

### UnsetReceiverName
`func (o *TransactionErrorEvent) UnsetReceiverName()`

UnsetReceiverName ensures that no value is present for ReceiverName, not even an explicit nil
### GetReceiverDocument

`func (o *TransactionErrorEvent) GetReceiverDocument() string`

GetReceiverDocument returns the ReceiverDocument field if non-nil, zero value otherwise.

### GetReceiverDocumentOk

`func (o *TransactionErrorEvent) GetReceiverDocumentOk() (*string, bool)`

GetReceiverDocumentOk returns a tuple with the ReceiverDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverDocument

`func (o *TransactionErrorEvent) SetReceiverDocument(v string)`

SetReceiverDocument sets ReceiverDocument field to given value.


### SetReceiverDocumentNil

`func (o *TransactionErrorEvent) SetReceiverDocumentNil(b bool)`

 SetReceiverDocumentNil sets the value for ReceiverDocument to be an explicit nil

### UnsetReceiverDocument
`func (o *TransactionErrorEvent) UnsetReceiverDocument()`

UnsetReceiverDocument ensures that no value is present for ReceiverDocument, not even an explicit nil
### GetReceiverInstitutionIspb

`func (o *TransactionErrorEvent) GetReceiverInstitutionIspb() string`

GetReceiverInstitutionIspb returns the ReceiverInstitutionIspb field if non-nil, zero value otherwise.

### GetReceiverInstitutionIspbOk

`func (o *TransactionErrorEvent) GetReceiverInstitutionIspbOk() (*string, bool)`

GetReceiverInstitutionIspbOk returns a tuple with the ReceiverInstitutionIspb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionIspb

`func (o *TransactionErrorEvent) SetReceiverInstitutionIspb(v string)`

SetReceiverInstitutionIspb sets ReceiverInstitutionIspb field to given value.


### SetReceiverInstitutionIspbNil

`func (o *TransactionErrorEvent) SetReceiverInstitutionIspbNil(b bool)`

 SetReceiverInstitutionIspbNil sets the value for ReceiverInstitutionIspb to be an explicit nil

### UnsetReceiverInstitutionIspb
`func (o *TransactionErrorEvent) UnsetReceiverInstitutionIspb()`

UnsetReceiverInstitutionIspb ensures that no value is present for ReceiverInstitutionIspb, not even an explicit nil
### GetReceiverInstitutionName

`func (o *TransactionErrorEvent) GetReceiverInstitutionName() string`

GetReceiverInstitutionName returns the ReceiverInstitutionName field if non-nil, zero value otherwise.

### GetReceiverInstitutionNameOk

`func (o *TransactionErrorEvent) GetReceiverInstitutionNameOk() (*string, bool)`

GetReceiverInstitutionNameOk returns a tuple with the ReceiverInstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverInstitutionName

`func (o *TransactionErrorEvent) SetReceiverInstitutionName(v string)`

SetReceiverInstitutionName sets ReceiverInstitutionName field to given value.


### SetReceiverInstitutionNameNil

`func (o *TransactionErrorEvent) SetReceiverInstitutionNameNil(b bool)`

 SetReceiverInstitutionNameNil sets the value for ReceiverInstitutionName to be an explicit nil

### UnsetReceiverInstitutionName
`func (o *TransactionErrorEvent) UnsetReceiverInstitutionName()`

UnsetReceiverInstitutionName ensures that no value is present for ReceiverInstitutionName, not even an explicit nil
### GetWithdrawPixKey

`func (o *TransactionErrorEvent) GetWithdrawPixKey() string`

GetWithdrawPixKey returns the WithdrawPixKey field if non-nil, zero value otherwise.

### GetWithdrawPixKeyOk

`func (o *TransactionErrorEvent) GetWithdrawPixKeyOk() (*string, bool)`

GetWithdrawPixKeyOk returns a tuple with the WithdrawPixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixKey

`func (o *TransactionErrorEvent) SetWithdrawPixKey(v string)`

SetWithdrawPixKey sets WithdrawPixKey field to given value.


### SetWithdrawPixKeyNil

`func (o *TransactionErrorEvent) SetWithdrawPixKeyNil(b bool)`

 SetWithdrawPixKeyNil sets the value for WithdrawPixKey to be an explicit nil

### UnsetWithdrawPixKey
`func (o *TransactionErrorEvent) UnsetWithdrawPixKey()`

UnsetWithdrawPixKey ensures that no value is present for WithdrawPixKey, not even an explicit nil
### GetWithdrawPixType

`func (o *TransactionErrorEvent) GetWithdrawPixType() string`

GetWithdrawPixType returns the WithdrawPixType field if non-nil, zero value otherwise.

### GetWithdrawPixTypeOk

`func (o *TransactionErrorEvent) GetWithdrawPixTypeOk() (*string, bool)`

GetWithdrawPixTypeOk returns a tuple with the WithdrawPixType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawPixType

`func (o *TransactionErrorEvent) SetWithdrawPixType(v string)`

SetWithdrawPixType sets WithdrawPixType field to given value.


### SetWithdrawPixTypeNil

`func (o *TransactionErrorEvent) SetWithdrawPixTypeNil(b bool)`

 SetWithdrawPixTypeNil sets the value for WithdrawPixType to be an explicit nil

### UnsetWithdrawPixType
`func (o *TransactionErrorEvent) UnsetWithdrawPixType()`

UnsetWithdrawPixType ensures that no value is present for WithdrawPixType, not even an explicit nil
### GetWithdrawQrCodeText

`func (o *TransactionErrorEvent) GetWithdrawQrCodeText() string`

GetWithdrawQrCodeText returns the WithdrawQrCodeText field if non-nil, zero value otherwise.

### GetWithdrawQrCodeTextOk

`func (o *TransactionErrorEvent) GetWithdrawQrCodeTextOk() (*string, bool)`

GetWithdrawQrCodeTextOk returns a tuple with the WithdrawQrCodeText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdrawQrCodeText

`func (o *TransactionErrorEvent) SetWithdrawQrCodeText(v string)`

SetWithdrawQrCodeText sets WithdrawQrCodeText field to given value.


### SetWithdrawQrCodeTextNil

`func (o *TransactionErrorEvent) SetWithdrawQrCodeTextNil(b bool)`

 SetWithdrawQrCodeTextNil sets the value for WithdrawQrCodeText to be an explicit nil

### UnsetWithdrawQrCodeText
`func (o *TransactionErrorEvent) UnsetWithdrawQrCodeText()`

UnsetWithdrawQrCodeText ensures that no value is present for WithdrawQrCodeText, not even an explicit nil
### GetEndToEndId

`func (o *TransactionErrorEvent) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *TransactionErrorEvent) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *TransactionErrorEvent) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.


### SetEndToEndIdNil

`func (o *TransactionErrorEvent) SetEndToEndIdNil(b bool)`

 SetEndToEndIdNil sets the value for EndToEndId to be an explicit nil

### UnsetEndToEndId
`func (o *TransactionErrorEvent) UnsetEndToEndId()`

UnsetEndToEndId ensures that no value is present for EndToEndId, not even an explicit nil
### GetCancellationReason

`func (o *TransactionErrorEvent) GetCancellationReason() string`

GetCancellationReason returns the CancellationReason field if non-nil, zero value otherwise.

### GetCancellationReasonOk

`func (o *TransactionErrorEvent) GetCancellationReasonOk() (*string, bool)`

GetCancellationReasonOk returns a tuple with the CancellationReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationReason

`func (o *TransactionErrorEvent) SetCancellationReason(v string)`

SetCancellationReason sets CancellationReason field to given value.


### SetCancellationReasonNil

`func (o *TransactionErrorEvent) SetCancellationReasonNil(b bool)`

 SetCancellationReasonNil sets the value for CancellationReason to be an explicit nil

### UnsetCancellationReason
`func (o *TransactionErrorEvent) UnsetCancellationReason()`

UnsetCancellationReason ensures that no value is present for CancellationReason, not even an explicit nil
### GetPaidAt

`func (o *TransactionErrorEvent) GetPaidAt() time.Time`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *TransactionErrorEvent) GetPaidAtOk() (*time.Time, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *TransactionErrorEvent) SetPaidAt(v time.Time)`

SetPaidAt sets PaidAt field to given value.


### SetPaidAtNil

`func (o *TransactionErrorEvent) SetPaidAtNil(b bool)`

 SetPaidAtNil sets the value for PaidAt to be an explicit nil

### UnsetPaidAt
`func (o *TransactionErrorEvent) UnsetPaidAt()`

UnsetPaidAt ensures that no value is present for PaidAt, not even an explicit nil
### GetRefundEndToEndId

`func (o *TransactionErrorEvent) GetRefundEndToEndId() string`

GetRefundEndToEndId returns the RefundEndToEndId field if non-nil, zero value otherwise.

### GetRefundEndToEndIdOk

`func (o *TransactionErrorEvent) GetRefundEndToEndIdOk() (*string, bool)`

GetRefundEndToEndIdOk returns a tuple with the RefundEndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundEndToEndId

`func (o *TransactionErrorEvent) SetRefundEndToEndId(v string)`

SetRefundEndToEndId sets RefundEndToEndId field to given value.


### SetRefundEndToEndIdNil

`func (o *TransactionErrorEvent) SetRefundEndToEndIdNil(b bool)`

 SetRefundEndToEndIdNil sets the value for RefundEndToEndId to be an explicit nil

### UnsetRefundEndToEndId
`func (o *TransactionErrorEvent) UnsetRefundEndToEndId()`

UnsetRefundEndToEndId ensures that no value is present for RefundEndToEndId, not even an explicit nil
### GetRefundAmount

`func (o *TransactionErrorEvent) GetRefundAmount() string`

GetRefundAmount returns the RefundAmount field if non-nil, zero value otherwise.

### GetRefundAmountOk

`func (o *TransactionErrorEvent) GetRefundAmountOk() (*string, bool)`

GetRefundAmountOk returns a tuple with the RefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundAmount

`func (o *TransactionErrorEvent) SetRefundAmount(v string)`

SetRefundAmount sets RefundAmount field to given value.


### SetRefundAmountNil

`func (o *TransactionErrorEvent) SetRefundAmountNil(b bool)`

 SetRefundAmountNil sets the value for RefundAmount to be an explicit nil

### UnsetRefundAmount
`func (o *TransactionErrorEvent) UnsetRefundAmount()`

UnsetRefundAmount ensures that no value is present for RefundAmount, not even an explicit nil
### GetRefundStatus

`func (o *TransactionErrorEvent) GetRefundStatus() string`

GetRefundStatus returns the RefundStatus field if non-nil, zero value otherwise.

### GetRefundStatusOk

`func (o *TransactionErrorEvent) GetRefundStatusOk() (*string, bool)`

GetRefundStatusOk returns a tuple with the RefundStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundStatus

`func (o *TransactionErrorEvent) SetRefundStatus(v string)`

SetRefundStatus sets RefundStatus field to given value.


### SetRefundStatusNil

`func (o *TransactionErrorEvent) SetRefundStatusNil(b bool)`

 SetRefundStatusNil sets the value for RefundStatus to be an explicit nil

### UnsetRefundStatus
`func (o *TransactionErrorEvent) UnsetRefundStatus()`

UnsetRefundStatus ensures that no value is present for RefundStatus, not even an explicit nil
### GetRefundReason

`func (o *TransactionErrorEvent) GetRefundReason() string`

GetRefundReason returns the RefundReason field if non-nil, zero value otherwise.

### GetRefundReasonOk

`func (o *TransactionErrorEvent) GetRefundReasonOk() (*string, bool)`

GetRefundReasonOk returns a tuple with the RefundReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundReason

`func (o *TransactionErrorEvent) SetRefundReason(v string)`

SetRefundReason sets RefundReason field to given value.


### SetRefundReasonNil

`func (o *TransactionErrorEvent) SetRefundReasonNil(b bool)`

 SetRefundReasonNil sets the value for RefundReason to be an explicit nil

### UnsetRefundReason
`func (o *TransactionErrorEvent) UnsetRefundReason()`

UnsetRefundReason ensures that no value is present for RefundReason, not even an explicit nil
### GetRefundDescription

`func (o *TransactionErrorEvent) GetRefundDescription() string`

GetRefundDescription returns the RefundDescription field if non-nil, zero value otherwise.

### GetRefundDescriptionOk

`func (o *TransactionErrorEvent) GetRefundDescriptionOk() (*string, bool)`

GetRefundDescriptionOk returns a tuple with the RefundDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundDescription

`func (o *TransactionErrorEvent) SetRefundDescription(v string)`

SetRefundDescription sets RefundDescription field to given value.


### SetRefundDescriptionNil

`func (o *TransactionErrorEvent) SetRefundDescriptionNil(b bool)`

 SetRefundDescriptionNil sets the value for RefundDescription to be an explicit nil

### UnsetRefundDescription
`func (o *TransactionErrorEvent) UnsetRefundDescription()`

UnsetRefundDescription ensures that no value is present for RefundDescription, not even an explicit nil
### GetRefundedAt

`func (o *TransactionErrorEvent) GetRefundedAt() time.Time`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *TransactionErrorEvent) GetRefundedAtOk() (*time.Time, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *TransactionErrorEvent) SetRefundedAt(v time.Time)`

SetRefundedAt sets RefundedAt field to given value.


### SetRefundedAtNil

`func (o *TransactionErrorEvent) SetRefundedAtNil(b bool)`

 SetRefundedAtNil sets the value for RefundedAt to be an explicit nil

### UnsetRefundedAt
`func (o *TransactionErrorEvent) UnsetRefundedAt()`

UnsetRefundedAt ensures that no value is present for RefundedAt, not even an explicit nil
### GetQrCodeBase64

`func (o *TransactionErrorEvent) GetQrCodeBase64() string`

GetQrCodeBase64 returns the QrCodeBase64 field if non-nil, zero value otherwise.

### GetQrCodeBase64Ok

`func (o *TransactionErrorEvent) GetQrCodeBase64Ok() (*string, bool)`

GetQrCodeBase64Ok returns a tuple with the QrCodeBase64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCodeBase64

`func (o *TransactionErrorEvent) SetQrCodeBase64(v string)`

SetQrCodeBase64 sets QrCodeBase64 field to given value.


### SetQrCodeBase64Nil

`func (o *TransactionErrorEvent) SetQrCodeBase64Nil(b bool)`

 SetQrCodeBase64Nil sets the value for QrCodeBase64 to be an explicit nil

### UnsetQrCodeBase64
`func (o *TransactionErrorEvent) UnsetQrCodeBase64()`

UnsetQrCodeBase64 ensures that no value is present for QrCodeBase64, not even an explicit nil
### GetCreatedAt

`func (o *TransactionErrorEvent) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *TransactionErrorEvent) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *TransactionErrorEvent) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *TransactionErrorEvent) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TransactionErrorEvent) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TransactionErrorEvent) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetCallbackUrl

`func (o *TransactionErrorEvent) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *TransactionErrorEvent) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *TransactionErrorEvent) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.


### SetCallbackUrlNil

`func (o *TransactionErrorEvent) SetCallbackUrlNil(b bool)`

 SetCallbackUrlNil sets the value for CallbackUrl to be an explicit nil

### UnsetCallbackUrl
`func (o *TransactionErrorEvent) UnsetCallbackUrl()`

UnsetCallbackUrl ensures that no value is present for CallbackUrl, not even an explicit nil
### GetAmount

`func (o *TransactionErrorEvent) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *TransactionErrorEvent) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *TransactionErrorEvent) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetServiceFeeCharged

`func (o *TransactionErrorEvent) GetServiceFeeCharged() float32`

GetServiceFeeCharged returns the ServiceFeeCharged field if non-nil, zero value otherwise.

### GetServiceFeeChargedOk

`func (o *TransactionErrorEvent) GetServiceFeeChargedOk() (*float32, bool)`

GetServiceFeeChargedOk returns a tuple with the ServiceFeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeCharged

`func (o *TransactionErrorEvent) SetServiceFeeCharged(v float32)`

SetServiceFeeCharged sets ServiceFeeCharged field to given value.

### HasServiceFeeCharged

`func (o *TransactionErrorEvent) HasServiceFeeCharged() bool`

HasServiceFeeCharged returns a boolean if a field has been set.

### GetReceiverAccountNumber

`func (o *TransactionErrorEvent) GetReceiverAccountNumber() string`

GetReceiverAccountNumber returns the ReceiverAccountNumber field if non-nil, zero value otherwise.

### GetReceiverAccountNumberOk

`func (o *TransactionErrorEvent) GetReceiverAccountNumberOk() (*string, bool)`

GetReceiverAccountNumberOk returns a tuple with the ReceiverAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverAccountNumber

`func (o *TransactionErrorEvent) SetReceiverAccountNumber(v string)`

SetReceiverAccountNumber sets ReceiverAccountNumber field to given value.

### HasReceiverAccountNumber

`func (o *TransactionErrorEvent) HasReceiverAccountNumber() bool`

HasReceiverAccountNumber returns a boolean if a field has been set.

### SetReceiverAccountNumberNil

`func (o *TransactionErrorEvent) SetReceiverAccountNumberNil(b bool)`

 SetReceiverAccountNumberNil sets the value for ReceiverAccountNumber to be an explicit nil

### UnsetReceiverAccountNumber
`func (o *TransactionErrorEvent) UnsetReceiverAccountNumber()`

UnsetReceiverAccountNumber ensures that no value is present for ReceiverAccountNumber, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


