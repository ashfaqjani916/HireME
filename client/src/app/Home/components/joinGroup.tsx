'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { useGroup } from '@/context/groupContext'

import { useState } from 'react'

interface DialogDProps {
  onJoinGroup: (groupname: string) => void
}

export default function JoinGroup({ onJoinGroup }: DialogDProps) {
  const [groupName, setGroupName] = useState('')
  // const { setName } = useGroup()

  const handleSubmit = () => {
    console.log('Setting name:', groupName)
    // setName(groupName)
    console.log('Name after setting:', groupName) // Check if setName is working
    onJoinGroup(groupName)
    setGroupName('')
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 border border-outline rounded-md shadow-sm bg-blue-500 text-white">Join Group</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Group</DialogTitle>
          <DialogDescription>Enter the group joining code here</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Code:
            </Label>
            <Input value={groupName} onChange={(e) => setGroupName(e.target.value)} id="company" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Join Group
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
