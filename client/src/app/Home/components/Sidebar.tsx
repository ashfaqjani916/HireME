import React, { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [groups, setGroups] = useState(["Group1", "Group2", "Group2"]);

  const addGroup = () => {
    const newGroup = `Group ${groups.length + 1}`;
    setGroups([...groups, newGroup]);
  };

  return (
    <div className='flex flex-col justify-between gap-4 p-4 h-full'>

      <div>
        <div className='text-2xl font-bold mb-4'>Your Groups</div>
        <div className='flex flex-col gap-2 mt-8'>
          {groups.map((group, index) => (
            <div key={index} className='text-sm text-black px-3 py-1 border-b rounded-md'>
              <Link href={`/Home/${group}`}>{group}</Link>
            </div>
          ))}
        </div>
      </div>


      <button
        onClick={addGroup}
        className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'
      >
        Add Group
      </button>
    </div>
  );
}
