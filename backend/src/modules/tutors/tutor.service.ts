import { NotFoundError } from "../../common/errors/app-error.js";
import { createAuditLog } from "../../common/utils/audit.js";
import { getPaginationMeta } from "../../common/utils/pagination.js";
import { markPagesStale } from "../../common/utils/stale-pages.js";
import { toTutorDto } from "./tutor.mapper.js";
import { TutorRepository } from "./tutor.repository.js";
import type { TutorPayload } from "./tutor.types.js";

export class TutorService {
  constructor(private readonly repository = new TutorRepository()) {}

  async list(query: { page: number; limit: number; search?: string; curriculum?: string; subject?: string; grade?: string; featured?: boolean; status?: string; }) {
    const [items, total] = await this.repository.findMany(query);
    return {
      items: items.map(toTutorDto),
      meta: getPaginationMeta(query.page, query.limit, total)
    };
  }

  async getBySlug(slug: string) {
    const tutor = await this.repository.findBySlug(slug);
    if (!tutor) {
      throw new NotFoundError("Tutor not found");
    }

    return toTutorDto(tutor);
  }

  async create(payload: TutorPayload, actorUserId?: string) {
    const tutor = await this.repository.create(payload);
    await markPagesStale({ subject: tutor.subject, curriculum: tutor.curriculum });
    await createAuditLog({ actorUserId, action: "CREATE", entityType: "Tutor", entityId: tutor.id, afterJson: toTutorDto(tutor) });
    return toTutorDto(tutor);
  }

  async update(slug: string, payload: Partial<TutorPayload>, actorUserId?: string) {
    const before = await this.repository.findBySlug(slug);
    if (!before) {
      throw new NotFoundError("Tutor not found");
    }

    const tutor = await this.repository.update(slug, payload);
    await markPagesStale({ subject: tutor.subject, curriculum: tutor.curriculum });
    await createAuditLog({ actorUserId, action: "UPDATE", entityType: "Tutor", entityId: tutor.id, beforeJson: toTutorDto(before), afterJson: toTutorDto(tutor) });
    return toTutorDto(tutor);
  }

  async remove(slug: string, actorUserId?: string) {
    const before = await this.repository.findBySlug(slug);
    if (!before) {
      throw new NotFoundError("Tutor not found");
    }

    const deleted = await this.repository.delete(slug);
    await markPagesStale({ subject: before.subject, curriculum: before.curriculum });
    await createAuditLog({ actorUserId, action: "DELETE", entityType: "Tutor", entityId: deleted.id, beforeJson: toTutorDto(before) });
    return toTutorDto(deleted);
  }
}
