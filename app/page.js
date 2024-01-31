import Image from 'next/image'
import Button from '@/components/BasicParts/Button'
import Hero from '@/components/Blocks/Hero'
import Technologies from '@/components/Blocks/Technologies';
import About from '@/components/Blocks/About';
import Portfolio from '@/components/Blocks/Portfolio';
import Contact from '@/components/Blocks/Contact';

export default async function Home() {


    const url = 'https://app.weart.hu/wp-json/wp/v2/pages/1542?&_fields[]=acf';
    const res = await fetch(url, {cache: "no-store"});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()




  return (
    <>
    <header>
      <title>Weart.hu - Egyed Balázs Web és WordPress fejlesztő</title>
    </header>

    <Hero data={{
      subtitle: `Front-End fejlesztő`,
      title: `Ne nézelődj tovább, ha tapasztalt <span>webfejlesztő</span>t keresel!`,
      desc: 'Egyed Balázs vagyok, több mint 8 éves tapasztalattal rendelkező Frontend és WordPress fejlesztő. Egyedi, személyre szabott weboldalak, webáruházak fejlesztésével foglalkozom, ezért kívül-belül ismerem a React, WooCommerce és a WordPress rendszereket.',
      link: {
        url: '#',
        title: 'Beszélgessünk'
      },
      stars: '8+ év tapasztalat'
    }} />

    <Technologies data={{
      subtitle: 'Technológiák',
      title: 'Miben tudok segíteni?',
      blocks: [
        {
          icon: 'fa-brands fa-wordpress-simple',
          title: 'WordPress fejlesztés',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, numquam qui reprehenderit aliquid rerum dolorem, dicta nobis, odio voluptates necessitatibus reiciendis. Nostrum molestias obcaecati distinctio, hic ea consequatur dolores.',
          link: {
            url: '#',
            title: 'Tovább'
          }
        },
        {
          icon: 'fa-brands fa-react',
          title: 'JavaScript és sitebuild fejlesztés',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, numquam qui reprehenderit aliquid rerum dolorem, dicta nobis, odio voluptates necessitatibus reiciendis. Nostrum molestias obcaecati distinctio, hic ea consequatur dolores.',
          link: {
            url: '#',
            title: 'Tovább'
          }
        }
      ]
    }} />

    <About />
    <Portfolio />
    <Contact />


    </>
  )
}
