import Slider from './Slider'

function Home () {
  return (
    <section className='bg-teal-100 bg-wave bg-no-repeat bg-cover bg-center py-24 sm:py-32'>
      <div className='flex flex-col-reverse items-center justify-evenly lg:flex-row gap-4 pb-4 sm:pb-12'>
        <div className='flex flex-col gap-6 lg:gap-12 text-center items-center justify-center'>
          <h1 className='text-5xl lg:text-7xl xl:text-8xl'>
            <span className='text-teal-400 '>¡Bienvenidos</span>
            <span className='block text-amber-400'>al Jardín</span>
            <span className='text-orange-400'>Las Ardillitas!</span>
          </h1>
          <a
            className='text-2xl lg:text-4xl rounded border-2 border-teal-200 py-2 px-6 hover:bg-teal-500 hover:text-white duration-300 mb-8'
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
