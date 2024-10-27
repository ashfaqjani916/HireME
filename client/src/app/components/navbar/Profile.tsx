'use client'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

interface User {
  name?: string | null
  email?: string | null
}

export default function Profile() {
  const { data: session } = useSession()

  // if (session && session.user) {
  //   console.log(session.user.image) // Logs the image URL or undefined if it doesn’t exist
  // }

  if (session && session.user) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Profile</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-around items-center px-[30px] space-x-4">
            <Avatar className="w-12 h-12">
              {/* <AvatarImage src={`${session.user.image}?timestamp=${new Date().getTime()}`} alt="User Profile Image" /> */}
              <img src={`${session.user.image}`} />
              {/* <AvatarFallback>NP</AvatarFallback> */}
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{session.user.name}</h4>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  }

  return null
}
