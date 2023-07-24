import Image from 'next/image'
import Button from '@/components/BasicParts/Button'
import Header from '@/components/Blocks/Header'
import IconsTwoColumns from '@/components/Blocks/IconsTwoColumns';

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

    {data.acf.blocks.map(block => {
      switch ( block.acf_fc_layout ){
        case 'hero': return <Header data={block} />;
        case 'iconsblock': return <IconsTwoColumns data={block} />;
        default: ''; break;
      }
    })}

    {/* <Header data={{
      subtitle: `weboldal készítés`,
      title: `Ne nézelődj tovább, ha tapasztalt <span>webfejlesztő</span>t keresel!`,
      desc: 'Egyed Balázs vagyok, több mint 8 éves tapasztalattal rendelkező Frontend és WordPress fejlesztő. Egyedi, személyre szabott weboldalak, webáruházak fejlesztésével foglalkozom, ezért kívül-belül ismerem a React, WooCommerce és a WordPress rendszereket.',
      btn: 'Beszélgessünk',
      btnUrl: '#',
      stars: '90+ sikeres projekt'
    }} /> */}

    {/* <IconsTwoColumns data={{
      subtitle: 'Szolgáltatások',
      title: 'Miben tudok segíteni?',
      columns: [
        {
          icon: 'fa-brands fa-wordpress-simple',
          title: 'Weboldal készítés',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, numquam qui reprehenderit aliquid rerum dolorem, dicta nobis, odio voluptates necessitatibus reiciendis. Nostrum molestias obcaecati distinctio, hic ea consequatur dolores.',
          link: 'Tovább',
          linkUrl: '#'
        },
        {
          icon: 'fa-brands fa-react',
          title: 'Frontend fejlesztés',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, numquam qui reprehenderit aliquid rerum dolorem, dicta nobis, odio voluptates necessitatibus reiciendis. Nostrum molestias obcaecati distinctio, hic ea consequatur dolores.',
          link: 'Tovább',
          linkUrl: '#'
        },
      ]
    }} /> */}



    </>
  )
}
