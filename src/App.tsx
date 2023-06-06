import { SquirrelIcon } from './components/Icons'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

function App () {
  return (
    <div>
      <Navbar />
      <main className='relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory'>
        <div className='snap-center' id='inicio'>
          <section className='bg-teal-200 bg-wave bg-no-repeat bg-cover bg-center'>
            <div className='flex flex-col-reverse items-center justify-evenly min-h-screen lg:flex-row pb-20'>
              <div className='flex flex-col gap-6 lg:gap-12 text-center items-center justify-center'>
                <h1 className='text-5xl lg:text-7xl xl:text-8xl'>
                  <span className='text-teal-400 '>¡Bienvenidos</span>
                  <span className='block text-yellow-400'>al Jardín</span>
                  <span className='text-orange-400'>Las Ardillitas!</span>
                </h1>
                <button className='text-2xl lg:text-4xl rounded border-2 border-teal-200 py-2 px-6 hover:bg-teal-500 hover:text-white duration-300 mb-8'>
                  Contáctanos
                </button>
              </div>
              <Slider />
            </div>
          </section>
        </div>
        <div className='snap-center' id='nosotros'>
          <section className='bg-wave-variant flex flex-col items-center min-h-screen pt-32'>
            <h1 className='text-3xl lg:text-6xl'>
              NOSOTROS <SquirrelIcon className='inline w-16 h-16' />
            </h1>
          </section>
        </div>
        <div className='snap-center' id='galeria'>
          <section className=' bg-no-repeat bg-cover bg-center'>
            <div className='flex flex-col-reverse items-center justify-evenly min-h-screen lg:flex-row pb-20'>
              <div className='flex flex-col gap-6 lg:gap-12 text-center items-center justify-center'>
                <h1 className='text-5xl lg:text-7xl xl:text-8xl'>
                  <span className='text-teal-400 '>¡Bienvenidos</span>
                  <span className='block text-yellow-400'>al Jardín</span>
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
        </div>
        <div className='snap-center' id='horarios'>
          <section className='bg-teal-200 flex flex-col items-center min-h-screen pt-32'>
            <h1 className='text-6xl'>Horarios</h1>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
