import Link from 'next/link'
import React from 'react'

export interface Icard {
  id: string
  src: string
  title: string
  author: string
  rating: number
  price: number
  description?: string
}
const Card = ({
  id,
  src,
  title,
  author,
  rating,
  price,
  description,
}: Icard) => {
  function giveStars(num: number) {
    if (num > 4.5) return '⭐️⭐️⭐️⭐️⭐️'
    if (num > 3.5) return '⭐️⭐️⭐️⭐️'
    if (num > 2.5) return '⭐️⭐️⭐️'
    if (num > 1.5) return '⭐️⭐️'
  }
  return (
    <div
      className={` bg-white/10  h-min w-[90%] backdrop-blur-sm pb-5 rounded-md overflow-hidden text-white  flex flex-col`}
    >
      <img
        src={src}
        alt="courseimg"
        loading="lazy"
        draggable="false"
        className={`w-full h-[7rem]`}
      />
      <div className={`w-full px-4 `}>
        <Link href={`/course/${id}`}>
          <h1
            className={`w-full  text-md font-bold  pt-2 tracking- truncate font-jakarta hover:cursor-pointer`}
          >
            {title}
          </h1>
        </Link>
        <p
          className={`text-sm text-white/80 font-reeni pt-1 hover:cursor-pointer`}
        >
          {author}
        </p>
        <p className={`text-xs font-bold py-1 mb-1`}>
          {giveStars(rating)} {rating}
        </p>

        <div className="text-white font-bold text-xl mr-3 pt-2 flex items-center justify-between">
          ${price}
          <span
            className={`bg-red-500 text-white py-1 px-3 text-xs rounded   `}
          >
            Bestseller
          </span>
        </div>
        {/* <p className={`text-sm text-black/60 font-sans py-3`}>
        {description}
      </p> */}
      </div>
    </div>
  )
}

export default Card
