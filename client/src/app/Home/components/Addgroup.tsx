import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function DialogD() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Group</Button>
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
            <Input id="company" defaultValue="" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Group</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
