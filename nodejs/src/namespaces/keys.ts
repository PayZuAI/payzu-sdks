import type { DictConsultResponse, KeysAndDICTApi, PixKeyInfo } from '../generated/index.js';
import { invoke } from '../http.js';
import type { QrCodeRead } from '../types.js';

export const KEYS_DICT_DEPRECATION_CODE = 'PAYZU_KEYS_DICT';
export const KEYS_DICT_DEPRECATION_MESSAGE =
  'payzu.keys.dict() está descontinuado: a API não tem mais GET /user/dict e responde 404. Use payzu.keys.lookup(), que consulta GET /pix/key.';

const emittedDeprecations = new Set<string>();

function warnDeprecatedOnce(code: string, message: string): void {
  if (emittedDeprecations.has(code)) return;
  emittedDeprecations.add(code);
  globalThis.process?.emitWarning?.(message, { type: 'DeprecationWarning', code });
}

export class KeysNamespace {
  constructor(private readonly api: KeysAndDICTApi) {}

  lookup(pixKey: string): Promise<PixKeyInfo> {
    return invoke(() => this.api.getPixKey({ pixKey }));
  }

  /**
   * @deprecated A API não tem mais `GET /user/dict` e responde 404. Use {@link KeysNamespace.lookup},
   * que consulta `GET /pix/key` e devolve o titular com agência e conta. Sai na próxima versão major.
   */
  dict(key: string): Promise<DictConsultResponse> {
    warnDeprecatedOnce(KEYS_DICT_DEPRECATION_CODE, KEYS_DICT_DEPRECATION_MESSAGE);
    return invoke(() => this.api.getUserDict({ key }));
  }

  readQrCode(emv: string): Promise<QrCodeRead> {
    return invoke(() => this.api.postPixQrcodeRead({ postPixQrcodeReadRequest: { emv } }));
  }
}
