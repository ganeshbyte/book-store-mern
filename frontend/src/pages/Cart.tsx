import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import { IBook } from "../interface/Book";
import { useMemo } from "react";

const Cart = () => {
  //cart items
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (acc: number, item: IBook) => acc + item.newPrice,
      0
    );
  }, [cartItems]);

  return (
    <div className="">
      <div className="bg-gray-200 flex items-center justify-center mt-10 mb-10 h-20">
        <div className="font-bold text-xl">{`Total : ${totalPrice} $`}</div>
        <div className="ml-10">
          <button className="bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((book: IBook) => {
            return <BookItem key={book.id} book={book}></BookItem>;
          })
        ) : (
          <h1 className="p-3">No Books Found</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
