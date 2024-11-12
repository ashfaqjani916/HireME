import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { DatePickerWithPresets } from './DatePicker'

export interface Job {
  companyName: string
  deadline: string
  compensation: string
  registrationLink: string
  groups: string
  appliedStatus: boolean
}

// interface DialogJProps {
//   onJobAdd: (job: Job) => void
// }

const DialogJ: React.FC = () => {
  const [job, setJob] = useState<Job>({
    companyName: '',
    deadline: '',
    compensation: '',
    registrationLink: '',
    groups: '',
    appliedStatus: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setJob((prevJob) => ({ ...prevJob, [id]: value }))
  }

  const handleSubmit = () => {
    console.log(job)

    setJob({
      companyName: '',
      deadline: '',
      compensation: '',
      registrationLink: '',
      groups: '',
      appliedStatus: false,
    })
  }

  const handleDate = (date: Date | undefined) => {
    console.log(date)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-4 py-2 border border-outline rounded-md shadow-sm bg-blue-500 text-white">Add Job</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Job</DialogTitle>
          <DialogDescription>Add job details here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input id="companyName" value={job.companyName} onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">
              Deadline
            </Label>
            <DatePickerWithPresets getDate={handleDate} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="compensation" className="text-right">
              Compensation
            </Label>
            <Input id="compensation" value={job.compensation} onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="registrationLink" className="text-right">
              Apply Link
            </Label>
            <Input id="registrationLink" value={job.registrationLink} onChange={handleChange} className="col-span-3" />
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
