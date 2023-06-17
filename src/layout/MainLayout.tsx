import Actions from '@/base-ui/Actions';
import Navbar from '@/base-ui/Navbar'
import Sidebar from '@/base-ui/Sidebar'
import React from 'react'

interface Props {
  title: string;
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        
        <main className="p-10">
          <h1 className="text-3xl">{ title }</h1>
          <div className="bg-white rounded-md p-5 mt-5 flex flex-col gap-3">
            <Actions />
            { children }
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout