'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { groupadddia } from './Sidebar'
import { useState, useEffect } from 'react'

interface Group {
  _id: string
  name: string
}

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
  )
}
