import { z } from "zod";

export const userZodSchema = z.object({
  title: z.string(),
  description: z.string(),
  oldPrice: z.number(),
  newPrice: z.number(),
  image: z.string(),
  category: z.enum(["business", "sports", "news"]),
  trending: z.boolean(),
});
import { z } from "../node_modules/zod/lib/external";
