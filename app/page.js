import Image from 'next/image'
import Button from '@/components/Button'
import Header from '@/components/Blocks/Header'
import IconsTwoColumns from '@/components/Blocks/IconsTwoColumns';

export default function Home() {
  return (
    <>
    <header>
      <title>Weart.hu - Egyed Balázs Web és WordPress fejlesztő</title>
    </header>

    <Header data={{
      subtitle: `weboldal készítés`,
      title: `Ne nézelődj tovább, ha tapasztalt <span>webfejlesztő</span>t keresel!`,
      desc: 'Egyed Balázs vagyok, több mint 8 éves tapasztalattal rendelkező Frontend és WordPress fejlesztő. Egyedi, személyre szabott weboldalak, webáruházak fejlesztésével foglalkozom, ezért kívül-belül ismerem a React, WooCommerce és a WordPress rendszereket.',
      btn: 'Beszélgessünk',
      btnUrl: '#',
      stars: '90+ sikeres projekt'
    }} />

    <IconsTwoColumns></IconsTwoColumns>



    </>
  )
}
