import TeamCard from './TeamCard'

function Team () {
  return (
    <section className='flex flex-col items-center bg-amber-400 py-24 sm:rounded-r-full sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-center text-3xl text-white sm:text-4xl lg:text-6xl'>
          NUESTRO EQUIPO
        </h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <TeamCard
            name='Pepe'
            avatar='https://img.freepik.com/foto-gratis/primer-plano-chico-divertido-brazos-cruzados_1149-904.jpg?w=900&t=st=1686266967~exp=1686267567~hmac=f3a7f1e7ee7caa337d2c16f38dfd47855a345032ed41e5cd6ab56bc9e98dd588'
            description='Desarrollador full stack con más de 10 años de experiencia.'
          />
          <TeamCard
            name='Pepe'
            avatar='https://img.freepik.com/foto-gratis/primer-plano-chico-divertido-brazos-cruzados_1149-904.jpg?w=900&t=st=1686266967~exp=1686267567~hmac=f3a7f1e7ee7caa337d2c16f38dfd47855a345032ed41e5cd6ab56bc9e98dd588'
            description='Desarrollador full stack con más de 10 años de experiencia.'
          />
          <TeamCard
            name='Pepe'
            avatar='https://img.freepik.com/foto-gratis/primer-plano-chico-divertido-brazos-cruzados_1149-904.jpg?w=900&t=st=1686266967~exp=1686267567~hmac=f3a7f1e7ee7caa337d2c16f38dfd47855a345032ed41e5cd6ab56bc9e98dd588'
            description='Desarrollador full stack con más de 10 años de experiencia.'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
