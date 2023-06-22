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
    <div className='group relative h-96 w-full max-w-3xl lg:h-[40rem]'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
        className='h-full w-full rounded bg-cover bg-center ring ring-teal-200 duration-500 lg:rounded-b-[40rem] lg:rounded-t-[15rem]'
      />
      {/* Left Arrow */}
      <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl group-hover:block'>
        <LeftArrowIcon onClick={prevSlide} className='h-8 w-8' />
      </div>
      {/* Right Arrow */}
      <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl group-hover:block'>
        <RightArrowIcon onClick={nextSlide} className='h-8 w-8' />
      </div>
    </div>
  )
}

export default Slider
