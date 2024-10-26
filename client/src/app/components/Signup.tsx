'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
// import { findUser } from '@/lib/signinutil'

export default function Signup() {
  const { data: session } = useSession()

  if (session && session.user) {
    console.log(session)

    // await findUser(session.user)

    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>

        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className="text-green-600">
      Sign In
    </button>
  )
}
