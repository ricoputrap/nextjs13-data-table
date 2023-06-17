import BuildingList from "@/components/buildings/BuildingList";
import MainLayout from "@/layout/MainLayout";
import { getBuildings } from "../actions";

export default async function Buildings() {
  const buildings = await getBuildings();

  return (
    <MainLayout title="Buildings">
      <BuildingList items={ buildings } />
    </MainLayout>
  )
}
