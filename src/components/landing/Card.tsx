import React from 'react'

export interface Icard {
  src: string
  title: string
  author: string
  rating: number
  price: number
  description: string
}
const Card = ({ src, title, author, rating, price, description }: Icard) => {
  return (
    <div
      className={` bg-white h-min w-[85%] text-black backdrop-blur-sm rounded-md overflow-hidden  pb-5 flex flex-col`}
    >
      <img
        src={src}
        alt="courseimg"
        loading="lazy"
        draggable="false"
        className={`w-full h-[10rem]`}
      />
      <div className={`w-full px-4 `}>
        <h1
          className={`w-full flex-wrap text-md   py-2 tracking-tighter font-mono leading-6   `}
        >
          {title}
        </h1>
        <p className={`text-sm text-black/80 font-reeni pt-1`}>{author}</p>
        <p className={`text-sm font-bold py-1 mb-1`}>
          {rating} 🌟🌟🌟🌟🌟 (2,000+)
        </p>

        <span className="text-red-950 font-bold text-xl mr-3 pt-1 ">
          ${price}
        </span>

        <span className={`bg-red-500 text-white py-1 px-3 text-xs rounded   `}>
          Bestseller
        </span>
        {/* <p className={`text-sm text-black/60 font-sans py-3`}>
        {description}
      </p> */}
      </div>
    </div>
  )
}

export default Card
