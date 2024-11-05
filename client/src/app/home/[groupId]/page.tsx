import React from 'react'
import Tabled from './_components/Tabled'

type Props = {
  params: Promise<{
    groupId: string
  }>
}

export default async function page({ params }: Props) {
  const { groupId } = await params
  return (
    <div className="p-3 h-full">
      <Tabled groupId={groupId} />
    </div>
  )
}
