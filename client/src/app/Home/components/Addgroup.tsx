'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { useGroup } from '@/context/groupContext'

import { useState } from 'react'

interface DialogDProps {
  onAddGroup: (groupname: string) => void
}

<<<<<<< HEAD
interface DialogDProps {
  setGroupName: (name: string) => void;
}

export default function DialogD({ setGroupName }: DialogDProps) {
  const [inputValue, setInputValue] = useState('');
  const [render, setRender] = useState(true);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // Send the input value to Sidebar
  };

  const handleSubmit = () => {
    setRender(false);
    console.log('Submitted');
    setGroupName(inputValue);
  }


  return (
    <>
      {render && <Dialog>
        <DialogTrigger asChild>
          {/* <Button variant="outline">Add Group</Button> */}

          <button className="px-4 py-2 border border-outline rounded-md shadow-sm bg-gray-500 text-white">Add Group</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Group</DialogTitle>
            <DialogDescription>Add group details here</DialogDescription>
          </DialogHeader>



          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input value={inputValue}
                onChange={handleInputChange} id="company" defaultValue="" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Add Group
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      }
    </>
=======
export default function DialogD({ onAddGroup }: DialogDProps) {
  const [groupName, setGroupName] = useState('')
  // const { setName } = useGroup()

  const handleSubmit = () => {
    console.log('Setting name:', groupName)
    // setName(groupName)
    console.log('Name after setting:', groupName) // Check if setName is working
    onAddGroup(groupName)
    setGroupName('')
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 border border-outline rounded-md shadow-sm bg-gray-500 text-white">Add Group</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Group</DialogTitle>
          <DialogDescription>Add group details here</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input value={groupName} onChange={(e) => setGroupName(e.target.value)} id="company" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Add Group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
>>>>>>> ec19614f4ab9bfa770b7759eef6b15e19c6515f6
  )
}

// debri

// const handleSubmit = () => {
//   if (gr_id && gr_name) {
//     // const newGroup: Group = {
//     //   _id: gr_id,
//     //   name: gr_name,
//     // }
//     //   handle_add({
//     //     _id: gr_id,
//     //     name: gr_name,
//     //   }) // Call the function passed from Sidebar
//     //   setGr_id('')
//     //   setGr_name('')
//   }
// }
