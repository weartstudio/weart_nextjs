import Image from 'next/image'
import Button from '../Button'
import { BsStarFill, BsArrowRight } from "react-icons/bs";


export default function Header({data}) {
	return (
		<section className='bg-weart-800 relative '>
      <div className="container mx-auto px-2">
        <div className="grid gap-3 lg:grid-cols-2 md:py-28 py-10 lg:min-h-[650px] items-center">

          <div className='text-white'>

            <h2 className='font-display tracking-wider uppercase text-weart-500 font-extrabold mb-3'>{data.subtitle}</h2>
            <h1 className='font-display font-bold text-3xl md:text-4xl xl:text-5xl mb-8' dangerouslySetInnerHTML={{__html: data.title}}></h1>

            <div className="border-l-2 border-weart-500 pl-4">
              <p className='text-md md:text-lg mb-8'>{data.desc}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 md:items-center items-start">

              <Button href={data.btnUrl} className={'flex-initial'}>{data.btn} <BsArrowRight/></Button>

              { data.stars ?
                <div className='text-sm opacity-70 mb-1'>
                  <p className='mb-1'>{data.stars}</p>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((x, i) => <BsStarFill className='text-yellow-200' key={i} /> )}
                  </div>
                </div>
                : '' }

            </div>

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
