'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@/context/userContext'
import { ArrowRight } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// import { findUser } from '@/lib/signinutil'

// interface User {
//   // _id: string
//   userId: string
//   username: string
//   email: string
//   // groups: string[]
//   // createdAt: string
//   // updatedAt: string
//   // __v: number
// }

export default function Landing() {
  const { user, setUser } = useUser()
  const { data: session } = useSession()
  const route = useRouter()

  useEffect(() => {
    const fetchUserData = async () => {
      if (session && session.user) {
        console.log(session)

        // const userData: User = await findUser(session.user)
        setUser({
          // name: userData.username ?? '',
          email: session.user.email ?? '',
          userId: '12345', // for testing -
          username: session.user.name ?? '',
          // groups: userData.groups,
        })

        console.log(user)
        route.push('/home')
      }
    }
    fetchUserData()
  }, [session, setUser, route])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        {/* Hero Section */}
        <header className="container mx-auto px-4 pt-24 pb-16 text-center">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Never Miss An Internship Deadline Again</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track applications, set reminders, and collaborate with your peers to land your dream internship. Join thousands of students maximizing their opportunities.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={() => signIn('google')} size="lg" className="bg-primary hover:bg-primary/90">
                Login Here <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
