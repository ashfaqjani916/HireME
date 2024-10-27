'use client'
import React from 'react'
import Tabled from './_components/Tabled'
import DialogJ from './_components/JobAdd'
import { Job } from './_components/JobAdd'
export default function page() {
  return (
    <div className="p-3 h-full">
      <Tabled />

      {/* <DialogJ
        onJobAdd={function (job: Job): void {
          throw new Error('Function not implemented.')
        }}
      /> */}
    </div>
  )
}
