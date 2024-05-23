import {
  device_type,
  USER_REQUEST,
} from "../../../store/models/dbModels/models";

// Функция для создания запроса, возвращает объект запроса или строку "error"
export const createRequest = (req: USER_REQUEST): USER_REQUEST | "error" => {
  return req ? req : "error";
};

// Возвращает новую дату с установленными часами, минутами, секундами и миллисекундами равными 0
export const convertDateFromNumberToDate = (hours: number, date: Date): Date => {
  const newDate = new Date(date); // Создаем новый объект даты, чтобы не мутировать оригинал
  newDate.setHours(hours, 0, 0, 0);
  return newDate;
};

// Возвращает полный объект типа USER_REQUEST

export const buildRequestObject = (
  user_id: number,
  device_type: device_type | undefined,
  start_date_and_time: Date | undefined | string,
  end_date_and_time: Date | undefined | string,
  place: number | undefined
): USER_REQUEST | undefined => {
  if (
    device_type &&
    start_date_and_time &&
    end_date_and_time &&
    place !== undefined
  ) {
    const request: USER_REQUEST = {
      id_user_request: user_id,
      id_user: user_id,
      device_type: device_type,
      start_date_and_time: new Date(start_date_and_time),
      end_date_and_time: new Date(end_date_and_time),
      id_workstation: place,
    };
    
    return request;
  } else {
    return undefined;
  }
};
