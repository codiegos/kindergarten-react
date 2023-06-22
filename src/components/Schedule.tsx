import AboutCard from './AboutCard'
import { CalendarIcon, LevelIcon } from './Icons'

function Schedule () {
  return (
    <section className='flex flex-col items-center bg-gradient-to-b from-teal-50 to-teal-50 to-15% py-24 sm:min-h-screen sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-center text-3xl sm:text-4xl lg:text-6xl'>
          HORARIOS
        </h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <AboutCard
            title='Jornadas de Atención'
            icon={
              <CalendarIcon className='h-16 w-16 rounded-full bg-teal-300' />
            }
            colSpan='1'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, qut quibusdam, sapiente sint tempora magni explicabo exercitationem veritatis rem repudiandae error ullam molestiae, doloremque perspiciatis sed abab.'
          >
            <p className='text-justify text-lg lg:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, voluptates, quia quos voluptate quod
              voluptatibus quas quibusdam, voluptates, quia quos voluptate quod
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quia ratdasdassint, nesciunt incidunt nihil minus
              dolorem sed perspiciatis exercitationem neque autem doloribus
              corporis, quis dolores iure. Quae nostrum ipsam tenetur rem?
            </p>
          </AboutCard>
          <AboutCard
            title='Niveles'
            icon={<LevelIcon className='h-16 w-16 rounded-full bg-amber-300' />}
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, qut quibusdam, sapiente sint tempora magni explicabo exercitationem veritatis rem repudiandae error ullam molestiae, doloremque perspiciatis sed ab. ab. ab. ab. ab.'
          />
        </div>
      </div>
    </section>
  )
}

export default Schedule
