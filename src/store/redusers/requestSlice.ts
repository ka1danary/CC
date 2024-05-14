import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { USER_REQUEST } from "../models/dbModels/models"
import { requestAPI } from "../service/RequestService"

interface RequestsState {
    requests : USER_REQUEST[] | undefined,
    error : string
}

const initialState : RequestsState = {
    requests : undefined,
    error : ''
}

export const requestSlice = createSlice({
    name : 'requests',
    initialState,
    reducers : {
        getRequest(state, action : PayloadAction<USER_REQUEST>) {
            const {data : req} = requestAPI.useFetchRequestQuery(id)
            state.requests = 
        }
    }
})