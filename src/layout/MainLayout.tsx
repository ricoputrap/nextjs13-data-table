import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
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
          { children }
        </main>
      </div>
    </div>
  )
}

export default MainLayout