// app/context/UserContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

// interface User {
//   name: string
//   email: string
//   userId: string
//   userName: string
//   groups: Object[]
// }

interface User {
  // _id: string
  username: string
  email: string
  // groups: string[]
  // createdAt: string
  // updatedAt: string
  // __v: number
}

interface UserContextType {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
