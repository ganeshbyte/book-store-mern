import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import { IBook } from "../models/Book";

import booksData from "../assets/books-data.json";
const TopSellers = () => {
  const [books, setBooks] = useState([] as IBook[]);

  const getBooks = async () => {
    try {
      // Adjust the path if needed
      //   const res = await axios.get("../assets/books-data.json");
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching the books data:", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl ">Top Sellers</h1>
      <div>
        {books.length > 0 &&
          books.map((book) => {
            return <BookItem key={book.title} book={book}></BookItem>;
          })}
      </div>
    </div>
  );
};

export default TopSellers;
