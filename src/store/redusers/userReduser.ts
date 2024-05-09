import { createSlice } from "@reduxjs/toolkit";
import { IRequest } from "../models/IRequest";
import { requestAPI, userApi } from "../service/RequestService";

interface RequestState {
    request: IRequest | undefined;
    error: string;
}

const {data: user} = userApi.useFetchUserQuery(1)
const {data: request} = requestAPI.useFetchRequestQuery(user)

const initialState: RequestState = {
    request: request,
    error: ""
}

 export const  requestSlice = createSlice({
     name: 'request',
     initialState,
     reducers: {
            fetchUser(user)  {
               return user
            }
     }
 })

