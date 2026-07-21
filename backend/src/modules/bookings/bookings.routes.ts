import { Router } from "express";
import { requireAuth } from "@ibgram/authentication";
import {
  createBookingController,
  getBookingController,
  listTutorsController,
  myBookingsController,
  updateBookingController,
} from "./bookings.controller";

export const tutorsRoutes = Router();
tutorsRoutes.get("/", requireAuth(), listTutorsController);

export const bookingsRoutes = Router();
bookingsRoutes.get("/", requireAuth(), myBookingsController);
bookingsRoutes.post("/", requireAuth(), createBookingController);
bookingsRoutes.get("/:id", requireAuth(), getBookingController);
bookingsRoutes.patch("/:id", requireAuth(), updateBookingController);
