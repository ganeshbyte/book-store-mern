import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../../redux/features/cart/bookApi";
import BookItem from "../BookItem";

export default function Book() {
  const { id } = useParams();

  console.log(id);

  const { data: book, isLoading, isError } = useGetBookByIdQuery(id as string);

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
