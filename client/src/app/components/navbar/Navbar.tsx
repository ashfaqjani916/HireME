'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { NavigationMenuc } from './NavigationMenu'
import Signup from '../Signup'

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between  px-8 py-4">
        <div>logo</div>


        <div>
          <Signup />
        </div>
      </nav>
    </>
  )
}
