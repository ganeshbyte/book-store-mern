import { IOrder } from "../../interface/Order";

interface IOrderProp {
  order: IOrder;
}

export default function Order({ order }: IOrderProp) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-4">
        <div className="text-lg font-semibold text-gray-800">{order.name}</div>
        <div className="text-sm text-gray-600">{order.email}</div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-700">City</div>
          <div className="text-gray-600">{order.address.city}</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-700">Zipcode</div>
          <div className="text-gray-600">{order.address.zipcode}</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-700">State</div>
          <div className="text-gray-600">{order.address.state}</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-700">Country</div>
          <div className="text-gray-600">{order.address.country}</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-700">Phone</div>
          <div className="text-gray-600">{order.phone}</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-700">Total Price</div>
          <div className="text-gray-600">{order.totalPrice}</div>
        </div>
      </div>
    </>
  );
}
