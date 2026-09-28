import type { RefundsApi, TransactionWithRefunds } from '../generated/index.js';
import { invoke } from '../http.js';
import type { RefundParams } from '../types.js';

export class RefundsNamespace {
  constructor(private readonly api: RefundsApi) {}

  create(transactionId: string, params: RefundParams = {}): Promise<TransactionWithRefunds> {
    return invoke(() => this.api.postRefund({ transactionId, refundRequest: params }));
  }
}
