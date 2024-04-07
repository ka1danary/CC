import { create } from "zustand";
import data from "../data.json";
import { generateId } from "../helper";

interface RequestObject {
  id: string;
  deviceType: "PC" | "PS" | "VR";
  date: Date;
  sessionTime: 1 | 2 | 3;
  place: string;
}

interface requestStore {
  requests: RequestObject[];
  createUserRequest: (
    deviceType: "PC" | "PS" | "VR",
    date: Date,
    sessionTime: 1 | 2 | 3,
    place: string
  ) => void;
  deleteUserRequest: (id: string) => void;  
  
}

export const useClubStore = create<requestStore>((set, get) => ({
    requests : data,
    createUserRequest : (deviceType, date, sessionTime, place) => {
      const {requests} = get()
      const newRequest = {
        id : generateId(),
        deviceType,
        date,
        sessionTime,
        place
      }
      set({
        requests : [newRequest, ...requests]
      })
    },
    deleteUserRequest : (id) => {
        const {requests} = get()
        set({
            requests : requests.filter((request) => request.id != id)
        })
        console.log("Карточка удалена " + id)
    }
}));
