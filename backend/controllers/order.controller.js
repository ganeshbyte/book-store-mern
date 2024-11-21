import { Order } from "../models/order.model.js";
import { orderZodSchema } from "../zod/orderZodSchema.js";

export const createOrder = async (req, res) => {
  try {
    const { name, email, bookIds, address, totalPrice } = req.body;
    // const orderValidate = orderZodSchema.parse(req.body);

    // if (!orderValidate.success) {
    //   return res.status(400).json({ data: null, error: orderValidate.error });
    // }

    const order = await Order.create({
      name,
      email,
      orderItems: bookIds,
      address,
      totalPrice,
    });
    res.status(200).json({ data: order, error: null });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: null, error: "internal server error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    if (!orders) {
      res.status(404).json({ data: [], error: "orders not found" });
      return;
    }

    res.status(200).json({ data: orders, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: "internal server error" });
  }
};

export const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const orders = await Order.find({ email: email });

    if (!orders) {
      res.status(404).json({ data: [], error: "orders not found" });
      return;
    }

    res.status(200).json({ data: orders, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: "internal server error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404).json({ data: null, error: "order not found" });
      return;
    }

    res.status(200).json({ data: order, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: "internal server error" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404).json({ data: null, error: "order not found" });
      return;
    }

    const validateOrder = orderZodSchema.parse(req.body);

    if (!validateOrder.success) {
      return res.status(400).json({ data: null, error: validateOrder.error });
    }

    const updatedOrder = await order.findByIdAndUpdate(
      req.params.id,
      {
        orderItems: order.orderItems,
        shippingAddress: order.shippingAddress,
        totalPrice: order.totalPrice,
      },
      { new: true }
    );

    res.status(200).json({ data: updatedOrder, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: "internal server error" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      res.status(404).json({ data: null, error: "order not found" });
      return;
    }

    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({ data: deleteOrder, error: null });
  } catch (error) {
    res.status(500).json({ data: null, error: "internal server error" });
  }
};
