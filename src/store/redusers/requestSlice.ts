import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_REQUEST } from "../models/dbModels/models";
import { requestAPI } from "../service/RequestService";

interface RequestsState {
  requests: USER_REQUEST | undefined;
  error: string;
}

const initialState: RequestsState = {
  requests: {
    id_user_request: 1,
    id_user: 1,
    device_type: "PC",
    start_date_and_time: new Date(),
    end_date_and_time: new Date(),
    id_workstation: 1,
  },
  error: "",
};

export const requestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    getRequest(state, action: PayloadAction<USER_REQUEST>) {
      const { data: req } = requestAPI.useFetchRequestQuery(
        state.requests?.id_user
      );
    },
  },
});
