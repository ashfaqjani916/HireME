import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { DatePickerWithPresets } from './DatePicker'

export interface Job {
  id: string
  role: string
  company: string
  deadline: string
  location: string
  link: string
}

interface DialogJProps {
  onJobAdd: (job: Job) => void
}

const DialogJ: React.FC<DialogJProps> = ({ onJobAdd }) => {
  const [job, setJob] = useState<Job>({
    id: '',
    role: '',
    company: '',
    deadline: '',
    location: '',
    link: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setJob((prevJob) => ({ ...prevJob, [id]: value }))
  }

  const handleSubmit = () => {
    if (onJobAdd) {
      onJobAdd(job)
    }

    setJob({
      id: '',
      role: '',
      company: '',
      deadline: '',
      location: '',
      link: '',
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="">Add Job</Button> */}
        <button className="px-4 py-2 border border-outline rounded-md shadow-sm bg-blue-500 text-white">Add Job</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Job</DialogTitle>
          <DialogDescription>Add job details here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Role
            </Label>
            <Input id="link" value={job.role} onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input id="company" value={job.company} onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">
              Deadline
            </Label>
            {/* <Input id="deadline" value={job.deadline} onChange={handleChange} className="col-span-3" /> */}
            <DatePickerWithPresets />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="compensation" className="text-right">
              Location
            </Label>
            <Input id="compensation" value={job.location} onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link" className="text-right">
              Link
            </Label>
            <Input id="link" value={job.link} onChange={handleChange} className="col-span-3" />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Add Job
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogJ
