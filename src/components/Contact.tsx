import GoogleMap from './GoogleMap'

function Contact () {
  return (
    <section className='flex flex-col items-center bg-gradient-to-b from-teal-50 to-50% py-24 sm:py-32'>
      <div className='container flex flex-col justify-center gap-8 xl:gap-12'>
        <h1 className='text-center text-3xl lg:text-6xl'>CONTACTO</h1>
        <div className='container flex w-full flex-col items-center justify-evenly gap-16 py-4 lg:flex-row lg:gap-0'>
          <form className='flex w-full max-w-3xl flex-col justify-center gap-6 rounded border p-4 text-xl'>
            <div>
              <label htmlFor='name' className='mb-3 block text-orange-500'>
                Nombre Completo
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Pedro Pérez Pereira'
                className='w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 outline-none duration-200 placeholder:text-gray-300 focus:border-amber-400 focus:shadow-md'
              />
            </div>
            <div>
              <label htmlFor='email' className='mb-3 block text-orange-500'>
                Correo Electrónico
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='example@domain.com'
                className='w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 outline-none duration-200 placeholder:text-gray-300 focus:border-amber-400 focus:shadow-md'
              />
            </div>
            <div>
              <label htmlFor='subject' className='mb-3 block text-orange-500'>
                Asunto
              </label>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Pon tu tema aquí'
                className='w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 outline-none duration-200 placeholder:text-gray-300 focus:border-amber-400 focus:shadow-md'
              />
            </div>
            <div>
              <label htmlFor='message' className='mb-3 block text-orange-500'>
                Mensaje
              </label>
              <textarea
                rows={4}
                name='message'
                id='message'
                placeholder='Escribe tu mensaje'
                className='w-full resize-none rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 outline-none duration-200 placeholder:text-gray-300 focus:border-amber-400 focus:shadow-md'
              ></textarea>
            </div>
            <div>
              <button className='hover:shadow-form w-full rounded-md bg-amber-500 px-8 py-3 text-white outline-none ring-orange-400 duration-300 hover:bg-amber-500/80 focus:ring lg:w-auto'>
                Enviar
              </button>
            </div>
          </form>
          <GoogleMap />
        </div>
      </div>
    </section>
  )
}

export default Contact
