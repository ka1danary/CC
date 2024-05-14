import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRequest } from "../models/IRequest";
import { IUser } from "../models/IUser";

import { BASE_URL, user_request } from "../../API/roots/roots";
import { USER_REQUEST } from "../models/dbModels/models";

export const requestAPI = createApi({
  reducerPath: "requestAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Request"],
  endpoints: (build) => ({

    fetchRequest: build.query<USER_REQUEST | undefined, number | undefined>({
      query: (id) => ({
        url: `${user_request}/${id}`,
      }),
      providesTags: () => ["Request"],
    }),

    createRequest: build.mutation<USER_REQUEST | undefined, IRequest | undefined>({
      query: (req) => ({
        url: `${user_request}/${req?.id}`,
        method: "POST",
        body: req,
      }),
      invalidatesTags: ["Request"],
    }),

    deleteRequest: build.mutation<USER_REQUEST | undefined, IRequest | undefined>({
      query: (req) => ({
        url:  `${user_request}/${req?.id}`,
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
