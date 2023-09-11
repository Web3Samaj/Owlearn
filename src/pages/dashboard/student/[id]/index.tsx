import React from 'react'
import { useRouter } from 'next/router'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const Student = () => {
  const router = useRouter()

  return (
    <div className="text-7xl flex items-center justify-center w-full ">
      Student {router?.query?.id}{' '}
    </div>
  )
}

export default Student
