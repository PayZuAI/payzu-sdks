# KeysAndDICTApi

All URIs are relative to *https://api.pix.payzu.com.br/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPixKey**](KeysAndDICTApi.md#getpixkey) | **GET** /pix/key | Consulta de chave Pix no DICT |
| [**postPixQrcodeRead**](KeysAndDICTApi.md#postpixqrcodereadoperation) | **POST** /pix/qrcode/read | Ler QR Code |



## getPixKey

> PixKeyInfo getPixKey(pixKey)

Consulta de chave Pix no DICT

Consulta o DICT (Diretório de Identificadores de Contas Transacionais) para obter informações sobre uma chave Pix antes de enviar um pagamento. Retorna os dados do titular da chave e a instituição financeira associada.

### Example

```ts
import {
  Configuration,
  KeysAndDICTApi,
} from 'payzu-pix';
import type { GetPixKeyRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KeysAndDICTApi(config);

  const body = {
    // string | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP).
    pixKey: example@payzu.com.br,
  } satisfies GetPixKeyRequest;

  try {
    const data = await api.getPixKey(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pixKey** | `string` | A chave Pix a consultar (CPF, CNPJ, email, telefone ou EVP). | [Defaults to `undefined`] |

### Return type

[**PixKeyInfo**](PixKeyInfo.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chave Pix encontrada |  -  |
| **400** | Formato de chave Pix inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **404** | Chave Pix não encontrada no DICT |  -  |
| **422** | Operação recusada |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPixQrcodeRead

> QRCodeReadResponse postPixQrcodeRead(postPixQrcodeReadRequest)

Ler QR Code

Decodifica e extrai informações de um QR Code Pix (formato EMV) antes de efetuar um pagamento. Retorna os dados interpretados, incluindo detalhes do recebedor, valor (se presente) e outros metadados do QR Code. PayZu processa QR Code dinâmico e estático.

### Example

```ts
import {
  Configuration,
  KeysAndDICTApi,
} from 'payzu-pix';
import type { PostPixQrcodeReadOperationRequest } from 'payzu-pix';

async function example() {
  console.log("🚀 Testing payzu-pix SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KeysAndDICTApi(config);

  const body = {
    // PostPixQrcodeReadRequest
    postPixQrcodeReadRequest: ...,
  } satisfies PostPixQrcodeReadOperationRequest;

  try {
    const data = await api.postPixQrcodeRead(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **postPixQrcodeReadRequest** | [PostPixQrcodeReadRequest](PostPixQrcodeReadRequest.md) |  | |

### Return type

[**QRCodeReadResponse**](QRCodeReadResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | QR Code decodificado com sucesso |  -  |
| **400** | Formato de QR Code inválido |  -  |
| **401** | Falha de autenticação |  -  |
| **403** | Operação não permitida |  -  |
| **410** | QR Code vencido ou removido |  -  |
| **424** | Falha na instituição financeira |  -  |
| **429** | Limite de requisições excedido |  -  |
| **500** | Erro interno |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

