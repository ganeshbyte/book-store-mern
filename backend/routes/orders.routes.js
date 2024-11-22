import express from "express";
import { getOrders } from "../controllers/order.controller.js";
import { getOrdersByEmail } from "../controllers/order.controller.js";
import { createOrder } from "../controllers/order.controller.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", verifyFirebaseToken, createOrder);

router.get("/", verifyFirebaseToken, getOrders);

router.get("/email/:email", verifyFirebaseToken, getOrdersByEmail);

export default router;
