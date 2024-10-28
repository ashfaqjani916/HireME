import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the context type with only a `name` string and its setter
interface GroupContextType {
  name: string | null
  setName: (name: string) => void
  // setName: React.Dispatch<React.SetStateAction<string | null>>
}

// Initialize the context
const GroupContext = createContext<GroupContextType | undefined>(undefined)

// Provider component to wrap around components that need access to the group name
export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string | null>('')

  return <GroupContext.Provider value={{ name, setName }}>{children}</GroupContext.Provider>
}

// Custom hook to use Group context in components
export const useGroup = () => {
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroup must be used within a GroupProvider')
  }
  return context
}
