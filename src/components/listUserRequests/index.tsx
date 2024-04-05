import { useClubStore } from "../../data/stores/useClubStore";
import { UserRequestCard } from "../userRequestCard";

interface Props {}

export const ListUserRequest: React.FC<Props> = () => {
  const [requests] = useClubStore((state) => [state.requests]);
  return (
    <div>
      {requests.map((el, index) => (
        <div key={index}>
          <UserRequestCard id={el.id} deviceType={el.deviceType} date={el.date} sessionTime={el.sessionTime} place={el.place} />
        </div>
      ))}
    </div>
  );
};
