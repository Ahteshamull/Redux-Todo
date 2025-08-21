import { baseApi } from "./baseApi";
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (user) => ({
        url: "/Users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    getUsers: builder.query({
      query: () => "/Users",
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (id) => `/Users/${id}`,
      providesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: ( user ) => ({
        url: `/Users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/Users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const {
  useAddUserMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
