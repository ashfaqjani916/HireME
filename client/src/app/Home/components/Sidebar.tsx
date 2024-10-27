import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import DialogD from './Addgroup'
import axios from 'axios'
import { useUser } from '@/context/userContext'
import { useRouter } from 'next/navigation'

interface Group {
  _id: string
  name: string
  joinCode: string
  createdBy: string
  members: string[]
  jobPostings: any[]
  createdAt: string
  updatedAt: string
  __v: number
}

export default function Sidebar() {
  let [groups, setGroups] = useState<Group[]>([
    {
      _id: 'test',
      name: 'test',
      joinCode: 'test',
      createdBy: 'test',
      members: ['mem1', 'mem2'],
      jobPostings: ['job1, job2'],
      createdAt: 'time',
      updatedAt: 'utime',
      __v: 1,
    },
  ])


  let groupName = '';
  const setGroupName = (name: string) => {
    groupName = name;
    console.log('Group name set to:', groupName);
  };

  useEffect(() => {
    console.log('Group name from sidebar:', groupName)
    addGroup()
  }, [groupName])

  const router = useRouter()

  const { user } = useUser()

  console.log('user', user)

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          console.log('we are fetching data')
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

  const handle_add = (groupdata: Group) => {
    setGroups([...groups, groupdata])
  }

  const addGroup = async () => {
    if (!user) return // Ensure user exists
    const newGroup = {
      _id: `newGroupId${groups.length + 1}`,
      name: `Group ${groups.length + 1}`,
      joinCode: `code${groups.length + 1}`,
      createdBy: user.userId, // Assuming you have userId in UserData
      members: [],
      jobPostings: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 1,
    }
    // Add the new group to the backend (replace with your API endpoint)
    try {
      const groupResponse = await axios.post(`http://localhost:8080/createGroup`,
        {
          userId: user.userId,
          name: groupName,
        }
      )
      setGroups([...groups, groupResponse.data]) // Update state with the new group
    } catch (error) {
      console.error('Error adding group:', error)
    }
  }

  return (
    <div className="flex flex-col justify-between gap-4 p-4 h-full">
      <div>
        <div className="text-2xl font-bold mb-4">Your Groups</div>
        <div className="flex flex-col gap-2 mt-8">
          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group._id} className="text-sm text-black px-3 py-1 border-b rounded-md">
                <Link href={`/Home/${group._id}`}>{group.name}</Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No groups available.</p>
          )}
        </div>
      </div>

      {/* <button onClick={addGroup} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
        Add Group
      </button> */}

      <DialogD setGroupName={setGroupName} />
    </div>
  )
}
