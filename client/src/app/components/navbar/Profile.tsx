'use client'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import Image from 'next/image'


export default function Profile() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Profile</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-around items-center px-[30px] space-x-4">
            {session.user.image !== null ? <Image className="h-8 w-8 rounded-full" alt={`${session.user.name}`} height={200} width={200} src={`${session.user.image}`} /> : <div>I</div>}
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
