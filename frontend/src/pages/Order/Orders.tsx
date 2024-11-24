import Order from "./Order";
import { IOrder } from "../../interface/Order";
import { useGetOrderByEmailQuery } from "../../redux/features/order/orderApi";
import { useAuth } from "../../context/authContex";
import Pagination from "../home/Pagination";
import { useState } from "react";

interface IPage {
  page: number;
  limit: number;
}
export default function Orders() {
  const { currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState<IPage>();
  const {
    data: orders,
    isLoading,
    isError,
  } = useGetOrderByEmailQuery({
    email: currentUser?.email,
    page: currentPage?.page,
    limit: currentPage?.limit,
  });

  const PageHandler = (currentPage: IPage) => {
    setCurrentPage(currentPage);
  };

  console.log("orders", orders);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <>
      <div>Orders List</div>
      <div>
        {orders?.result?.length &&
          orders?.result?.map((order: IOrder) => (
            <Order key={order._id} order={order} />
          ))}
      </div>
      <div>
        {orders?.prev && (
          <button
            onClick={() => {
              PageHandler(orders?.prev);
            }}
          >
            Prev
          </button>
        )}
        {orders?.next && (
          <button
            onClick={() => {
              PageHandler(orders?.prev);
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
