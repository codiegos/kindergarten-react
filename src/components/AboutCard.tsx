interface CardProps {
  title: string
  icon: React.ReactNode
  text: string
  colSpan?: string
  children?: React.ReactNode
}

function AboutCard ({ title, icon, text, colSpan = '1', children }: CardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded border bg-white p-4 shadow-md ${'sm:col-span-'}${colSpan}`}
    >
      <h2 className='inline-flex items-center gap-2 text-2xl lg:text-4xl'>
        {title}
        {icon}
      </h2>
      <p className='text-justify text-lg lg:text-xl'>{text}</p>
      <div>{children}</div>
    </div>
  )
}

export default AboutCard
