import React from 'react'

const Dashboard = () => {
  return (
    <div
      className={`flex font-jakarta items-center justify-center w-full min-h-screen backdrop-blur-lg bg-[#252525]`}
    >
      <div className={`grid grid-cols-2 items-center gap-3 w-[60%] `}>
        <div
          className={`bg-[#ffd60a]  text-center flex flex-col items-center cursor-pointer hover:scale-105 hover:bg-[#ffd60a] justify-center  text-black h-[70vh] `}
        >
          <span className="text-base">Continue As </span>
          <span className="text-4xl"> Student 👨‍🎓</span>
        </div>
        <div
          className={`bg-[#7209b7] text-4xl text-center flex-col cursor-pointer flex items-center justify-center text-white h-[70vh]`}
        >
          <span className="text-base">Continue As </span>
          <span className="text-4xl"> Educator 👨‍🏫</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
