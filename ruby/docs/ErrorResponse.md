# PayZuPix::ErrorResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | Marcador fixo de resposta de erro. |  |
| **error** | **String** | Nome do status HTTP correspondente. |  |
| **error_code** | **String** | Código de erro estável e legível por máquina, quando disponível. |  |
| **message** | **String** | Mensagem de erro legível. |  |
| **status_code** | **Integer** | Código de status HTTP. |  |
| **request_id** | **String** | ID único de correlação da requisição (cuid). |  |
| **details** | [**Array&lt;ApiErrorDetailsInner&gt;**](ApiErrorDetailsInner.md) | Erros de validação por campo, quando aplicável. | [optional] |
| **retry_after_seconds** | **Integer** | Segundos a aguardar antes de tentar novamente. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ErrorResponse.new(
  status: ERROR,
  error: Bad Request,
  error_code: PZV001,
  message: Dados inválidos. Verifique os campos informados.,
  status_code: 400,
  request_id: cmbz0f8qk0001js04hp3e2n0f,
  details: null,
  retry_after_seconds: 30
)
```

