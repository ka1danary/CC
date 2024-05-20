import { device_type, package_type } from "./../../../../store/models/dbModels/models";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/redux";
import {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser,
  setPlaceReduser,
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

  // set Device type
  const setDeviceTypeHelper = (type: device_type | null) => {
    dispatch(setDeviceTypeReduser(type));
    setDevice(reduxRequest.request?.device_type);
    console.log("set" + type);
  };

  // set Session Start Time
  const setStartDateAndTimeHelper = (startDateAndTime: Date, time: number) => {
    const date = convertDateFromNumberToDate(time, startDateAndTime);
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
    const date = convertDateFromNumberToDate(time + nextTime, endDateAndTime);
    dispatch(setEndDateAndTimeReduser(date));
    setEndDate(date);
  };

  // set Place index
  const setPlaceHelper = (place: number) => {
    setIndexPlace(place);
    dispatch(setPlaceReduser(place));
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
  };
};
