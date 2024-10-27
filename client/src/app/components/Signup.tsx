'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { findUser } from '@/lib/signinutil'
import { useUser } from '@/context/userContext'
import { Button } from '@/components/ui/button'
import Profile from './navbar/Profile'

interface User {
  name?: string | null
  email?: string | null
}

export default function Signup() {
  const { user, setUser } = useUser()
  const { data: session } = useSession()
  const route = useRouter()

  // useEffect(() => {
  //   if (session?.user) {
  //     route.push('/Home')
  //     const fetching = findUser(session.user)
  //   }
  // }, [route])

  useEffect(() => {
    if (session && session.user) {
      console.log(session)

      const fetching = findUser(session.user)
      setUser({
        name: session.user.name ?? '', // fallback to empty string if name is null or undefined
        email: session.user.email ?? '', // fallback to empty string if email is null or undefined
      })

      console.log(user)
      route.push('/Home')
    }
  }, [session, setUser, route])

  if (session && session.user) {
    // console.log(session)

    // const fetching = findUser(session.user)
    // setUser({
    //   name: session.user.name ?? '',
    //   email: session.user.email ?? '',
    // })
    // route.push('/Home')

    return (
      <div className="flex gap-4 items-center">
        <Profile />
        {/* <div className="text-1xl font-semibold">{session.user.name}</div> */}

        {/* <p className="text-sky-600">{session.user.name}</p> */}

        {/* <button onClick={() => signOut({ callbackUrl: '/' })} className="text-red-600">
          Sign Out
        </button> */}

        <Button variant="destructive" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className="text-green-600">
      Sign In
    </button>
  )
}
