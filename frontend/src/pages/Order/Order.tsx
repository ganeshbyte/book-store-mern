import { IOrder } from "../../interface/Order";

interface IOrderProp {
  order: IOrder;
}

export default function Order({ order }: IOrderProp) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-6 border border-gray-200">
        <div className="text-lg font-bold text-gray-900">Order Details</div>

        <div className="text-sm font-medium text-gray-700">
          <span className="font-semibold text-gray-800">Order Id:</span>{" "}
          {order._id}
        </div>

        <div className="text-lg font-semibold text-gray-800">
          Name: <span className="font-normal">{order.name}</span>
        </div>

        <div className="text-sm text-gray-600">
          Email: <span className="font-medium">{order.email}</span>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700">Address</div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">City:</span> {order.address.city}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Zip Code:</span>{" "}
            {order.address.zipcode}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">State:</span> {order.address.state}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Country:</span>{" "}
            {order.address.country}
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-semibold">Phone:</span> {order.phone}
        </div>

        <div className="text-lg font-semibold text-gray-800">
          Total Price:{" "}
          <span className="font-bold text-green-600">${order.totalPrice}</span>
        </div>
      </div>

      {/* New  */}
    </>
  );
}
