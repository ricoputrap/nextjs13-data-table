"use client";

import { generateDummyData, resetData } from '@/app/actions';
import useDataStore from '@/store';
import useGlobalStore from '@/store/useGlobalStore';
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
  const setIsLoading = useGlobalStore(state => state.setIsLoading);
  const setBuildings = useDataStore(state => state.setBuildings);
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

  const generateData = async () => {
    setIsLoading(true);
    const res = await generateDummyData();
    setBuildings(res.buildings);
    setIsLoading(false);
  }

  const reset = async () => {
    setIsLoading(true);
    await resetData();
    setBuildings([]);
    setIsLoading(false);
  }

  return (
    <aside id="sidebar" className="bg-white w-52 h-full flex flex-col">

      {/* LOGO */}
      <div className="h-20 flex items-center justify-center">
        <h1 className="text-2xl font-black">
          DATA TABLE
        </h1>
      </div>

      <div className="py-5 flex-1 flex flex-col justify-between">
        {/* MENU */}
        <div className="flex flex-col gap-4 px-6">
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

        {/* DATA GENERATOR */}
        <div className="flex flex-col gap-4 px-6">
          <button
            className="h-10 p-2 rounded-md cursor-pointer bg-blue-600 text-white"
            onClick={ generateData }
          >
            Generate
          </button>
          <button
            className="h-10 p-2 rounded-md cursor-pointer bg-slate-300"
            onClick={ reset }
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar