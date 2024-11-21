import { z } from "zod";

export const orderZodSchema = z.object({
  name: z.string(),
  email: z.string(),
  orderItems: z.array(z.string()),
  address: z.object({
    city: z.string(),
    state: z.string(),
    zipcode: z.string(),
    country: z.string(),
  }),
  totalPrice: z.string(),
});
