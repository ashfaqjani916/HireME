import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import DialogD from '@/app/home/components/Addgroup'
import { useUser } from '@/context/userContext'
import axios from 'axios'
import JoinGroup from './joinGroup'
import { useGroupContext } from '@/context/presentGroup'

interface Group {
  name: string | null
  joinCode: string | null
  createdBy: string
  members: string[]
  _id: string
}

export default function Sidebar() {
  const [groups, setGroups] = useState<Group[]>([
    {
      name: 'test',
      joinCode: 'joincode',
      createdBy: 'test',
      members: ['mem1', 'mem2'],
      _id: '1',
    },

    {
      name: 'test1',
      joinCode: 'joincode',
      createdBy: 'test',
      members: ['mem1', 'mem2'],
      _id: '2',
    },
  ])
  const { user } = useUser()
  const { setGroupId } = useGroupContext()

  const handlegroupname = (gid: string) => {
    setGroupId(gid)
  }

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/get-user-groups/nikhilpulluri7810@gmail.com`)
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

  const handle_add = async (groupname: string) => {
    axios
      .post('http://localhost:8080/createGroup', {
        userId: user?.userId,
        name: groupname,
      })
      .then((response) => {
        console.log(response)
        setGroups([...groups, response.data])
      })
      .catch((error) => {
        console.error('Error creating group:', error)
      })
  }

  const handle_join = (groupCode: string) => {
    axios
      .post('http://localhost:8080/join-team', {
        email: user?.email,
        code: groupCode,
      })
      .then((response) => {
        console.log(response)
        setGroups([...groups, response.data])
      })
      .catch((error) => {
        console.error('Error joining group:', error)
      })
  }

  return (
    <div className="flex flex-col justify-between gap-4 p-4 h-full">
      <div>
        <div className="text-2xl font-bold mb-4">Your Groups</div>
        <div className="flex flex-col w-full gap-2 mt-8">
          {groups.length > 0 ? (
            groups.map((group) => (
              <div
                key={group._id}
                onClick={() => handlegroupname(group._id)}
                className="text-sm text-center text-black px-3 py-2 border-2 border-gradient-to-r from-purple-500 to-blue-500 rounded-md text-gray-800 shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-xl hover:text-blue-600"
              >
                <Link href={`/home/${group._id}`} className="block">
                  {group.name}
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No groups available.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <DialogD onAddGroup={handle_add} />
        <JoinGroup onJoinGroup={handle_join} />
      </div>
    </div>
  )
}
