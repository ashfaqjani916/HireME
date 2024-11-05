'use client'
import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/userContext'
import { Button } from '@/components/ui/button'
import Profile from './navbar/Profile'
import { findUser } from '@/lib/signinutil'

interface User {
  // _id: string
  username: string
  email: string
  // groups: string[]
  // createdAt: string
  // updatedAt: string
  // __v: number
}

export default function Signup() {
  const { user, setUser } = useUser()
  const { data: session } = useSession()

  const handlesignout = async () => {
    // route.push('/')
    await signOut()
    setUser(null)
  }

  if (session && session.user) {
    return (
      <div className="flex gap-4 items-center">
        <Profile />

        <Button variant="destructive" onClick={handlesignout}>
          Sign Out
        </Button>
      </div>
    )
  }
}
