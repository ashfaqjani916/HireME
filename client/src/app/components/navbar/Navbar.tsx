'use client'
import React from 'react'
import { Button } from '@/components/ui/button'

import Signup from '../Signup'

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between  px-8 py-4 border border-bottom shadow-md">
        <div className="text-[#4267B2] text-2xl font-bold">hireMe.</div>

        <div>
          <Signup />
        </div>
      </nav>
    </>
  )
}
