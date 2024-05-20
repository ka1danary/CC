import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { device_type, USER_REQUEST } from "../models/dbModels/models";

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
      state.requests = action.payload;
    },
    setDeviceTypeReduser(state, action: PayloadAction<device_type | null>) {
      if (state.request) {
        state.request.device_type = action.payload || "PC";
      } else {
        state.error = "Error setting device type";
      }
    },
    setStartDateAndTimeReduser(state, action: PayloadAction<Date>) {
      if (state.request) {
        state.request.start_date_and_time = action.payload.toISOString();
      } else {
        state.error = "Error setting start date";
      }
    },
    setEndDateAndTimeReduser(state, action: PayloadAction<Date>) {
      if (state.request) {
        state.request.end_date_and_time = action.payload.toISOString();
      } else {
        state.error = "Error setting end date";
      }
    },
    setPlaceReduser(state, action: PayloadAction<number>) {
      if (state.request) {
        state.request.id_workstation = action.payload;
      } else {
        state.error = "Error setting place";
      }
    },
  },
});

export const {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser,
  setPlaceReduser,
} = requestSlice.actions;

export default requestSlice.reducer;
