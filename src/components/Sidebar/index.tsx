"use client";

import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { MENUS, MENU_ICONS } from './constants';

type TMenuItem = {
  url: string;
  label: string;
  icon: string;
  active: boolean;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const menus: TMenuItem[] = MENUS.map(menu => {
    const active = pathname == menu.url;
    const menuIcon = MENU_ICONS[menu.id];

    return {
      url: menu.url,
      label: menu.label,
      icon: active ? menuIcon.active : menuIcon.default,
      active,
    }
  });

  return (
    <aside className="bg-white w-52 h-full">

      {/* LOGO */}
      <div className="h-20 flex items-center justify-center">
        <h1 className="text-2xl font-black">
          DATA TABLE
        </h1>
      </div>

      {/* MENU */}
      <div className="flex flex-col gap-4 px-6 mt-5">
        {menus.map(menu => (
          <Link href={ menu.url } key={ menu.url }>
            <div className={`
              h-10 p-2 rounded-md
              flex items-center gap-2
              cursor-pointer
              ${menu.active
                ? "bg-blue-600"
                : "bg-transparent  hover:bg-slate-100"
              }
            `}>
              <Image
                src={ menu.icon }
                alt="menu-icon"
                width={24}
                height={24}
              />
              <p className={`
                text-sm font-bold m-0
                ${menu.active ? "text-white" : "text-black"}
              `}>
                { menu.label }
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar