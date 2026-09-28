import type {
  BankStatement,
  BankStatementListResponse,
  DepositPending,
  DepositPendingListResponse,
  ReportJob,
  ReportsApi,
  Summary,
} from '../generated/index.js';
import { invoke, withJsonMediaType } from '../http.js';
import type {
  CreateReportParams,
  ListBankStatementsParams,
  ListPendingDepositsParams,
  ListReportsParams,
  ListTransactionsParams,
  ReportDownload,
  ReportList,
  SummaryParams,
  TransactionDetail,
  TransactionList,
} from '../types.js';

export class ReportsNamespace {
  constructor(private readonly api: ReportsApi) {}

  create(params: CreateReportParams): Promise<ReportJob> {
    return invoke(() => this.api.postUserReport({ postUserReportRequest: params }));
  }

  get(id: string): Promise<ReportJob> {
    return invoke(() => this.api.getUserReport(withJsonMediaType({ id })));
  }

  list(filters: ListReportsParams = {}): Promise<ReportList> {
    return invoke(() => this.api.listUserReports(withJsonMediaType(filters)));
  }

  download(id: string): Promise<ReportDownload> {
    return invoke(() => this.api.downloadUserReport(withJsonMediaType({ id })));
  }

  transactions(filters: ListTransactionsParams = {}): Promise<TransactionList> {
    return invoke(() => this.api.getUserTransactions(withJsonMediaType(filters)));
  }

  transaction(id: string): Promise<TransactionDetail> {
    return invoke(() => this.api.getUserTransactionById(withJsonMediaType({ id })));
  }

  bankStatements(filters: ListBankStatementsParams): Promise<BankStatementListResponse> {
    return invoke(() => this.api.getUserBankStatements(filters));
  }

  bankStatement(id: string): Promise<BankStatement> {
    return invoke(() => this.api.getUserBankStatement({ id }));
  }

  pendingDeposits(filters: ListPendingDepositsParams = {}): Promise<DepositPendingListResponse> {
    return invoke(() => this.api.getUserDepositPending(filters));
  }

  pendingDeposit(id: string): Promise<DepositPending> {
    return invoke(() => this.api.getUserDepositPendingById({ id }));
  }

  summary(filters: SummaryParams = {}): Promise<Summary> {
    return invoke(() => this.api.getUserSummary(filters));
  }
}
