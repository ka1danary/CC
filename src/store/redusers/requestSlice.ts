import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { device_type, USER_REQUEST } from "../models/dbModels/models";

interface RequestsState {
  request: USER_REQUEST | undefined;
  error: string;
  requests: USER_REQUEST[] | undefined;
}

const initialState: RequestsState = {
  request: undefined,
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
    setDeviceTypeReduser(
      state,
      action: PayloadAction<device_type | undefined>
    ) {
      if (state.request) {
        state.request.device_type = action.payload || "PC";
        console.log(state.request.device_type, 'set in reduser')
        
      } else {
        state.error = "Error setting device type";
        console.log(state.error, 'set in reduser')
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
      state.request = action.payload;
    },
    deleteRequest(state) {
      state.request = undefined;
      console.log('request has been delete')
    },
  },
});

export const {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser,
  setPlaceReduser,
  setRequest,
  deleteRequest,
} = requestSlice.actions;

export default requestSlice.reducer;
