import BuildingTable from "@/components/buildings/BuildingTable";
import MainLayout from "@/layout/MainLayout";
import { getBuildings } from "../actions";

export default async function Buildings() {
  const buildings = await getBuildings();

  return (
    <MainLayout title="Buildings">
      <BuildingTable buildings={ buildings } />
    </MainLayout>
  )
}
