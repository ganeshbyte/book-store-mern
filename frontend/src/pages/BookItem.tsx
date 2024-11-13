import { IBook } from "../models/Book";
import bookImage from "../assets/book-banner.jpeg";
import { IoCartOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { bookCartCountAtom } from "../store/bookCartCount.atom";

interface IBookItemProps {
  book: IBook;
}

const BookItem = ({ book }: IBookItemProps) => {
  const setBookCartCount = useSetRecoilState(bookCartCountAtom);

  return (
    <div className="flex px-4 py-2 ring-1 ring-gray-200 m-2 rounded-md">
      <div className="mr-2 mb-5">
        <img src={bookImage} alt="" className="object-cover w-52" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-5">{book.title}</h3>
        <p className="text-gray-700 mb-5">{book.description}</p>
        <p className="mb-10 flex items-center">
          {book.newPrice} <FaDollarSign />
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
