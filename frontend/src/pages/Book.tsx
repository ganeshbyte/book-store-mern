import { useEffect } from "react";
import { useGetBookByIdQuery } from "../redux/features/cart/bookApi";
import BookItem from "./BookItem";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();

  console.log(id);

  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);

  useEffect(() => {
    //fetch book details here
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error Happening while loading the book...</div>;

  if (!isLoading && book?.data) {
    return (
      <div className="flex justify-center items-center">
        <BookItem
          book={book?.data}
          showRemoveCartBookButton={false}
          showAddToCartButton={true}
        ></BookItem>
      </div>
    );
  }
}
