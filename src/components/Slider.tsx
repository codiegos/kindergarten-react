// generate interface for Slider
import { useState, useEffect } from 'react'
import { LeftArrowIcon, RightArrowIcon } from './Icons'
import hands from '../assets/images/paiting-kid.webp'
import a from '../assets/images/a.webp'
import { type Slide } from '../types'

const slides: Slide[] = [{ imageUrl: hands }, { imageUrl: a }]

function Slider () {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [currentIndex])

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='max-w-3xl h-96 lg:h-[40rem] w-full relative group '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
        className='w-full h-full bg-center bg-cover duration-500 rounded lg:rounded-b-[40rem] lg:rounded-t-[15rem] ring ring-teal-200'
      />
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer'>
        <LeftArrowIcon onClick={prevSlide} className='h-8 w-8' />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer'>
        <RightArrowIcon onClick={nextSlide} className='h-8 w-8' />
      </div>
    </div>
  )
}

export default Slider
