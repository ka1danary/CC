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
    start_date_and_time: new Date().toISOString(),
    end_date_and_time: new Date().toISOString(),
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
    setStartDateAndTimeReduser(state, action: PayloadAction<string>) {
      if (state.request) {
        state.request.start_date_and_time = action.payload;
      } else {
        state.error = "Error setting start date";
      }
    },
    setEndDateAndTimeReduser(state, action: PayloadAction<string>) {
      if (state.request) {
        state.request.end_date_and_time = action.payload;
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
    setRequest(state, action: PayloadAction<USER_REQUEST | undefined>) {
      if (state.request) {
        state.request = action.payload;
        console.log('Объект создан', action.payload)
      } else {
        state.error = "Error setting REQUEST";
      }
    },
  },
});

export const {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser,
  setPlaceReduser,
  setRequest,
} = requestSlice.actions;

export default requestSlice.reducer;
