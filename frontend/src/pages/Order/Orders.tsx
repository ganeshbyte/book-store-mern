import Order from "./Order";
import { IOrder } from "../../interface/Order";
import { useGetOrderByEmailQuery } from "../../redux/features/order/orderApi";
import { useAuth } from "../../context/authContex";

export default function Orders() {
  const { currentUser } = useAuth();

  const {
    data: orders,
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser?.email);

  console.log("orders", orders);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <>
      <div>Orders List</div>
      <div>
        {orders?.data?.length &&
          orders?.data.map((order: IOrder) => (
            <Order key={order.id} order={order} />
          ))}
      </div>
    </>
  );
}
