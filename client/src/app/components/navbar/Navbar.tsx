'use client'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
})

import Signup from '../Signup'

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between  px-8 py-4 border border-bottom shadow-md">
        <Link href={'/'} className={`${montserrat.className} text-[#4267B2] text-2xl font-bold`}>hireMe.</Link>

        <div>
          <Signup />
        </div>
      </nav>
    </>
  )
}
