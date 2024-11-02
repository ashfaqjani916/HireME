'use client'
import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/userContext'
import { Button } from '@/components/ui/button'
import Profile from './navbar/Profile'
// import { GoogleButton } from './navbar/Google'
import { findUser } from '@/lib/signinutil'

interface User {
  _id: string;
  username: string;
  email: string;
  groups: string[];  // Assuming groups is always an empty array or an array of strings
  createdAt: string;
  updatedAt: string;
  __v: number;
}


export default function Signup() {
  const { user, setUser } = useUser()
  const { data: session } = useSession()
  const route = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {
      if (session && session.user) {
        console.log(session)

        const userData: User = await findUser(session.user)
        setUser({
          name: userData.username ?? '',
          email: userData.email ?? '',
          userId: userData._id ?? '',
          userName: userData.username ?? '',
          groups: userData.groups
        })

        console.log(user)
        // route.push('/home') // reason for route changing!
      }
    }
    fetchUserData()
  }, [session, setUser, route])


  if (session && session.user) {
    return (
      <div className="flex gap-4 items-center">
        <Profile />

        <Button variant="destructive" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    )
  }

  return <Button onClick={() => signIn()}>Login</Button>
}
