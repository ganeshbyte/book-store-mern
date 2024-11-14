import { IBook } from "../interface/Book";
import { IoCartOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { bookCartCountAtom } from "../store/bookCartCount.atom";
import { getImageUrl } from "../utils/utils";
import { Link } from "react-router-dom";

interface IBookItemProps {
  book: IBook;
}

const BookItem = ({ book }: IBookItemProps) => {
  const setBookCartCount = useSetRecoilState(bookCartCountAtom);

  return (
    <div className="flex px-4 py-2 ring-1 ring-gray-200 m-2 rounded-md h-80  shadow-lg">
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

        <button
          className="flex bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-600"
          onClick={() => {
            setBookCartCount((prevCount) => prevCount + 1);
          }}
        >
          <IoCartOutline className="size-6" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookItem;
