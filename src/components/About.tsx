import AboutCard from './AboutCard'
import { GirlIcon, HeartIcon, SeedHandIcon } from './Icons'

function About () {
  return (
    <section className='bg-gradient-to-b from-teal-100 to-15% to-teal-50 flex flex-col items-center py-24 sm:min-h-screen sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center'>
          NOSOTROS
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <AboutCard
            title='Quiénes Somos'
            icon={<GirlIcon className='w-16 h-16 bg-teal-300 rounded-full' />}
            colSpan='2'
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
            title='Misión'
            icon={
              <SeedHandIcon className='w-16 h-16 bg-amber-300 rounded-full' />
            }
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, qut quibusdam, sapiente sint tempora magni explicabo exercitationem veritatis rem repudiandae error ullam molestiae, doloremque perspiciatis sed ab. ab. ab. ab. ab.'
          />
          <AboutCard
            title='Visión'
            icon={
              <HeartIcon className='w-16 h-16 bg-orange-300 rounded-full' />
            }
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, qut quibusdam, sapiente sint tempora magni explicabo exercitationem veritatis rem repudiandae error ullam molestiae, doloremque perspiciatis sed ab. ab. ab. ab. ab.'
          />
        </div>
      </div>
    </section>
  )
}

export default About
