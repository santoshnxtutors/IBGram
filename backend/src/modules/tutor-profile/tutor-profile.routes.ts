import { Router } from "express";
import { requireAuth } from "@ibgram/authentication";
import { myTutorProfileController, upsertTutorProfileController } from "./tutor-profile.controller";

export const tutorProfileRoutes = Router();
tutorProfileRoutes.get("/me", requireAuth(), myTutorProfileController);
tutorProfileRoutes.put("/", requireAuth(), upsertTutorProfileController);
