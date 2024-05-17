import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { device_type, USER_REQUEST } from "../models/dbModels/models";
import { requestAPI } from "../service/RequestService";

interface RequestsState {
  request: USER_REQUEST | undefined;
  error: string;
  requests: USER_REQUEST[] | undefined;
}
// export interface USER_REQUEST {
//   id_user_request : number,
//   id_user : number,
//   device_type : device_type,
//   start_date_and_time : Date,
//   end_date_and_time : Date,
//   id_workstation : number
// }

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
    setDeviceType(state, action: PayloadAction<device_type>) {
      state.request ? (state.request.device_type = action.payload) : state.error = 'error device_type';
    },
    setStartDate(state, action: PayloadAction<Date>) {
      state.request ? state.request.start_date_and_time = action.payload : 'error start_date'
    },
    setStartTime(state, action: PayloadAction<Date>) {
      state.request ? state.request.start_date_and_time = action.payload : 'error start_date'
    },
  },
});

export default requestSlice.reducer
