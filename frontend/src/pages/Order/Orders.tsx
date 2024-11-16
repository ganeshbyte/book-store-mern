import { useSelector } from "react-redux";
import Order from "./Order";
import { IOrder } from "../../interface/Order";

export default function Orders() {
  const orders = useSelector((state) => state.order.orders);

  console.log("orders", orders);

  return (
    <>
      <div>Orders List</div>
      <div>
        {orders?.length &&
          orders.map((order: IOrder) => <Order key={order.id} order={order} />)}
      </div>
    </>
  );
}
