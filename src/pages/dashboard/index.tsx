import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [sId, setsId] = useState<string>(null!)
  const [eId, seteId] = useState<string>(null!)
  async function getSId() {
    //maybe a query to get data from the graphql
    setsId('abc')
  }
  async function getEId() {
    //maybe a query to get data from the graphql
    seteId('xyz')
  }

  useEffect(() => {
    getSId()
    getEId()
  }, [])

  return (
    <div
      className={`flex font-jakarta items-center justify-center w-full min-h-screen backdrop-blur-lg bg-[#252525]`}
    >
      <div
        className={`grid grid-cols-2 items-center gap-3 md:w-[60%] w-[90%] `}
      >
        <Link
          href={`/dashboard/student/${sId}`}
          className={`bg-[#ffd60a]  text-center flex flex-col items-center cursor-pointer hover:scale-105  hover:shadow-xl hover:shadow-black transition-all duration-100 ease-linear justify-center  text-black h-[70vh] `}
        >
          <span className="text-base">Continue As </span>
          <span className="text-4xl"> Student 👨‍🎓</span>
        </Link>
        <Link
          href={`/dashboard/educator/${eId}`}
          className={`bg-[#7209b7] text-4xl text-center flex-col cursor-pointer flex items-center justify-center text-white h-[70vh] hover:scale-105  hover:shadow-xl hover:shadow-black transition-all duration-100 ease-linear`}
        >
          <span className="text-base">Continue As </span>
          <span className="text-4xl"> Educator 👨‍🏫</span>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
