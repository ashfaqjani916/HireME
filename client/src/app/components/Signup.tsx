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
  name?: string | null
  email?: string | null
}

export default function Signup() {
  const { user, setUser } = useUser()
  const { data: session } = useSession()
  const route = useRouter()

  useEffect(() => {
    if (session && session.user) {
      console.log(session)

      // const fetching = findUser(session.user)
      setUser({
        name: session.user.name ?? '',
        email: session.user.email ?? '',
      })

      console.log(user)
      // route.push('/home') // reason for route changing!
    }
  }, [session, setUser, route])

  // uncomment the above

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
