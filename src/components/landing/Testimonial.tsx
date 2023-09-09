import React, { useState } from 'react'

const Testimonial = () => {
  const [slide, setSlide] = useState<number>(2)
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      profile_img:
        'https://apiwp.thelocal.com/cdn-cgi/image/format=webp,width=855,quality=75/https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg',
      review:
        'This platform is a game-changer! The variety of courses is outstanding and the instructors are top-notch.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      profile_img: 'https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large',
      review:
        "I've learned so much from this platform. The content is well-organized and the quizzes are helpful for retention.",
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Sam Brown',
      profile_img:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f01db52-f675-48dc-9c91-f245d99f1486/d2nqynw-af694fd2-e1ba-4e9c-badb-630a48474599.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmMDFkYjUyLWY2NzUtNDhkYy05YzkxLWYyNDVkOTlmMTQ4NlwvZDJucXludy1hZjY5NGZkMi1lMWJhLTRlOWMtYmFkYi02MzBhNDg0NzQ1OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.59_LN0TnrsDrVLS266jLpfZZfte_OZeNGkNQFJzgQCM',
      review:
        'The interface is user-friendly, and the videos are high-quality. Definitely worth the investment!',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Lisa Johnson',
      profile_img:
        'https://i.pinimg.com/474x/cb/33/d8/cb33d80fe655e221ae05f41c8edd0cdb.jpg',
      review:
        'I love the flexibility of learning at my own pace. The platform offers a wide range of topics to choose from.',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Michael Davis',
      profile_img:
        'https://e1.pxfuel.com/desktop-wallpaper/231/1022/desktop-wallpaper-best-random-people-%C2%B7-random-people.jpg',
      review:
        'The course completion certificates are a nice touch. It gives a sense of accomplishment after finishing a course.',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Emily Wilson',
      profile_img:
        'https://thumbs.dreamstime.com/b/attractive-serious-trendy-middle-aged-man-grey-sweater-standing-corner-angle-room-looking-thoughtfully-attractive-179384924.jpg',
      review:
        "The discussion forums are helpful for connecting with other learners. I've even made some study buddies!",
      rating: 4.3,
    },
    {
      id: 7,
      name: 'Chris Taylor',
      profile_img:
        'https://i.pinimg.com/474x/cb/33/d8/cb33d80fe655e221ae05f41c8edd0cdb.jpg',
      review:
        'The customer support is responsive and always ready to assist. They go above and beyond to help you.',
      rating: 4.9,
    },
    {
      id: 8,
      name: 'Megan Adams',
      profile_img:
        'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg',
      review:
        'The mobile app is a great feature. I can learn on the go, which fits perfectly with my busy lifestyle.',
      rating: 4.8,
    },
    {
      id: 9,
      name: 'David Lee',
      profile_img:
        'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg',
      review:
        'The platform constantly updates its content to stay relevant. I appreciate the commitment to excellence.',
      rating: 4.7,
    },
    {
      id: 10,
      name: 'Olivia Martinez',
      profile_img:
        'https://thumbs.dreamstime.com/b/attractive-serious-trendy-middle-aged-man-grey-sweater-standing-corner-angle-room-looking-thoughtfully-attractive-179384924.jpg',
      review:
        "The platform offers lifetime access to purchased courses. It's a great value for the price.",
      rating: 4.5,
    },
  ]

  function giveStars(num: number) {
    if (num > 4.5) return '⭐️⭐️⭐️⭐️⭐️'
    if (num > 3.5) return '⭐️⭐️⭐️⭐️'
    if (num > 2.5) return '⭐️⭐️⭐️'
    if (num > 1.5) return '⭐️⭐️'
  }

  function changeSlide(str: string) {
    if (str === 'next') {
      if (slide >= reviews.length) {
        setSlide(1)
      } else {
        setSlide((prev) => prev + 1)
      }
    }
    if (str === 'prev') {
      if (slide <= 1) {
        setSlide(reviews.length)
      } else {
        setSlide((prev) => prev - 1)
      }
    }
  }
  return (
    <div
      className={`min-h-screen w-full bg-[#252525] flex flex-col items-center justify-center relative select-none md:pb-40 pb-20 pt-32 `}
    >
      <div className=" absolute top-60 left-16 w-[20rem] h-[20rem] bg-[#44f7df] rounded-full   filter blur-xl  animate-blob m-4"></div>
      <div className=" absolute top-48 left-60 w-[20rem] h-[20rem] bg-[#ffe877] rounded-full  animation-delay-2000 filter blur-xl  animate-blob m-4"></div>
      <div className=" absolute top-96 left-56 w-[20rem] h-[20rem] bg-[#ffd2fa] rounded-full  animation-delay-4000 filter blur-xl  animate-blob m-4"></div>

      <div
        className={`  w-full flex items-end justify-end md:text-2xl text-xl py-10   md:py-20 pr-[10%]  `}
      >
        <img
          src={'/asset/landing/curl.png'}
          alt="icon"
          className={`  invert mix-blend-screen  rotate-180 transition-all duration-300 ease-linear w-20   `}
        />
        <span
          className={` bg-[#8338ec] p-5 border-4 text-center border-dashed border-white rounded-full text-white tracking-wide font-bold flex flex-col font-jakarta`}
        >
          Don&apos;t Just Believe BLINDLY
          <span className="text-[1.2rem] font-thin font-reeni">
            See what people are saying
          </span>
        </span>
      </div>

      <div className="md:w-[40%] w-[80%]  h-max mx-auto bg-white/10 backdrop-blur-2xl rounded-xl md:px-5 px-2 z-20   ">
        <div>
          <img
            src={'/asset/landing/inverted.png'}
            alt="icon"
            loading="lazy"
            className={` transition-all duration-300 ease-linear w-24   `}
          />
        </div>
        {reviews?.map((data, idx) => {
          if (data.id !== slide) return
          return (
            <div key={idx}>
              <p className={`md:text-5xl text-3xl font-bold font-reeni`}>
                &quot;{data.review}&quot;
              </p>
              <div
                className={`flex w-full items-center justify-start md:mt-10  mt-5 mb-5 gap-5`}
              >
                <img
                  src={data.profile_img}
                  alt="icon"
                  className={` transition-all duration-300 ease-linear w-20 h-16  rounded-full  `}
                />
                <div className={`flex flex-col items-start justify-center `}>
                  <p className={`text-xs font-thin  font-jakarta`}>
                    {' '}
                    {giveStars(data.rating)} {data.rating} Stars
                  </p>
                  <p
                    className={`text-xs font-thin tracking-wider font-jakarta`}
                  >
                    {' '}
                    by {data.name}
                  </p>
                </div>

                <div className={`flex  items-start justify-center ml-auto`}>
                  {/* <button >next</button> */}
                  <img
                    onClick={() => changeSlide('prev')}
                    src={'asset/landing/back.png'}
                    alt="icon"
                    draggable="false"
                    className={` transition-all duration-300 ease-linear w-10 rounded-full cursor-pointer `}
                  />
                  <img
                    onClick={() => changeSlide('next')}
                    src={'asset/landing/next.png'}
                    alt="icon"
                    className={` transition-all duration-300 ease-linear w-10 rounded-full cursor-pointer `}
                    draggable="false"
                  />
                  {/* <button >prev</button> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial
