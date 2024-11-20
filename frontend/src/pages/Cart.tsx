import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import { IBook } from "../interface/Book";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../redux/features/cart/bookApi";

const Cart = () => {
  //cart items
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { data, error, isLoading } = useGetBooksQuery("all");

  console.log(data);

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
          <Link to={"/cart/checkout"}>
            <button
              className="bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-600"
              disabled={!(cartItems.length > 0)}
            >
              Checkout
            </button>
          </Link>
          <Link to={"/"}>
            <button className="bg-blue-400 px-4 py-2 rounded-md text-white hover:bg-blue-600 ml-5">
              Continue Shopping...
            </button>
          </Link>
        </div>
      </div>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((book: IBook) => {
            return (
              <BookItem
                key={book._id}
                book={book}
                showRemoveCartBookButton={true}
                showAddToCartButton={false}
              ></BookItem>
            );
          })
        ) : (
          <h1 className="p-3 flex justify-center items-center text-2xl font-bold">
            No Books Found...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
