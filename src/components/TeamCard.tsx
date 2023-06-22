interface TeamCardProps {
  name: string
  avatar: string
  description: string
}

function TeamCard ({ name, avatar, description }: TeamCardProps) {
  return (
    <div
      className='flex flex-col rounded-2xl border-2 border-orange-200 bg-amber-50 shadow-md sm:mx-auto sm:max-w-xl sm:flex-row sm:rounded-full'
      id='widget'
    >
      <div className='relative mx-auto w-full rounded-xl bg-white py-6 pr-10 sm:w-auto sm:rounded-l-full'>
        <img
          src={avatar}
          className='relative left-5 mx-auto h-32 w-32 rounded-full border-4 border-teal-200 object-cover sm:inline-block'
        />
        <div className='absolute right-6 top-6 h-7 w-7 rounded-full border-4 border-white bg-teal-300'></div>
      </div>
      <div className='ml-2 flex flex-col p-4'>
        <div className='flex items-center justify-between'>
          <h4 className='mb-3 text-lg font-semibold'>
            {name}
            <span className='ml-2  rounded-md bg-amber-200 px-2 py-1 font-normal'>
              @jotredev
            </span>
          </h4>
        </div>
        <p className=''>{description}</p>
        <div className='mt-2 font-medium text-gray-500'>
          <span className='text-black'>672</span> Siguiendo
          <span className='ml-7 text-black'>59.9K</span> Seguidores
        </div>
      </div>
    </div>
  )
}

export default TeamCard
