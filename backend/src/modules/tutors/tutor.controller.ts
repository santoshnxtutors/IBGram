import { createApiResponse } from "../../common/utils/api-response.js";
import { TutorService } from "./tutor.service.js";

const tutorService = new TutorService();

export const tutorController = {
  async list(req: any, res: any) {
    const result = await tutorService.list(req.query);
    res.json(createApiResponse("Tutors fetched", result.items, result.meta));
  },
  async getBySlug(req: any, res: any) {
    const tutor = await tutorService.getBySlug(req.params.slug);
    res.json(createApiResponse("Tutor fetched", tutor));
  },
  async create(req: any, res: any) {
    const tutor = await tutorService.create(req.body, req.auth?.userId);
    res.status(201).json(createApiResponse("Tutor created", tutor));
  },
  async update(req: any, res: any) {
    const tutor = await tutorService.update(req.params.slug, req.body, req.auth?.userId);
    res.json(createApiResponse("Tutor updated", tutor));
  },
  async remove(req: any, res: any) {
    const tutor = await tutorService.remove(req.params.slug, req.auth?.userId);
    res.json(createApiResponse("Tutor deleted", tutor));
  }
};
