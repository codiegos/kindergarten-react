import Slider from './Slider'

function Home () {
  return (
    <section className='bg-teal-100 bg-wave py-24 sm:py-32'>
      <div className='flex flex-col-reverse items-center justify-evenly gap-4 pb-4 sm:pb-12 lg:flex-row'>
        <div className='flex flex-col items-center justify-center gap-6 text-center lg:gap-12'>
          <h1 className='text-5xl lg:text-7xl xl:text-8xl'>
            <span className='text-teal-400 '>¡Bienvenidos</span>
            <span className='block text-amber-400'>al Jardín</span>
            <span className='text-orange-400'>Las Ardillitas!</span>
          </h1>
          <a
            className='mb-8 rounded border-2 border-teal-200 px-6 py-2 text-2xl duration-300 hover:bg-teal-500 hover:text-white lg:text-4xl'
            href='#contacto'
          >
            Contáctanos
          </a>
        </div>
        <Slider />
      </div>
    </section>
  )
}

export default Home
