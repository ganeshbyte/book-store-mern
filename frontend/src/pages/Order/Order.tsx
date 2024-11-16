import { IOrder } from "../../interface/Order";

interface IOrderProp {
  order: IOrder;
}

export default function Order({ order }: IOrderProp) {
  return (
    <>
      <div>{order.name}</div>
    </>
  );
}
