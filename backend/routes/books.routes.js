import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/book.controller.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";

const router = express.Router();

//route => /api/v1/books

router.get("/", getBooks);
router.post("/", verifyFirebaseToken, createBook);

router.get("/:id", getBookById);
router.patch("/:id", verifyFirebaseToken, updateBookById);
router.delete("/:id", verifyFirebaseToken, deleteBookById);

export default router;
