'use client'

import * as React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

type props = {
  status: boolean
  jobid: string
  changeStatus: (jobid: string, newS: boolean) => void
}

export default function DropdownMenuR({ status, jobid, changeStatus }: props) {
  const [stat, setStat] = useState(status)

  const handleStatusChange = (newStatus: string) => {
    if (newStatus === 'Applied') {
      setStat(true)
    } else setStat(false)
    changeStatus(jobid, !stat)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{stat === true ? <span className="text-green-600">Applied</span> : <span className="text-red-600">Not Applied</span>}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={stat ? `Applied` : `Not Applied`} onValueChange={handleStatusChange}>
          <DropdownMenuRadioItem value="Applied">Applied</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Not Applied">Not Applied</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
