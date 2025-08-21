import { baseApi } from "./baseApi";
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/Users",
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/Users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    })
  }),
});
export const { useGetUserQuery,useAddUserMutation } = userApi;
