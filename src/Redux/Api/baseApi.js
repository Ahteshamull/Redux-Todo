import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "../../Config/envConfig.js";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl(),
  }),
  endpoints: () => ({}), 
  tagTypes: ["Users"], 
});
