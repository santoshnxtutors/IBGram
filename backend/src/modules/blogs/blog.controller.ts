import { createApiResponse } from "../../common/utils/api-response.js";
import { BlogService } from "./blog.service.js";

const blogService = new BlogService();

export const blogController = {
  async list(req: any, res: any) {
    const result = await blogService.list(req.query);
    res.json(createApiResponse("Blogs fetched", result.items, result.meta));
  },
  async getBySlug(req: any, res: any) {
    const blog = await blogService.getBySlug(req.params.slug);
    res.json(createApiResponse("Blog fetched", blog));
  },
  async create(req: any, res: any) {
    const blog = await blogService.create(req.body, req.auth?.userId);
    res.status(201).json(createApiResponse("Blog created", blog));
  },
  async update(req: any, res: any) {
    const blog = await blogService.update(req.params.slug, req.body, req.auth?.userId);
    res.json(createApiResponse("Blog updated", blog));
  },
  async remove(req: any, res: any) {
    const blog = await blogService.remove(req.params.slug, req.auth?.userId);
    res.json(createApiResponse("Blog deleted", blog));
  }
};
