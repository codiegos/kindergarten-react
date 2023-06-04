import Navbar from './components/Navbar'
import WaveBackground from './assets/images/wave.svg'
import Slider from './components/Slider'

function App () {
  return (
    <div>
      <Navbar />
      <main className='relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory'>
        <div className='snap-center'>
          <section
            className='bg-teal-200 bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: `url(${WaveBackground})` }}
          >
            <div className='flex flex-col-reverse items-center justify-evenly min-h-screen lg:flex-row pb-20'>
              <div className='flex flex-col gap-12 text-center items-center justify-center'>
                <h1 className='text-5xl lg:text-8xl'>
                  <span className='text-teal-400 '>¡BIENVENIDOS</span>
                  <span className='block text-yellow-400'>AL JARDÍN</span>
                  <span className='text-orange-400'>LAS ARDILLITAS!</span>
                </h1>
                <button className='text-3xl lg:text-4xl rounded border-2 border-teal-200 py-2 px-6 hover:bg-teal-500 hover:text-white duration-300'>
                  Contáctanos
                </button>
              </div>
              <Slider />
            </div>
          </section>
        </div>
        <div className='snap-center'>
          <section className='bg-teal-200 flex flex-col items-center min-h-screen pt-32'>
            <h1 className='text-6xl'>NOSOTROS</h1>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App

// eslint-disable-next-line no-lone-blocks
{
  /* <div className='flex items-center justify-around w-full'>
<img
  src={ninos2}
  className='h-16 hidden md:block md:h-32 xl:h-72 w-auto -rotate-12 ring-secondary ring-8 ring-offset-8 hover:rotate-0 duration-300 hover:scale-110'
/>
<div className='flex flex-col items-center gap-12 lg:pt-16'>
  <img
    src={ninos3}
    className='h-32 xl:hidden w-auto ring-8 ring-offset-8 ring-tertiary rotate-12 duration-300 hover:scale-110 ml-12'
  />
  <h1 className='text-6xl 2xl:text-8xl lg:max-w-lg text-center'>
    <span className='text-rose-400'>¡Bienvenidos</span>{' '}
    <span className='text-primary'>a mi Castillo</span>{' '}
    <span className='text-tertiary'>favorito!</span>
  </h1>
  <img
    src={elcastillo}
    className='h-32 xl:h-64 w-auto ring-8 ring-offset-8 ring-tertiary -rotate-12 duration-300 hover:scale-110 mr-12'
  />
</div>
<img
  src={ninos1}
  className='h-16 hidden md:block md:h-32 xl:h-72 w-auto rotate-12 ring-8 ring-primary ring-offset-8 hover:rotate-0 duration-300 hover:scale-110'
/>
</div> */
}
