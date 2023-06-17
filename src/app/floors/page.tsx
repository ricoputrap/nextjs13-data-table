import List from "@/components/reusables/List";
import MainLayout from "@/layout/MainLayout";
import { TFloorItem } from "@/store";
import { getFloors } from "../actions";

export default async function Floors() {
  const floors: TFloorItem[] = await getFloors();

  return (
    <MainLayout title="Floors">
      <List items={ floors } />
    </MainLayout>
  )
}
