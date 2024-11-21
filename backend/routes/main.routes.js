import express from "express";
import userRouter from "../routes/users.routes.js";
import bookRouter from "../routes/books.routes.js";
import orderRouter from "../routes/orders.routes.js";

const router = express.Router();

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/orders", orderRouter);

export default router;
