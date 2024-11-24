import React, { useState } from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/order/orderApi";
import { IPage } from "./Orders";
import { useAuth } from "../../context/authContex";
import { IOrder } from "../../interface/Order";
import { useMemo } from "react";

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState<IPage>({
    page: 1,
    limit: 5,
  });
  const { currentUser } = useAuth();

  const {
    data: orders,
    isLoading,
    isError,
  } = useGetOrderByEmailQuery({
    email: currentUser?.email,
    page: currentPage?.page,
    limit: currentPage?.limit,
  });

  const currentOrders = useMemo(() => {
    if (orders?.prev) {
      return orders?.result.length + orders?.prev?.page * orders?.prev?.limit;
    }
    return orders?.result.length;
  }, [orders]);

  const NextPageHandler = () => {
    setCurrentPage(orders?.next);
  };
  const PrevPageHandler = () => {
    setCurrentPage(orders?.prev);
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Total Price
            </th>
            <th scope="col" className="px-6 py-3">
              Placed On
            </th>
          </tr>
        </thead>
        <tbody>
          {orders?.result?.length > 0 &&
            orders?.result.map((order: IOrder) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {order?._id}
                  </th>
                  <td className="px-6 py-4">{order?.name}</td>
                  <td className="px-6 py-4">{order?.email}</td>
                  <td className="px-6 py-4">{order?.totalPrice}</td>
                  <td className="px-6 py-4">{order?.createdAt}</td>
                </tr>
              );
            })}
          {!orders?.result?.length && !isLoading && (
            <tr>Orders Has Not Been Created</tr>
          )}
          {isLoading && <tr>Loading...</tr>}
        </tbody>
      </table>

      <div>
        Total : {currentOrders} / {orders?.total}
      </div>

      <div className="flex gap-5 mt-10">
        <div>
          {orders?.prev && (
            <button
              className="ring-1 px-4 py-4 bg-blue-400 rounded-md w-15 h-10 flex items-center justify-center font-sans text-xl text-white"
              onClick={PrevPageHandler}
            >
              Prev
            </button>
          )}
        </div>
        <div>
          {orders?.next && (
            <button
              className="ring-1 px-4 py-4 bg-blue-400 rounded-md w-15 h-10 flex items-center justify-center font-sans text-xl text-white"
              onClick={NextPageHandler}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
