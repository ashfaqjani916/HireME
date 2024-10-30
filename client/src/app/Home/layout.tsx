'use client'
import React from 'react'
import Sidebar from '@/app/home/components/Sidebar'
import DialogJ from './[groupId]/_components/JobAdd'
import ProtectedRoute from '@/context/protectedRoute'
// import { Job } from './[groupId]/_components/Tabled'
// import { GroupProvider } from '@/context/groupContext'

// src/types.ts
export type Job = {
  id: string
  role: string
  company: string
  location: string
  deadline: string
  link: string
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col  justify-center">
        <div className="flex justify-end mr-[20px] mt-[18px]">
          <DialogJ
            onJobAdd={function (job: Job): void {
              throw new Error('Function not implemented.')
            }}
          />
        </div>
        <div className="flex items-center justify-center p-5 mt-[6px]">
          <div className="grid grid-cols-6 grid-rows-5 gap-4 w-full">
            <div className="col-span-1 row-span-5 h-[75vh] bg-muted/50 rounded-md p-2">
              <Sidebar />
            </div>
            <div className="col-span-5 row-span-5 h-[75vh] bg-muted/50 rounded-md p-2 overflow-auto">{children}</div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
