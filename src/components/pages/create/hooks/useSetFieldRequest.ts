import {
  device_type,
  package_type,
  USER_REQUEST,
} from "./../../../../store/models/dbModels/models";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/redux";
import {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser,
  setPlaceReduser,
  setRequest,
} from "../../../../store/redusers/requestSlice";
import { convertDateFromNumberToDate } from "../helperCreate";
import React from "react";

export const useSetFieldInRequest = () => {
  const reduxRequest = useAppSelector((state) => state.requestReduser);
  const dispatch = useAppDispatch();

  const [device, setDevice] = React.useState<device_type | undefined>(
    reduxRequest.request?.device_type
  );
  const [startDate, setStartDate] = React.useState<Date | undefined | string>(
    reduxRequest.request?.start_date_and_time
  );
  const [endDate, setEndDate] = React.useState<Date | undefined | string>(
    reduxRequest.request?.end_date_and_time
  );
  const [indexPlace, setIndexPlace] = React.useState<number | undefined>(
    reduxRequest.request?.id_workstation
  );

  React.useEffect(() => {
    setDevice(reduxRequest.request?.device_type)
    console.log('useEffect',reduxRequest.request?.device_type)
  }, [reduxRequest.request?.device_type])


  // set Device type
  const setDeviceTypeHelper = (type: device_type | undefined) => {
    type ? console.log(type) : console.log(false)
    dispatch(setDeviceTypeReduser(type));
    setDevice(type);
    //console.log("set", type);
  };

  // set Session Start Time
  const setStartDateAndTimeHelper = (startDateAndTime: Date, time: number) => {
    const date = convertDateFromNumberToDate(
      time,
      startDateAndTime
    ).toISOString();
    setStartDate(date);
    dispatch(setStartDateAndTimeReduser(date));
    console.log("set" + date);
  };

  // set Session End Time
  const setEndDateANdTimeHelper = (
    endDateAndTime: Date,
    time: number,
    nextTime: package_type
  ) => {
    const date = convertDateFromNumberToDate(
      time + nextTime,
      endDateAndTime
    ).toISOString();
    setEndDate(date);
    dispatch(setEndDateAndTimeReduser(date));
  };

  // set Place index
  const setPlaceHelper = (place: number) => {
    setIndexPlace(place);
    dispatch(setPlaceReduser(place));
  };

  const setFullRequest = (req: USER_REQUEST | undefined) => {
    dispatch(setRequest(req));
  };
  return {
    data: {
      device,
      startDate,
      endDate,
      indexPlace,
    },
    setDeviceTypeHelper,
    setStartDateAndTimeHelper,
    setEndDateANdTimeHelper,
    setPlaceHelper,
    setFullRequest,
  };
};
