import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/book.controller.js";

const router = express.Router();

//route => /api/v1/books

router.get("/", getBooks);
router.post("/", createBook);

router.get("/:id", getBookById);
router.patch("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;
