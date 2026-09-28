import type { KeysAndDICTApi, PixKeyInfo, Transaction, WithdrawalsApi } from '../generated/index.js';
import { invoke, withJsonMediaType } from '../http.js';
import type {
  CreateWithdrawParams,
  GetWithdrawParams,
  Proof,
  ProofOptions,
  QrCodeRead,
  QrCodeWithdrawParams,
} from '../types.js';

export class WithdrawNamespace {
  constructor(
    private readonly api: WithdrawalsApi,
    private readonly keys: KeysAndDICTApi,
  ) {}

  create(params: CreateWithdrawParams): Promise<Transaction> {
    return invoke(() => this.api.postWithdraw({ postWithdrawRequest: params }));
  }

  get(params: GetWithdrawParams): Promise<Transaction> {
    return invoke(() => this.api.getWithdraw(withJsonMediaType(params)));
  }

  proof(id: string, options: ProofOptions = {}): Promise<Proof> {
    return invoke(() => this.api.getWithdrawProof(withJsonMediaType({ id, ...options })));
  }

  fromQrCode(params: QrCodeWithdrawParams): Promise<Transaction> {
    return invoke(() => this.api.postWithdrawQrcode({ postWithdrawQrcodeRequest: params }));
  }

  readQrCode(emv: string): Promise<QrCodeRead> {
    return invoke(() => this.keys.postPixQrcodeRead({ postPixQrcodeReadRequest: { emv } }));
  }

  pixKey(pixKey: string): Promise<PixKeyInfo> {
    return invoke(() => this.keys.getPixKey({ pixKey }));
  }
}
