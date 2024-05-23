import { format } from "@formkit/tempo";
import { USER_REQUEST } from "../../store/models/dbModels/models";

// возвращает дату в читаемом формате
export const createReadableDate = (
  date: Date | undefined,
  locale: string = "default"
) => {
  const checkDate = date ?? new Date();
  const fullDate = format(checkDate, "full");
  const parseTimeFromDate = format(checkDate, "hh:mm", locale);
  return {
    fullDate,
    parseTimeFromDate,
  };
};

// Извлекает и преобразует даты из заявки
export const extractDatesFromRequest = (request: USER_REQUEST | undefined) => {
  const startDate = request?.start_date_and_time
    ? new Date(request.start_date_and_time)
    : undefined;
  const endDate = request?.end_date_and_time
    ? new Date(request.end_date_and_time)
    : undefined;
  return {
    startDate,
    endDate,
  };
};
