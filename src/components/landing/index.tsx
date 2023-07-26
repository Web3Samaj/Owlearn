import React from 'react'
import Navbar from '../nav'

const Landing = () => {
  return (
    <div className={`flex  flex-col items-center w-full h-full `}>
      <div className={`min-h-screen flex flex-col bg-green-500 w-full`}>
        {/* <div className={`bg-yellow-500 flex flex-col min-h-screen`}>
        <h1>hello</h1>
        <div className={`flex bg-rose-500 h-[50rem] w-full`}>
          <p>jkjhsjdhf</p>
          <p>jkjhsjdhf</p>
          <p>jkjhsjdhf</p>
        </div> */}
        {/* <h1>bye</h1>
       </div> */}
      </div>

      <div className={`min-h-screen bg-rose-500 w-full`}>Landing</div>
      <div className={`min-h-screen bg-sky-500 w-full`}>Landing</div>
    </div>
  )
}

export default Landing
