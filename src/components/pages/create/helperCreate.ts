import {
  device_type,
  USER_REQUEST,
} from "../../../store/models/dbModels/models";

export const createRequest = (req: USER_REQUEST) => {
  return req ? req : "error";
};

// Возврашает выбранную дату + выбранное в отдельном компоненте время
export const convertDateFromNumberToDate = (hours: number, date: Date) => {
  const newDate = date;
  newDate.setHours(hours, 0, 0, 0);
  return newDate;
};

// возвращает полный объект типа USER_REQUEST
export const buildRequestObject = (
  user_id: number,
  device_type: device_type | undefined,
  start_date_and_time: Date | undefined | string,
  end_date_and_time: Date | undefined | string,
  place: number | undefined
) => {
  if (
    device_type &&
    start_date_and_time &&
    end_date_and_time &&
    place != undefined
  ) {
    const request: USER_REQUEST = {
      id_user_request: user_id,
      id_user: user_id,
      device_type: device_type,
      start_date_and_time: start_date_and_time,
      end_date_and_time: end_date_and_time,
      id_workstation: place,
    };
    console.log(request);
    return request;
  } else {
    return undefined;
  }
};
