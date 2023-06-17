import { create } from "zustand";

export type TBuildingItem = {
  id: number;
  name: string;
}

export type TFloorItem = {
  id: number;
  name: string;
  order: number;
  buildingId: number;
}

export type TRoomItem = {
  id: number;
  name: string;
  floorId: number;
}

type State = {
  buildings: TBuildingItem[];
  floors: TFloorItem[];
  rooms: TRoomItem[];
}

type Actions = {
  setBuildings: (buildings: TBuildingItem[]) => void;
  setFloors: (floors: TFloorItem[]) => void;
  setRooms: (rooms: TRoomItem[]) => void;
  setInitialData: (
    buildings: TBuildingItem[],
    floors: TFloorItem[],
    rooms: TRoomItem[]
  ) => void;
}

const useDataStore = create<State & Actions>(set => ({
  buildings: [],
  floors: [],
  rooms: [],

  setBuildings(buildings) {
    set({ buildings })
  },
  setFloors(floors) {
    set({ floors })
  },
  setRooms(rooms) {
    set({ rooms })
  },
  setInitialData(buildings, floors, rooms) {
    set({ buildings, floors, rooms })
  },
}))

export default useDataStore;