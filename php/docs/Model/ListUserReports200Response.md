# ListUserReports200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Quantidade de solicitações de relatório do usuário que atendem aos filtros. | [optional]
**pages** | **int** | Número de páginas para o limit informado, calculado a partir de total arredondado para cima. | [optional]
**reports** | [**\PayZu\Pix\Model\ReportJob[]**](ReportJob.md) | Solicitações de relatório da página pedida, com id, status e datas. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
