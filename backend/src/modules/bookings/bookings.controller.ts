import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import {
  createBooking,
  getBookingForUser,
  listMyBookings,
  listTutors,
  updateBookingStatus,
} from "./bookings.service";

export const listTutorsController: RequestHandler = asyncHandler(async (req, res) => {
  const tutors = await listTutors();
  res.json(successResponse({ tutors }, req.requestId ?? ""));
});

export const createBookingController: RequestHandler = asyncHandler(async (req, res) => {
  const booking = await createBooking(req.auth!.userId, req.body ?? {});
  res.status(201).json(successResponse({ booking }, req.requestId ?? ""));
});

export const myBookingsController: RequestHandler = asyncHandler(async (req, res) => {
  const bookings = await listMyBookings(req.auth!.userId);
  res.json(successResponse({ bookings }, req.requestId ?? ""));
});

export const getBookingController: RequestHandler = asyncHandler(async (req, res) => {
  const booking = await getBookingForUser(req.auth!.userId, String(req.params.id));
  res.json(successResponse({ booking }, req.requestId ?? ""));
});

export const updateBookingController: RequestHandler = asyncHandler(async (req, res) => {
  const booking = await updateBookingStatus(req.auth!.userId, String(req.params.id), req.body?.status);
  res.json(successResponse({ booking }, req.requestId ?? ""));
});
