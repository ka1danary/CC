import { useDispatch } from "react-redux";
import React from "react";
import {
  device_type,
  package_type,
  USER_REQUEST,
} from "../../../store/models/dbModels/models";



export const createRequest = (req: USER_REQUEST) => {
  return req ? req : "error";
};

const convertDateFromNumberToDate = (hours: number, date: Date) => {
  const newDate = date;
  newDate.setHours(hours, 0, 0, 0);
  return newDate;
};

export const buildRequestObject = (
  user_id: number,
  device_type: device_type | null,
  start_date: Date | null,
  start_time: number | null,
  package_type: package_type | null,
  place: number | null
) => {
  if (
    device_type &&
    start_date &&
    start_time &&
    package_type &&
    place != null
  ) {
    const start_full_date = convertDateFromNumberToDate(start_time, start_date);
    const end_time = start_time + package_type;
    const end_full_date = convertDateFromNumberToDate(
      end_time,
      new Date(start_full_date)
    );
    const request: USER_REQUEST = {
      id_user_request: user_id,
      id_user: user_id,
      device_type: device_type,
      start_date_and_time: start_full_date,
      end_date_and_time: end_full_date,
      id_workstation: place,
    };
    console.log(request);
    return request;
  } else {
    return null;
  }
};


export const useSetFieldInRequest = () => {

  const dispatch = useDispatch()

  const [deviceType, setDeviceType] = React.useState<device_type | null>(null);

  const setDeviceTypeHelper = (type : device_type) => {
      setDeviceType(type);
  }

  const setStartDateHelper = (date : Date) => {

  }

  const setStartTimeHelper = (time : number) => {
    
  }
  return { deviceType, setDeviceType, setDeviceTypeHelper };
}