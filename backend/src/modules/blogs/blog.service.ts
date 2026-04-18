import { NotFoundError } from "../../common/errors/app-error.js";
import { createAuditLog } from "../../common/utils/audit.js";
import { getPaginationMeta } from "../../common/utils/pagination.js";
import { markPagesStale } from "../../common/utils/stale-pages.js";
import { toBlogDto } from "./blog.mapper.js";
import { BlogRepository } from "./blog.repository.js";

export class BlogService {
  constructor(private readonly repository = new BlogRepository()) {}

  async list(query: any) {
    const [items, total] = await this.repository.findMany(query);
    return { items: items.map(toBlogDto), meta: getPaginationMeta(query.page, query.limit, total) };
  }

  async getBySlug(slug: string) {
    const blog = await this.repository.findBySlug(slug);
    if (!blog) throw new NotFoundError("Blog not found");
    return toBlogDto(blog);
  }

  async create(data: any, actorUserId?: string) {
    const blog = await this.repository.create(data);
    await markPagesStale({ locationId: blog.locationId ?? undefined, subject: blog.subject ?? undefined, curriculum: blog.curriculum ?? undefined });
    await createAuditLog({ actorUserId, action: "CREATE", entityType: "Blog", entityId: blog.id, afterJson: blog });
    return toBlogDto(blog);
  }

  async update(slug: string, data: any, actorUserId?: string) {
    const before = await this.repository.findBySlug(slug);
    if (!before) throw new NotFoundError("Blog not found");
    const blog = await this.repository.update(slug, data);
    await markPagesStale({ locationId: blog.locationId ?? undefined, subject: blog.subject ?? undefined, curriculum: blog.curriculum ?? undefined });
    await createAuditLog({ actorUserId, action: "UPDATE", entityType: "Blog", entityId: blog.id, beforeJson: before, afterJson: blog });
    return toBlogDto(blog);
  }

  async remove(slug: string, actorUserId?: string) {
    const before = await this.repository.findBySlug(slug);
    if (!before) throw new NotFoundError("Blog not found");
    const blog = await this.repository.delete(slug);
    await createAuditLog({ actorUserId, action: "DELETE", entityType: "Blog", entityId: blog.id, beforeJson: before });
    return toBlogDto(blog);
  }
}
