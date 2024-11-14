'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface GroupContextType {
  groupId: string
  setGroupId: React.Dispatch<React.SetStateAction<string>>
}

const GroupContext = createContext<GroupContextType | undefined>(undefined)

export const useGroupContext = () => {
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroupContext must be used within a GroupProvider')
  }
  return context
}

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [groupId, setGroupId] = useState<string>('')

  return <GroupContext.Provider value={{ groupId, setGroupId }}>{children}</GroupContext.Provider>
}
