import Image from 'next/image'

export default function Header({children}) {
	return (
		<section className='bg-weart-800 relative '>
      <div className="container mx-auto px-2">
        <div className="grid gap-3 lg:grid-cols-2 md:py-28 py-10 lg:min-h-[650px] items-center">
          <div className='text-white'>
            {children}
          </div>
          <div className='lg:absolute inset-y-0 right-0 lg:w-1/2 w-1/5 max-w-3xl lg:opacity-30 row-start-1'>
            <div className='hidden lg:block absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-weart-800'></div>
            <Image src="/avatar.jpeg" width={460} height={460} alt='' className='h-full w-full object-cover object-right rounded-full lg:rounded-none'/>
          </div>
        </div>
      </div>
    </section>
	)
}
