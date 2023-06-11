import Image from 'next/image'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className="h-20 w-full p-5 bg-white">
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full h-10"
            src="/profile.svg"
            alt="profile"
            width={40}
            height={40}
          />
          <h4 className="text-sm font-bold">
            Rico Putra
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar