import List from "@/components/reusables/List";
import MainLayout from "@/layout/MainLayout";
import { TRoomItem } from "@/store";
import { getRooms } from "./actions";

export default async function Home() {
  const rooms: TRoomItem[] = await getRooms();
  return (
    <MainLayout title="Rooms">
      <List items={ rooms } />
    </MainLayout>
  )
}
