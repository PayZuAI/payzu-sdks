import type { KeysAndDICTApi, PixKeyInfo } from '../generated/index.js';
import { invoke } from '../http.js';
import type { QrCodeRead } from '../types.js';

export class KeysNamespace {
  constructor(private readonly api: KeysAndDICTApi) {}

  lookup(pixKey: string): Promise<PixKeyInfo> {
    return invoke(() => this.api.getPixKey({ pixKey }));
  }

  readQrCode(emv: string): Promise<QrCodeRead> {
    return invoke(() => this.api.postPixQrcodeRead({ postPixQrcodeReadRequest: { emv } }));
  }
}
