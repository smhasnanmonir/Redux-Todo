import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/" }),
  endpoints: (builder) => ({
    getRandomUsers: builder.query({
      query: () => ({
        url: "/api",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRandomUsersQuery } = baseApi;
