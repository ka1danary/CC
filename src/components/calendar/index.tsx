import { useState } from "react"

interface Props {}

export const Calendar: React.FC<Props> = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <div>
        <input type="date"/>
      
    </div>
  );
};
