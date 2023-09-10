import React, { useState } from 'react'

const FAQSection = () => {
  const faqData = [
    { question: 'Is it Free?', answer: 'Yes' },
    {
      question: 'Will I able to get with recorded Lecture ?',
      answer: 'Yes',
    },
    { question: 'Can we expect community support?', answer: 'Yes' },
    {
      question: 'Any prerequsite ?',
      answer:
        'A metamask , wallectConnect or any hot or cold wallet is required',
    },
    {
      question: 'Will I get paid after completing each course ?',
      answer: 'Indirectly Yes',
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div
      className={`min-h-[80vh] flex flex-col bg-black  py-20 items-center justify-center`}
    >
      <img
        src={'/asset/landing/faq.png'}
        alt="icon"
        className={` invert mix-blend-screen  transition-all duration-300 ease-linear w-[30rem]   `}
      />
      <p className="text-4xl text-white w-full text-center pt-10 pb-20">FAQ</p>
      <div className=" mx-auto  text-white md:w-[40%] w-[80%]  overflow-hidden py-4 rounded-xl   ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className=" rounded-3xl my-4 bg-stone-800 select-none py-2 px-4 "
          >
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-base font-semibold  ">{item.question}</h3>

              <img
                src={'asset/landing/next.png'}
                alt="icon"
                className={` transition-all ${
                  activeIndex === index ? '-rotate-90' : 'rotate-90'
                } duration-200 ease-linear w-10 rounded-full cursor-pointer `}
                draggable="false"
              />
            </div>
            {activeIndex === index && (
              <p className="my-2 text-xs ">{item.answer}</p>
            )}
            {/* <div
              className={`w-full border border-stone-700 mx-auto my-2 `}
            ></div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection
