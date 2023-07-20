import Image from 'next/image'

export default function Header({children}) {
	return (
		<section className='bg-weart-800 relative '>
      <div className="container mx-auto px-2">
        <div className="grid lg:grid-cols-2 py-28 min-h-[650px] items-center">
          <div className='text-white'>
            {children}
          </div>
          <div className='lg:absolute inset-y-0 right-0 w-1/2 max-w-3xl opacity-30'>
            <div className='hidden lg:block absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-weart-800'></div>
            <Image src="/avatar.jpeg" width={460} height={460} alt='' className='h-full w-full object-cover object-right'/>
          </div>
        </div>
      </div>
    </section>
	)
}
