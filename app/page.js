import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <section className='bg-weart-800 '>
      <div className="container mx-auto px-2">
        <div className="grid lg:grid-cols-2">
          <div className='text-white py-20'>
            <h2 className='tracking-wider uppercase text-weart-100 font-extrabold mb-2'>weboldal készítés</h2>
            <h1 className='font-bold text-5xl mb-5'>Ne nézelődj tovább, ha tapasztalt <span className='underline decoration-3 underline-offset-4 decoration-weart-100'>webfejlesztő</span>t keresel!</h1>
            <p className='text-lg'>Több mint 8 éves tapasztalattal rendelkező WordPress fejlesztő, programozó. Egyedi, személyre szabott weboldalak, webáruházak fejlesztésével foglalkozom, ezért kívül-belül ismerem a WooCommerce és a WordPress rendszereket.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container mx-auto px-2 grid">

      </div>
    </section>

    </>
  )
}
