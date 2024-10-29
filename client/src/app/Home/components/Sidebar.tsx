import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import DialogD from '@/app/home/components/Addgroup'
// import { useGroup } from '@/context/groupContext'

interface Group {
  name: string | null
  joinCode: string | null
  createdBy: string
  members: string[]
}

export default function Sidebar() {
  let [groups, setGroups] = useState<Group[]>([
    {
      name: 'test',
      joinCode: 'joincode',
      createdBy: 'test',
      members: ['mem1', 'mem2'],
    },
  ])
  // const { name } = useGroup()

<<<<<<< HEAD

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
=======
  const handle_add = (groupname: string) => {
    const newGroup = {
      name: groupname,
      joinCode: groupname,
      createdBy: 'test',
      members: ['mem2', 'mem3'],
    }
    console.log(name)
    setGroups([...groups, newGroup])
>>>>>>> ec19614f4ab9bfa770b7759eef6b15e19c6515f6
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

<<<<<<< HEAD
      {/* <button onClick={addGroup} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
        Add Group
      </button> */}

      <DialogD setGroupName={setGroupName} />
=======
      <DialogD onAddGroup={handle_add} />
>>>>>>> ec19614f4ab9bfa770b7759eef6b15e19c6515f6
    </div>
  )
}

// debri

// const addGroup = () => {
//   // if (!user) return // Ensure user exists
//   // const newGroup = {
//   //   _id: `newGroupId${groups.length + 1}`,
//   //   name: `Group ${groups.length + 1}`,
//   //   // joinCode: `code${groups.length + 1}`,
//   //   // createdBy: user.userId, // Assuming you have userId in UserData
//   //   // members: [],
//   //   // jobPostings: [],
//   //   // createdAt: new Date().toISOString(),
//   //   // updatedAt: new Date().toISOString(),
//   //   // __v: 1,
//   // }
//   // Add the new group to the backend (replace with your API endpoint)
//   // try {
//   //   await axios.post(`${process.env.BACKEND_URL}/addGroup`, newGroup)
//   //   setGroups([...groups, newGroup]) // Update state with the new group
//   // } catch (error) {
//   //   console.error('Error adding group:', error)
//   // }
// }

// const router = useRouter()

// const { user } = useUser()

// useEffect(() => {
//   if (user) {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://2b13-49-205-107-52.ngrok-free.app/get-user-groups/nikhilpulluri7810@gmail.com`)
//         router.push('/Home')
//         console.log('we are getting a response')
//         console.log(response)
//         setGroups(response.data.groups || [])
//       } catch (error) {
//         console.error('Error fetching groups:', error)
//       }
//     }

//     fetchData()
//   }
// }, [router])

{
  /* <button onClick={addGroup} className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
        Add Group
      </button> */
}
