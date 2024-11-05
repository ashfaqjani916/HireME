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
  const route = useRouter()

  useEffect(() => {
    if (user === null) {
      // toast.error('Unauthorised')
      route.push('/')
    }
  }, [user])

  // return <>{user ? children : null}</>
  return children
}

export default ProtectedRoute
