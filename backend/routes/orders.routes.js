import express from "express";
import { getOrders } from "../controllers/order.controller.js";
import { getOrdersByEmail } from "../controllers/order.controller.js";
import { createOrder } from "../controllers/order.controller.js";
const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/email/:email", getOrdersByEmail);

export default router;
