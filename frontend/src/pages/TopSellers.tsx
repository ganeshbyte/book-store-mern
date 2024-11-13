import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import { IBook } from "../models/Book";
import booksData from "../assets/books-data.json";
import { UISelect } from "../components/UISelect";
import { booksCategoryEnum } from "../enums/books.enum";

const TopSellers = () => {
  const [books, setBooks] = useState([] as IBook[]);
  const [selectedOption, setSelectedOption] = useState<string>();

  const getBooks = async (category: booksCategoryEnum) => {
    try {
      // Adjust the path if needed
      //   const res = await axios.get("../assets/books-data.json");
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching the books data:", error);
    }
  };

  useEffect(() => {
    getBooks(selectedOption as booksCategoryEnum);
  }, [selectedOption]);

  const handleUISelectValueChange = (value: booksCategoryEnum) => {
    console.log(value);

    setSelectedOption(value);
  };

  return (
    <div>
      <h1 className="text-3xl mb-10">Top Sellers</h1>
      <UISelect
        label="Category Filter"
        options={[
          booksCategoryEnum.business,
          booksCategoryEnum.news,
          booksCategoryEnum.sports,
        ]}
        onValueChange={handleUISelectValueChange}
      ></UISelect>

      <div className="flex mx-auto justify-center my-10">
        {books.length > 0 &&
          books.map((book) => {
            return <BookItem key={book.title} book={book}></BookItem>;
          })}
      </div>
    </div>
  );
};

export default TopSellers;
