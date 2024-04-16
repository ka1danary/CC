import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRequest } from "../models/IRequest";

export const requestAPI = createApi({
  reducerPath: "requestAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ['Request'],
  endpoints: (build) => ({
    fetchRequest: build.query<IRequest[], number>({
        query: () => ({
            url: '/req'
        }),
        providesTags: result => ['Request']
    })
  })
});
