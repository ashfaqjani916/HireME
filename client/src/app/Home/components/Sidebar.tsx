import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import DialogD from '@/app/home/components/Addgroup'
import { useUser } from '@/context/userContext'
import axios from 'axios'

interface Group {
  name: string | null
  joinCode: string | null
  createdBy: string
  members: string[]
}

export default function Sidebar() {
  const [groups, setGroups] = useState<Group[]>([
    {
      name: 'test',
      joinCode: 'joincode',
      createdBy: 'test',
      members: ['mem1', 'mem2'],
    },
  ])
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://2b13-49-205-107-52.ngrok-free.app/get-user-groups/nikhilpulluri7810@gmail.com`)
          console.log('we are getting a response')
          console.log(response)
          setGroups(response.data.groups || [])
        } catch (error) {
          console.error('Error fetching groups:', error)
        }
      }
      fetchData()
    }
  }, [user])

  const handle_add = (groupname: string) => {
    const newGroup = {
      name: groupname,
      joinCode: groupname,
      createdBy: 'test',
      members: ['mem2', 'mem3'],
    }
    setGroups([...groups, newGroup])
  }

  return (
    <div className="flex flex-col justify-between gap-4 p-4 h-full">
      <div>
        <div className="text-2xl font-bold mb-4">Your Groups</div>
        <div className="flex flex-col gap-2 mt-8">
          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group.joinCode} className="text-sm text-black px-3 py-1 border-b rounded-md">
                <Link href={`/home/${group.joinCode}`}>{group.name}</Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No groups available.</p>
          )}
        </div>
      </div>
      <DialogD onAddGroup={handle_add} />
    </div>
  )
}
