import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRequest } from "../models/IRequest";
import { IUser } from "../models/IUser";

import { BASE_URL } from "../../API/roots/roots";

export const requestAPI = createApi({
  reducerPath: "requestAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Request"],
  endpoints: (build) => ({

    fetchRequest: build.query<IRequest | undefined, IUser | undefined>({
      query: (user) => ({
        url: `/req/${user?.requestId}`,
      }),
      providesTags: () => ["Request"],
    }),

    createRequest: build.mutation<IRequest | undefined, IRequest | undefined>({
      query: (req) => ({
        url: `/req`,
        method: "POST",
        body: req,
      }),
      invalidatesTags: ["Request"],
    }),

    deleteRequest: build.mutation<IRequest | undefined, IRequest | undefined>({
      query: (req) => ({
        url: `/req/${req?.id}`,
        method: "DELETE",
        body: req,
      }),
      invalidatesTags: ["Request"],
    }),
  })
  
});

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
