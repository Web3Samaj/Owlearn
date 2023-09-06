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
      <div className=" mx-auto bg-stone-800 text-white md:w-[40%] w-[80%]  overflow-hidden py-4 rounded-xl   ">
        {faqData.map((item, index) => (
          <div key={index} className="   select-none py-2 px-4 ">
            <div
              className="cursor-pointer flex justify-between"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold  ">{item.question}</h3>
              {activeIndex === index ? (
                <span>&#8679;</span>
              ) : (
                <span>&#8681;</span>
              )}
            </div>
            {activeIndex === index && <p className="my-2 ">{item.answer}</p>}
            <div
              className={`w-full border border-stone-700 mx-auto my-2 `}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection
