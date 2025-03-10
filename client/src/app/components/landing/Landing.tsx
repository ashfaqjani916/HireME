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
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center">
        <div className="min-h-screen w-full bg-gradient-to-b from-background to-secondary flex">
          <div className="w-[60%] flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-md relative p-8 rounded-r-2xl">
            <div className="text-[80px] text-white font-extrabold drop-shadow-lg ">.hireMe</div>

            <p className="text-white text-xl mt-4 max-w-[80%] text-center leading-relaxed">
              Your gateway to endless opportunities. Post jobs, get daily reminders, and never miss an application deadline!
            </p>

            <div className="mt-6 flex gap-4">
              <div className="bg-white/20 text-white px-4 py-2 rounded-lg shadow-md">
                <span className="font-semibold">Post Jobs</span>
              </div>
              <div className="bg-white/20 text-white px-4 py-2 rounded-lg shadow-md">
                <span className="font-semibold">Daily Reminders</span>
              </div>
              <div className="bg-white/20 text-white px-4 py-2 rounded-lg shadow-md">
                <span className="font-semibold">Stay Updated</span>
              </div>
            </div>

            <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full shadow-lg"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg"></div>
            {/* <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 rounded-full blur-lg opacity-50"></div> */}
          </div>

          {/* section divide */}

          <div className="w-[40%]  flex items-center justify-center p-5">
            <div className="flex flex-col w-3/4 h-full justify-center  space-y-6">
              <div className="text-3xl font-medium text-violet-600 text-left">Sign Up</div>
              <p className="text-lg text-muted-foreground">
                Create an account to start tracking your applications, setting reminders, and collaborating with your peers to land your dream internship.
              </p>
              <div className="flex" onClick={() => signIn('google')}>
                <button className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                    {' '}
                    <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                    <g id="Icons" stroke="none" fill="none">
                      {' '}
                      <g id="Color-" transform="translate(-401.000000, -860.000000)">
                        {' '}
                        <g id="Google" transform="translate(401.000000, 860.000000)">
                          {' '}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {' '}
                          </path>{' '}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {' '}
                          </path>{' '}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {' '}
                          </path>{' '}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {' '}
                          </path>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>{' '}
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
