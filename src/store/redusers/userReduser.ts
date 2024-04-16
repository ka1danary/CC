import { createSlice } from "@reduxjs/toolkit";
import { IRequest } from "../models/IRequest";

interface RequestState {
    request: IRequest;
    isLoading: boolean;
    error: string;
}

// const initialState: RequestState = {
//     request: undefined,
//     isLoading: false,
//     error: ""
// }

// export const  requestSlice = createSlice({
//     name: 'request',
//     initialState,
//     reducers: {
        
//     }
// })

