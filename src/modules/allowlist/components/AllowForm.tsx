import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  twitterHandle: string
}
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

const AllowlistForm = () => {
  const { data: session } = useSession()
  console.log(session)
  useEffect(() => {
    console.log('session object is', session)
  }, [session])
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    twitterHandle: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleConnectTwitter = () => {
    // Implement Twitter authentication logic here
    // You might want to redirect the user to a server endpoint for Twitter authentication
    // and handle the callback to retrieve Twitter information

    signIn()
  }

  const handleSubmit = (data: FormData) => {
    // Implement your waitlist submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-[#252525] bg-[url('/asset/minter/bg.png')] bg-cover `}
    >
      <h2 className={`mb-4 text-3xl`}>
        Hurry! Join our waitlist to get access
      </h2>
      <div
        className={` bg-white/10 backdrop-blur-md w-[90%] rounded-xl md:w-[45%] py-2 px-4 flex flex-col items-start gap-y-2`}
      >
        <input
          className={` bg-transparent w-full text-start focus:outline-none md:text-xl text-base rounded-md  px-3 my-2  truncate`}
          type="text"
          id="name"
          name="name"
          placeholder="Jhon Ali Singh"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className={` bg-transparent w-full text-start focus:outline-none md:text-xl text-base rounded-md  px-3 my-2  truncate`}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="abc@email.com"
          onChange={handleChange}
          required
        />

        {formData.twitterHandle && (
          <div
            className={` bg-transparent w-full text-start focus:outline-none md:text-xl text-base rounded-md    truncate`}
          >
            {formData.twitterHandle}
          </div>
        )}
        {!session ? (
          <button
            className={` bg-black text-white py-2 px-4 rounded-xl mt-3 font-semibold tracking-widest flex items-center gap-2`}
            onClick={handleConnectTwitter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="white"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
            Connect Twitter
          </button>
        ) : (
          <>
            Logged in as {session?.user?.name} <br />
            <button onClick={() => signOut()}>Log out</button>
          </>
        )}
      </div>
      <div>
        <button
          className={`hover:-translate-y-1 hover:shadow-xl hover:shadow-black transition-all duration-200 ease-linear bg-[#5EF8BF] text-black py-2 px-4 rounded-xl mt-3 font-semibold tracking-widest`}
          onSubmit={() => handleSubmit(formData)}
        >
          Join Waitlist
        </button>
      </div>
    </div>
  )
}

export default AllowlistForm
