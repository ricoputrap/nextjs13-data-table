import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar"

export default function Floors() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-10">
          <h1 className="text-3xl">Buildings</h1>
        </main>
      </div>
    </div>
  )
}
