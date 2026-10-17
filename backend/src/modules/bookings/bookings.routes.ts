import { Router } from "express";
import { requireAuth } from "@ibgram/authentication";
import {
  createBookingController,
  getBookingController,
  listTutorsController,
  myBookingsController,
  myDemoRequestsController,
  updateBookingController,
} from "./bookings.controller";

export const tutorsRoutes = Router();
tutorsRoutes.get("/", requireAuth(), listTutorsController);

export const bookingsRoutes = Router();
bookingsRoutes.get("/", requireAuth(), myBookingsController);
bookingsRoutes.post("/", requireAuth(), createBookingController);
// Before "/:id" so "requests" is not read as a booking id.
bookingsRoutes.get("/requests", requireAuth(), myDemoRequestsController);
bookingsRoutes.get("/:id", requireAuth(), getBookingController);
bookingsRoutes.patch("/:id", requireAuth(), updateBookingController);
