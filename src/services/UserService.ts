import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
});
