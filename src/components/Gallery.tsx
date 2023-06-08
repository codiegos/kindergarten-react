function Gallery () {
  return (
    <section className='bg-gradient-to-t to-15% from-teal-50 to-teal-50 flex flex-col items-center py-24 sm:min-h-screen sm:py-32'>
      <div className='container flex flex-col items-center justify-center gap-8 xl:gap-12'>
        <h1 className='text-3xl lg:text-6xl text-center'>GALERÍA</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
