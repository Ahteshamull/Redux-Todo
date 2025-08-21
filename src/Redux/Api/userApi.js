import { baseApi } from "./baseApi";
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/Users",
      providesTags: ["Users"],
    }),
  }),
});
export const { useGetUserQuery } = userApi;
