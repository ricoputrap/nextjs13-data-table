"use client";

import { exportData, importData } from '@/app/actions';
import Button from '@/components/Button'
import React, { useTransition } from 'react'

const Actions: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const handleExport = () => startTransition(() => exportData());
  const handleImport = () => startTransition(() => importData());

  return (
    <div className="flex items-center gap-2">
      <Button
        label="Export"
        icon="/icon/icon-excel.svg"
        alt="icon-excel"
        onClick={ handleExport }
      />
      <Button
        label="Import"
        icon="/icon/icon-excel.svg"
        alt="icon-excel"
        onClick={ handleImport }
      />
    </div>
  )
}

export default Actions