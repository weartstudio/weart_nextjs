import Image from 'next/image'
import Button from '@/components/Button'
import Header from '@/components/Blocks/Header'
import { BsStarFill } from "react-icons/bs";

export default function Home() {
  return (
    <>

    <Header>
      <h2 className='font-display tracking-wider uppercase text-weart-500 font-extrabold mb-3'>weboldal készítés</h2>
      <h1 className='font-display font-bold text-3xl md:text-4xl xl:text-5xl mb-8'>Ne nézelődj tovább, ha tapasztalt <span className='underline decoration-3 underline-offset-4 decoration-weart-500'>webfejlesztő</span>t keresel!</h1>
      <p className='text-md md:text-lg mb-8'>Egyed Balázs vagyok, több mint 8 éves tapasztalattal rendelkező Frontend és WordPress fejlesztő. Egyedi, személyre szabott weboldalak, webáruházak fejlesztésével foglalkozom, ezért kívül-belül ismerem a React, WooCommerce és a WordPress rendszereket.</p>

      <div className="flex items-center">

        <Button href="#" className='mr-4'>Beszélgessünk</Button>

        <div className='opacity-80'>
          <p className='mb-1 text-sm'>90+ sikeres projekt</p>
          <div className='flex gap-1'>
            {[...Array(5)].map((x, i) => <BsStarFill className='text-yellow-200' key={i} /> )}
          </div>
        </div>

      </div>

    </Header>

    <section>
      <div className="container mx-auto px-2 grid">

      </div>
    </section>

    </>
  )
}
