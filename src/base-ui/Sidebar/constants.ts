type TMenuData = {
  id: string;
  url: string;
  label: string;
}

export const MENUS: TMenuData[] = [
  {
    id: "rooms",
    url: "/",
    label: "Rooms"
  },
  {
    id: "floors",
    url: "/floors",
    label: "Floors"
  },
  {
    id: "buildings",
    url: "/buildings",
    label: "Buildings"
  }
]

type TMenuIcon = {
  [key: string]: {
    default: string;
    active: string;
  }
}

export const MENU_ICONS: TMenuIcon = {
  rooms: {
    default: "/icon/icon-room.svg",
    active: "/icon/icon-room-white.svg"
  },
  floors: {
    default: "/icon/icon-floor.svg",
    active: "/icon/icon-floor-white.svg"
  },
  buildings: {
    default: "/icon/icon-building.svg",
    active: "/icon/icon-building-white.svg"
  }
}