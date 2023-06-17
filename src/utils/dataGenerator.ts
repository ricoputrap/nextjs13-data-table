import { faker } from "@faker-js/faker";

export const getBuildingNames = (numOfBuildings: number): string[] => {
  const names: string[] = [];

  for (let i = 0; i < numOfBuildings; i++) {
    const name = faker.person.fullName();
    names.push(name);
  }

  return names;
}

export const getFloorNames = (numOfFloors: number): string[] => {
  const names: string[] = [];

  for (let i = 0; i < numOfFloors; i++) {
    const name = generateOrdinalNumber(i + 1) + " Floor";
    names.push(name);
  }

  return names;
}

export const getRoomNames = (numOfRooms: number, floorNo: number) => {
  const names: string[] = [];

  for (let i = 0; i < numOfRooms; i++) {
    const name = `${floorNo}${i+1}`;
    names.push(name);
  }

  return names;
}

function generateOrdinalNumber(num: number) {
  let ordinalNumber: string;

  // Check if the number ends with 1, 2, or 3 and is not between 11 and 13
  if (num % 10 === 1 && num % 100 !== 11) {
    ordinalNumber = num + 'st';
  } else if (num % 10 === 2 && num % 100 !== 12) {
    ordinalNumber = num + 'nd';
  } else if (num % 10 === 3 && num % 100 !== 13) {
    ordinalNumber = num + 'rd';
  } else {
    ordinalNumber = num + 'th';
  }

  return ordinalNumber;
}