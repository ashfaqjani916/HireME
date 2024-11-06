'use client'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from 'axios'
import React, { useEffect } from 'react'
import DropdownMenuR from './Dropdown'

interface Job {
  companyName: string
  deadline: string
  compensation: string
  registrationLink: string
  groups: string
  appliedStatus: boolean
}

type Props = {
  groupId: string
}

export default function JobTable({ groupId }: Props) {
  const [data, setData] = React.useState<Job[]>([
    {
      companyName: 'Tech Solutions',
      deadline: '2024-12-01',
      compensation: '$120,000',
      registrationLink: 'https://apply.techsolutions.com',
      groups: 'Engineering',
      appliedStatus: true,
    },
    {
      companyName: 'Innovate Labs',
      deadline: '2024-12-05',
      compensation: '$110,000',
      registrationLink: 'https://apply.innovatelabs.com',
      groups: 'Development',
      appliedStatus: false,
    },
  ])

  const fetchData = React.useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/listJobPostings/${groupId}`)
      setData(response.data)
    } catch (error) {
      console.error('Error fetching groups:', error)
    }
  }, [groupId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  console.log(groupId)

  const handlestatus = (jobid: string, newS: boolean) => {
    console.log(jobid)
    console.log(newS)

    // change the status in the backend from here
  }

  return (
    <Table>
      <TableCaption>List of current job openings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Company</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Compensation</TableHead>
          <TableHead>Registration Link</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({ groups, ...job }) => (
          <TableRow key={job.companyName}>
            <TableCell className="font-medium">{job.companyName}</TableCell>
            <TableCell>{job.deadline}</TableCell>
            <TableCell>{job.compensation}</TableCell>
            <TableCell>
              <a href={job.registrationLink} target="_blank" rel="noopener noreferrer">
                Apply Link
              </a>
            </TableCell>
            <TableCell>
              <DropdownMenuR status={job.appliedStatus} jobid={job.registrationLink} changeStatus={handlestatus} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6} className="text-right">
            Total Openings: {data.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

//

// const [data, setData] = React.useState<Job[]>([])

// const fetchData = React.useCallback(async () => {
//   try {
//     const response = await axios.get(`http://localhost:8080/listJobPostings/${groupId}`)
//     setData(response.data)
//   } catch (error) {
//     console.error('Error fetching groups:', error)
//   }
// }, [groupId])

// useEffect(() => {
//   fetchData()
// }, [fetchData])

// export const columns: ColumnDef<Job>[] = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <Checkbox
//         checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: 'title',
//     header: ({ column }) => (
//       <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
//         Job Title
//         <ArrowUpDown className="ml-2 h-4 w-4" />
//       </Button>
//     ),
//     cell: ({ row }) => <div>{row.getValue('title')}</div>,
//   },
//   {
//     accessorKey: 'company',
//     header: 'Company',
//     cell: ({ row }) => <div>{row.getValue('company')}</div>,
//   },
//   {
//     accessorKey: 'location',
//     header: 'Location',
//     cell: ({ row }) => <div>{row.getValue('location')}</div>,
//   },
//   {
//     accessorKey: 'deadline', // New column for deadline
//     header: 'Deadline',
//     cell: ({ row }) => <div>{row.getValue('deadline')}</div>,
//   },
//   {
//     id: 'link', // New column for job link
//     header: 'Link',
//     cell: ({ row }) => {
//       const jobLink: string = row.original.link
//       // console.log(jobLink)
//       return (
//         <a
//           href={jobLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 underline"
//           onClick={(e) => {
//             // e.preventDefault()
//             e.stopPropagation() // Prevent event from bubbling up
//           }}
//         >
//           View Job
//         </a>
//       )
//     },
//   },
//   {
//     id: 'actions',
//     enableHiding: false,
//     cell: ({ row }) => {
//       const job = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem onClick={() => navigator.clipboard.writeText(job.id)}>Copy Job ID</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View Job Details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]
