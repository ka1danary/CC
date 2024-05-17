import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/redux";
import { device_type } from "../../../../store/models/dbModels/models";
import {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser
} from "../../../../store/redusers/requestSlice";

export const useSetFieldInRequest = () => {
  const dispatch = useAppDispatch();

  const [deviceType, setDeviceTypeState] = React.useState<device_type | null>(
    null
  );
  const [startDate, setStartDateState] = React.useState<Date | null>(null);
  const [startTime, setStartTimeState] = React.useState<Date | null>(null);

  //const { request } = useAppSelector((state) => state);

  const setDeviceTypeHelper = (type: device_type | null) => {
    setDeviceTypeState(type);
    dispatch(setDeviceTypeReduser(type));
  };

  const setStartDateHelper = (endDateAndTime: Date) => {
    setStartDateState(endDateAndTime);
    dispatch(setStartDateAndTimeReduser(endDateAndTime));
  };

  const setStartTimeHelper = (endDateAndTime: Date) => {
    setStartTimeState(endDateAndTime);
    dispatch(setEndDateAndTimeReduser(endDateAndTime));
  };

  return {
    data: {
      deviceType,
      startDate,
      startTime,
    },
    setDeviceTypeHelper,
    setStartDateHelper,
    setStartTimeHelper,
  };
};
