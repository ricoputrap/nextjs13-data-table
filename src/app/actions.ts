"use server";

import DbClient from "@/clients/DbClient";
import { TBuildingItem, TFloorItem, TRoomItem } from "@/store";
import { getBuildingNames, getFloorNames, getRoomNames } from "@/utils/dataGenerator";

const prisma = DbClient.getInstance();

export async function exportData() {
  console.log("===== EXPORT DATA =====");
}

export async function importData() {
  console.log("===== IMPORT DATA =====");
}

export async function resetData() {
  // rooms
  await prisma.room.deleteMany();

  // floors
  await prisma.floor.deleteMany();

  // building
  await prisma.building.deleteMany();
}

export async function generateDummyData() {
  // reset data
  await resetData();

  // generate buildings
  const buildingNames = getBuildingNames(5);
  const buildings: TBuildingItem[] = await Promise.all(
    buildingNames.map(async (name) => {
      return await prisma.building.create({
        data: { name }
      })
    })
  );

  // generate floors
  const floorNames = getFloorNames(10);
  const floorResponse = await Promise.all(
    buildings.map(async (building) => {
      return await Promise.all(
        floorNames.map(async (floor, index) => {
          return await prisma.floor.create({
            data: {
              name: floor,
              order: index + 1,
              buildingId: building.id
            }
          });
        })
      );
    })
  );
  const floors: TFloorItem[] = floorResponse.reduce(
    (allFloors: TFloorItem[], floorsInBuilding) => [
      ...allFloors,
      ...floorsInBuilding
  ], []);

  // generate rooms
  const roomsResponse = await Promise.all(
    floors.map(async (floor) => {
      const roomNames = getRoomNames(10, floor.order);

      return await Promise.all(
        roomNames.map(async (room) => {
          return await prisma.room.create({
            data: {
              name: room,
              floorId: floor.id
            }
          })
        })
      )
    })
  )

  const rooms: TRoomItem[] = roomsResponse.reduce(
    (allRooms: TRoomItem[], roomsInFloor) => [
      ...allRooms,
      ...roomsInFloor
  ], []);

  return { buildings, floors, rooms }
}

export async function getBuildings() {
  const buildings = await prisma.building.findMany();
  return buildings;
}

export async function getFloors(): Promise<TFloorItem[]> {
  const floors: TFloorItem[] = await prisma.floor.findMany();
  return floors;
}

export async function getRooms(): Promise<TRoomItem[]> {
  const rooms: TRoomItem[] = await prisma.room.findMany();
  return rooms;
}