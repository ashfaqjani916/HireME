'use client'
import DropdownMenuR from './Dropdown'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { useState, useEffect } from 'react'

export default function Tabled() {
  const [jobs, setJobs] = useState([
    {
      company: 'abc',
      deadline: '21-03-2024',
      compensation: '20,000 RS',
      link: 'www.google.com',
      status: 'Not Applied',
    },
  ])

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Compensation</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.link}>
            <TableCell>{job.company}</TableCell>
            <TableCell>{job.deadline}</TableCell>
            <TableCell>{job.compensation}</TableCell>
            <TableCell>
              <a href={job.link} target="_blank">
                {job.link}
              </a>
            </TableCell>
            <TableCell>
              <DropdownMenuR status={job.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
