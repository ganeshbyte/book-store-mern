import express from "express";
import userRouter from "../routes/users.routes.js";
import bookRouter from "../routes/books.routes.js";
import orderRouter from "../routes/orders.routes.js";
import authRouter from "../routes/auth.rotues.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/orders", orderRouter);
router.use("/auth", authRouter);

export default router;
