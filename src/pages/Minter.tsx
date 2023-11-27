import React, { useEffect, useRef, useState } from 'react'
import {
  checkAddressEligibility,
  checkUsernameEligibility,
  registerOwlearnId,
} from '../services/contracts/owlearnId'
import { useAccount } from 'wagmi'
import AuthButton from '@/modules/auth/components/AuthButton'

const Minter = () => {
  const followMouse = useRef<HTMLDivElement>(null!)
  const { address: account } = useAccount()
  const [addressState, setAddressState] = useState<
    | {
        isEligible: boolean
        isAllowListEnabled: boolean
        allowListProof?: string[]
      }
    | undefined
  >()
  const [userNameState, setUsernameState] = useState<
    | {
        isEligible: boolean
        isBlackListEnabled: boolean
        blackListProof?: string[]
      }
    | undefined
  >()

  const [username, setUsername] = useState<string>()
  // fetch the user Address

  // Also fetch Price only if it's enabled
  // Prepare the Mint tx with all the parameters

  // check if they are Whitelisted ,  do we have to sign-in ??
  const checkUserEligibility = async () => {
    if (!account) {
      console.log('No Address found')
      return
    }
    const data = await checkAddressEligibility(account)
    if (data) {
      setAddressState(data)

      // show the alert messages according to the respective case
    } else {
      console.log('No Response')
    }
  }

  // Then Get the username , check if it's valid
  const checkUsername = async () => {
    if (!username) {
      console.log('No Username found')
      return
    }
    if (!account) {
      console.log('No Address found')
      return
    }

    const data = await checkUsernameEligibility(username)
    if (data) {
      console.log(data)
      setUsernameState(data)
    }
  }

  const mintOwlId = async () => {
    if (!username) {
      console.log('No Username found')
      return
    }
    if (!account) {
      console.log('No Address found')
      return
    }

    if (addressState && userNameState) {
      await registerOwlearnId(
        username,
        addressState.isAllowListEnabled,
        userNameState.isBlackListEnabled,
        addressState.allowListProof,
        userNameState.blackListProof
      )
    }
  }

  useEffect(() => {
    if (!addressState && account) {
      checkUserEligibility()
    }
  }, [account])

  function mover(e: React.MouseEvent) {
    if (!followMouse.current) return
    followMouse.current.style.cssText =
      'left : ' + e.clientX + 'px; top :' + e.clientY + 'px'
    followMouse.current.style.borderColor = '#5EF8BF'
    followMouse.current.style.borderWidth = '1px'
  }

  return (
    <div
      onMouseMove={(e) => mover(e)}
      className={`  w-full min-h-screen flex flex-col items-center justify-center bg-[#252525] bg-[url('/asset/minter/bg.png')] bg-cover relative`}
    >
      <div
        className={` card group   ease-linear w-[45vw] h-[50vh] prespective animate-howery `}
      >
        <div
          className={` relative   group-hover:rotateY-180 w-full h-full  transition-transform duration-500 ease-linear preserve3d `}
        >
          <div
            className={` rounded-2xl bfvisibility absolute w-full h-full bg-white/10 backdrop-blur-md p-5 grid md:grid-cols-2  grid-cols-1`}
          >
            <div
              className={` w-full h-full flex items-center justify-center pr-4 `}
            >
              <img
                src="/asset/minter/owl.png"
                alt="owl"
                className={`rounded-xl h-full`}
              />
            </div>
            <div className={``}>
              <p className={`font-kabl md:text-3xl text-xl `}> Owlearn Id</p>
              <p className={`font-jakarta text-sm pt-5 flex gap-5`}>
                {' '}
                🌟 Hey there, knowledge-seeker! 📚 Ready to embark on an
                extraordinary learning adventure? <br />
                <br /> Mint your very own OWL ID on our friendly platform. This
                ID will work as a gateway and access to many advance features
                and courses. <br />
                <br /> Unleash the power of personalized education like never
                before! Join us in revolutionizing learning! 🚀{' '}
              </p>
              <p
                className={`font-reeni md:text-2xl text-xl pt-5 text-center animate-pulse text-[#5EF8BF] `}
              >
                {' '}
                Hover Over Here!
              </p>
            </div>
          </div>
          <div
            className={` p-5 rounded-2xl bfvisibility absolute w-full h-full bg-white/10 backdrop-blur-md rotateY-180 flex flex-col items-center justify-start`}
          >
            <h1 className={` font-kabl md:text-3xl text-xl `}>
              One Click Mint
            </h1>
            <p className={`font-jakarta text-sm pt-5 flex gap-2 text-center`}>
              🌟 Take a deep breath and relax. Simply double-check yourn
              <br />
              <br /> 💎 Ethereum ID, 💎
              <br />
              <br /> OR if you&apos;d like to add a personal touch, Feel free to
              use <br />
              <br /> 🍀 Lens.ID. 🍀
              <br /> {account}
            </p>
            <input
              type="text"
              name="eth"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-[80%] bg-transparent focus:outline-none md:text-xl text-base rounded-md mt-8 p-2 text-center truncate`}
            />

            {!account ? (
              <AuthButton />
            ) : (
              <>
                {addressState?.isEligible ? (
                  <button
                    className={`hover:-translate-y-1 hover:shadow-xl hover:shadow-black transition-all duration-200 ease-linear bg-[#5EF8BF] text-black py-2 px-4 rounded-xl mt-3 font-semibold tracking-widest`}
                    onClick={() => {
                      if (
                        addressState?.isEligible &&
                        userNameState?.isEligible
                      ) {
                        mintOwlId()
                      } else if (
                        addressState?.isEligible &&
                        !userNameState?.isEligible
                      ) {
                        checkUsername()
                      }
                    }}
                  >
                    {addressState?.isEligible && userNameState?.isEligible
                      ? 'Mint'
                      : 'Check'}
                  </button>
                ) : (
                  <a>User not whitelisted</a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div
        ref={followMouse}
        className={` mouseF fixed  pointer-events-none rounded-full  flex items-center justify-center w-10 h-10 -translate-x-1/2 -translate-y-1/2 text-sm text-[#00000000]`}
      >
        <span className={`text-[5px]`}>Click Me</span>
      </div>
    </div>
  )
}

export default Minter
