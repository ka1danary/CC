
import { useAppDispatch } from "../../../../store/hooks/redux";
import {
  device_type
} from "../../../../store/models/dbModels/models";
import {
  setDeviceTypeReduser,
  setStartDateAndTimeReduser,
  setEndDateAndTimeReduser,
  setPlaceReduser,
} from "../../../../store/redusers/requestSlice";
import { convertDateFromNumberToDate } from "../helperCreate";

export const useSetFieldInRequest = () => {
  const dispatch = useAppDispatch();

  //const { request } = useAppSelector((state) => state);

  // set Device type
  const setDeviceTypeHelper = (type: device_type | null) => {
    dispatch(setDeviceTypeReduser(type));
  };

  // set Session Start Time
  const setStartDateAndTimeHelper = (startDateAndTime: Date, time: number) => {
    const date = convertDateFromNumberToDate(time, startDateAndTime);
    dispatch(setStartDateAndTimeReduser(date));
  };

  // set Session End Time
  const setEndDateANdTimeHelper = (endDateAndTime: Date, time: number, nextTime : number) => {
    const date = convertDateFromNumberToDate(time + nextTime, endDateAndTime);
    dispatch(setEndDateAndTimeReduser(date));
  };

  // set Place index
  const setPlaceHelper = (place: number) => {
    dispatch(setPlaceReduser(place));
  };

  return {
    data: {},
    setDeviceTypeHelper,
    setStartDateAndTimeHelper,
    setEndDateANdTimeHelper,
    setPlaceHelper,
  };
};
