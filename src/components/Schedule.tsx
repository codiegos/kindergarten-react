import AboutCard from './AboutCard'
import { CalendarIcon, LevelIcon } from './Icons'

function Schedule () {
  return (
    <section className='bg-gradient-to-b to-15% from-teal-50 to-teal-50 flex flex-col items-center py-24 sm:min-h-screen sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center'>
          HORARIOS
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <AboutCard
            title='Jornadas de Atención'
            icon={
              <CalendarIcon className='w-16 h-16 bg-teal-300 rounded-full' />
            }
            colSpan='1'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, qut quibusdam, sapiente sint tempora magni explicabo exercitationem veritatis rem repudiandae error ullam molestiae, doloremque perspiciatis sed abab.'
          >
            <p className='text-lg lg:text-xl text-justify'>
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
            icon={<LevelIcon className='w-16 h-16 bg-amber-300 rounded-full' />}
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, qut quibusdam, sapiente sint tempora magni explicabo exercitationem veritatis rem repudiandae error ullam molestiae, doloremque perspiciatis sed ab. ab. ab. ab. ab.'
          />
        </div>
      </div>
    </section>
  )
}

export default Schedule
