import { IBook } from "../interface/Book";
import { IoCartOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { getImageUrl } from "../utils/utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

interface IBookItemProps {
  book: IBook;
  showRemoveCartBookButton: boolean;
  showAddToCartButton: boolean;
}

const BookItem = ({
  book,
  showRemoveCartBookButton,
  showAddToCartButton,
}: IBookItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = (book: IBook) => {
    dispatch(addToCart(book));
  };

  const handleRemoveFromCart = (book: IBook) => {
    dispatch(removeFromCart(book));
  };

  return (
    <div className="flex px-4 py-2 ring-1 ring-blue-500 m-2 rounded-md h-80  shadow-lg">
      <div className="mr-2 mb-5">
        <Link to={`/books/${book.id}`}>
          <img
            src={`${getImageUrl(book.coverImage)}`}
            alt="book-image"
            className="object-cover w-52"
          />
        </Link>
      </div>
      <div>
        <Link to={`/books/${book.id}`}>
          <h3 className="text-xl font-bold mb-5 hover:text-blue-800">
            {book.title}
          </h3>
        </Link>
        <p className="text-gray-700 mb-5">
          {book.description.length > 80
            ? `${book.description.slice(0, 80)}...`
            : book.description}
        </p>
        <p className="mb-10 flex items-center text-xl">
          {book.newPrice} <FaDollarSign />
          <span className="text-gray-400 line-through flex items-center">
            {book.oldPrice}
            <FaDollarSign className="inline-block" />
          </span>
        </p>
        {showAddToCartButton && (
          <button
            className="flex bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-600 mb-10 w-52 justify-center items-center"
            onClick={() => {
              handleAddToCart(book);
            }}
          >
            <IoCartOutline className="size-6" />
            Add to Cart
          </button>
        )}

        {showRemoveCartBookButton && (
          <button
            className="flex bg-red-600 px-4 py-2 rounded-md text-white w-52"
            onClick={() => {
              handleRemoveFromCart(book);
            }}
          >
            <IoCartOutline className="size-6" />
            Remove From Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default BookItem;
