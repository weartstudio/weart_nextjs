'use client'


import Image from 'next/image'
import Button from '../BasicParts/Button'
import { useEffect } from 'react'


export default function Hero({data}) {
  useEffect(()=>{console.log(data)},[data])
	return (
		<section className='relative bg-weart-800 '>
      <div className="container px-2 mx-auto">
        <div className="grid gap-3 lg:grid-cols-2 md:py-28 py-10 lg:min-h-[650px] items-center">

          <div className='text-white'>

            <h2 className='mb-3 font-extrabold tracking-wider uppercase font-display text-weart-500'>{data.subtitle}</h2>
            <h1 className='mb-8 text-3xl font-bold font-display md:text-4xl xl:text-5xl' dangerouslySetInnerHTML={{__html: data.title}}></h1>

            <div className="pl-4 border-l-2 border-weart-500">
              <p className='mb-8 text-md md:text-lg'>{data.desc}</p>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row md:items-center">

              <Button href={data.link.url} className={'flex-initial'}>{data.link.title} <i className="fa-solid fa-arrow-right"></i></Button>

              { data.stars ?
                <div className='mb-1 text-sm opacity-70'>
                  <p className='mb-1'>{data.stars}</p>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((x, i) => <i className="text-yellow-200 fa-solid fa-star" key={i}></i> )}
                  </div>
                </div>
                : '' }

            </div>

          </div>

          <div className='inset-y-0 right-0 w-1/5 max-w-3xl row-start-1 lg:absolute lg:w-1/2 lg:opacity-30'>
            <div className='hidden lg:block absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-weart-800'></div>
            <Image src="/avatar.jpeg" width={460} height={460} alt='' className='object-cover object-right w-full h-full rounded-full lg:rounded-none'/>
          </div>

        </div>
      </div>
    </section>
	)
}
