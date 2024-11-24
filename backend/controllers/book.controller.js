import { Book } from "../models/books.model.js";
import { booksZodSchema } from "../zod/bookZodSchema.js";

export const createBook = async (req, res) => {
  try {
    const validateBook = booksZodSchema.safeParse(req.body);

    if (!validateBook.success) {
      return res.status(400).json({
        data: null,
        error: "invalid inputs",
      });
    }

    const book = await Book.create(req.body);

    // const newBook = new Book(req.body);
    // const book = await newBook.save();

    res.status(200).json({
      data: book,
      error: null,
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const { category } = req.query;

    const books = await Book.find({
      category: category ? category : { $exists: true },
    });

    if (!books) {
      res.status(404).json({
        data: [],
        error: "books not found",
      });
      return;
    }

    res.status(200).json({ data: books, error: null });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    console.log("single book");
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        data: null,
        error: "book not found",
      });
    }

    res.status(200).json({ data: book, error: null });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const validateBook = booksZodSchema.safeParse(req.body);

    if (!validateBook.success) {
      return res.status(400).json({
        data: null,
        error: "invalid inputs",
      });
    }

    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!book) {
      res.status(404).json({
        data: null,
        error: "book not found",
      });
    }

    res.status(200).json({ data: book, error: null });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    console.log(book);

    if (!book) {
      res.status(404).json({
        data: null,
        error: "book not found",
      });
    }

    res.status(200).json({ data: book, error: null });
  } catch (error) {
    res.status(500).json({
      data: null,
      error: "internal server error",
    });
  }
};
