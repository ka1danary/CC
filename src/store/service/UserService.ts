import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";
import { BASE_URL } from "../../API/roots/roots";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["User"],
    endpoints: (build) => ({
      fetchUser: build.query<IUser, number>({
        query: (id) => ({
          url: `/users/${id}`,
        }),
        providesTags: () => ["User"],
      }),
    }),
  });