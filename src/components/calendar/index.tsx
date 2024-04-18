import React from "react";

interface Props {
  date: Date;
  setDate: (date: Date) => void; 
}

export const Calendar: React.FC<Props> = ({ date, setDate }) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value); 
    setDate(selectedDate); 
  };

  // Преобразуем объект Date обратно в строку для использования в атрибуте value input
  const formattedDate = typeof date === "string" ? date : date?.toISOString().split("T")[0];

  return (
    <div>
      <input type="date" value={formattedDate} onChange={handleDateChange} />
    </div>
  );
};
