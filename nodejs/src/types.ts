import type {
  CallbackListResponse,
  GetUserBankStatementsRequest,
  GetUserDepositPendingRequest,
  GetUserSummaryRequest,
  GetUserWebhooksRequest,
  RefundRequest,
  SentWebhookDetailResponse,
  WebhookCreateRequest,
  WebhookUpdateRequest,
  DownloadUserReport200Response,
  GetInfractionsRequest,
  GetInternalTransferRequest,
  GetPixRequest,
  ProofResponse,
  GetProofRequest,
  GetUser200Response,
  GetUserBalance200Response,
  GetUserCallbacksRequest,
  GetUserTransactionById200Response,
  GetUserTransactions200Response,
  GetUserTransactionsRequest,
  GetWithdrawRequest,
  InfractionListResponse,
  ListUserReports200Response,
  ListUserReportsRequest,
  PostInternalTransferRequest,
  PostPixRequest,
  PostUserReportRequest,
  PostWithdrawQrcodeRequest,
  PostWithdrawRequest,
  QRCodeReadResponse,
  ResendUserCallbackSingle200Response,
  ResendUserCallbacks200Response,
  ResendUserCallbacksRequest,
  ResendWebhookCallbacksRequest,
} from './generated/index.js';

export type Account = GetUser200Response;
export type Balance = GetUserBalance200Response;
export type Proof = ProofResponse;
export type TransactionList = GetUserTransactions200Response;
export type TransactionDetail = GetUserTransactionById200Response;
export type ReportList = ListUserReports200Response;
export type ReportDownload = DownloadUserReport200Response;
export type QrCodeRead = QRCodeReadResponse;
export type CallbackList = CallbackListResponse;
export type InfractionList = InfractionListResponse;
export type ResendCallbackResult = ResendUserCallbackSingle200Response;
export type ResendCallbacksResult = ResendUserCallbacks200Response;
export type CreateChargeParams = PostPixRequest;
export type CreateWithdrawParams = PostWithdrawRequest;
export type QrCodeWithdrawParams = PostWithdrawQrcodeRequest;
export type CreateInternalTransferParams = PostInternalTransferRequest;
export type CreateReportParams = PostUserReportRequest;
export type ResendCallbacksParams = ResendUserCallbacksRequest;
export type GetChargeParams = Omit<GetPixRequest, 'contentType'>;
export type GetWithdrawParams = Omit<GetWithdrawRequest, 'contentType'>;
export type GetInternalTransferParams = Omit<GetInternalTransferRequest, 'contentType'>;
export type ListTransactionsParams = Omit<GetUserTransactionsRequest, 'contentType'>;
export type ListReportsParams = Omit<ListUserReportsRequest, 'contentType'>;
export type ListCallbacksParams = Omit<GetUserCallbacksRequest, 'contentType'>;
export type ListInfractionsParams = Omit<GetInfractionsRequest, 'contentType'>;
export type ProofOptions = Omit<GetProofRequest, 'contentType' | 'id'>;
export type RefundParams = RefundRequest;
export type CreateWebhookParams = WebhookCreateRequest;
export type UpdateWebhookParams = WebhookUpdateRequest;
export type ListWebhooksParams = GetUserWebhooksRequest;
export type SentWebhook = SentWebhookDetailResponse;
export type ListBankStatementsParams = GetUserBankStatementsRequest;
export type ListPendingDepositsParams = GetUserDepositPendingRequest;
export type SummaryParams = GetUserSummaryRequest;
export type ResendWebhooksParams = ResendWebhookCallbacksRequest;
