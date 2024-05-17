import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_REQUEST } from "../models/dbModels/models";
import { requestAPI } from "../service/RequestService";

interface RequestsState {
  request: USER_REQUEST | undefined;
  error: string;
  requests: USER_REQUEST[] | undefined;
}

const initialState: RequestsState = {
  request: {
    id_user_request: 1,
    id_user: 1,
    device_type: "PC",
    start_date_and_time: new Date(),
    end_date_and_time: new Date(),
    id_workstation: 1,
  },
  error: "",
  requests: [],
};

export const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    getRequest(state, action: PayloadAction<USER_REQUEST[]>) {
      const { data: req } = requestAPI.useFetchRequestQuery(
        state.request?.id_user
      );
      state.request = req;
      state.requests = action.payload;
    },
  },
});
