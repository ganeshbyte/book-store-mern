import express from "express";
import { getOrders } from "../controllers/order.controller.js";
import { getOrdersByEmail } from "../controllers/order.controller.js";
import { createOrder } from "../controllers/order.controller.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";
import paginatedRes from "../utils/pagination.js";
import { Order } from "../models/order.model.js";
const router = express.Router();

router.post("/", verifyFirebaseToken, createOrder);

router.get("/", verifyFirebaseToken, getOrders);

router.get(
  "/email/:email",
  verifyFirebaseToken,
  paginatedRes(Order),
  getOrdersByEmail
);

export default router;
