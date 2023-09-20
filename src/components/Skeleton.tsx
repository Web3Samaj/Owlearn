import React from 'react'

interface Iskeleton {
  manageE?: boolean
  manageS?: boolean
  def?: boolean
}
const Skeleton = ({
  manageE = false,
  manageS = false,
  def = false,
}: Iskeleton) => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center py-20 md:px-10 px-5`}
    >
      {manageS && (
        <div
          className={`w-full max-h-screen flex flex-col items-center justify-center gap-5 md:px-20 px-5 bg-inherit`}
        >
          <div
            className={`flex w-full md:gap-10 gap-2 items-center justify-between `}
          >
            <div
              className={`h-20 w-20 bg-stone-400/50 animate-pulse rounded-full`}
            ></div>
            <div
              className={`h-8 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-10 w-10 bg-stone-400/50 animate-pulse rounded-full`}
            ></div>
            <div
              className={`h-10 w-10 bg-stone-400/50 animate-pulse rounded-full`}
            ></div>
          </div>

          <div
            className={`flex md:gap-10 gap-5 w-full items-center justify-between `}
          >
            <div
              className={`h-40 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-40 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-40 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
          </div>

          <div
            className={`flex gap-10 md:pt-20 pt-10 flex-col items-center justify-between  w-full md:px-28 px-5 `}
          >
            <div
              className={`h-20 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-20 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
          </div>
        </div>
      )}
      {manageE && (
        <div
          className={`w-full min-h-screen flex flex-col items-center justify-center gap-5 md:px-20 px-5 bg-inherit`}
        >
          <div
            className={`flex w-full min-h-scree gap-10 items-center justify-between px-10 `}
          ></div>
          <div
            className={`h-72 w-full bg-stone-400/50 animate-pulse rounded-xl`}
          ></div>

          <div
            className={`flex flex-col gap-5 w-full   items-center justify-between `}
          >
            <div
              className={`h-40 rounded-xl w-[30vw] mr-auto bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-3 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-3 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-3 rounded-xl w-full bg-stone-400/50 animate-pulse `}
            ></div>
          </div>

          <div
            className={`flex md:gap-10  gap-3 pt-10 items-center justify-between h-full w-full  `}
          >
            <div
              className={`h-96  rounded-xl w-[30vw] bg-stone-400/50 animate-pulse `}
            ></div>
            <div
              className={`h-96 rounded-xl w-[60vw] bg-stone-400/50 animate-pulse `}
            ></div>
          </div>
        </div>
      )}
      {def && (
        <div
          className={`w-full flex flex-col items-center justify-center max-h-fit overflow-hidden gap-5 md:px-20 px-5 bg-inherit py-2  rounded-xl`}
        >
          <div
            className={`flex md:w-[60vw] w-full items-center justify-center  border-2  border-stone-400/50 px-5 py-8  animate-pulse rounded-2xl gap-10`}
          >
            <div
              className={`h-28 w-28 rounded-full  bg-stone-400/50 animate-pulse `}
            ></div>
            <div className={`w-full  flex gap-2 flex-col`}>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-[70%] bg-stone-400/50 animate-pulse `}
              ></div>
            </div>
          </div>
          <div
            className={`flex md:w-[60vw] w-full items-center justify-center  border-2  border-stone-400/50 px-5 py-8  animate-pulse rounded-2xl gap-10`}
          >
            <div
              className={`h-28 w-28 rounded-full  bg-stone-400/50 animate-pulse `}
            ></div>
            <div className={`w-full  flex gap-2 flex-col`}>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-[70%] bg-stone-400/50 animate-pulse `}
              ></div>
            </div>
          </div>
          <div
            className={`flex md:w-[60vw] w-full items-center justify-center  border-2  border-stone-400/50 px-5 py-8  animate-pulse rounded-2xl gap-10`}
          >
            <div
              className={`h-28 w-28 rounded-full  bg-stone-400/50 animate-pulse `}
            ></div>
            <div className={`w-full  flex gap-2 flex-col`}>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-[70%] bg-stone-400/50 animate-pulse `}
              ></div>
            </div>
          </div>

          <div
            className={`flex md:w-[60vw] w-full items-center justify-center  border-2  border-stone-400/50 px-5 py-8  animate-pulse rounded-2xl gap-10`}
          >
            <div
              className={`h-28 w-28 rounded-full  bg-stone-400/50 animate-pulse `}
            ></div>
            <div className={`w-full  flex gap-2 flex-col`}>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-full bg-stone-400/50 animate-pulse `}
              ></div>
              <div
                className={`h-4 rounded-xl w-[70%] bg-stone-400/50 animate-pulse `}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skeleton
