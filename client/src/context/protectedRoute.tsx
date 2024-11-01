// app/context/ProtectedRoute.tsx
'use client'

import React, { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from './userContext'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUser()
  const router = useRouter()

  // useEffect(() => {
  //   if (!user) {
  //     // toast.error('Unauthorised')
  //     router.push('/')
  //   }
  // }, [user, router])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
