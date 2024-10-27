'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/userContext'
import { Button } from '@/components/ui/button'
import Profile from './navbar/Profile'
import { GoogleButton } from './navbar/Google'

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

  // useEffect(() => {
  //   if (session && session.user) {
  //     console.log(session)

  //     const fetching = findUser(session.user)
  //     setUser({
  //       name: session.user.name ?? '',
  //       email: session.user.email ?? '',
  //     })

  //     console.log(user)
  //     route.push('/Home')
  //   }
  // }, [session, setUser, route])

  // uncomment the above

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

        <Button variant="destructive" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div onClick={() => signIn()}>
      <GoogleButton />
    </div>
  )
}
