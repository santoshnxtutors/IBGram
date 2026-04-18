import { NotFoundError } from "../../common/errors/app-error.js";
import { createAuditLog } from "../../common/utils/audit.js";
import { getPaginationMeta } from "../../common/utils/pagination.js";
import { markPagesStale } from "../../common/utils/stale-pages.js";
import { LocationRepository } from "./location.repository.js";

export class LocationService {
  constructor(private readonly repository = new LocationRepository()) {}

  async list(query: any) {
    const [items, total] = await this.repository.findMany(query);
    return { items, meta: getPaginationMeta(query.page, query.limit, total) };
  }

  tree() {
    return this.repository.tree();
  }

  search(query: string, limit: number) {
    return this.repository.search(query, limit);
  }

  async getById(id: string) {
    const location = await this.repository.findById(id);
    if (!location) throw new NotFoundError("Location not found");
    return location;
  }

  async create(data: any, actorUserId?: string) {
    const location = await this.repository.create(data);
    await createAuditLog({ actorUserId, action: "CREATE", entityType: "Location", entityId: location.id, afterJson: location });
    return location;
  }

  async update(id: string, data: any, actorUserId?: string) {
    const before = await this.repository.findById(id);
    if (!before) throw new NotFoundError("Location not found");
    const location = await this.repository.update(id, data);
    await markPagesStale({ locationId: location.id });
    await createAuditLog({ actorUserId, action: "UPDATE", entityType: "Location", entityId: location.id, beforeJson: before, afterJson: location });
    return location;
  }

  async remove(id: string, actorUserId?: string) {
    const before = await this.repository.findById(id);
    if (!before) throw new NotFoundError("Location not found");
    const location = await this.repository.delete(id);
    await markPagesStale({ locationId: location.id });
    await createAuditLog({ actorUserId, action: "DELETE", entityType: "Location", entityId: location.id, beforeJson: before });
    return location;
  }
}
