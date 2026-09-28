import type {
  CallbackDetail,
  CallbacksApi,
  CallbackSecretResponse,
  EnqueuedCallback,
  RotateCallbackSecretResponse,
} from '../generated/index.js';
import { invoke, withJsonMediaType } from '../http.js';
import type {
  CallbackList,
  ListCallbacksParams,
  ResendWebhooksParams,
  ResendCallbackResult,
  ResendCallbacksParams,
  ResendCallbacksResult,
} from '../types.js';

export class CallbacksNamespace {
  constructor(private readonly api: CallbacksApi) {}

  list(filters: ListCallbacksParams = {}): Promise<CallbackList> {
    return invoke(() => this.api.getUserCallbacks(withJsonMediaType(filters)));
  }

  get(id: string): Promise<CallbackDetail> {
    return invoke(() => this.api.getUserCallbackById(withJsonMediaType({ id })));
  }

  resend(transactionId: string): Promise<ResendCallbackResult> {
    return invoke(() => this.api.resendUserCallbackSingle(withJsonMediaType({ transactionId })));
  }

  resendBatch(params: ResendCallbacksParams): Promise<ResendCallbacksResult> {
    return invoke(() => this.api.resendUserCallbacks({ resendUserCallbacksRequest: params }));
  }

  resendWebhooks(params: ResendWebhooksParams): Promise<EnqueuedCallback> {
    return invoke(() => this.api.resendUserCallbacksWebhooks({ resendWebhookCallbacksRequest: params }));
  }

  resendByWebhook(webhookId: string): Promise<EnqueuedCallback> {
    return invoke(() => this.api.resendUserCallbacksWebhook({ webhookId }));
  }

  createSecret(): Promise<CallbackSecretResponse> {
    return invoke(() => this.api.createUserCallbackSecret());
  }

  rotateSecret(): Promise<RotateCallbackSecretResponse> {
    return invoke(() => this.api.rotateUserCallbackSecret());
  }
}
