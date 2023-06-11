import Actions from "@/components/rooms/Actions";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Rooms">
      <div className="bg-white rounded-md p-5 mt-5">
        <Actions />
      </div>
    </MainLayout>
  )
}
