'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useGroup } from '@/context/groupContext'

import { useState } from 'react'

interface Group {
  _id: string
  name: string
}

// interface DialogDProps {
//   onAddGroup: (group: Group) => void
// }

// { onAddGroup }: DialogDProps

export default function DialogD() {
  const [gr_id, setGr_id] = useState('')
  const [gr_name, setGr_name] = useState('')

  const handleSubmit = () => {
    if (gr_id && gr_name) {
      // const newGroup: Group = {
      //   _id: gr_id,
      //   name: gr_name,
      // }
      //   handle_add({
      //     _id: gr_id,
      //     name: gr_name,
      //   }) // Call the function passed from Sidebar
      //   setGr_id('')
      //   setGr_name('')
    }
  }

  return (
    <Dialog>
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
              Id
            </Label>
            <Input value={gr_id} onChange={(e) => setGr_id((prev) => (prev = e.target.value))} id="identity" defaultValue="" className="col-span-3" />
          </div>
        </div>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input value={gr_name} onChange={(e) => setGr_name((prev) => (prev = e.target.value))} id="company" defaultValue="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Add Group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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
