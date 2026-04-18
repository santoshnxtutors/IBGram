import { createApiResponse } from "../../common/utils/api-response.js";
import { LocationService } from "./location.service.js";

const locationService = new LocationService();

export const locationController = {
  async list(req: any, res: any) {
    const result = await locationService.list(req.query);
    res.json(createApiResponse("Locations fetched", result.items, result.meta));
  },
  async tree(_req: any, res: any) {
    const tree = await locationService.tree();
    res.json(createApiResponse("Location tree fetched", tree));
  },
  async search(req: any, res: any) {
    const items = await locationService.search(req.query.q, req.query.limit);
    res.json(createApiResponse("Location search fetched", items));
  },
  async create(req: any, res: any) {
    const location = await locationService.create(req.body, req.auth?.userId);
    res.status(201).json(createApiResponse("Location created", location));
  },
  async update(req: any, res: any) {
    const location = await locationService.update(req.params.id, req.body, req.auth?.userId);
    res.json(createApiResponse("Location updated", location));
  },
  async remove(req: any, res: any) {
    const location = await locationService.remove(req.params.id, req.auth?.userId);
    res.json(createApiResponse("Location deleted", location));
  }
};
