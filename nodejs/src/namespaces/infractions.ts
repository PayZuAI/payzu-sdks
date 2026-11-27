import type { Defense, DefenseListItem, InfractionDetail, InfractionsApi } from '../generated/index.js';
import { invoke, withJsonMediaType } from '../http.js';
import type { InfractionList, ListInfractionsParams } from '../types.js';

export class InfractionsNamespace {
  constructor(private readonly api: InfractionsApi) {}

  list(filters: ListInfractionsParams = {}): Promise<InfractionList> {
    return invoke(() => this.api.getInfractions(withJsonMediaType(filters)));
  }

  get(id: string): Promise<InfractionDetail> {
    return invoke(() => this.api.getInfractionsById(withJsonMediaType({ id })));
  }

  defenses(infractionId: string): Promise<DefenseListItem[]> {
    return invoke(() => this.api.getInfractionsDefenses(withJsonMediaType({ id: infractionId })));
  }

  defense(infractionId: string, defenseId: string): Promise<Defense> {
    return invoke(() => this.api.getInfractionsDefenseById(withJsonMediaType({ infractionId, defenseId })));
  }

  createDefense(infractionId: string, defense: string, files?: Blob[]): Promise<Defense> {
    return invoke(() => this.api.postInfractionsDefense({ id: infractionId, defense, files }));
  }
}
