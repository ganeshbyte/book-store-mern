import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/utils";
import { IBook } from "../../../interface/Book";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/books`,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery,
  tagTypes: ["Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (category: string) => ({
        url: `?category=${category}`,
        method: "GET",
        credentials: "omit",
      }),
      providesTags: ["Book"],
    }),

    getBookById: builder.query({
      query: (id: string) => ({
        url: `/${id}`,
        method: "GET",
        credentials: "omit",
      }),
      providesTags: (result, error, id) => [{ type: "Book", id }],
    }),

    createBook: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Book"],
    }),

    updateBook: builder.mutation<IBook, Partial<IBook>>({
      query: (body) => ({
        url: "/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBookByIdQuery,
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
} = booksApi;

export default booksApi;
