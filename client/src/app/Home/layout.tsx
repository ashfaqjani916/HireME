'use client'
import React from 'react'
import Sidebar from './components/Sidebar'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex items-center justify-center p-5 mt-[70px]">
      <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full">
        <div className="col-span-1 row-span-5 h-[75vh] bg-muted/50 rounded-md p-2">
          <Sidebar />
        </div>

        <div className="col-span-5 row-span-5 h-[75vh] bg-muted/50 rounded-md p-2 overflow-auto">{children}</div>
      </div>
    </div>
  )
}
