"use client";

import { TBuildingItem } from '@/store';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import React, { useMemo } from 'react'

const columnHelper = createColumnHelper<TBuildingItem>();

interface Props {
  buildings: TBuildingItem[];
}

const BuildingTable: React.FC<Props> = ({ buildings }) => {
  const columns = useMemo(() => [
    columnHelper.accessor("id", {
      header: "ID",
      cell: item => item.renderValue()
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: item => item.renderValue()
    }),
  ], []);

  const {
    getHeaderGroups,
    getRowModel
  } = useReactTable({ data: [...buildings], columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {getHeaderGroups().map(headerGroup => (
            <tr key={ headerGroup.id }>
              {headerGroup.headers.map(header => (
                <th key={ header.id } scope="col" className="px-6 py-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {getRowModel().rows.map(row => (
            <tr key={ row.id } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {row.getVisibleCells().map(cell => (
                <td key={ cell.id } className="px-6 py-4">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BuildingTable