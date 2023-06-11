"use client";

import Image from 'next/image'
import React from 'react'

interface Props {
  label: string;
  icon: string;
  alt: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ label, icon, alt, onClick }) => {
  return (
    <button onClick={ onClick } className="
      bg-blue-600 text-white text-sm
      px-4 py-2.5 rounded-md
      flex items-center gap-2
      hover:bg-blue-500
    ">
      { label }
      <Image
        src={ icon }
        alt={ alt }
        width={16}
        height={16}
      />
    </button>
  )
}

export default Button