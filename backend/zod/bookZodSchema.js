import { z } from "zod";

export const booksZodSchema = z.object({
  title: z.string(),
  description: z.string(),
  oldPrice: z.string(),
  newPrice: z.string(),
  coverImage: z.string(),
  category: z.string(),
  trending: z.boolean(),
  author: z.string(),
});
