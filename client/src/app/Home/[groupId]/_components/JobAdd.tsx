import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export interface Job {
  company: string
  deadline: string
  compensation: string
  link: string
}

interface DialogJProps {
  onJobAdd: (job: Job) => void
}

const DialogJ: React.FC<DialogJProps> = ({ onJobAdd }) => {
  const [job, setJob] = useState<Job>({
    company: '',
    deadline: '',
    compensation: '',
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
      company: '',
      deadline: '',
      compensation: '',
      link: '',
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Job</DialogTitle>
          <DialogDescription>Add project details here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
            <Input id="deadline" value={job.deadline} onChange={handleChange} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="compensation" className="text-right">
              Compensation
            </Label>
            <Input id="compensation" value={job.compensation} onChange={handleChange} className="col-span-3" />
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
