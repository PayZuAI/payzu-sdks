import type {
  RotateSecretResponse,
  SentWebhooksQuantity,
  Webhook,
  WebhookListResponse,
  WebhooksApi,
  WebhookWithSecret,
} from '../generated/index.js';
import { invoke } from '../http.js';
import type { CreateWebhookParams, ListWebhooksParams, SentWebhook, UpdateWebhookParams } from '../types.js';

export class WebhooksNamespace {
  constructor(private readonly api: WebhooksApi) {}

  create(params: CreateWebhookParams): Promise<WebhookWithSecret> {
    return invoke(() => this.api.postUserWebhook({ webhookCreateRequest: params }));
  }

  list(filters: ListWebhooksParams = {}): Promise<WebhookListResponse> {
    return invoke(() => this.api.getUserWebhooks(filters));
  }

  get(id: string): Promise<Webhook> {
    return invoke(() => this.api.getUserWebhook({ id }));
  }

  update(id: string, params: UpdateWebhookParams): Promise<Webhook> {
    return invoke(() => this.api.patchUserWebhook({ id, webhookUpdateRequest: params }));
  }

  delete(id: string): Promise<void> {
    return invoke(() => this.api.deleteUserWebhook({ id }));
  }

  rotateSecret(id: string): Promise<RotateSecretResponse> {
    return invoke(() => this.api.postUserWebhookRotateSecret({ id }));
  }

  sentQuantity(webhookId?: string): Promise<SentWebhooksQuantity> {
    return invoke(() => this.api.getUserWebhooksSentQuantity({ webhookId }));
  }

  sent(id: string, callbackId: string): Promise<SentWebhook> {
    return invoke(() => this.api.getUserWebhookSentDetail({ id, callbackId }));
  }
}
