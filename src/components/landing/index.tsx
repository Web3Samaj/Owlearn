import React from 'react'
import Navbar from '../nav'

const Landing = () => {
  return (
    <div className={`flex relative flex-col items-center w-full`}>
      {/* <Navbar/> */}
      <div className={`min-h-screen flex flex-col bg-green-500 w-full`}></div>
      <div className={`min-h-screen bg-rose-500 w-full`}>Landing</div>
      <div className={`min-h-screen bg-sky-500 w-full`}>Landing</div>
    </div>
  )
}

export default Landing
