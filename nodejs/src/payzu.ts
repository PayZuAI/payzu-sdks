import {
  AccountApi,
  CallbacksApi,
  InfractionsApi,
  InternalTransferApi,
  KeysAndDICTApi,
  PixOperationsApi,
  RefundsApi,
  ReportsApi,
  WebhooksApi,
  WithdrawalsApi,
} from './generated/index.js';
import { createConfiguration, type PayZuOptions } from './configuration.js';
import { AccountNamespace } from './namespaces/account.js';
import { CallbacksNamespace } from './namespaces/callbacks.js';
import { InfractionsNamespace } from './namespaces/infractions.js';
import { InternalTransferNamespace } from './namespaces/internal-transfer.js';
import { KeysNamespace } from './namespaces/keys.js';
import { PixNamespace } from './namespaces/pix.js';
import { RefundsNamespace } from './namespaces/refunds.js';
import { ReportsNamespace } from './namespaces/reports.js';
import { WebhooksNamespace } from './namespaces/webhooks.js';
import { WithdrawNamespace } from './namespaces/withdraw.js';

export class PayZu {
  readonly pix: PixNamespace;
  readonly withdraw: WithdrawNamespace;
  readonly account: AccountNamespace;
  readonly reports: ReportsNamespace;
  readonly callbacks: CallbacksNamespace;
  readonly infractions: InfractionsNamespace;
  readonly internalTransfer: InternalTransferNamespace;
  readonly keys: KeysNamespace;
  readonly refunds: RefundsNamespace;
  readonly webhooks: WebhooksNamespace;

  constructor(options: PayZuOptions) {
    const configuration = createConfiguration(options);
    this.pix = new PixNamespace(new PixOperationsApi(configuration));
    const keysApi = new KeysAndDICTApi(configuration);
    this.withdraw = new WithdrawNamespace(new WithdrawalsApi(configuration), keysApi);
    this.account = new AccountNamespace(new AccountApi(configuration));
    this.reports = new ReportsNamespace(new ReportsApi(configuration));
    this.callbacks = new CallbacksNamespace(new CallbacksApi(configuration));
    this.infractions = new InfractionsNamespace(new InfractionsApi(configuration));
    this.internalTransfer = new InternalTransferNamespace(new InternalTransferApi(configuration));
    this.keys = new KeysNamespace(keysApi);
    this.refunds = new RefundsNamespace(new RefundsApi(configuration));
    this.webhooks = new WebhooksNamespace(new WebhooksApi(configuration));
  }
}
